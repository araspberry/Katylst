import React from 'react';
import Testimonials from './Testimonials';

interface LeadMachinePageProps {
  onOpenShelf: () => void;
}

const LeadMachinePage: React.FC<LeadMachinePageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#007BFF]/20 text-[#007BFF] font-black text-xs mb-8 border border-[#007BFF]/30 uppercase tracking-[0.2em]">
            The Katylst Ecosystem
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
            THE LEAD <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-indigo-400">MACHINE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Why settle for one-off tactics? We build a closed-loop system where your Website, SEO, and Ads work as a single, unstoppable engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onOpenShelf}
              className="bg-[#007BFF] text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl shadow-[#007BFF]/30 hover:bg-[#0069d9] transition-all transform hover:scale-105"
            >
              Start the Engine
            </button>
          </div>
        </div>
      </section>

      {/* The Synergy Visualization */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              The Power of <span className="text-[#007BFF]">Compound Growth.</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              When these three systems are linked, the results don't just add up—they multiply.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Connection Lines (Desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 -z-10"></div>
            
            {[
              { 
                title: "The Fortress", 
                subtitle: "High-Conv Website", 
                icon: "fa-shield-halved",
                color: "bg-blue-500",
                desc: "Every visitor is precious. Our websites are built with psychological triggers that force inquiries, ensuring no traffic is wasted."
              },
              { 
                title: "The Signal", 
                subtitle: "Local SEO Dominance", 
                icon: "fa-tower-cell",
                color: "bg-indigo-500",
                desc: "We send a 24/7 signal to Google that you are the authority. This builds long-term equity and consistent free organic leads."
              },
              { 
                title: "The Accelerator", 
                subtitle: "Precision Social Ads", 
                icon: "fa-gauge-high",
                color: "bg-purple-500",
                desc: "While SEO builds authority, Social Ads inject instant cash flow. We hyper-target homeowners in your exact zip codes."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                <div className={`w-20 h-20 rounded-3xl ${step.color} text-white flex items-center justify-center text-3xl mb-8 shadow-xl transition-transform group-hover:rotate-6`}>
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <div className="text-xs font-black text-[#007BFF] uppercase tracking-[0.2em] mb-2">Phase {i+1}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <div className="text-sm font-bold text-slate-400 mb-6">{step.subtitle}</div>
                <p className="text-slate-500 leading-relaxed mb-8">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Eager Plan */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-slate-100">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-12 text-center">
              Your 90-Day <span className="text-[#007BFF]">Unlimited Lead Plan.</span>
            </h2>
            <div className="space-y-12">
              {[
                { day: "01-15", title: "Site Overhaul", text: "We gut your current site and install the Katylst high-conversion architecture. Phone starts ringing from existing traffic." },
                { day: "15-45", title: "Local Maps Launch", text: "We blast your GMB profile with authority signals and local citations. You appear in the Top 3 for your main zip codes." },
                { day: "45-90", title: "Ad Sprint Injection", text: "We turn on the Facebook Ads tap. Leads flood in daily as we scale the winning creatives based on real ROI data." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xs shrink-0 group-hover:bg-[#007BFF] transition-colors">
                    D{item.day}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <button 
                onClick={onOpenShelf}
                className="bg-[#007BFF] text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-900 transition-all active:scale-95"
              >
                Claim Your Blueprint
              </button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials onOpenShelf={onOpenShelf} />

      {/* Final CTA */}
      <section className="py-24 bg-[#007BFF] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">Ready to automate your pipeline?</h2>
          <button onClick={onOpenShelf} className="bg-white text-[#007BFF] px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-50 transition-all">
            Get Your Free Strategy
          </button>
        </div>
      </section>
    </div>
  );
};

export default LeadMachinePage;