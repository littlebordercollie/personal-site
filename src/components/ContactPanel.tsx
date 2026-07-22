import { useState } from 'react';
import { site } from '../siteData';

export default function ContactPanel({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copyWechat() {
    try {
      await navigator.clipboard.writeText(site.wechat);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className={compact ? 'contact-panel compact' : 'contact-panel'}>
      <div>
        <p className="eyebrow">联系</p>
        <h2>有一个具体问题？</h2>
        <p>
          把现在怎么做、最麻烦的是哪一步、有哪些可以脱敏的样例告诉我。
          我会先判断它是否值得用 AI，而不是先推荐一个系统。
        </p>
      </div>
      <div className="contact-actions">
        <button type="button" className="button primary" onClick={copyWechat}>
          {copied ? '已复制微信号' : `复制微信号 ${site.wechat}`}
        </button>
        <a className="button secondary" href={`mailto:${site.email}`}>
          发送邮件
        </a>
        <span className="contact-note">二维码确认后会放在这里；当前不生成替代二维码。</span>
      </div>
    </section>
  );
}
