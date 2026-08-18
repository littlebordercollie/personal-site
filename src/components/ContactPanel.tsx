import { site } from '../siteData';

export default function ContactPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className={compact ? 'contact-panel compact' : 'contact-panel'}>
      <div>
        <p className="section-index">下一步</p>
        <h2>从真实问题开始。</h2>
        <p>邮件里写清楚谁在做、现在怎么做、最费力的是哪一步，以及你能提供什么样例。我会先判断适不适合从一场实训开始。</p>
      </div>
      <div className="contact-actions">
        <a className="button button-signal" href={`mailto:${site.email}?subject=聊一个真实工作问题`}>发邮件给刘旭</a>
        <a className="email-line" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </section>
  );
}
