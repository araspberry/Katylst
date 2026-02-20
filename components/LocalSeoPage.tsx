import React from 'react';
import Testimonials from './Testimonials';

interface LocalSeoPageProps {
  onOpenShelf: () => void;
}

const LocalSeoPage: React.FC<LocalSeoPageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-white">
      <section className="py-20 lg:py-32 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 text-red-500 font-black text-xs mb-8 border border-red-100 uppercase tracking-widest">
            <i className="fa-solid fa-location-dot mr-2"></i>
            Maps Dominance
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
            OWN THE <span className="text-red-500">MAP PACK.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12">
            If you aren't in the Top 3 on Google Maps, you're giving your best leads to your competitors. We fix that.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">
              The 3 Pillars of <br /><span className="text-[#007BFF]">Local Authority.</span>
            </h2>
            <div className="space-y-10">
              {[
                { title: "GMB Optimization", icon: "fa-shop", desc: "We don't just 'fill out' your profile. We optimize every pixel for Google's local algorithm, from keyword-rich descriptions to geotagged media." },
                { title: "Citation Architecture", icon: "fa-network-wired", desc: "We build a web of local signals across 100+ platforms that prove to Google you are the legitimate king of your service area." },
                { title: "Review Engineering", icon: "fa-star", desc: "We implement automated systems to help you gather 5-star reviews on autopilot, building the trust signals Google craves." }
              ].map((pillar, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#007BFF] shrink-0 border border-slate-100">
                    <i className={`fa-solid ${pillar.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">{pillar.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 relative">
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center font-black text-xs rotate-12 shadow-xl">
               #1 RANKED
             </div>
             <div className="space-y-6">
                <div className="h-4 w-32 bg-slate-100 rounded-full"></div>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`p-4 rounded-2xl border flex items-center justify-between ${i === 1 ? 'border-[#007BFF] bg-blue-50/50' : 'border-slate-100'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${i === 1 ? 'bg-[#007BFF] text-white' : 'bg-slate-100 text-slate-400'}`}>{i}</div>
                        <div>
                          <div className={`h-3 w-32 rounded-full mb-1.5 ${i === 1 ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star text-[8px] text-yellow-400"></i>)}
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
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

      <section className="py-32 text-center px-4 bg-[#007BFF] text-white">
        <h2 className="text-4xl font-black tracking-tighter mb-8">Ready to dominate your city?</h2>
        <button onClick={onOpenShelf} className="bg-white text-[#007BFF] px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl">
          Check My Map Rankings
        </button>
      </section>
    </div>
  );
};

export default LocalSeoPage;