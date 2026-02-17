
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenShelf: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenShelf }) => {
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
    { name: 'Services', href: '#services' },
    { name: 'AI Audit', href: '#audit' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section: Box is now 2X relative to text size */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#007BFF] rounded-2xl flex items-center justify-center shadow-xl shadow-[#007BFF]/20">
              <span className="text-white font-black text-4xl md:text-5xl leading-none">K</span>
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter flex items-baseline">
              Katylst<span className="text-[#007BFF] text-3xl md:text-4xl leading-none">.</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            {/* CTA Button */}
            <button 
              onClick={onOpenShelf}
              className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-5 md:px-7 py-2.5 rounded-xl font-bold shadow-lg shadow-[#007BFF]/30 transition-all transform hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              Say Hello
            </button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hamburger-btn group relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] focus:outline-none bg-slate-100/50 hover:bg-slate-100 rounded-xl transition-colors ${isMenuOpen ? 'is-open bg-slate-100' : ''}`}
              aria-label="Toggle navigation"
            >
              <span className="line-1 block w-6 h-[2.5px] bg-slate-900 rounded-full"></span>
              <span className="line-2 block w-6 h-[2.5px] bg-slate-900 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down Dropdown Menu */}
      <div className={`menu-dropdown absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl overflow-hidden ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900 hover:text-[#007BFF] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <i className="fa-solid fa-chevron-right text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
