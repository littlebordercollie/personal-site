import { navigation } from '../siteData';

function isActive(path: string, href: string) {
  if (href === '/') return path === '/';
  return path.startsWith(href);
}

function NavLinks({ path }: { path: string }) {
  return (
    <>
      {navigation.map((item) => (
        <a key={item.href} href={item.href} aria-current={isActive(path, item.href) ? 'page' : undefined}>
          {item.label}
        </a>
      ))}
      <a className="nav-contact" href="/contact/">联系</a>
    </>
  );
}

export default function Navbar({ path }: { path: string }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="边牧AI首页">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>
            <strong>边牧AI</strong>
            <small>刘旭</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="主导航"><NavLinks path={path} /></nav>
        <details className="mobile-nav">
          <summary>菜单</summary>
          <nav
            aria-label="移动端导航"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) {
                event.currentTarget.closest('details')?.removeAttribute('open');
              }
            }}
          >
            <NavLinks path={path} />
          </nav>
        </details>
      </div>
    </header>
  );
}
