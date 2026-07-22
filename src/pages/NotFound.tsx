export default function NotFound() {
  return (
    <section className="not-found section-shell">
      <p className="eyebrow">404</p>
      <h1>这个页面不存在。</h1>
      <p>可能是地址输入有误，也可能是旧链接已经被整理。</p>
      <a className="button primary" href="/">
        返回首页
      </a>
    </section>
  );
}
