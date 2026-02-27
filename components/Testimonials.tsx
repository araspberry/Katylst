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
    <section className="py-24 bg-bg overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-accent/10">
              <i className="fa-solid fa-star text-[8px]"></i>
              Verified Performance
            </div>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter leading-[1.1] mb-8 font-serif italic">
              The Wall of <br /><span className="text-accent not-italic">Social Proof.</span>
            </h2>
            
            <p className="text-xl text-ink-muted leading-relaxed mb-10 font-sans font-light">
              We don't just talk about results—we build them. Join hundreds of service area leaders who have engineered their growth with Katylst.
            </p>

            {/* UPDATED: Social Proof Line - circle badges removed as requested */}
            <div className="flex items-center gap-4 bg-surface p-6 rounded-[2rem] border border-border inline-flex">
               <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                 <i className="fa-solid fa-users text-sm"></i>
               </div>
               <p className="text-ink-muted font-bold text-sm">
                 Join <span className="text-ink">450+ service businesses</span> who stopped guessing and started growing.
               </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-12 lg:gap-16 items-center lg:pt-16">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-ink">4.9/5</div>
              <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mt-1">Average Rating</div>
              <div className="flex gap-0.5 mt-2 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star text-accent text-[10px]"></i>)}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-ink">12k+</div>
              <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mt-1">Leads Generated</div>
              <div className="h-1 w-8 bg-accent mx-auto lg:mx-0 mt-3 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 flex flex-col ${
                idx === 0 
                  ? 'md:col-span-2 lg:col-span-1 bg-surface text-ink' 
                  : idx === 2
                  ? 'lg:row-span-2 bg-accent text-bg'
                  : 'bg-surface border border-border'
              }`}
            >
              {/* Header Info - Using Initials instead of Images */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg ring-4 ${
                    idx === 0 || idx === 2 
                      ? 'bg-bg/10 text-ink ring-ink/5' 
                      : 'bg-accent/10 text-accent ring-accent/5'
                  }`}>
                    {getInitials(t.name)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-bg flex items-center justify-center">
                    <i className="fa-solid fa-check text-[10px] text-bg"></i>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg leading-none mb-1">{t.name}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${idx === 0 || idx === 2 ? 'text-ink-muted' : 'text-accent'}`}>
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Company Logo / Brand */}
              <div className={`inline-flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-tighter ${idx === 0 || idx === 2 ? 'text-ink/50' : 'text-ink-muted'}`}>
                <i className={`${t.logo}`}></i>
                {t.company}
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold tracking-tight mb-4 leading-snug font-serif italic">
                "{t.headline}"
              </h4>
              <p className={`text-base leading-relaxed flex-grow font-sans font-light ${idx === 0 || idx === 2 ? 'text-ink/80' : 'text-ink-muted'}`}>
                {t.content}
              </p>

              {/* Action Button - Only for featured cards */}
              {(idx === 0 || idx === 2) && (
                <div className="mt-8 pt-6 border-t border-ink/10">
                   <button 
                    onClick={onOpenShelf}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all"
                   >
                     Case Study <i className="fa-solid fa-arrow-right"></i>
                   </button>
                </div>
              )}
            </div>
          ))}

          {/* Call to Action Card in Grid */}
          <div className="bg-surface border-2 border-dashed border-border p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:bg-surface-soft hover:border-accent/50 transition-all cursor-pointer" onClick={onOpenShelf}>
             <div className="w-20 h-20 rounded-full bg-bg shadow-xl flex items-center justify-center text-accent text-3xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-plus"></i>
             </div>
             <div className="text-xl font-bold text-ink mb-2">Your Story Here.</div>
             <p className="text-sm text-ink-muted max-w-[200px] font-sans font-light">Let's engineer your next record-breaking month together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;