import React from 'react';
import Testimonials from './Testimonials';

interface SocialAdsFunnelsPageProps {
  onOpenShelf: () => void;
}

const SocialAdsFunnelsPage: React.FC<SocialAdsFunnelsPageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-white">
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white font-black text-xs mb-8 border border-white/20 uppercase tracking-widest">
            <i className="fa-brands fa-facebook-f mr-2"></i>
            High-Velocity Growth
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
            SOCIAL ADS <br /><span className="text-blue-200">FUNNELS.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Don't wait months for SEO. Turn on the lead tap and get high-intent inquiries in your inbox within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             {/* Realistic Phone Mockup */}
             <div className="relative mx-auto max-w-[320px] group">
                {/* Physical Bezel */}
                <div className="bg-slate-900 rounded-[3.5rem] p-4 aspect-[9/18.5] shadow-[0_50px_100px_rgba(0,123,255,0.15)] border-[12px] border-slate-800 overflow-hidden relative ring-1 ring-white/10">
                  
                  {/* Glass Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-full z-30 flex items-center justify-end px-4 gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                  </div>

                  {/* UI Screen */}
                  <div className="h-full w-full bg-slate-50 rounded-[2.2rem] overflow-hidden relative flex flex-col">
                    <div className="mt-12 px-6 space-y-5">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-black">KA</div>
                          <div className="space-y-1">
                            <div className="h-2 w-20 bg-slate-300 rounded-full"></div>
                            <div className="h-1.5 w-12 bg-slate-200 rounded-full"></div>
                          </div>
                       </div>
                       
                       {/* Ad Post */}
                       <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                          <div className="aspect-[4/5] bg-slate-900 flex items-center justify-center p-8 relative">
                             <div className="absolute top-0 right-0 p-3">
                               <div className="bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 rounded-sm">SPONSORED</div>
                             </div>
                             <div className="text-center relative z-10">
                                <div className="text-white font-black text-xl mb-2 drop-shadow-lg leading-tight">WE NEED <br />PLUMBERS?</div>
                                <div className="text-[#007BFF] text-[8px] font-black uppercase tracking-[0.2em] mb-4">Immediate Bookings Only</div>
                                <div className="inline-block px-4 py-2 bg-[#007BFF] text-white text-[10px] font-black rounded-lg shadow-lg hover:scale-105 transition-transform">Get Your Quote</div>
                             </div>
                          </div>
                          <div className="p-4 space-y-2">
                             <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                             <div className="h-2 w-2/3 bg-slate-50 rounded-full"></div>
                             <div className="pt-2 flex gap-3 text-[10px] text-slate-300">
                               <i className="fa-solid fa-heart"></i>
                               <i className="fa-solid fa-comment"></i>
                               <i className="fa-solid fa-share"></i>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification - More realistic lead popup */}
                <div className="absolute -bottom-6 -right-12 bg-white p-5 rounded-3xl shadow-2xl animate-float z-40 border border-slate-50 flex items-center gap-4 min-w-[200px]">
                   <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                      <i className="fa-solid fa-bolt-lightning text-lg"></i>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">New Lead Captured</span>
                     <span className="text-sm font-black text-slate-900">John D. (Dallas, TX)</span>
                   </div>
                </div>

                {/* Physical Button Silhouettes */}
                <div className="absolute -left-[14px] top-32 w-[3px] h-16 bg-slate-700 rounded-l-full"></div>
                <div className="absolute -left-[14px] top-52 w-[3px] h-10 bg-slate-700 rounded-l-full"></div>
                <div className="absolute -right-[14px] top-40 w-[3px] h-20 bg-slate-700 rounded-r-full"></div>
             </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8">
              The Katylst <br /><span className="text-[#007BFF]">Ad Funnel.</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: "Scroll-Stopping Creative", text: "We create high-definition video and static assets that stand out in a cluttered feed and speak directly to homeowner pain points." },
                { title: "Hyper-Local Targeting", text: "No wasted impressions. We target by zip code, interest, and even demographic data to ensure your ads only reach people who own homes." },
                { title: "Zero-Friction Capture", text: "We use high-converting lead forms and instant chatbots to capture data without the user ever leaving their favorite app." }
              ].map((step, i) => (
                <div key={i} className="group">
                  <div className="text-4xl font-black text-slate-200 mb-2 group-hover:text-[#007BFF] transition-colors">{String(i+1).padStart(2, '0')}</div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <button onClick={onOpenShelf} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-[#007BFF] transition-all">
                Launch My Campaign
              </button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials onOpenShelf={onOpenShelf} />

      {/* CTA Bar */}
      <section className="py-24 bg-[#007BFF] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">Ready for instant growth?</h2>
          <button onClick={onOpenShelf} className="bg-white text-[#007BFF] px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl">
            Start the Lead Machine
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialAdsFunnelsPage;