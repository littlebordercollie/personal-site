import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        跳到正文
      </a>
      <Navbar path={path} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
