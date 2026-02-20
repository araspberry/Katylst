
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onNavigate: (view: 'home' | 'services') => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#007BFF] font-bold text-sm uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Complete SEO Solutions</h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need to improve your online visibility, attract more visitors, and convert them into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#007BFF]/10 text-[#007BFF] flex items-center justify-center text-2xl mb-8 group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8">
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-[#007BFF] font-bold flex items-center group-hover:gap-2 transition-all hover:underline"
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
