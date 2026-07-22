import ContactPanel from '../components/ContactPanel';
import type { CaseStudy } from '../siteData';

export default function CaseDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      <article className="detail-page section-shell">
        <nav className="breadcrumbs" aria-label="面包屑">
          <a href="/">首页</a>
          <span aria-hidden="true">/</span>
          <a href="/cases/">实践记录</a>
          <span aria-hidden="true">/</span>
          <span>{study.shortTitle}</span>
        </nav>

        <header className="detail-header">
          <div className="card-meta">
            <span>{study.kind}</span>
            <time dateTime={study.date}>{study.date}</time>
          </div>
          <h1>{study.title}</h1>
          <p>{study.summary}</p>
          <ul className="tag-list">
            {study.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>

        <div className="detail-grid">
          <section>
            <p className="eyebrow">场景</p>
            <h2>事情发生在哪里</h2>
            <p>{study.context}</p>
          </section>
          <section>
            <p className="eyebrow">问题</p>
            <h2>真正需要解决什么</h2>
            <p>{study.challenge}</p>
          </section>
          <section>
            <p className="eyebrow">做法</p>
            <h2>怎样把问题变成第一版</h2>
            <ol className="number-list">
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
          <section>
            <p className="eyebrow">结果</p>
            <h2>当前证据能说明什么</h2>
            <ul className="evidence-list">
              {study.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="boundary-note">
          <strong>事实边界</strong>
          <p>{study.boundary}</p>
        </aside>

        <a
          className="button secondary"
          href={study.evidenceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {study.evidenceLabel}
        </a>
      </article>
      <div className="section-shell section-block">
        <ContactPanel compact />
      </div>
    </>
  );
}
