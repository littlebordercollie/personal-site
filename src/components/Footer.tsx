import { Mail, BookOpen, MessageCircle } from 'lucide-react';

const ICP_RECORDS: Record<string, string> = {
  'ailiuxu.com': '京ICP备2025136661号-2',
  'www.ailiuxu.com': '京ICP备2025136661号-2',
  'liuxu.wiki': '京ICP备2025136661号-3',
  'www.liuxu.wiki': '京ICP备2025136661号-3',
};

// 仅把平台实际签发的编号映射到对应域名；未签发或未确认归属时不展示。
const PUBLIC_SECURITY_RECORDS: Record<
  string,
  { number: string; queryCode: string }
> = {
  'ailiuxu.com': {
    number: '11011402056640',
    queryCode: '11011402056640',
  },
  'www.ailiuxu.com': {
    number: '11011402056640',
    queryCode: '11011402056640',
  },
};

export default function Footer() {
  const hostname = window.location.hostname.toLowerCase();
  const icpRecord = ICP_RECORDS[hostname] ?? ICP_RECORDS['ailiuxu.com'];
  const publicSecurityRecord = PUBLIC_SECURITY_RECORDS[hostname];

  return (
    <footer className="min-h-[76px] bg-[#0a0a0a] border-t border-[#262626] py-3">
      <div className="mx-auto flex h-full max-w-[800px] flex-col items-center justify-between gap-2 px-4 md:flex-row md:px-10">
        <div className="flex flex-col items-center gap-1 text-[12px] text-[#737373] md:items-start">
          <span>&copy; 2026 Seele · 一念既出</span>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-start">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-[#a3a3a3]"
            >
              {icpRecord}
            </a>
            {publicSecurityRecord && (
              <a
                href={`https://beian.mps.gov.cn/#/query/webSearch?code=${publicSecurityRecord.queryCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition-colors duration-150 hover:text-[#a3a3a3]"
              >
                <img
                  src="/beian-icon.png"
                  alt=""
                  width={14}
                  height={16}
                  aria-hidden="true"
                />
                京公网安备{publicSecurityRecord.number}号
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:guoshujiya@gmail.com"
            className="flex items-center gap-1.5 text-[#737373] hover:text-[#a3a3a3] transition-colors duration-150"
            aria-label="Email"
          >
            <Mail size={14} />
            <span className="hidden sm:inline text-[13px]">Email</span>
          </a>
          <a
            href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyOTExNjY5OA==&action=getalbum&album_id=3260700046408654848"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#737373] hover:text-[#a3a3a3] transition-colors duration-150"
            aria-label="公众号"
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline text-[13px]">公众号</span>
          </a>
          <span
            className="flex items-center gap-1.5 text-[#737373]"
            aria-label="微信"
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline text-[13px]">微信</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
