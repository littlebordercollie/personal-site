import { Mail, BookOpen, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="h-[56px] bg-[#0a0a0a] border-t border-[#262626]">
      <div className="mx-auto flex h-full max-w-[800px] items-center justify-between px-4 md:px-10">
        <span className="text-[13px] text-[#737373]">&copy; 2026 Seele · 一念既出</span>

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
