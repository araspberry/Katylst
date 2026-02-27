import React from 'react';
import Testimonials from './Testimonials';

interface SocialAdsFunnelsPageProps {
  onOpenShelf: () => void;
}

const SocialAdsFunnelsPage: React.FC<SocialAdsFunnelsPageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-bg">
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden bg-surface text-ink">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs mb-8 border border-accent/20 uppercase tracking-[0.2em]">
            <i className="fa-brands fa-facebook-f mr-2"></i>
            High-Velocity Growth
          </div>
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tighter mb-10 font-serif italic">
            SOCIAL ADS <br /><span className="text-accent not-italic">FUNNELS.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-muted max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-light">
            Don't wait months for SEO. Turn on the lead tap and get high-intent inquiries in your inbox within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter mb-8 font-serif italic">
              The Katylst <br /><span className="text-accent not-italic">Ad Funnel.</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: "Scroll-Stopping Creative", text: "We create high-definition video and static assets that stand out in a cluttered feed and speak directly to homeowner pain points." },
                { title: "Hyper-Local Targeting", text: "No wasted impressions. We target by zip code, interest, and even demographic data to ensure your ads only reach people who own homes." },
                { title: "Zero-Friction Capture", text: "We use high-converting lead forms and instant chatbots to capture data without the user ever leaving their favorite app." }
              ].map((step, i) => (
                <div key={i} className="group">
                  <div className="text-4xl font-bold text-border mb-2 group-hover:text-accent transition-colors font-serif italic">{String(i+1).padStart(2, '0')}</div>
                  <h4 className="text-2xl font-bold text-ink mb-2 tracking-tight">{step.title}</h4>
                  <p className="text-ink-muted leading-relaxed font-sans font-light">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <button onClick={onOpenShelf} className="bg-accent text-bg px-10 py-5 rounded-2xl font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-xl shadow-accent/20 hover:bg-accent-light transition-all active:scale-95">
                Launch My Campaign
              </button>
            </div>
          </div>

          <div className="order-2 lg:order-2 relative flex justify-center">
              {/* Realistic Phone Mockup */}
              <div className="relative w-[300px] h-[610px] bg-surface rounded-[3.5rem] shadow-[0_50px_100px_rgba(16,185,129,0.15)] border border-white/10">
                {/* Physical Bezel Details */}
                <div className="absolute inset-0 rounded-[3.5rem] border-[1px] border-white/5 pointer-events-none"></div>
                
                {/* Screen Container - Perfectly Centered with absolute inset */}
                <div className="absolute inset-[12px] bg-bg rounded-[2.5rem] overflow-hidden border border-white/5 shadow-inner">
                  
                  {/* Glass Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Dynamic Island Notch - Perfectly Centered */}
                  <div className="absolute top-4 left-0 right-0 mx-auto w-24 h-6 bg-surface rounded-full z-30 flex items-center justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-1 h-1 rounded-full bg-white/10"></div>
                  </div>

                  {/* UI Screen Content */}
                  <div className="h-full w-full flex flex-col pt-14 px-6 space-y-5 overflow-y-auto scrollbar-hide">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-bg text-[10px] font-bold">KA</div>
                      <div className="space-y-1">
                        <div className="h-2 w-20 bg-border rounded-full"></div>
                        <div className="h-1.5 w-12 bg-border/50 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Ad Post */}
                    <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
                      <div className="aspect-[4/5] bg-surface-soft flex items-center justify-center p-8 relative">
                        <div className="absolute top-0 right-0 p-3">
                          <div className="bg-accent text-bg text-[8px] font-bold px-2 py-0.5 rounded-sm">SPONSORED</div>
                        </div>
                        <div className="text-center relative z-10">
                          <div className="text-ink font-bold text-xl mb-2 drop-shadow-lg leading-tight font-serif italic">WE NEED <br />PLUMBERS?</div>
                          <div className="text-accent text-[8px] font-bold uppercase tracking-[0.2em] mb-4">Immediate Bookings Only</div>
                          <div className="inline-block px-4 py-2 bg-accent text-bg text-[10px] font-bold rounded-lg shadow-lg hover:scale-105 transition-transform uppercase tracking-widest">Get Your Quote</div>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="h-2 w-full bg-border/30 rounded-full"></div>
                        <div className="h-2 w-2/3 bg-border/20 rounded-full"></div>
                        <div className="pt-2 flex gap-3 text-[10px] text-ink-muted">
                          <i className="fa-solid fa-heart"></i>
                          <i className="fa-solid fa-comment"></i>
                          <i className="fa-solid fa-share"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Physical Button Silhouettes */}
                <div className="absolute -left-[2px] top-32 w-[4px] h-16 bg-surface-soft rounded-l-full border-l border-white/10"></div>
                <div className="absolute -left-[2px] top-52 w-[4px] h-10 bg-surface-soft rounded-l-full border-l border-white/10"></div>
                <div className="absolute -right-[2px] top-40 w-[4px] h-20 bg-surface-soft rounded-r-full border-r border-white/10"></div>
              </div>

              {/* Floating Notification */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-surface p-5 rounded-3xl shadow-2xl animate-float z-40 border border-border flex items-center gap-4 min-w-[200px]">
                <div className="w-12 h-12 rounded-2xl bg-accent text-bg flex items-center justify-center shadow-lg shadow-accent/20">
                  <i className="fa-solid fa-bolt-lightning text-lg"></i>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">New Lead Captured</span>
                  <span className="text-sm font-bold text-ink">John D. (Dallas, TX)</span>
                </div>
              </div>
          </div>
        </div>
      </section>

      <Testimonials onOpenShelf={onOpenShelf} />

      {/* CTA Bar */}
      <section className="py-24 bg-accent text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tighter mb-8 font-serif italic">Ready for instant growth?</h2>
          <button onClick={onOpenShelf} className="bg-bg text-accent px-12 py-6 rounded-3xl font-bold text-[0.9rem] uppercase tracking-[0.06em] hover:bg-surface transition-all shadow-2xl active:scale-95 border-2 border-white/20">
            Start the Lead Machine
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialAdsFunnelsPage;