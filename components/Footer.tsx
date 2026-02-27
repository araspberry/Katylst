
import React from 'react';

interface FooterProps {
  onNavigate: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-bg pt-20 pb-10 border-t border-border/10 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <svg viewBox="27 27 49 47" className="w-7 h-7 fill-bg">
                  <path d="M30 30.5h16.6v39.5h-16.6z" />
                  <path d="M51.6 30.5h15.2l-10.2 14z" />
                  <path d="M47.2 48.4l10-1 15.6 22.6h-19.6z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-ink tracking-tighter font-serif italic">
                Katylst<span className="text-accent not-italic">.</span>
              </div>
            </button>
            <p className="text-ink-muted mb-8 leading-relaxed font-sans font-light">
              Helping local service businesses dominate their service areas through performance-driven SEO and high-converting websites.
            </p>
            <div className="flex flex-wrap gap-5">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map(platform => (
                <a 
                  key={platform} 
                  href="#" 
                  className="w-11 h-11 rounded-xl border border-border/20 flex items-center justify-center text-ink-muted hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  aria-label={platform}
                >
                  <i className={`fa-brands fa-${platform} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-ink mb-6 uppercase text-xs tracking-[0.2em]">Company</h5>
            <ul className="space-y-4 text-ink-muted font-medium font-sans font-light">
              <li><button onClick={() => onNavigate('services')} className="hover:text-accent transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('lead-machine')} className="hover:text-accent transition-colors">The Lead Machine</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-accent transition-colors">Pricing Plans</button></li>
              <li><button onClick={() => onNavigate('dashboard')} className="hover:text-accent transition-colors">Admin Login</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-ink mb-6 uppercase text-xs tracking-[0.2em]">Growth Engine</h5>
            <ul className="space-y-4 text-ink-muted font-medium font-sans font-light">
              <li><button onClick={() => onNavigate('services')} className="hover:text-accent transition-colors text-left">Contractor Websites</button></li>
              <li><button onClick={() => onNavigate('local-seo')} className="hover:text-accent transition-colors text-left">Local SEO Dominance</button></li>
              <li><button onClick={() => onNavigate('social-leads')} className="hover:text-accent transition-colors text-left">Social Ads Funnels</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-ink mb-6 uppercase text-xs tracking-[0.2em]">Legal</h5>
            <ul className="space-y-4 text-ink-muted font-medium font-sans font-light">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-accent transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-accent transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border/10 text-center text-ink-muted text-sm font-medium font-sans font-light">
          <p>&copy; {new Date().getFullYear()} Katylst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
