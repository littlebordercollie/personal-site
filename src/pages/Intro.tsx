import CopyText from '../components/CopyText';
import { introVariants, publicRecords, site, speakingTopics } from '../siteData';

export default function Intro() {
  return (
    <>
      <header className="page-hero page-shell intro-hero">
        <div>
          <p className="section-index">INTRODUCTION KIT</p>
          <h1 className="complete-lines"><span>介绍资料已经整理好。</span><span>复制或下载即可使用。</span></h1>
          <p>以下文字可以直接复制。不同场景使用不同长度，不必再从个人经历里重新拼一遍。</p>
        </div>
        <figure className="portrait-card">
          <img src="/evidence/liuxu-public-portrait.jpg" alt="刘旭公开活动头像" width="840" height="990" />
          <figcaption>
            <span>刘旭 · 边牧AI</span>
            <a href="/evidence/liuxu-public-portrait.jpg" download>下载公开头像</a>
          </figcaption>
        </figure>
      </header>

      <section className="page-shell section-block intro-copy-section">
        <header className="section-heading">
          <p className="section-index">01 / 可复制简介</p>
          <h2>选择场景，直接复制。</h2>
        </header>
        <div className="copy-grid">
          {introVariants.map((intro) => (
            <div key={intro.id} id={`${intro.id}-intro`}>
              <p className="copy-use">适合：{intro.useFor}</p>
              <CopyText label={intro.label} text={intro.text} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-ink">
        <div className="page-shell intro-topics">
          <div>
            <p className="section-index">02 / 可讲主题</p>
            <h2 className="complete-lines"><span>围绕真实任务。</span><span>不从工具目录开始。</span></h2>
          </div>
          <ol>
            {speakingTopics.map((topic, index) => (
              <li key={topic}><span>{String(index + 1).padStart(2, '0')}</span><strong>{topic}</strong></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="public-records" className="page-shell section-block records-section">
        <header className="section-heading">
          <p className="section-index">03 / 公开记录</p>
          <h2>公开经历，按时间排列。</h2>
        </header>
        <div className="records-list">
          {publicRecords.map((record) => (
            <article key={`${record.date}-${record.title}`}>
              <time>{record.date}</time>
              <div><h3>{record.title}</h3><p>{record.description}</p></div>
              {'href' in record ? (
                <a href={record.href} target={record.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  查看记录 ↗
                </a>
              ) : <span />}
            </article>
          ))}
        </div>
        <div className="evidence-gallery">
          <figure>
            <a href="/evidence/dedao-ai-50000-learners.jpg" target="_blank">
              <img src="/evidence/dedao-ai-50000-learners.jpg" alt="得到 AI 学习圈课程学习人数突破五万纪念牌" loading="lazy" />
            </a>
            <figcaption>课程累计 50,000 学习人次</figcaption>
          </figure>
          <figure>
            <a href="/evidence/dedao-education-salon-2026.jpg" target="_blank">
              <img src="/evidence/dedao-education-salon-2026.jpg" alt="2026 年得到 AI 学习圈教育沙龙公开海报" loading="lazy" />
            </a>
            <figcaption>2026 年教育沙龙公开活动</figcaption>
          </figure>
        </div>
      </section>

      <section id="author-intro" className="page-shell section-block intro-contact">
        <div>
          <p className="section-index">04 / 联系</p>
          <h2 className="complete-lines"><span>需要进一步资料？</span><span>直接发邮件即可。</span></h2>
        </div>
        <a className="button button-signal" href={`mailto:${site.email}?subject=需要刘旭的介绍资料`}>{site.email}</a>
      </section>
    </>
  );
}
