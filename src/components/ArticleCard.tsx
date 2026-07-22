import type { SelectedArticle } from '../siteData';

export default function ArticleCard({ article }: { article: SelectedArticle }) {
  return (
    <article className="article-card">
      <div className="card-meta">
        <span>{article.category}</span>
        <time dateTime={article.date}>{article.date}</time>
      </div>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <a className="text-link" href={`/writing/${article.slug}/`}>
        阅读摘要与原文 <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
