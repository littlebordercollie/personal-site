import { navigation } from '../siteData';

function isActive(path: string, href: string) {
  if (href === '/') return path === '/';
  return path.startsWith(href);
}

export default function Navbar({ path }: { path: string }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="刘旭首页">
          刘旭
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(path, item.href) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="/work-with-me/#contact">
            联系我
          </a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="打开导航">菜单</summary>
          <nav aria-label="移动端导航">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive(path, item.href) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
            <a href="/work-with-me/#contact">联系我</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
