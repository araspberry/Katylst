
import React from 'react';

interface FooterProps {
  onNavigate: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 bg-[#007BFF] rounded-xl flex items-center justify-center shadow-lg shadow-[#007BFF]/20">
                <svg viewBox="27 27 49 47" className="w-7 h-7 fill-white">
                  <path d="M30 30.5h16.6v39.5h-16.6z" />
                  <path d="M51.6 30.5h15.2l-10.2 14z" />
                  <path d="M47.2 48.4l10-1 15.6 22.6h-19.6z" />
                </svg>
              </div>
              <div className="text-xl font-black text-slate-900 tracking-tighter">
                Katylst<span className="text-[#007BFF]">.</span>
              </div>
            </button>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Helping local service businesses dominate their service areas through performance-driven SEO and high-converting websites.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all">
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><button onClick={() => onNavigate('services')} className="hover:text-[#007BFF] transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('lead-machine')} className="hover:text-[#007BFF] transition-colors">The Lead Machine</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-[#007BFF] transition-colors">Pricing Plans</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Growth Engine</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><button onClick={() => onNavigate('services')} className="hover:text-[#007BFF] transition-colors text-left">Contractor Websites</button></li>
              <li><button onClick={() => onNavigate('local-seo')} className="hover:text-[#007BFF] transition-colors text-left">Local SEO Dominance</button></li>
              <li><button onClick={() => onNavigate('social-leads')} className="hover:text-[#007BFF] transition-colors text-left">Social Ads Funnels</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-[#007BFF] transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-[#007BFF] transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 text-center text-slate-400 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Katylst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
