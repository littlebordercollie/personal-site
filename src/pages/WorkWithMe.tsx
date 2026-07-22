import ContactPanel from '../components/ContactPanel';
import { problems, processSteps, services } from '../siteData';

export default function WorkWithMe() {
  return (
    <>
      <header className="page-hero section-shell">
        <p className="eyebrow">合作方式</p>
        <h1>先判断问题值不值得做，再决定采用什么工具。</h1>
        <p>
          现在开放三种合作起点。页面不预设免费时长、固定价格或收益承诺；具体范围以真实场景、数据条件和交付边界为准。
        </p>
      </header>

      <section className="section-shell section-block">
        <div className="section-heading">
          <p className="eyebrow">常见起点</p>
          <h2>这些症状值得先聊清楚。</h2>
        </div>
        <div className="problem-grid">
          {problems.map((problem) => (
            <article key={problem.number} className="problem-card">
              <span>{problem.number}</span>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block process-section">
        <div className="section-heading">
          <p className="eyebrow">工作过程</p>
          <h2>从问题到交付，保留每一个可以停止的闸门。</h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading">
          <p className="eyebrow">三个合作入口</p>
          <h2>不用先立一个大项目。</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <span className="service-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <dl>
                <div>
                  <dt>适合</dt>
                  <dd>{service.fit}</dd>
                </div>
                <div>
                  <dt>你会得到</dt>
                  <dd>{service.deliverable}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <div className="section-shell section-block">
        <ContactPanel />
      </div>
    </>
  );
}
