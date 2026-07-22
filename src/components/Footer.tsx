import { site } from '../siteData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>刘旭</strong>
          <p>从真实流程出发，用小型验证判断 AI 值不值得做。</p>
        </div>
        <div className="footer-links" aria-label="联系与备案">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>微信：{site.wechat}</span>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            京ICP备2025136661号-2
          </a>
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
