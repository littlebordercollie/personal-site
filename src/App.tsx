import Layout from './components/Layout';
import type { ReactNode } from 'react';
import About from './pages/About';
import ArticleDetail from './pages/ArticleDetail';
import Brief from './pages/Brief';
import CaseDetail from './pages/CaseDetail';
import Cases from './pages/Cases';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import WorkWithMe from './pages/WorkWithMe';
import Writing from './pages/Writing';
import { normalizePath } from './routePath';
import { caseStudies, selectedArticles } from './siteData';

export default function App({ path }: { path?: string }) {
  const currentPath = normalizePath(
    path ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
  );

  if (currentPath === '/brief/') return <Brief />;

  let page: ReactNode;

  if (currentPath === '/') {
    page = <Home />;
  } else if (currentPath === '/cases/') {
    page = <Cases />;
  } else if (currentPath.startsWith('/cases/')) {
    const slug = currentPath.replace('/cases/', '').replace(/\/$/, '');
    const study = caseStudies.find((item) => item.slug === slug);
    page = study ? <CaseDetail study={study} /> : <NotFound />;
  } else if (currentPath === '/work-with-me/') {
    page = <WorkWithMe />;
  } else if (currentPath === '/about/') {
    page = <About />;
  } else if (currentPath === '/writing/') {
    page = <Writing />;
  } else if (currentPath.startsWith('/writing/')) {
    const slug = currentPath.replace('/writing/', '').replace(/\/$/, '');
    const article = selectedArticles.find((item) => item.slug === slug);
    page = article ? <ArticleDetail article={article} /> : <NotFound />;
  } else {
    page = <NotFound />;
  }

  return (
    <Layout path={currentPath}>
      {page}
    </Layout>
  );
}
