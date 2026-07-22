import ContactPanel from '../components/ContactPanel';
import { site } from '../siteData';

export default function About() {
  return (
    <>
      <article className="about-page section-shell">
        <header className="page-hero">
          <p className="eyebrow">关于刘旭</p>
          <h1>做到，比先给自己贴一个头衔更有说服力。</h1>
          <p>
            我关心怎样把一个真实问题说清楚、缩小、做出第一版，再用结果决定下一步。
          </p>
        </header>

        <div className="about-columns">
          <section>
            <h2>现在在做什么</h2>
            <p>
              我现在独立探索企业与团队中的 AI 落地：业务问题诊断、小型原型验证，以及让非技术人员真正动手的培训与共创。
            </p>
            <p>
              “增加收入、减少浪费、节省重复劳动”是判断方向，不是预先保证的结果。每个项目都应回到真实流程、数据条件和可复盘证据。
            </p>
          </section>

          <section>
            <h2>已经可以核验的经历</h2>
            <ul className="timeline">
              <li>
                <time dateTime="2025-11-04">2025-11</time>
                <div>
                  <h3>成为得到讲师</h3>
                  <a
                    href="https://mp.weixin.qq.com/s/0VOPrPbZ0HO_1fyG2Sz6kg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    查看当时的原始记录
                  </a>
                </div>
              </li>
              <li>
                <time dateTime="2026-01-26">2026-01</time>
                <div>
                  <h3>在得到直播间分享 AI 与教学实践</h3>
                  <a
                    href="https://mp.weixin.qq.com/s/jE1JiGpOoEI6eX0y-BiPXA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    查看分享记录
                  </a>
                </div>
              </li>
              <li>
                <time dateTime="2026-04-28">2026-04</time>
                <div>
                  <h3>在北体相关场景开展 120 分钟 AI 实践工作坊</h3>
                  <a href="/cases/beijing-sport-university-ai-workshop/">
                    查看事实与边界
                  </a>
                </div>
              </li>
              <li>
                <time dateTime="2026-07-22">现在</time>
                <div>
                  <h3>正在撰写《飞书多维表格实战》</h3>
                  <p>出版阶段确认后再补出版社、封面和购买信息。</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2>给合作方的第三人称简介</h2>
            <blockquote>
              刘旭关注 AI、数据与流程在真实工作场景中的落地。他曾担任得到讲师，
              在得到直播间分享 AI 与教学实践，目前正在撰写《飞书多维表格实战》。
              他的工作方法是先澄清问题，再用小型验证判断方案是否值得继续。
            </blockquote>
          </section>

          <section>
            <h2>名字与内容品牌</h2>
            <p>
              本站统一使用实名“刘旭”。微信号 <strong>{site.wechat}</strong> 只是联系方式，不再作为网站品牌。
              公众号当前暂用名称「{site.contentBrand}」，名称调整后会在全站统一替换。
            </p>
            <p className="review-date">人物信息最后核对：2026-07-22</p>
          </section>
        </div>
      </article>
      <div className="section-shell section-block">
        <ContactPanel compact />
      </div>
    </>
  );
}
