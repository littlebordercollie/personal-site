import ArticleCard from '../components/ArticleCard';
import { selectedArticles } from '../siteData';

export default function Writing() {
  return (
    <>
      <header className="page-hero page-shell">
        <p className="section-index">SELECTED WRITING</p>
        <h1 className="complete-lines"><span>记录 AI 与数据。</span><span>也记录真实工作。</span></h1>
        <p>这里保留最能说明工作方法的文章。完整正文仍以原始发布页为准。</p>
      </header>
      <section className="page-shell section-block">
        <div className="article-list article-list-full">
          {selectedArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </>
  );
}
