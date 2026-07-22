import ArticleCard from '../components/ArticleCard';
import CaseCard from '../components/CaseCard';
import ContactPanel from '../components/ContactPanel';
import { caseStudies, selectedArticles, site } from '../siteData';

export default function Home() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">刘旭 · AI × 真实工作</p>
          <h1>
            把 AI、数据和流程
            <br />
            用进真实工作。
          </h1>
          <p className="hero-lead">
            面向中小企业与团队，从一个具体问题出发：先找到哪里可能增加收入、减少浪费或省下重复劳动，
            再用小型验证证明它值不值得做。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/cases/">
              看实践记录
            </a>
            <a className="text-link" href="/work-with-me/">
              了解怎样合作 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <aside className="hero-note" aria-label="工作原则">
          <span className="note-index">01</span>
          <p>先问清楚问题，再决定是否需要 AI。</p>
          <span className="note-index">02</span>
          <p>先做刚刚够用的第一版，不急着造大系统。</p>
          <span className="note-index">03</span>
          <p>用真实样例和可复盘结果说话。</p>
        </aside>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">实践记录</p>
            <h2>每一条都说明边界，也给出原始出处。</h2>
          </div>
          <a className="text-link" href="/cases/">
            查看全部 <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="section-shell section-block editorial-band">
        <div>
          <p className="eyebrow">精选内容</p>
          <h2>工具会变，真实问题和方法可以留下来。</h2>
          <p className="section-intro">
            公众号暂用名称「{site.contentBrand}」。这里先放最能说明方法的内容，
            不用一个会过期的文章总数充当能力证明。
          </p>
        </div>
        <div className="article-stack">
          {selectedArticles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
          <a className="button secondary align-start" href="/writing/">
            查看六篇精选文章
          </a>
        </div>
      </section>

      <section className="section-shell section-block about-preview">
        <div>
          <p className="eyebrow">关于刘旭</p>
          <h2>把“想做个系统”，拆成今天可以验证的第一步。</h2>
        </div>
        <div>
          <p>
            我是刘旭，得到讲师，正在撰写《飞书多维表格实战》。我关心的不是再多展示一个工具，
            而是一个真实流程能不能因此少一点重复、多一点清楚。
          </p>
          <p>
            微信号仍是 <strong>{site.wechat}</strong>，但它不再作为网站品牌；公众号当前暂用「{site.contentBrand}」，
            日后改名会统一替换。
          </p>
          <a className="text-link" href="/about/">
            查看经历与事实边界 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <div className="section-shell section-block">
        <ContactPanel />
      </div>
    </>
  );
}
