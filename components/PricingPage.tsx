
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

  const Check = () => <i className="fa-solid fa-check text-[#007BFF] text-lg"></i>;
  const Dash = () => <div className="h-px w-4 bg-slate-200"></div>;

  return (
    <div className="pt-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.95]">
            Invest in your <br /><span className="text-[#007BFF]">unfair advantage.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No long-term lock-ins. Just performance-based solutions engineered to grow your service area footprint.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-32">
            {PRICING_PLANS.map((plan, idx) => (
              <div 
                key={idx}
                className={`group relative p-8 rounded-[2rem] flex flex-col transition-all duration-500 hover:shadow-2xl ${
                  plan.recommended 
                    ? 'bg-slate-900 text-white shadow-xl scale-105 z-10' 
                    : 'bg-slate-50 text-slate-900 border border-slate-100'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#007BFF] text-white text-[9px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-xl">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${plan.recommended ? 'text-[#007BFF]' : 'text-slate-400'}`}>
                    {plan.name}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black tracking-tighter">{plan.price}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.recommended ? 'text-slate-500' : 'text-slate-400'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`text-[11px] mb-8 leading-relaxed font-medium ${plan.recommended ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <button 
                  onClick={onOpenShelf}
                  className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                  plan.recommended
                    ? 'bg-[#007BFF] text-white hover:bg-blue-600'
                    : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table (Wix-Style) */}
          <div className="hidden lg:block mb-32 border-t border-slate-100">
             <div className="grid grid-cols-7 border-b border-slate-100 sticky top-24 bg-white/90 backdrop-blur-md z-40 py-6">
                <div className="col-span-2 px-4 flex items-center font-black text-slate-900 uppercase tracking-widest text-xs">Plan Comparison</div>
                {PRICING_PLANS.map((plan, i) => {
                  const label = plan.name.split(' ')[0];
                  return (
                    <div key={i} className="text-center">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        {label === 'SEO' ? 'Bundle' : label}
                      </div>
                      <div className="text-lg font-black text-slate-900">{plan.price}</div>
                    </div>
                  );
                })}
             </div>

             {featureTable.map((section, sIdx) => (
               <div key={sIdx} className="mb-12">
                  <div className="bg-slate-50 px-4 py-3 font-black text-[10px] text-slate-400 uppercase tracking-[0.3em] border-b border-slate-100">
                    {section.category}
                  </div>
                  {section.rows.map((row, rIdx) => (
                    <div key={rIdx} className="grid grid-cols-7 border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                       <div className="col-span-2 px-4 py-5 flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-700">{row.name}</span>
                          <div className="relative group/info">
                             <i className="fa-solid fa-circle-info text-[10px] text-slate-200 group-hover:text-slate-400 cursor-help"></i>
                             <div className="absolute bottom-full left-0 mb-2 w-48 bg-slate-900 text-white text-[10px] p-3 rounded-lg opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all">
                                {row.info}
                             </div>
                          </div>
                       </div>
                       {row.values.map((val, vIdx) => (
                         <div key={vIdx} className="flex items-center justify-center p-5 border-l border-slate-50">
                            {typeof val === 'boolean' ? (val ? <Check /> : <Dash />) : (
                              <span className="text-xs font-black text-slate-900">{val}</span>
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
      <section className="py-32 bg-white">
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
                      isOpen ? 'border-[#007BFF]' : 'border-slate-100'
                    }`}
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-8 flex items-center gap-8 text-left focus:outline-none group"
                    >
                      <span className={`text-3xl font-black tracking-tighter ${isOpen ? 'text-[#007BFF]' : 'text-slate-300'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-xl font-bold tracking-tight flex-grow ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                        {item.q}
                      </span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen ? 'bg-[#007BFF] text-white rotate-180' : 'bg-slate-100 text-slate-300 rotate-0'
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
                        <div className="pl-20 pr-8 pb-10 text-slate-500 text-lg leading-relaxed">
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
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-10">
                Scale your <br />
                business in <br />
                <span className="text-[#007BFF]">simple steps.</span>
              </h2>
              <p className="text-slate-500 text-xl mb-12 max-w-sm leading-relaxed">
                Still have questions? We're here to help you find the perfect growth plan for your service area.
              </p>
              <button 
                onClick={onOpenShelf}
                className="bg-slate-900 text-white px-12 py-6 rounded-3xl font-black text-lg hover:bg-[#007BFF] hover:-translate-y-1 transition-all active:scale-95 shadow-xl"
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
