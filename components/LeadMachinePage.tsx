import React from 'react';
import Testimonials from './Testimonials';

interface LeadMachinePageProps {
  onOpenShelf: () => void;
}

const LeadMachinePage: React.FC<LeadMachinePageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-bg">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden bg-surface text-ink">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-xs mb-8 border border-accent/30 uppercase tracking-[0.2em]">
            The Katylst Ecosystem
          </div>
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tighter mb-10 font-serif italic">
            THE LEAD <br /><span className="text-accent not-italic">MACHINE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-muted max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-light">
            Why settle for one-off tactics? We build a closed-loop system where your Website, SEO, and Ads work as a single, unstoppable engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onOpenShelf}
              className="bg-accent text-bg px-12 py-6 rounded-3xl font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-2xl shadow-accent/30 hover:bg-accent-light transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Start the Engine
            </button>
          </div>
        </div>
      </section>

      {/* The Synergy Visualization */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter mb-6 font-serif italic">
              The Power of <span className="text-accent not-italic">Compound Growth.</span>
            </h2>
            <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans font-light">
              When these three systems are linked, the results don't just add up—they multiply.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Connection Lines (Desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 -z-10"></div>
            
            {[
              { 
                title: "The Fortress", 
                subtitle: "High-Conv Website", 
                icon: "fa-shield-halved",
                color: "bg-accent",
                textColor: "text-bg",
                desc: "Every visitor is precious. Our websites are built with psychological triggers that force inquiries, ensuring no traffic is wasted."
              },
              { 
                title: "The Signal", 
                subtitle: "Local SEO Dominance", 
                icon: "fa-tower-cell",
                color: "bg-surface-soft",
                textColor: "text-accent",
                desc: "We send a 24/7 signal to Google that you are the authority. This builds long-term equity and consistent free organic leads."
              },
              { 
                title: "The Accelerator", 
                subtitle: "Precision Social Ads", 
                icon: "fa-bolt",
                color: "bg-accent-blue",
                textColor: "text-bg",
                desc: "While SEO builds authority, Social Ads inject instant cash flow. We hyper-target homeowners in your exact zip codes."
              }
            ].map((step, i) => (
              <div key={i} className="bg-surface p-10 rounded-[3rem] border border-border shadow-xl hover:shadow-2xl transition-all group">
                <div className={`w-20 h-20 rounded-3xl ${step.color} ${step.textColor} flex items-center justify-center text-3xl mb-8 shadow-xl transition-transform group-hover:rotate-6`}>
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-2">Phase {i+1}</div>
                <h3 className="text-2xl font-bold text-ink mb-4 tracking-tight">{step.title}</h3>
                <div className="text-sm font-bold text-ink-muted mb-6">{step.subtitle}</div>
                <p className="text-ink-muted leading-relaxed mb-8 font-sans font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Eager Plan */}
      <section className="py-32 bg-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-surface rounded-[4rem] p-12 md:p-20 shadow-2xl border border-border">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter mb-12 text-center font-serif italic">
              Your 90-Day <span className="text-accent not-italic">Unlimited Lead Plan.</span>
            </h2>
            <div className="space-y-12">
              {[
                { day: "01-15", title: "Site Overhaul", text: "We gut your current site and install the Katylst high-conversion architecture. Phone starts ringing from existing traffic." },
                { day: "15-45", title: "Local Maps Launch", text: "We blast your GMB profile with authority signals and local citations. You appear in the Top 3 for your main zip codes." },
                { day: "45-90", title: "Ad Sprint Injection", text: "We turn on the Facebook Ads tap. Leads flood in daily as we scale the winning creatives based on real ROI data." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface-soft text-ink flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-accent group-hover:text-bg transition-colors border border-border">
                    D{item.day}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-ink mb-2">{item.title}</h4>
                    <p className="text-ink-muted leading-relaxed font-sans font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <button 
                onClick={onOpenShelf}
                className="bg-accent text-bg px-12 py-6 rounded-3xl font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-2xl shadow-accent/30 hover:bg-accent-light transition-all active:scale-95"
              >
                Claim Your Blueprint
              </button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials onOpenShelf={onOpenShelf} />

      {/* Final CTA */}
      <section className="py-24 bg-accent text-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tighter mb-8 font-serif italic">Ready to automate your pipeline?</h2>
          <button onClick={onOpenShelf} className="bg-bg text-accent px-12 py-6 rounded-3xl font-bold text-[0.9rem] uppercase tracking-[0.06em] hover:bg-surface transition-all active:scale-95 shadow-xl">
            Get Your Free Strategy
          </button>
        </div>
      </section>
    </div>
  );
};

export default LeadMachinePage;