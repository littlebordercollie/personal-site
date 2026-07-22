import ArticleCard from '../components/ArticleCard';
import { selectedArticles, site } from '../siteData';

export default function Writing() {
  return (
    <>
      <header className="page-hero section-shell">
        <p className="eyebrow">精选文章</p>
        <h1>先把最能说明方法的内容放在这里。</h1>
        <p>
          公众号当前暂用名称「{site.contentBrand}」。这里不展示会持续漂移的文章总数，
          也不把全部历史内容一次性搬成薄页面。
        </p>
      </header>
      <section className="section-shell section-block">
        <div className="article-grid">
          {selectedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
