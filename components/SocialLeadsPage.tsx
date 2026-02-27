
import React from 'react';

interface SocialLeadsPageProps {
  onOpenShelf: () => void;
}

const SocialLeadsPage: React.FC<SocialLeadsPageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-cream">
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden bg-charcoal text-warm-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-warm-white/10 text-warm-white font-bold text-xs mb-8 border border-warm-white/20 uppercase tracking-[0.2em]">
            <i className="fa-brands fa-facebook-f mr-2"></i>
            High-Velocity Growth
          </div>
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tighter mb-10 font-serif italic">
            LEADS ON <br /><span className="text-accent not-italic">DEMAND.</span>
          </h1>
          <p className="text-xl md:text-2xl text-mid-gray max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-light">
            Don't wait months for SEO. Turn on the tap and get high-intent inquiries in your inbox within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-charcoal rounded-[3rem] p-8 aspect-[9/16] max-w-[340px] mx-auto shadow-2xl border-4 border-charcoal-soft overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-charcoal-soft rounded-b-2xl"></div>
                <div className="mt-12 space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent"></div>
                      <div className="h-2 w-24 bg-charcoal-soft rounded-full"></div>
                   </div>
                   <div className="bg-charcoal-soft aspect-[4/5] rounded-2xl flex items-center justify-center">
                      <div className="text-center p-6">
                         <div className="text-warm-white font-bold text-lg mb-2 font-serif italic">Emergency Plumbing?</div>
                         <div className="text-accent text-[10px] font-bold uppercase tracking-widest">Get 20% Off Today</div>
                         <div className="mt-4 px-4 py-2 bg-accent text-warm-white text-[10px] font-bold rounded-lg uppercase tracking-widest">Get Quote</div>
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-warm-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-brand-border">
                   <div className="w-8 h-8 rounded-lg bg-brand-green text-warm-white flex items-center justify-center">
                      <i className="fa-solid fa-envelope-open-text text-xs"></i>
                   </div>
                   <div className="text-charcoal font-bold text-xs">New Lead: John D.</div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-charcoal tracking-tighter mb-8 font-serif italic">
              The Katylst <br /><span className="text-accent not-italic">Ad Funnel.</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: "Scroll-Stopping Creative", text: "We create high-definition video and static assets that stand out in a cluttered feed and speak directly to homeowner pain points." },
                { title: "Hyper-Local Targeting", text: "No wasted impressions. We target by zip code, interest, and even demographic data to ensure your ads only reach people who own homes." },
                { title: "Zero-Friction Capture", text: "We use high-converting lead forms and instant chatbots to capture data without the user ever leaving their favorite app." }
              ].map((step, i) => (
                <div key={i} className="group">
                  <div className="text-4xl font-bold text-brand-border mb-2 group-hover:text-accent transition-colors font-serif italic">{String(i+1).padStart(2, '0')}</div>
                  <h4 className="text-2xl font-bold text-charcoal mb-2 tracking-tight">{step.title}</h4>
                  <p className="text-mid-gray leading-relaxed font-sans font-light">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <button onClick={onOpenShelf} className="bg-accent text-warm-white px-10 py-5 rounded-2xl font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-xl shadow-accent/20 hover:bg-accent-light transition-all active:scale-95">
                Launch My Campaign
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialLeadsPage;
