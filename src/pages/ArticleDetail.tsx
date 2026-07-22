import type { SelectedArticle } from '../siteData';

export default function ArticleDetail({ article }: { article: SelectedArticle }) {
  return (
    <article className="detail-page section-shell reading-page">
      <nav className="breadcrumbs" aria-label="面包屑">
        <a href="/">首页</a>
        <span aria-hidden="true">/</span>
        <a href="/writing/">精选文章</a>
        <span aria-hidden="true">/</span>
        <span>{article.category}</span>
      </nav>

      <header className="detail-header">
        <div className="card-meta">
          <span>{article.category}</span>
          <time dateTime={article.date}>{article.date}</time>
        </div>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
      </header>

      <section className="reading-summary">
        <p className="eyebrow">这篇内容讨论什么</p>
        <h2>三个值得带走的要点</h2>
        <ol className="number-list">
          {article.keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
        <p>
          本站当前只保存经核对的摘要，完整正文仍以公众号原文为准。这样既保留稳定、可抓取的主题信息，也避免在内容管线尚未完成时制造一批不同步的副本。
        </p>
        <a
          className="button primary"
          href={article.sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          查看公众号原文
        </a>
      </section>
    </article>
  );
}
