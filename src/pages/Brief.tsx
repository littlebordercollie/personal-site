import { caseStudies, site } from '../siteData';

export default function Brief() {
  return (
    <main className="brief-page" id="main-content">
      <div className="brief-toolbar no-print">
        <a href="/">返回网站</a>
        <button type="button" onClick={() => window.print()}>
          打印 / 导出 PDF
        </button>
      </div>

      <article className="brief-sheet">
        <header className="brief-header">
          <div>
            <p className="eyebrow">刘旭 · AI × 真实工作</p>
            <h1>从真实流程出发，用小型验证判断 AI 值不值得做。</h1>
          </div>
          <p>
            面向中小企业与团队：先找到哪里可能增加收入、减少浪费或省下重复劳动，再用真实样例完成第一版。
          </p>
        </header>

        <section className="brief-row">
          <h2>怎样开始</h2>
          <p>说清现在怎么做、最麻烦的是哪一步、有哪些可以脱敏的样例。</p>
          <p className="brief-flow">
            诊断真实流程 <span>→</span> 排出机会优先级 <span>→</span> 完成小型验证 <span>→</span> 决定继续、调整或停止
          </p>
        </section>

        <section className="brief-row">
          <h2>三条公开实践</h2>
          <div className="brief-evidence">
            {caseStudies.map((study) => (
              <article key={study.slug}>
                <span>{study.kind}</span>
                <h3>{study.shortTitle}</h3>
                <p>{study.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brief-row brief-contact">
          <div>
            <h2>联系刘旭</h2>
            <p>微信：{site.wechat}</p>
            <p>邮箱：{site.email}</p>
            <p>网站：ailiuxu.com</p>
          </div>
          <div className="qr-placeholder" aria-label="微信二维码待本人提供">
            <strong>微信二维码</strong>
            <span>待本人设计并提供</span>
          </div>
        </section>

        <footer className="brief-footer">
          <span>公众号当前暂用名称「{site.contentBrand}」</span>
          <span>信息核对：2026-07-22</span>
        </footer>
      </article>
    </main>
  );
}
