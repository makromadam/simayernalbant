/**
 * build-i18n.mjs — generates the localized route pages from a single source.
 *
 * Source of truth: index.html (English). This script reads its embedded
 * `translations` object and pre-renders fully-translated, crawlable pages at
 * tr/index.html and fr/index.html — correct <html lang>, <head> metadata,
 * canonical, hreflang, and server-rendered body copy (no JS required to read it).
 *
 * Usage:  node scripts/build-i18n.mjs
 * Re-run whenever index.html or its translations change. Output is committed and
 * served statically by Vercel (no build step runs on deploy).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = resolve(ROOT, 'index.html');
const SITE = 'https://simayernalbant.com';

const html = readFileSync(SRC, 'utf8');

// --- Pull the translations object straight out of index.html (one source) ---
const tMatch = html.match(/const translations = (\{[\s\S]*?\n\});/);
if (!tMatch) throw new Error('Could not locate the translations object in index.html');
const translations = eval('(' + tMatch[1] + ')');

// --- Per-locale <head> metadata (the only copy that lives here, not in the page) ---
const META = {
  tr: {
    htmlLang: 'tr',
    title: 'Simay Ernalbant | UX/UI ve Etkileşimli Web Tasarımcısı',
    description: 'Hareket, 3D ve yeni nesil teknolojiyle tasarlanan sürükleyici web siteleri — UX/UI ve etkileşimli web tasarımcısı Simay Ernalbant.',
    ogDescription: 'Hareket, 3D ve yeni nesil teknolojiyle tasarlanan sürükleyici web siteleri — UX/UI ve etkileşimli web tasarımcısı Simay Ernalbant.',
    url: `${SITE}/tr/`,
    ogLocale: 'tr_TR',
    ogAlternates: ['en_US', 'fr_FR'],
  },
  fr: {
    htmlLang: 'fr',
    title: 'Simay Ernalbant | Designer UX/UI &amp; Web Interactif',
    description: "Sites web immersifs créés avec le mouvement, la 3D et les technologies émergentes par Simay Ernalbant, designer UX/UI et web interactif.",
    ogDescription: "Sites web immersifs créés avec le mouvement, la 3D et les technologies émergentes par Simay Ernalbant, designer UX/UI et web interactif.",
    url: `${SITE}/fr/`,
    ogLocale: 'fr_FR',
    ogAlternates: ['en_US', 'tr_TR'],
  },
};

const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function localize(lang) {
  const dict = translations[lang];
  const meta = META[lang];
  if (!dict || !meta) throw new Error(`Missing translations/meta for "${lang}"`);

  // Warn if the page references a key this locale doesn't translate.
  const usedKeys = new Set([...html.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)].map((m) => m[1]));
  for (const k of usedKeys) if (!(k in dict)) console.warn(`  [warn] ${lang}: missing key "${k}"`);

  let out = html;

  // 1) Document language + a "generated" marker.
  out = out.replace('<html class="dark scroll-smooth" lang="en">', `<html class="dark scroll-smooth" lang="${meta.htmlLang}">`);
  out = out.replace('<!DOCTYPE html>\n', `<!DOCTYPE html>\n<!-- Generated from index.html by scripts/build-i18n.mjs — edit the English source, then re-run. -->\n`);

  // 2) Body copy: text nodes (data-i18n) and rich nodes (data-i18n-html).
  for (const [key, val] of Object.entries(dict)) {
    const textRe = new RegExp(`(data-i18n="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>)[^<]*`, 'g');
    out = out.replace(textRe, (_m, open) => open + escText(val));
    // Tag-generic: capture the element's own tag name so any wrapper (h2, p, …) is matched.
    const htmlRe = new RegExp(`(<(\\w+)[^>]*\\bdata-i18n-html="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>)[\\s\\S]*?(</\\2>)`, 'g');
    out = out.replace(htmlRe, (_m, open, _tag, close) => open + val + close);
  }

  // 3) Active language pill (desktop + mobile share the same markup → replace all).
  out = out.replaceAll(
    'lang-toggle lang-pill lang-on px-3 py-0.5 rounded-full font-mono text-[11px] tracking-[.16em]" data-lang="en" aria-pressed="true"',
    'lang-toggle lang-pill px-3 py-0.5 rounded-full font-mono text-[11px] tracking-[.16em]" data-lang="en" aria-pressed="false"');
  out = out.replaceAll(
    `lang-toggle lang-pill px-3 py-0.5 rounded-full font-mono text-[11px] tracking-[.16em]" data-lang="${lang}" aria-pressed="false"`,
    `lang-toggle lang-pill lang-on px-3 py-0.5 rounded-full font-mono text-[11px] tracking-[.16em]" data-lang="${lang}" aria-pressed="true"`);

  // 4) <head> metadata that must differ per route.
  out = out.replace('<title>Simay Ernalbant | UX/UI &amp; Interactive Web Designer</title>', `<title>${meta.title}</title>`);
  out = out.replace(
    '<meta name="description" content="Immersive websites crafted with motion, 3D and emerging technology by Simay Ernalbant, UX/UI and interactive web designer."/>',
    `<meta name="description" content="${meta.description}"/>`);
  out = out.replace('<link rel="canonical" href="https://simayernalbant.com/"/>', `<link rel="canonical" href="${meta.url}"/>`);
  out = out.replace('<meta property="og:url" content="https://simayernalbant.com/"/>', `<meta property="og:url" content="${meta.url}"/>`);
  out = out.replace('<meta property="og:title" content="Simay Ernalbant | UX/UI &amp; Interactive Web Designer"/>', `<meta property="og:title" content="${meta.title}"/>`);
  out = out.replace(
    '<meta property="og:description" content="Immersive websites crafted with motion, 3D and emerging technology by Simay Ernalbant, UX/UI and interactive web designer."/>',
    `<meta property="og:description" content="${meta.ogDescription}"/>`);
  out = out.replace('<meta name="twitter:title" content="Simay Ernalbant | UX/UI &amp; Interactive Web Designer"/>', `<meta name="twitter:title" content="${meta.title}"/>`);
  out = out.replace(
    '<meta name="twitter:description" content="Immersive websites crafted with motion, 3D and emerging technology by Simay Ernalbant, UX/UI and interactive web designer."/>',
    `<meta name="twitter:description" content="${meta.ogDescription}"/>`);

  // Open Graph locale block (own locale first, then alternates).
  const localeBlock = [
    `<meta property="og:locale" content="${meta.ogLocale}"/>`,
    ...meta.ogAlternates.map((l) => `<meta property="og:locale:alternate" content="${l}"/>`),
  ].join('\n');
  out = out.replace(
    '<meta property="og:locale" content="en_US"/>\n<meta property="og:locale:alternate" content="tr_TR"/>\n<meta property="og:locale:alternate" content="fr_FR"/>',
    localeBlock);

  return out;
}

for (const lang of ['tr', 'fr']) {
  console.log(`Building /${lang}/ …`);
  const out = localize(lang);
  mkdirSync(resolve(ROOT, lang), { recursive: true });
  writeFileSync(resolve(ROOT, lang, 'index.html'), out, 'utf8');
  console.log(`  → ${lang}/index.html (${out.length} bytes)`);
}
console.log('Done.');
