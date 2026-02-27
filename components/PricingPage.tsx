
import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';

interface PricingPageProps {
  onOpenShelf: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onOpenShelf }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const featureTable = [
    {
      category: "Site Features",
      rows: [
        { name: "Custom Domain Connection", values: [true, true, true, true, true], info: "Connect your existing domain or get a new one." },
        { name: "Mobile Responsive Build", values: [true, true, true, true, true], info: "Optimized for all screen sizes." },
        { name: "Brand Removal", values: [true, true, true, true, true], info: "No Katylst branding on your site." },
        { name: "Cloud Storage", values: ["50 GB", "100 GB", "500 GB", "25 GB", "10 GB"], info: "Storage for media assets." },
      ]
    },
    {
      category: "Growth & Marketing",
      rows: [
        { name: "Local SEO Retainer", values: [false, true, true, false, false], info: "Ongoing SEO optimization." },
        { name: "AI Lead Capture Bot", values: [false, false, true, false, true], info: "Custom AI chatbot integration." },
        { name: "GMB Pack Domination", values: [false, true, true, false, false], info: "Ranking in the Google Maps top 3." },
        { name: "Meta Ads Management", values: [false, false, false, true, false], info: "FB/IG advertising campaigns." },
        { name: "Daily Lead Reports", values: [true, true, true, true, true], info: "Real-time inquiry notifications." },
      ]
    }
  ];

  const faqs = [
    { 
      q: "Is there a long-term contract?", 
      a: "For our monthly retainers, we operate on a month-to-month basis. We believe our results will keep you around, not a legal document. You can scale up, down, or pause with 30 days notice." 
    },
    { 
      q: "Can I upgrade my plan later?", 
      a: "Absolutely. Many clients start with a Web Design and then add Local SEO or Chatbots once they see the conversion lift. We make the transition seamless and ensure all your data transfers over." 
    },
    { 
      q: "What is your 'Bundle' benefit?", 
      a: "The Bundle saves you $500 on the initial build and provides priority placement in our launch queue. It's the most efficient way to align your website's architecture with your SEO strategy from day one." 
    },
    { 
      q: "Who handles my account?", 
      a: "You'll be assigned a dedicated Growth Engineer who understands the service industry. No generic support tickets—just direct access to the experts building your pipeline." 
    }
  ];

  const Check = () => <i className="fa-solid fa-check text-accent text-lg"></i>;
  const Dash = () => <div className="h-px w-4 bg-brand-border"></div>;

  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-bg">
      {/* Hero Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold text-ink tracking-tighter mb-8 leading-[1.05] font-serif italic">
            Invest in your <br /><span className="text-accent not-italic">unfair advantage.</span>
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed font-sans font-light">
            No hidden fees. No long-term lock-ins. Just performance-based solutions engineered to grow your service area footprint.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-40">
            {PRICING_PLANS.map((plan, idx) => (
              <div 
                key={idx}
                className={`group relative p-8 rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                  plan.recommended 
                    ? 'bg-surface text-ink shadow-2xl scale-105 z-10 border border-accent/20' 
                    : 'bg-surface-soft text-ink border border-border shadow-sm hover:shadow-xl'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg text-[9px] font-bold uppercase px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${plan.recommended ? 'text-accent' : 'text-ink-muted'}`}>
                    {plan.name}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="text-4xl font-bold tracking-tighter font-serif italic">{plan.price}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest opacity-50`}>
                        {plan.period}
                      </span>
                    </div>
                    {plan.subPrice && (
                      <div className="text-[11px] font-bold text-accent mt-1 uppercase tracking-wider">{plan.subPrice}</div>
                    )}
                  </div>
                </div>

                <div className={`h-px w-full mb-8 ${plan.recommended ? 'bg-ink/10' : 'bg-border'}`}></div>

                <p className={`text-[12px] mb-8 leading-relaxed font-sans font-light min-h-[48px] text-ink-muted`}>
                  {plan.description}
                </p>

                <div className="flex-grow space-y-3 mb-10">
                  {plan.features.slice(0, 5).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.recommended ? 'bg-accent' : 'bg-border'}`}></div>
                      <span className={`text-[11px] leading-tight font-sans font-light text-ink-muted`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onOpenShelf}
                  className={`w-full py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.15em] transition-all duration-300 active:scale-95 ${
                  plan.recommended
                    ? 'bg-accent text-bg shadow-lg shadow-accent/20 hover:bg-accent-light'
                    : 'bg-surface text-ink hover:bg-surface-soft border border-border'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table (Wix-Style) */}
          <div className="hidden lg:block mb-32 border-t border-border">
             <div className="grid grid-cols-7 border-b border-border sticky top-24 bg-bg/90 backdrop-blur-md z-40 py-6">
                <div className="col-span-2 px-4 flex items-center font-bold text-ink uppercase tracking-widest text-xs">Plan Comparison</div>
                {PRICING_PLANS.map((plan, i) => {
                  const label = plan.name.split(' ')[0];
                  return (
                    <div key={i} className="text-center">
                      <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1">
                        {label === 'SEO' ? 'Bundle' : label}
                      </div>
                      <div className="text-lg font-bold text-ink font-serif italic">{plan.price}</div>
                    </div>
                  );
                })}
             </div>

             {featureTable.map((section, sIdx) => (
               <div key={sIdx} className="mb-12">
                  <div className="bg-surface px-4 py-3 font-bold text-[10px] text-ink-muted uppercase tracking-[0.3em] border-b border-border">
                    {section.category}
                  </div>
                  {section.rows.map((row, rIdx) => (
                    <div key={rIdx} className="grid grid-cols-7 border-b border-border hover:bg-surface-soft/50 transition-colors group">
                       <div className="col-span-2 px-4 py-5 flex items-center gap-2">
                          <span className="text-sm font-bold text-ink font-sans font-light">{row.name}</span>
                          <div className="relative group/info">
                             <i className="fa-solid fa-circle-info text-[10px] text-border group-hover:text-ink-muted cursor-help"></i>
                             <div className="absolute bottom-full left-0 mb-2 w-48 bg-surface text-ink text-[10px] p-3 rounded-lg opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all border border-border">
                                {row.info}
                             </div>
                          </div>
                       </div>
                       {row.values.map((val, vIdx) => (
                         <div key={vIdx} className="flex items-center justify-center p-5 border-l border-border">
                            {typeof val === 'boolean' ? (val ? <Check /> : <Dash />) : (
                              <span className="text-xs font-bold text-ink font-serif italic">{val}</span>
                            )}
                         </div>
                       ))}
                    </div>
                  ))}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQs Section (Wix Step Layout Style) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            
            {/* Left: The List (FAQs) */}
            <div className="space-y-4 order-2 lg:order-1">
              {faqs.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className={`border-b transition-all duration-300 ${
                      isOpen ? 'border-accent' : 'border-border'
                    }`}
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-8 flex items-center gap-8 text-left focus:outline-none group"
                    >
                      <span className={`text-3xl font-bold tracking-tighter font-serif italic ${isOpen ? 'text-accent' : 'text-border'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-xl font-bold tracking-tight flex-grow ${isOpen ? 'text-ink' : 'text-ink-muted'}`}>
                        {item.q}
                      </span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen ? 'bg-accent text-bg rotate-180' : 'bg-surface-soft text-border rotate-0'
                      }`}>
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                      </div>
                    </button>
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-20 pr-8 pb-10 text-ink-muted text-lg leading-relaxed font-sans font-light">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: The Title and CTA */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-40">
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter leading-[1.05] mb-10 font-serif italic">
                Scale your <br />
                business in <br />
                <span className="text-accent not-italic">simple steps.</span>
              </h2>
              <p className="text-ink-muted text-xl mb-12 max-w-sm leading-relaxed font-sans font-light">
                Still have questions? We're here to help you find the perfect growth plan for your service area.
              </p>
              <button 
                onClick={onOpenShelf}
                className="bg-accent text-bg px-12 py-6 rounded-3xl font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-2xl shadow-accent/30 hover:bg-accent-light hover:-translate-y-1 transition-all active:scale-95"
              >
                Book a Free Strategy Call
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
