export default function NotFound() {
  return (
    <section className="not-found page-shell">
      <p className="section-index">404 / NOT FOUND</p>
      <h1>这个页面不存在。</h1>
      <p>地址可能输入有误，旧版页面也可能已经合并到新版内容中。</p>
      <a className="button button-dark" href="/">返回首页</a>
    </section>
  );
}
