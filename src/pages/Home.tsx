import { useState, useEffect, useCallback } from 'react';
import { Check, ArrowRight, Mail, BookOpen, MessageCircle } from 'lucide-react';
import { articles, allTags } from '../data/articles';

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 4;

function HeroSection() {
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  const achievements = [
    { text: '《飞书多维表格实战》书稿作者，出版进行中', href: '#projects' },
    { text: '「一念既出」公众号，99 篇文章，覆盖 AI 工具全链路', href: '#articles' },
    { text: '得到平台讲师，与罗振宇同台', href: '#about' },
    { text: '篮协赛事报名系统：飞书零代码落地，5487 次阅读', href: '#projects' },
    { text: 'KA21 社群成员，致力于 AI 在真实场景中的落地', href: '#about' },
  ];

  const stats = [
    { number: '99', unit: '篇文章' },
    { number: '5487', unit: '爆款单篇读' },
    { number: '16', unit: '篇飞书实战' },
    { number: '1', unit: '本书进行中' },
  ];

  return (
    <section
      id="hero"
      className="mx-auto max-w-[800px] px-4 pt-[128px] pb-16 md:px-10"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[14px] text-[#a3a3a3]">
        <span>Seele · AI 从业者 · 飞书玩家 · 写作者</span>
        <div className="flex items-center gap-4 ml-1">
          {['可咨询', '可培训', '可合作'].map((label) => (
            <span key={label} className="flex items-center gap-1">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#22c55e]" />
              <span className="text-[12px] text-[#737373]">{label}</span>
            </span>
          ))}
        </div>
      </div>

      <h1 className="mt-3 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#e5e5e5] md:text-[56px]">
        Seele
      </h1>

      <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[#a3a3a3]">
        AI 工具实践者，「一念既出」公众号作者，得到平台讲师。专注于把 AI 真正用起来——飞书多维表格、豆包、Claude，每个工具都拆开了用给你看。日更写作，99 篇在库，正在写《飞书多维表格实战》。相信「做到」比「说到」更有说服力。
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {achievements.map((item) => (
          <a
            key={item.text}
            href={item.href}
            onClick={(e) => handleAnchorClick(e, item.href)}
            className="group flex items-center gap-2 text-[14px] text-[#a3a3a3] transition-colors duration-150 hover:text-[#e5e5e5]"
          >
            <Check size={14} className="text-[#22c55e] shrink-0" />
            <span>{item.text}</span>
          </a>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.unit}
            className="flex flex-col items-center rounded-[6px] bg-[#121212] border border-[#262626] p-6 transition-colors duration-200 hover:border-[#404040]"
          >
            <span className="font-mono text-[32px] font-bold leading-[1] tracking-[-0.02em] text-[#e5e5e5] md:text-[48px]">
              {stat.number}
            </span>
            <span className="mt-1 text-[13px] text-[#737373]">
              <span className="text-[#404040]">/</span> {stat.unit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      category: '出版 · 飞书实战',
      title: '《飞书多维表格实战》',
      description:
        '系统讲解飞书多维表格从零到实战的完整路径，从基础建表到业务落地，覆盖 CRM、赛事系统、教学管理等真实场景。出版进行中。',
      tags: ['出版中', '飞书', '教程'],
      href: 'https://mp.weixin.qq.com/s/BVZobgh10Rzkdzlau_khFg',
    },
    {
      category: '零代码 · 飞书实战',
      title: '篮协赛事报名系统',
      description:
        '体育生找上门，要个赛事系统，我只给了一张表。飞书多维表格 2 小时搭出完整报名流程与实时数据看板，零代码，5487 次阅读。',
      tags: ['飞书', '零代码', '真实案例'],
      href: 'https://mp.weixin.qq.com/s/Kin-PjZVj6gLASDUbf7Jsg',
    },
    {
      category: '内容创作 · AI 协作',
      title: '「一念既出」日更工作流',
      description:
        '公众号 99 篇、Claude Code、飞书看板、第二大脑 Wiki 一套跑通。用 AI 把每日输出从「随机」变成「可持续」的系统。',
      tags: ['写作', 'AI 协作', '工作流'],
      href: 'https://mp.weixin.qq.com/s/LWepCrNwyv7iMX04TlVqog',
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto max-w-[800px] px-4 py-20 md:px-10 border-t border-[#262626]"
    >
      <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#e5e5e5] md:text-[32px]">
        我的项目
      </h2>
      <p className="mt-2 text-[14px] text-[#737373]">
        出版 · 零代码实战 · 内容工作流
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-[6px] bg-[#121212] border border-[#262626] p-6 transition-colors duration-200 hover:border-[#404040]"
          >
            <span className="text-[12px] uppercase tracking-wide text-[#737373]">
              {project.category}
            </span>
            <h3 className="mt-2 text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#e5e5e5]">
              {project.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#a3a3a3] line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[9999px] bg-[rgba(34,197,94,0.1)] px-2 py-[2px] text-[11px] text-[#22c55e]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-4 inline-flex items-center gap-1 text-[13px] text-[#e5e5e5] transition-colors duration-150 hover:text-[#e5e5e5]"
            >
              <span>查看详情</span>
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover/link:translate-x-[2px]"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArticlesSection() {
  const [activeTag, setActiveTag] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleSearch = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSearchQuery(customEvent.detail.query);
      setVisibleCount(INITIAL_COUNT);
    };

    window.addEventListener('article-search', handleSearch);
    return () => window.removeEventListener('article-search', handleSearch);
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesTag =
      activeTag === '全部' || article.tags.includes(activeTag);
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query);
    return matchesTag && matchesSearch;
  });

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleLoadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
      setIsLoading(false);
    }, 300);
  }, []);

  const handleTagChange = useCallback((tag: string) => {
    setActiveTag(tag);
    setVisibleCount(INITIAL_COUNT);
  }, []);

  return (
    <section
      id="articles"
      className="mx-auto max-w-[800px] px-4 py-20 md:px-10 border-t border-[#262626]"
    >
      <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#e5e5e5] md:text-[32px]">
        全部文章
      </h2>
      <p className="mt-2 text-[14px] text-[#737373]">点击卡片直达原文</p>

      <div className="mt-4 text-[13px]">
        <p className="text-[#a3a3a3]">2025.02 — 2026.06 · 共 99 篇</p>
        <p className="mt-1 text-[#737373]">近期保持日更</p>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {allTags.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`shrink-0 rounded-[9999px] px-3 py-1 text-[13px] transition-all duration-150 ${
                isActive
                  ? 'bg-[#22c55e] text-[#0a0a0a] font-medium'
                  : 'border border-[#262626] text-[#a3a3a3] hover:border-[#404040] hover:text-[#e5e5e5]'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {visibleArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[6px] bg-[#121212] border border-[#262626] p-5 transition-colors duration-200 hover:border-[#404040]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <span className="text-[12px] font-medium text-[#22c55e]">
                  {article.tags[0]}
                </span>
                <h3 className="mt-1 text-[16px] font-medium leading-[1.4] text-[#e5e5e5] truncate">
                  {article.title}
                </h3>
                <p className="mt-2 text-[13px] text-[#a3a3a3] truncate">
                  {article.excerpt}
                </p>
              </div>
              <span className="shrink-0 text-[12px] text-[#737373] mt-1">
                {article.date}
              </span>
            </div>
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="rounded-[4px] border border-[#262626] bg-transparent px-6 py-3 text-[14px] text-[#a3a3a3] transition-all duration-200 hover:border-[#404040] hover:text-[#e5e5e5] disabled:opacity-50"
          >
            {isLoading ? '加载中...' : '加载更多文章'}
          </button>
        </div>
      )}

      {!hasMore && filteredArticles.length > 0 && (
        <p className="mt-6 text-center text-[13px] text-[#737373]">
          已显示全部 {filteredArticles.length} 篇文章
        </p>
      )}

      {filteredArticles.length === 0 && (
        <p className="mt-6 text-center text-[13px] text-[#737373]">
          未找到匹配的文章
        </p>
      )}
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[800px] px-4 py-20 md:px-10 border-t border-[#262626]"
    >
      <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#e5e5e5] md:text-[32px]">
        About me
      </h2>

      <blockquote className="mt-8 border-l-[3px] border-[#22c55e] pl-4">
        <p className="text-[18px] font-medium leading-[1.5] text-[#e5e5e5] md:text-[20px]">
          「用不停地『做到』来说服自己。」
        </p>
      </blockquote>

      <p className="mt-6 max-w-[560px] text-[15px] leading-[1.7] text-[#a3a3a3]">
        表面上写的是 AI 工具和飞书，读到最后会发现这是一个普通人在 AI 时代持续行动的记录。每篇文章背后是一个真实的问题、一次真实的尝试、一段真实的反思。从 KA21 第 21 群潜水者，到得到平台讲师、书稿作者——「一念既出」就是这一切的出口。
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <a
          href="mailto:guoshujiya@gmail.com"
          className="group flex items-center gap-2 text-[14px] text-[#a3a3a3] transition-colors duration-150 hover:text-[#e5e5e5]"
        >
          <Mail
            size={16}
            className="text-[#737373] group-hover:text-[#e5e5e5] transition-colors duration-150"
          />
          <span>guoshujiya@gmail.com</span>
        </a>
        <a
          href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyOTExNjY5OA==&action=getalbum&album_id=3260700046408654848"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[14px] text-[#a3a3a3] transition-colors duration-150 hover:text-[#e5e5e5]"
        >
          <BookOpen
            size={16}
            className="text-[#737373] group-hover:text-[#e5e5e5] transition-colors duration-150"
          />
          <span>公众号「一念既出」</span>
        </a>
        <span className="flex items-center gap-2 text-[14px] text-[#a3a3a3]">
          <MessageCircle size={16} className="text-[#737373]" />
          <span>微信 Stefanie0122</span>
        </span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <ProjectsSection />
      <ArticlesSection />
      <AboutSection />
    </div>
  );
}
