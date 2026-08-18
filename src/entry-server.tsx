import { renderToString } from 'react-dom/server';
import App from './App';
import { normalizePath } from './routePath';
import { offerings, publicProjects, selectedArticles, site } from './siteData';

export type RouteMeta = {
  title: string;
  description: string;
  canonical: string;
  type: 'website' | 'article' | 'profile';
  noindex?: boolean;
  structuredData: Record<string, unknown> | Array<Record<string, unknown>>;
};

export const routePaths = [
  '/',
  '/projects/',
  ...publicProjects.map((project) => `/projects/${project.slug}/`),
  '/intro/',
  '/writing/',
  ...selectedArticles.map((article) => `/writing/${article.slug}/`),
  '/contact/',
];

const personId = `${site.url}/intro/#person`;
const person = {
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  alternateName: site.brand,
  url: `${site.url}/intro/`,
  image: `${site.url}/evidence/liuxu-public-portrait.jpg`,
  email: `mailto:${site.email}`,
  jobTitle: '企业 AI 实训与真实工作应用实践者',
  description: site.description,
};

function canonicalFor(path: string) {
  return path === '/' ? `${site.url}/` : `${site.url}${path}`;
}

export function getRouteMeta(inputPath: string): RouteMeta {
  const path = normalizePath(inputPath);
  const base = { canonical: canonicalFor(path), type: 'website' as const };

  if (path === '/') {
    return {
      ...base,
      title: site.title,
      description: site.description,
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${site.url}/#website`,
          name: '边牧AI · 刘旭',
          url: `${site.url}/`,
          inLanguage: 'zh-CN',
          author: { '@id': personId },
        },
        { '@context': 'https://schema.org', ...person },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${site.url}/#enterprise-ai-training`,
          name: offerings[0].title,
          description: offerings[0].summary,
          provider: { '@id': personId },
          areaServed: 'CN',
          serviceType: '企业 AI 实训',
        },
      ],
    };
  }

  if (path === '/projects/') {
    return {
      ...base,
      title: '项目｜边牧AI · 刘旭',
      description: '刘旭的企业 AI 实训案例、可运行原型和公开实践，清楚区分已核验事实与当前项目边界。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: '边牧AI项目',
        url: canonicalFor(path),
        author: { '@id': personId },
        hasPart: publicProjects.map((project) => ({
          '@type': 'CreativeWork',
          name: project.title,
          url: `${site.url}/projects/${project.slug}/`,
          dateCreated: project.date,
        })),
      },
    };
  }

  const project = publicProjects.find((item) => path === `/projects/${item.slug}/`);
  if (project) {
    return {
      ...base,
      type: 'article',
      title: `${project.shortTitle}｜边牧AI · 刘旭`,
      description: project.metaDescription,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        '@id': `${canonicalFor(path)}#work`,
        name: project.title,
        headline: project.title,
        description: project.metaDescription,
        dateCreated: project.date,
        dateModified: site.lastReviewed,
        url: canonicalFor(path),
        inLanguage: 'zh-CN',
        creator: { '@id': personId },
        image: project.image ? `${site.url}${project.image}` : undefined,
        keywords: project.tags.join(', '),
      },
    };
  }

  if (path === '/intro/') {
    return {
      ...base,
      type: 'profile',
      title: '介绍资料｜边牧AI · 刘旭',
      description: '刘旭的商务介绍、讲师介绍、作者介绍、可讲主题、公开头像和联系邮箱。',
      structuredData: [
        { '@context': 'https://schema.org', ...person },
        {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${site.url}/intro/#profile`,
          name: '刘旭介绍资料',
          url: canonicalFor(path),
          dateModified: site.lastReviewed,
          mainEntity: { '@id': personId },
        },
      ],
    };
  }

  if (path === '/writing/') {
    return {
      ...base,
      title: '精选文章｜边牧AI · 刘旭',
      description: '刘旭关于 AI、数据、飞书与真实工作场景的精选文章。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: '刘旭的精选文章',
        url: canonicalFor(path),
        author: { '@id': personId },
      },
    };
  }

  const article = selectedArticles.find((item) => path === `/writing/${item.slug}/`);
  if (article) {
    return {
      ...base,
      type: 'article',
      title: `${article.title}｜刘旭`,
      description: article.metaDescription,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.date,
        dateModified: site.lastReviewed,
        mainEntityOfPage: canonicalFor(path),
        author: { '@id': personId },
        isBasedOn: article.sourceUrl,
      },
    };
  }

  if (path === '/contact/') {
    return {
      ...base,
      title: '联系与合作｜边牧AI · 刘旭',
      description: '从一个正在发生的真实任务开始，了解企业 AI 实训和小型验证项目需要准备什么。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: '联系边牧AI · 刘旭',
        url: canonicalFor(path),
        mainEntity: { '@id': personId },
      },
    };
  }

  return {
    ...base,
    noindex: true,
    title: '页面未找到｜边牧AI · 刘旭',
    description: '你访问的页面不存在。',
    structuredData: { '@context': 'https://schema.org', '@type': 'WebPage', name: '页面未找到' },
  };
}

export function render(path: string) {
  return { html: renderToString(<App path={path} />), meta: getRouteMeta(path) };
}
