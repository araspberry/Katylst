
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onNavigate: (view: 'home' | 'services') => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3">Our Expertise</h2>
          <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink mb-6 font-serif italic">Complete SEO Solutions</h3>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans font-light">
            Everything you need to improve your online visibility, attract more visitors, and convert them into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 rounded-3xl border border-border bg-surface hover:bg-surface-soft hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-2xl mb-8 group-hover:bg-accent group-hover:text-bg transition-all">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-ink mb-4">{service.title}</h4>
              <p className="text-ink-muted leading-relaxed font-sans font-light">
                {service.description}
              </p>
              <div className="mt-8">
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-accent font-bold text-[0.9rem] uppercase tracking-[0.06em] flex items-center group-hover:gap-2 transition-all hover:underline"
                >
                  Learn more <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
