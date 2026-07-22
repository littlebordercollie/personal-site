import CaseCard from '../components/CaseCard';
import ContactPanel from '../components/ContactPanel';
import { caseStudies } from '../siteData';

export default function Cases() {
  return (
    <>
      <header className="page-hero section-shell">
        <p className="eyebrow">实践记录</p>
        <h1>不把能力方向冒充客户成果。</h1>
        <p>
          这里先公开两条真实实践和一条培训能力证明。每一页都写清发生时间、刘旭的角色、实际结果和不能外推的边界。
        </p>
      </header>
      <section className="section-shell section-block">
        <div className="case-grid">
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <div className="section-shell section-block">
        <ContactPanel compact />
      </div>
    </>
  );
}
