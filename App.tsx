
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiAuditTool from './components/AiAuditTool';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactShelf from './components/ContactShelf';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import LeadMachinePage from './components/LeadMachinePage';
import LocalSeoPage from './components/LocalSeoPage';
import SocialAdsFunnelsPage from './components/SocialAdsFunnelsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';

type View = 'home' | 'services' | 'pricing' | 'lead-machine' | 'local-seo' | 'social-leads' | 'privacy' | 'terms';

function App() {
  const [isShelfOpen, setIsShelfOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const trustPartners = [
    { name: "Sarah's Plumbing", style: "font-serif font-black uppercase tracking-tighter" },
    { name: "Thorne Roofing", style: "font-sans font-black italic tracking-tighter" },
    { name: "Summit Realty", style: "font-mono font-bold uppercase tracking-[0.2em]" },
    { name: "CoolAir HVAC", style: "font-serif font-black italic tracking-normal" },
    { name: "Prime Law Associates", style: "font-sans font-black lowercase tracking-widest" },
    { name: "Miller Landscaping", style: "font-mono font-black tracking-tighter uppercase" },
    { name: "Elite Auto Detailing", style: "font-serif font-black tracking-tight" },
    { name: "Urban Oak Interiors", style: "font-sans font-black uppercase tracking-[0.05em]" },
  ];

  const tickerItems = [...trustPartners, ...trustPartners, ...trustPartners, ...trustPartners];

  const TickerSeparator = () => (
    <div className="flex items-center gap-4 md:gap-6 shrink-0">
      <div className="w-px h-6 bg-slate-200 rotate-12 opacity-50"></div>
      <div className="relative">
        <div className="absolute inset-0 bg-[#007BFF]/40 rounded-full blur-md animate-pulse"></div>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#007BFF] relative z-10 animate-pulse">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="w-px h-6 bg-slate-200 rotate-12 opacity-50"></div>
    </div>
  );

  const renderHome = () => (
    <>
      <Hero onNavigate={(view) => setCurrentView(view as View)} />
      
      {/* Trust Bar */}
      <div className="bg-white py-16 border-y border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-20 drop-shadow-[0_0_8px_rgba(0,123,255,0.4)]">
            Trusted by 450+ industry leaders
          </p>
        </div>
        
        <div className="flex items-center overflow-hidden whitespace-nowrap">
          <div className="animate-ticker flex items-center gap-12 md:gap-16 px-8">
            {tickerItems.map((partner, idx) => (
              <React.Fragment key={idx}>
                <div 
                  className={`text-lg md:text-xl lg:text-2xl text-slate-400 opacity-75 hover:opacity-100 hover:text-[#007BFF] transition-all duration-300 cursor-default select-none ${partner.style}`}
                >
                  {partner.name}
                </div>
                <TickerSeparator />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
      </div>

      <Services onNavigate={(view) => setCurrentView(view as View)} />
      <AiAuditTool />
      <Testimonials onOpenShelf={() => setIsShelfOpen(true)} />

      {/* Call to Action Section */}
      <section id="contact" className="py-24 bg-[#007BFF] relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to grow your organic traffic?</h2>
          <p className="text-blue-100 text-xl mb-12 leading-relaxed">
            Don't leave your search visibility to chance. Let our experts craft a custom SEO strategy that delivers measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsShelfOpen(true)}
              className="w-full sm:w-auto bg-white text-[#007BFF] px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-slate-50 transition-all"
            >
              Schedule a Strategy Call
            </button>
            <button className="w-full sm:w-auto bg-[#0069d9] text-white border border-[#007BFF] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#005cbf] transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar 
        onOpenShelf={() => setIsShelfOpen(true)} 
        onNavigate={(view) => setCurrentView(view as View)}
        currentView={currentView === 'home' || currentView === 'services' || currentView === 'pricing' ? currentView : 'home'}
      />
      <ContactShelf isOpen={isShelfOpen} onClose={() => setIsShelfOpen(false)} />
      
      <main>
        {currentView === 'home' && renderHome()}
        {currentView === 'services' && <ServicesPage onOpenShelf={() => setIsShelfOpen(true)} />}
        {currentView === 'pricing' && <PricingPage onOpenShelf={() => setIsShelfOpen(true)} />}
        {currentView === 'lead-machine' && <LeadMachinePage onOpenShelf={() => setIsShelfOpen(true)} />}
        {currentView === 'local-seo' && <LocalSeoPage onOpenShelf={() => setIsShelfOpen(true)} />}
        {currentView === 'social-leads' && <SocialAdsFunnelsPage onOpenShelf={() => setIsShelfOpen(true)} />}
        {currentView === 'privacy' && <PrivacyPolicyPage />}
        {currentView === 'terms' && <TermsOfServicePage />}
      </main>

      <Footer onNavigate={(view) => setCurrentView(view as View)} />
    </div>
  );
}

export default App;
