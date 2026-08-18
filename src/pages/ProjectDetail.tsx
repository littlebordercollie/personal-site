import { projectKindLabels, type ProjectRecord } from '../siteData';

export default function ProjectDetail({ project }: { project: ProjectRecord }) {
  return (
    <article className="project-detail">
      <header className="project-detail-hero page-shell">
        <nav className="breadcrumbs" aria-label="面包屑">
          <a href="/">首页</a><span aria-hidden="true">/</span><a href="/projects/">项目</a>
        </nav>
        <div className="project-detail-grid">
          <div>
            <p className="section-index">{projectKindLabels[project.kind]} · {project.date}</p>
            <h1>{project.shortTitle}</h1>
            <p className="project-detail-lead">{project.visitorSummary}</p>
          </div>
          <aside>
            <span>我的角色</span>
            <p>{project.role}</p>
          </aside>
        </div>
      </header>

      {project.image ? (
        <figure className="project-hero-image page-shell">
          <img src={project.image} alt={project.imageAlt} />
        </figure>
      ) : null}

      <div className="project-story page-shell">
        <section>
          <p className="section-index">01 / 面对的问题</p>
          <h2>为什么要做这件事</h2>
          <p className="large-copy">{project.problem}</p>
        </section>
        <section>
          <p className="section-index">02 / 实际工作</p>
          <h2>第一版是怎样做出来的</h2>
          <ol className="work-steps">
            {project.work.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
            ))}
          </ol>
        </section>

        {project.secondaryImage ? (
          <figure className="project-secondary-image">
            <img src={project.secondaryImage} alt={project.secondaryImageAlt} loading="lazy" />
          </figure>
        ) : null}

        <section className="deliverable-section">
          <div>
            <p className="section-index">03 / 交付物</p>
            <h2>已经留下什么</h2>
          </div>
          <ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="fact-section">
          <div>
            <p className="section-index">04 / 可核验事实</p>
            <h2>目前可以准确说到哪里</h2>
          </div>
          <div>
            <ul>{project.verifiedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
            <p className="boundary-note">{project.currentScope}</p>
            {project.externalUrl ? (
              <a className="button button-dark" href={project.externalUrl} target="_blank" rel="noreferrer">
                {project.externalLabel ?? '查看公开记录'}
              </a>
            ) : null}
          </div>
        </section>
      </div>
    </article>
  );
}
