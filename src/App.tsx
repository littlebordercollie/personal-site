import type { ReactNode } from 'react';
import Layout from './components/Layout';
import { normalizePath } from './routePath';
import { publicProjects, selectedArticles } from './siteData';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Intro from './pages/Intro';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';
import Writing from './pages/Writing';

const legacyRedirects: Record<string, string> = {
  '/a/': '/',
  '/b/': '/',
  '/c/': '/',
  '/compare/': '/',
  '/cases/': '/projects/',
  '/work-with-me/': '/contact/',
  '/about/': '/intro/',
  '/brief/': '/intro/',
};

export default function App({ path }: { path?: string }) {
  const currentPath = normalizePath(
    path ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
  );
  const publicPath = legacyRedirects[currentPath] ?? currentPath;
  let page: ReactNode;

  if (publicPath === '/') {
    page = <Home />;
  } else if (publicPath === '/projects/') {
    page = <Projects />;
  } else if (publicPath.startsWith('/projects/')) {
    const slug = publicPath.replace('/projects/', '').replace(/\/$/, '');
    const project = publicProjects.find((item) => item.slug === slug);
    page = project ? <ProjectDetail project={project} /> : <NotFound />;
  } else if (publicPath === '/intro/') {
    page = <Intro />;
  } else if (publicPath === '/writing/') {
    page = <Writing />;
  } else if (publicPath.startsWith('/writing/')) {
    const slug = publicPath.replace('/writing/', '').replace(/\/$/, '');
    const article = selectedArticles.find((item) => item.slug === slug);
    page = article ? <ArticleDetail article={article} /> : <NotFound />;
  } else if (publicPath === '/contact/') {
    page = <Contact />;
  } else {
    page = <NotFound />;
  }

  return (
    <Layout path={publicPath}>
      {page}
    </Layout>
  );
}
