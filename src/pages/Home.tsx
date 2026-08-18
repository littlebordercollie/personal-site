import ArticleCard from '../components/ArticleCard';
import ContactPanel from '../components/ContactPanel';
import {
  evidenceTrack,
  featuredProject,
  offerings,
  publicProjects,
  selectedArticles,
  trustFacts,
} from '../siteData';

const supportingProjects = publicProjects.filter(
  (project) => project.kind === 'prototype',
).slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="home-hero page-shell">
        <div className="hero-rule" aria-hidden="true">
          <span>FIELD NOTE / 001</span>
          <span>企业 AI 实训与真实工作应用</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-brand">边牧AI · 刘旭</p>
            <h1>
              <span>真实工作正在发生。</span>
              <span>AI 应该用进去。</span>
            </h1>
            <p className="hero-lead">
              我帮助非技术团队从一场围绕真实任务的企业 AI 实训开始。只有经过验证、值得继续的问题，才会被做成小型工作流或工具。
            </p>
            <div className="hero-actions">
              <a className="button button-signal" href="#featured-project">看一个完整案例</a>
              <a className="button button-outline" href="/intro/">复制我的介绍</a>
            </div>
          </div>
          <aside className="hero-field-note" aria-label="合作起点">
            <span className="field-note-number">01</span>
            <p className="field-note-label">合作从哪里开始</p>
            <strong>不是先买平台，也不是先造系统。</strong>
            <p>先选一个团队正在处理的任务，带着真实样例完成一次能检查的实践。</p>
          </aside>
        </div>
        <div className="trust-strip" aria-label="公开经历">
          {trustFacts.map((fact) => (
            <a key={fact.value} href={fact.href}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section id="featured-project" className="featured-case section-dark">
        <div className="page-shell">
          <header className="section-heading on-dark">
            <p className="section-index">01 / 一个完整案例</p>
            <h2>{featuredProject.shortTitle}</h2>
            <p>{featuredProject.visitorSummary}</p>
          </header>

          <div className="case-opening">
            <figure className="case-main-figure">
              <img src={featuredProject.image} alt={featuredProject.imageAlt} width="1600" height="901" />
              <figcaption>从真实数据出发的课程封面与工作主题</figcaption>
            </figure>
            <div className="case-opening-copy">
              <span className="project-stamp">CASE · 2026.08</span>
              <h3>从原始数据到管理判断</h3>
              <p>{featuredProject.problem}</p>
              <a className="text-link on-dark" href={`/projects/${featuredProject.slug}/`}>
                查看案例全过程 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <ol className="evidence-track" aria-label="工作证据轨道">
            {evidenceTrack.map((step, index) => (
              <li key={step.number} style={{ '--track-delay': `${index * 90}ms` } as React.CSSProperties}>
                <span className="track-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="case-proof-grid">
            <figure>
              <img
                src={featuredProject.secondaryImage}
                alt={featuredProject.secondaryImageAlt}
                width="1600"
                height="900"
                loading="lazy"
              />
              <figcaption>课程中强调口径与数字可追溯</figcaption>
            </figure>
            <div className="proof-list">
              <p className="section-index">已经留下的交付物</p>
              <ul>
                {featuredProject.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="boundary-note">{featuredProject.currentScope}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-block cooperation-section">
        <header className="section-heading">
          <p className="section-index">02 / 合作方式</p>
          <h2 className="complete-lines"><span>先完成实训。</span><span>证据决定是否继续。</span></h2>
        </header>
        <div className="cooperation-flow" aria-label="合作流程">
          {['企业实训', '发现问题', '判断价值', '小型验证项目'].map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="offering-list">
          {offerings.map((offering) => (
            <article key={offering.number}>
              <span>{offering.number}</span>
              <div>
                <h3>{offering.title}</h3>
                <p>{offering.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link" href="/contact/">查看合作前需要准备什么 <span aria-hidden="true">→</span></a>
      </section>

      <section className="supporting-section">
        <div className="page-shell">
          <header className="section-heading">
            <p className="section-index">03 / 可运行作品</p>
            <h2>这些问题已有第一版。</h2>
            <p>每个作品都先说明为什么做、谁会使用，以及现阶段可以证明什么。</p>
          </header>
          <div className="project-ledger">
            {supportingProjects.map((project, index) => (
              <a key={project.slug} href={`/projects/${project.slug}/`} className="project-ledger-row">
                <span className="ledger-number">0{index + 1}</span>
                <div>
                  <span className="project-kind">可运行原型</span>
                  <h3>{project.shortTitle}</h3>
                  <p>{project.visitorSummary}</p>
                </div>
                <span className="ledger-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <a className="button button-dark" href="/projects/">查看全部项目</a>
        </div>
      </section>

      <section className="page-shell section-block writing-preview">
        <header className="section-heading">
          <p className="section-index">04 / 公开经历与写作</p>
          <h2 className="complete-lines"><span>方法不只留在讲义里。</span><span>我也持续公开写作。</span></h2>
        </header>
        <div className="article-list">
          {selectedArticles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
        <a className="text-link" href="/writing/">查看全部精选文章 <span aria-hidden="true">→</span></a>
      </section>

      <section className="page-shell section-block intro-callout">
        <span className="callout-mark" aria-hidden="true">↳</span>
        <div>
          <p className="section-index">介绍资料</p>
          <h2>需要我的介绍资料？</h2>
          <p>商务介绍、讲师介绍、作者介绍和公开头像已经整理成可直接复制、下载的版本。</p>
        </div>
        <a className="button button-outline" href="/intro/">打开介绍资料页</a>
      </section>

      <div className="page-shell section-block"><ContactPanel /></div>
    </>
  );
}
