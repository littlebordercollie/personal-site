import ContactPanel from '../components/ContactPanel';
import { offerings } from '../siteData';

export default function Contact() {
  return (
    <>
      <header className="page-hero page-shell">
        <p className="section-index">START WITH A REAL TASK</p>
        <h1 className="complete-lines"><span>先把问题说清楚。</span><span>再决定是否需要 AI。</span></h1>
        <p>我主要从企业 AI 实训开始。实训之后，只有边界清楚、能够验证的问题才进入小型项目。</p>
      </header>
      <section className="page-shell section-block offering-detail-list">
        {offerings.map((offering) => (
          <article key={offering.number}>
            <header><span>{offering.number}</span><div><h2>{offering.title}</h2><p>{offering.summary}</p></div></header>
            <div className="offering-columns">
              <div><h3>适合什么情况</h3><p>{offering.suitableFor}</p></div>
              <div><h3>你需要提供</h3><ul>{offering.clientProvides.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>我会留下</h3><ul>{offering.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </article>
        ))}
      </section>
      <section className="page-shell section-block contact-checklist">
        <div><p className="section-index">第一次邮件</p><h2>写清楚四件事就够了。</h2></div>
        <ol>
          <li><span>01</span><p>谁正在做这项工作？</p></li>
          <li><span>02</span><p>现在具体怎么做？</p></li>
          <li><span>03</span><p>最费力或最容易出错的是哪一步？</p></li>
          <li><span>04</span><p>你能提供什么样例来判断第一版是否有效？</p></li>
        </ol>
      </section>
      <div className="page-shell section-block"><ContactPanel /></div>
    </>
  );
}
