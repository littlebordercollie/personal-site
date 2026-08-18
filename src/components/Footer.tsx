import { site } from '../siteData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <span className="footer-kicker">边牧AI · 刘旭</span>
          <strong>帮助非技术团队把 AI 用进真实工作。</strong>
        </div>
        <div className="footer-links" aria-label="联系与备案">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2025136661号-2</a>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=11011402056640"
            target="_blank"
            rel="noreferrer"
            className="beian-link"
          >
            <img src="/beian-icon.png" alt="" width="18" height="20" />
            京公网安备11011402056640号
          </a>
        </div>
      </div>
    </footer>
  );
}
