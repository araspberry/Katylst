
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
import Dashboard from './components/Dashboard';

type View = 'home' | 'services' | 'pricing' | 'lead-machine' | 'local-seo' | 'social-leads' | 'privacy' | 'terms' | 'dashboard';

function App() {
  const [isShelfOpen, setIsShelfOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const trustPartners = [
    { name: "Sarah's Plumbing", style: "font-serif font-bold uppercase tracking-tighter" },
    { name: "Thorne Roofing", style: "font-sans font-extrabold italic tracking-tighter" },
    { name: "Summit Realty", style: "font-mono font-bold uppercase tracking-[0.2em]" },
    { name: "CoolAir HVAC", style: "font-serif font-bold italic tracking-normal" },
    { name: "Prime Law Associates", style: "font-sans font-extrabold lowercase tracking-widest" },
    { name: "Miller Landscaping", style: "font-mono font-bold tracking-tighter uppercase" },
    { name: "Elite Auto Detailing", style: "font-serif font-bold tracking-tight" },
    { name: "Urban Oak Interiors", style: "font-sans font-extrabold uppercase tracking-[0.05em]" },
  ];

  const tickerItems = [...trustPartners, ...trustPartners, ...trustPartners, ...trustPartners];

  const TickerSeparator = () => (
    <div className="flex items-center gap-4 md:gap-6 shrink-0">
      <div className="w-px h-6 bg-accent/20 rotate-12"></div>
      <div className="relative">
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm"></div>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent relative z-10">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="w-px h-6 bg-accent/20 rotate-12"></div>
    </div>
  );

  const renderHome = () => (
    <>
      <Hero 
        onNavigate={(view) => setCurrentView(view as View)} 
        onOpenShelf={() => setIsShelfOpen(true)}
      />
      
      {/* Trust Bar */}
      <div className="bg-bg pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-center text-xs font-bold text-ink-muted uppercase tracking-[0.4em] mb-12">
            Trusted by 450+ industry leaders
          </p>
        </div>
        
        <div className="bg-surface py-8 border-y border-border overflow-hidden relative">
          <div className="flex items-center overflow-hidden whitespace-nowrap">
            <div className="animate-ticker flex items-center gap-12 md:gap-16 px-8">
              {tickerItems.map((partner, idx) => (
                <React.Fragment key={idx}>
                  <div 
                    className={`text-lg md:text-xl lg:text-2xl text-ink-muted/50 hover:text-accent transition-all duration-300 cursor-default select-none ${partner.style}`}
                  >
                    {partner.name}
                  </div>
                  <TickerSeparator />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-surface via-surface/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-surface via-surface/80 to-transparent z-20 pointer-events-none"></div>
        </div>
      </div>

      <Services onNavigate={(view) => setCurrentView(view as View)} />
      <AiAuditTool />
      <Testimonials onOpenShelf={() => setIsShelfOpen(true)} />

      {/* Call to Action Section */}
      <section id="contact" className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-ink/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink mb-8 font-serif italic">Ready to grow your organic traffic?</h2>
          <p className="text-ink text-xl mb-12 leading-relaxed font-sans font-light opacity-90">
            Don't leave your search visibility to chance. Let our experts craft a custom SEO strategy that delivers measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsShelfOpen(true)}
              className="w-full sm:w-auto bg-surface text-ink px-10 py-5 rounded-full font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-xl hover:bg-surface-soft transition-all active:scale-95 border border-accent-blue/50 ring-4 ring-accent-blue/10"
            >
              Schedule a Strategy Call
            </button>
            <button 
              onClick={() => setIsShelfOpen(true)}
              className="w-full sm:w-auto bg-surface text-ink border border-ink/10 px-10 py-5 rounded-full font-bold text-[0.9rem] uppercase tracking-[0.06em] hover:bg-surface-soft transition-all active:scale-95"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-bg">
      {currentView !== 'dashboard' && (
        <Navbar 
          onOpenShelf={() => setIsShelfOpen(true)} 
          onNavigate={(view) => setCurrentView(view as View)}
          currentView={currentView === 'home' || currentView === 'services' || currentView === 'pricing' ? currentView : 'home'}
        />
      )}
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
        {currentView === 'dashboard' && <Dashboard onNavigate={(view) => setCurrentView(view)} />}
      </main>

      {currentView !== 'dashboard' && (
        <Footer onNavigate={(view) => setCurrentView(view as View)} />
      )}
    </div>
  );
}

export default App;
