import React from 'react';
import Testimonials from './Testimonials';

interface LocalSeoPageProps {
  onOpenShelf: () => void;
}

const LocalSeoPage: React.FC<LocalSeoPageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-bg">
      <section className="py-20 lg:py-32 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs mb-8 border border-accent/20 uppercase tracking-[0.2em]">
            <i className="fa-solid fa-location-dot mr-2"></i>
            Maps Dominance
          </div>
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold text-ink leading-[1.05] tracking-tighter mb-10 font-serif italic">
            OWN THE <span className="text-accent not-italic">MAP PACK.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-muted max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-light">
            If you aren't in the Top 3 on Google Maps, you're giving your best leads to your competitors. We fix that.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter mb-8 font-serif italic">
              The 3 Pillars of <br /><span className="text-accent not-italic">Local Authority.</span>
            </h2>
            <div className="space-y-10">
              {[
                { title: "GMB Optimization", icon: "fa-shop", desc: "We don't just 'fill out' your profile. We optimize every pixel for Google's local algorithm, from keyword-rich descriptions to geotagged media." },
                { title: "Citation Architecture", icon: "fa-network-wired", desc: "We build a web of local signals across 100+ platforms that prove to Google you are the legitimate king of your service area." },
                { title: "Review Engineering", icon: "fa-star", desc: "We implement automated systems to help you gather 5-star reviews on autopilot, building the trust signals Google craves." }
              ].map((pillar, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-soft shadow-lg flex items-center justify-center text-accent shrink-0 border border-border">
                    <i className={`fa-solid ${pillar.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-ink mb-2">{pillar.title}</h4>
                    <p className="text-ink-muted leading-relaxed font-sans font-light">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-soft p-8 rounded-[3rem] shadow-2xl border border-border relative">
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent text-bg rounded-full flex items-center justify-center font-bold text-xs rotate-12 shadow-xl uppercase tracking-widest">
               #1 RANKED
             </div>
             <div className="space-y-6">
                <div className="h-4 w-32 bg-border/30 rounded-full"></div>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`p-4 rounded-2xl border flex items-center justify-between ${i === 1 ? 'border-accent bg-accent/5' : 'border-border'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${i === 1 ? 'bg-accent text-bg' : 'bg-surface text-ink-muted'}`}>{i}</div>
                        <div>
                          <div className={`h-3 w-32 rounded-full mb-1.5 ${i === 1 ? 'bg-ink' : 'bg-border/50'}`}></div>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star text-[8px] text-accent"></i>)}
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center shadow-lg">
                        <i className="fa-solid fa-phone text-xs"></i>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <Testimonials onOpenShelf={onOpenShelf} />

      <section className="py-32 text-center px-4 bg-accent text-bg">
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tighter mb-8 font-serif italic">Ready to dominate your city?</h2>
        <button onClick={onOpenShelf} className="bg-bg text-accent px-12 py-6 rounded-3xl font-bold text-[0.9rem] uppercase tracking-[0.06em] hover:bg-surface transition-all shadow-2xl active:scale-95">
          Check My Map Rankings
        </button>
      </section>
    </div>
  );
};

export default LocalSeoPage;