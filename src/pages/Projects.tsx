import { projectKindLabels, publicProjects } from '../siteData';

export default function Projects() {
  return (
    <>
      <header className="page-hero page-shell">
        <p className="section-index">PROJECT INDEX</p>
        <h1 className="complete-lines"><span>真实工作。</span><span>可运行的第一版。</span><span>持续公开的实践。</span></h1>
        <p>完整案例展示工作闭环，可运行原型展示已经完成的第一版，公开实践记录方法被使用的场景。</p>
      </header>
      <section className="page-shell section-block project-index">
        {publicProjects.map((project, index) => (
          <article key={project.slug} className="project-index-row">
            <div className="project-index-meta">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <time dateTime={project.date}>{project.date.slice(0, 7)}</time>
            </div>
            <div>
              <p className="project-kind">{projectKindLabels[project.kind]}</p>
              <h2><a href={`/projects/${project.slug}/`}>{project.shortTitle}</a></h2>
              <p>{project.visitorSummary}</p>
              <ul className="tag-list" aria-label="项目标签">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <a className="index-open" href={`/projects/${project.slug}/`} aria-label={`查看${project.shortTitle}`}>↗</a>
          </article>
        ))}
      </section>
    </>
  );
}
