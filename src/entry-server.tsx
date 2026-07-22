import { renderToString } from 'react-dom/server';
import App from './App';
import { normalizePath } from './routePath';
import { caseStudies, selectedArticles, site } from './siteData';

export type RouteMeta = {
  title: string;
  description: string;
  canonical: string;
  type: 'website' | 'article' | 'profile';
  structuredData: Record<string, unknown> | Array<Record<string, unknown>>;
};

export const routePaths = [
  '/',
  '/cases/',
  ...caseStudies.map((study) => `/cases/${study.slug}/`),
  '/work-with-me/',
  '/writing/',
  ...selectedArticles.map((article) => `/writing/${article.slug}/`),
  '/about/',
  '/brief/',
];

const person = {
  '@type': 'Person',
  '@id': `${site.url}/about/#person`,
  name: site.name,
  url: `${site.url}/about/`,
  email: `mailto:${site.email}`,
  description:
    '从真实流程出发，用小型验证判断 AI 是否值得做；提供业务诊断、原型验证与团队培训。',
};

function canonicalFor(path: string) {
  return path === '/' ? `${site.url}/` : `${site.url}${path}`;
}

export function getRouteMeta(inputPath: string): RouteMeta {
  const path = normalizePath(inputPath);
  const base = {
    canonical: canonicalFor(path),
    type: 'website' as const,
  };

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
          name: '刘旭',
          url: `${site.url}/`,
          inLanguage: 'zh-CN',
          author: { '@id': `${site.url}/about/#person` },
        },
        { '@context': 'https://schema.org', ...person },
      ],
    };
  }

  if (path === '/about/') {
    return {
      ...base,
      type: 'profile',
      title: '关于刘旭',
      description:
        '刘旭，得到讲师，正在撰写《飞书多维表格实战》；从真实流程出发，用小型验证判断 AI 是否值得做。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${site.url}/about/#profile`,
        url: `${site.url}/about/`,
        name: '关于刘旭',
        dateModified: '2026-07-22',
        mainEntity: person,
      },
    };
  }

  if (path === '/cases/') {
    return {
      ...base,
      title: '实践记录｜刘旭',
      description:
        '从体育师生 AI 实践工作坊，到篮协报名流程的最小验证：查看刘旭怎样把模糊需求变成能试、能用、能复盘的方案。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: '刘旭的实践记录',
        url: `${site.url}/cases/`,
        author: { '@id': `${site.url}/about/#person` },
      },
    };
  }

  const study = caseStudies.find(
    (item) => path === `/cases/${item.slug}/`,
  );
  if (study) {
    return {
      ...base,
      type: 'article',
      title: `${study.shortTitle}｜刘旭`,
      description: study.metaDescription,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: study.title,
        description: study.metaDescription,
        datePublished: study.date,
        dateModified: '2026-07-22',
        mainEntityOfPage: canonicalFor(path),
        author: person,
      },
    };
  }

  if (path === '/work-with-me/') {
    return {
      ...base,
      title: '合作方式｜刘旭',
      description:
        '业务 AI 机会诊断、小型验证项目、团队培训与共创。先判断问题是否值得做，再决定采用什么工具。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '与刘旭合作',
        url: `${site.url}/work-with-me/`,
        author: person,
      },
    };
  }

  if (path === '/writing/') {
    return {
      ...base,
      title: '精选文章｜刘旭',
      description:
        '刘旭关于 AI、飞书、数据与真实工作场景的精选文章；公众号暂用名称「一念既出」。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: '刘旭的精选文章',
        url: `${site.url}/writing/`,
        author: person,
      },
    };
  }

  const article = selectedArticles.find(
    (item) => path === `/writing/${item.slug}/`,
  );
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
        dateModified: '2026-07-22',
        mainEntityOfPage: canonicalFor(path),
        author: person,
        isBasedOn: article.sourceUrl,
      },
    };
  }

  if (path === '/brief/') {
    return {
      ...base,
      title: '刘旭｜AI 业务问题诊断与小型验证',
      description:
        '一页了解刘旭怎样从真实流程出发，诊断业务问题、完成小型验证并支持团队使用 AI。',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '刘旭 AI 实践能力资料',
        url: `${site.url}/brief/`,
        author: person,
      },
    };
  }

  return {
    ...base,
    title: '页面未找到｜刘旭',
    description: '你访问的页面不存在。',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '页面未找到',
    },
  };
}

export function render(path: string) {
  return {
    html: renderToString(<App path={path} />),
    meta: getRouteMeta(path),
  };
}
