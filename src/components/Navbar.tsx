import { useState, useEffect, useCallback, useRef } from 'react';
import { Search, Menu, X } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '我的项目', href: '#projects' },
  { label: '全部文章', href: '#articles' },
  { label: '关于我', href: '#about' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'articles', 'about'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-60px 0px -60% 0px',
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    },
    []
  );

  const handleSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);

      window.dispatchEvent(
        new CustomEvent('article-search', {
          detail: { query: value },
        })
      );
    },
    []
  );

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => {
      if (prev) {
        setSearchQuery('');
        window.dispatchEvent(
          new CustomEvent('article-search', {
            detail: { query: '' },
          })
        );
      }
      return !prev;
    });
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] h-[56px] bg-[#0a0a0a] border-b border-[#262626]">
        <div className="mx-auto flex h-full max-w-[800px] items-center justify-between px-4 md:px-10">
          {/* Left: Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-[16px] font-semibold text-[#e5e5e5] transition-colors duration-150 hover:text-[#e5e5e5]"
          >
            Seele
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-[14px] transition-colors duration-150 ${
                    isActive
                      ? 'text-[#22c55e]'
                      : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-[#22c55e]" />
                  )}
                </a>
              );
            })}

            <div className="w-px h-4 bg-[#262626] mx-1" />

            <button
              onClick={toggleSearch}
              className="text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors duration-150 p-1"
              aria-label="搜索"
            >
              <Search size={16} />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleSearch}
              className="text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors duration-150 p-1"
              aria-label="搜索"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors duration-150 p-1"
              aria-label="菜单"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Search panel */}
      <div
        ref={searchContainerRef}
        className={`fixed left-0 right-0 z-[99] bg-[#121212] border-b border-[#262626] transition-all duration-200 ease-out overflow-hidden ${
          searchOpen ? 'max-h-[56px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: '56px' }}
      >
        <div className="mx-auto max-w-[800px] px-4 md:px-10 py-2">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchInput}
            placeholder="搜索文章标题或摘要..."
            className="w-full h-[40px] bg-[#0a0a0a] border border-[#262626] rounded-[4px] px-4 text-[14px] text-[#e5e5e5] placeholder:text-[#737373] outline-none focus:border-[#22c55e] transition-colors duration-200"
          />
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-[#0a0a0a] transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-[56px] items-center justify-between px-4 border-b border-[#262626]">
          <span className="text-[16px] font-semibold text-[#e5e5e5]">Seele</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors duration-150 p-1"
            aria-label="关闭菜单"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 pt-16">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[20px] font-medium transition-colors duration-150 ${
                  isActive ? 'text-[#22c55e]' : 'text-[#e5e5e5]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
