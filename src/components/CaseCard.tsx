import type { CaseStudy } from '../siteData';

export default function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="case-card">
      <div className="card-meta">
        <span>{study.kind}</span>
        <time dateTime={study.date}>{study.date}</time>
      </div>
      <h3>{study.title}</h3>
      <p>{study.summary}</p>
      <ul className="tag-list" aria-label="案例要点">
        {study.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a className="text-link" href={`/cases/${study.slug}/`}>
        查看完整记录 <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
