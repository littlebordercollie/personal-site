import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, routePaths } from '../dist-ssr/entry-server.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(projectRoot, 'dist');
const templatePath = path.join(outputRoot, 'index.html');
const template = await readFile(templatePath, 'utf8');

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function buildDocument(route, noindex = false) {
  const { html, meta } = render(route);
  const jsonLd = JSON.stringify(meta.structuredData).replaceAll('<', '\\u003c');
  const extraHead = [
    noindex ? '<meta name="robots" content="noindex,follow" />' : '',
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].filter(Boolean).join('\n    ');

  return template
    .replaceAll('{{PAGE_TITLE}}', escapeAttribute(meta.title))
    .replaceAll('{{PAGE_DESCRIPTION}}', escapeAttribute(meta.description))
    .replaceAll('{{CANONICAL_URL}}', escapeAttribute(meta.canonical))
    .replaceAll('{{OG_TYPE}}', escapeAttribute(meta.type))
    .replace('<!--app-head-->', extraHead)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

for (const route of routePaths) {
  const relativeDirectory = route === '/' ? '' : route.replace(/^\//, '').replace(/\/$/, '');
  const targetDirectory = path.join(outputRoot, relativeDirectory);
  await mkdir(targetDirectory, { recursive: true });
  await writeFile(path.join(targetDirectory, 'index.html'), buildDocument(route), 'utf8');
}

await writeFile(
  path.join(outputRoot, '404.html'),
  buildDocument('/this-page-does-not-exist/', true),
  'utf8',
);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routePaths.map((route) => {
    const location = route === '/' ? 'https://ailiuxu.com/' : `https://ailiuxu.com${route}`;
    const priority = route === '/' ? '1.0' : route === '/brief/' ? '0.4' : '0.8';
    return `  <url><loc>${location}</loc><lastmod>2026-07-22</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
  }),
  '</urlset>',
  '',
].join('\n');

await writeFile(path.join(outputRoot, 'sitemap.xml'), sitemap, 'utf8');
await rm(path.join(projectRoot, 'dist-ssr'), { recursive: true, force: true });

console.log(`Prerendered ${routePaths.length} routes, 404.html and sitemap.xml.`);
