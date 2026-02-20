import React from 'react';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  onOpenShelf: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onOpenShelf }) => {
  // Helper to get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007BFF]/10 text-[#007BFF] text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#007BFF]/10">
              <i className="fa-solid fa-star text-[8px]"></i>
              Verified Performance
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              The Wall of <br /><span className="text-[#007BFF]">Social Proof.</span>
            </h2>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              We don't just talk about results—we build them. Join hundreds of service area leaders who have engineered their growth with Katylst.
            </p>

            {/* UPDATED: Social Proof Line - circle badges removed as requested */}
            <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 inline-flex">
               <div className="w-10 h-10 rounded-xl bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF]">
                 <i className="fa-solid fa-users text-sm"></i>
               </div>
               <p className="text-slate-400 font-bold text-sm">
                 Join <span className="text-slate-900">450+ service businesses</span> who stopped guessing and started growing.
               </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-12 lg:gap-16 items-center lg:pt-16">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-black text-slate-900">4.9/5</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Average Rating</div>
              <div className="flex gap-0.5 mt-2 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star text-[#007BFF] text-[10px]"></i>)}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-black text-slate-900">12k+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Leads Generated</div>
              <div className="h-1 w-8 bg-[#007BFF] mx-auto lg:mx-0 mt-3 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#007BFF]/10 flex flex-col ${
                idx === 0 
                  ? 'md:col-span-2 lg:col-span-1 bg-slate-900 text-white' 
                  : idx === 2
                  ? 'lg:row-span-2 bg-[#007BFF] text-white'
                  : 'bg-slate-50 border border-slate-100'
              }`}
            >
              {/* Header Info - Using Initials instead of Images */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg ring-4 ${
                    idx === 0 || idx === 2 
                      ? 'bg-white/10 text-white ring-white/5' 
                      : 'bg-[#007BFF]/10 text-[#007BFF] ring-[#007BFF]/5'
                  }`}>
                    {getInitials(t.name)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="fa-solid fa-check text-[10px] text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="font-black text-lg leading-none mb-1">{t.name}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${idx === 0 || idx === 2 ? 'text-slate-400' : 'text-[#007BFF]'}`}>
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Company Logo / Brand */}
              <div className={`inline-flex items-center gap-2 mb-6 text-sm font-black uppercase tracking-tighter ${idx === 0 || idx === 2 ? 'text-white/50' : 'text-slate-400'}`}>
                <i className={`${t.logo}`}></i>
                {t.company}
              </div>

              {/* Content */}
              <h4 className="text-xl font-black tracking-tight mb-4 leading-snug">
                "{t.headline}"
              </h4>
              <p className={`text-base leading-relaxed flex-grow ${idx === 0 || idx === 2 ? 'text-slate-300' : 'text-slate-500'}`}>
                {t.content}
              </p>

              {/* Action Button - Only for featured cards */}
              {(idx === 0 || idx === 2) && (
                <div className="mt-8 pt-6 border-t border-white/10">
                   <button 
                    onClick={onOpenShelf}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all"
                   >
                     Case Study <i className="fa-solid fa-arrow-right"></i>
                   </button>
                </div>
              )}
            </div>
          ))}

          {/* Call to Action Card in Grid */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#007BFF]/50 transition-all cursor-pointer" onClick={onOpenShelf}>
             <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-[#007BFF] text-3xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-plus"></i>
             </div>
             <div className="text-xl font-black text-slate-900 mb-2">Your Story Here.</div>
             <p className="text-sm text-slate-400 max-w-[200px]">Let's engineer your next record-breaking month together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;