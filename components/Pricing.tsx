
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3">Pricing</h2>
          <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-charcoal mb-6 font-serif italic">Simple, Honest Pricing</h3>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto font-sans font-light">
            Scale your business with an SEO plan tailored to your specific needs and growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.slice(0, 3).map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.recommended 
                  ? 'bg-charcoal text-warm-white shadow-2xl scale-105 z-10' 
                  : 'bg-warm-white text-charcoal border border-brand-border shadow-sm hover:shadow-xl'
              } ${idx === 2 ? 'border-t-4 border-t-gold' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-warm-white text-[9px] font-bold uppercase px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 ${plan.recommended ? 'text-accent' : 'text-mid-gray'}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter leading-none font-serif italic">{plan.price}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest opacity-50`}>{plan.period}</span>
                </div>
              </div>

              <div className={`h-px w-full mb-8 ${plan.recommended ? 'bg-warm-white/10' : 'bg-brand-border'}`}></div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.slice(0, 5).map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.recommended ? 'bg-accent' : 'bg-brand-border'}`}></div>
                    <span className={`text-[14px] leading-tight font-sans font-light ${plan.recommended ? 'text-warm-white/80' : 'text-mid-gray'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-bold text-[0.9rem] uppercase tracking-[0.06em] transition-all duration-500 active:scale-95 ${
                plan.recommended
                  ? 'bg-accent text-warm-white shadow-xl shadow-accent/20 hover:bg-accent-light'
                  : 'bg-charcoal text-warm-white hover:bg-charcoal-soft'
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
