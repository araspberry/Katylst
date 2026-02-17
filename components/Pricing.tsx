
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-10 rounded-3xl flex flex-col ${
                plan.recommended 
                  ? 'bg-[#007BFF] text-white shadow-2xl shadow-[#007BFF]/20 scale-105 z-10' 
                  : 'bg-white text-slate-900 border border-slate-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm ${plan.recommended ? 'text-blue-100' : 'text-slate-400'}`}>{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <i className={`fa-solid fa-circle-check mt-1 ${plan.recommended ? 'text-blue-200' : 'text-[#007BFF]'}`}></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.recommended
                  ? 'bg-white text-[#007BFF] hover:bg-slate-50'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
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
