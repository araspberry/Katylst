
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#007BFF] font-bold text-sm uppercase tracking-widest mb-3">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple, Honest Pricing</h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Scale your business with an SEO plan tailored to your specific needs and growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.slice(0, 3).map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.recommended 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#007BFF] text-white text-[9px] font-black uppercase px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${plan.recommended ? 'text-[#007BFF]' : 'text-slate-400'}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter leading-none">{plan.price}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest opacity-50`}>{plan.period}</span>
                </div>
              </div>

              <div className={`h-px w-full mb-8 ${plan.recommended ? 'bg-white/10' : 'bg-slate-100'}`}></div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.slice(0, 5).map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.recommended ? 'bg-[#007BFF]' : 'bg-slate-200'}`}></div>
                    <span className={`text-[13px] leading-tight ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                plan.recommended
                  ? 'bg-[#007BFF] text-white hover:bg-white hover:text-slate-900'
                  : 'bg-slate-900 text-white hover:bg-[#007BFF]'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
