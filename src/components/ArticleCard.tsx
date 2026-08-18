import type { SelectedArticle } from '../siteData';

export default function ArticleCard({ article }: { article: SelectedArticle }) {
  return (
    <article className="article-row">
      <div className="article-row-meta">
        <span>{article.category}</span>
        <time dateTime={article.date}>{article.date}</time>
      </div>
      <div>
        <h3><a href={`/writing/${article.slug}/`}>{article.title}</a></h3>
        <p>{article.summary}</p>
      </div>
      <a className="article-open" href={`/writing/${article.slug}/`} aria-label={`阅读${article.title}`}>↗</a>
    </article>
  );
}
