
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenShelf: () => void;
  onNavigate: (view: 'home' | 'services' | 'pricing' | 'lead-machine' | 'local-seo' | 'social-leads' | 'privacy' | 'terms') => void;
  currentView: 'home' | 'services' | 'pricing' | 'lead-machine' | 'local-seo' | 'social-leads' | 'privacy' | 'terms';
}

const Navbar: React.FC<NavbarProps> = ({ onOpenShelf, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' as const, href: '#' },
    { name: 'Services', view: 'services' as const, href: '#' },
    { name: 'Pricing', view: 'pricing' as const, href: '#' },
    { name: 'AI Audit', view: 'home' as const, href: '#audit' },
  ];

  const handleLinkClick = (view: any, href: string) => {
    setIsMenuOpen(false);
    onNavigate(view);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      setTimeout(() => {
        try {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
          console.warn(`Invalid scroll selector: ${href}`, err);
        }
      }, 100);
    }
  };

  const LogoIcon = () => (
    <svg viewBox="27 27 49 47" className="w-8 h-8 md:w-10 md:h-10 fill-white drop-shadow-sm">
      <path d="M30 30.5h16.6v39.5h-16.6z" />
      <path d="M51.6 30.5h15.2l-10.2 14z" />
      <path d="M47.2 48.4l10-1 15.6 22.6h-19.6z" />
    </svg>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button 
            onClick={() => handleLinkClick('home', '#')}
            className="flex items-center gap-3 md:gap-4 group text-left"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#007BFF] rounded-2xl flex items-center justify-center shadow-xl shadow-[#007BFF]/20 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <LogoIcon />
            </div>
            <div className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter flex items-center leading-none">
              Katylst<span className="text-[#007BFF] text-2xl md:text-4xl leading-none inline-block">.</span>
            </div>
          </button>
          
          <div className="flex items-center gap-3 md:gap-8 h-full">
            <div className="hidden lg:flex items-center gap-8 h-full">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.view, link.href)}
                  className={`text-xs md:text-sm font-black uppercase tracking-widest transition-colors leading-none flex items-center ${
                    (currentView === link.view && link.href === '#') || (currentView === 'home' && link.href !== '#' && window.location.hash === link.href)
                      ? 'text-[#007BFF]'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button 
              onClick={onOpenShelf}
              className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black shadow-xl shadow-[#007BFF]/30 transition-all transform hover:scale-105 active:scale-95 text-xs md:text-base shrink-0 leading-none flex items-center h-fit"
            >
              Say Hello
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hamburger-btn group relative w-10 h-10 md:w-12 md:h-12 flex flex-col justify-center items-center gap-[6px] focus:outline-none bg-slate-100/50 hover:bg-slate-100 rounded-xl transition-colors shrink-0 ${isMenuOpen ? 'is-open bg-slate-100' : ''}`}
              aria-label="Toggle navigation"
            >
              <span className="line-1 block w-6 h-[2.5px] bg-slate-900 rounded-full"></span>
              <span className="line-2 block w-6 h-[2.5px] bg-slate-900 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`menu-dropdown absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl overflow-hidden ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  onClick={() => handleLinkClick(link.view, link.href)}
                  className="w-full text-left text-2xl font-bold text-slate-900 hover:text-[#007BFF] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <i className="fa-solid fa-chevron-right text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
