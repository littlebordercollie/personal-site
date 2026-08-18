import type { SelectedArticle } from '../siteData';

export default function ArticleDetail({ article }: { article: SelectedArticle }) {
  return (
    <article className="article-detail page-shell">
      <nav className="breadcrumbs" aria-label="面包屑">
        <a href="/">首页</a><span aria-hidden="true">/</span><a href="/writing/">文章</a>
      </nav>
      <header>
        <p className="section-index">{article.category} · {article.date}</p>
        <h1>{article.title}</h1>
        <p className="article-detail-lead">{article.summary}</p>
      </header>
      <section className="article-takeaways">
        <div><p className="section-index">三个要点</p><h2>这篇文章讨论什么</h2></div>
        <ol>{article.keyPoints.map((point, index) => <li key={point}><span>0{index + 1}</span><strong>{point}</strong></li>)}</ol>
      </section>
      <div className="source-callout">
        <p>完整正文保留在原始发布页，本站提供稳定摘要与主题索引。</p>
        <a className="button button-dark" href={article.sourceUrl} target="_blank" rel="noreferrer">查看公众号原文</a>
      </div>
    </article>
  );
}
