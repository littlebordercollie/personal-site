export function normalizePath(input: string) {
  const pathname = input.split('?')[0]?.split('#')[0] || '/';
  if (pathname === '/index.html') return '/';
  const withoutIndex = pathname.replace(/\/index\.html$/, '');
  if (withoutIndex === '') return '/';
  return withoutIndex.endsWith('/') ? withoutIndex : `${withoutIndex}/`;
}
