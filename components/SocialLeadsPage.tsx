
import React from 'react';

interface SocialLeadsPageProps {
  onOpenShelf: () => void;
}

const SocialLeadsPage: React.FC<SocialLeadsPageProps> = ({ onOpenShelf }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-white">
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white font-black text-xs mb-8 border border-white/20 uppercase tracking-widest">
            <i className="fa-brands fa-facebook-f mr-2"></i>
            High-Velocity Growth
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
            LEADS ON <br /><span className="text-blue-200">DEMAND.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Don't wait months for SEO. Turn on the tap and get high-intent inquiries in your inbox within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-slate-900 rounded-[3rem] p-8 aspect-[9/16] max-w-[340px] mx-auto shadow-2xl border-4 border-slate-800 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl"></div>
                <div className="mt-12 space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF]"></div>
                      <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                   </div>
                   <div className="bg-slate-800 aspect-[4/5] rounded-2xl flex items-center justify-center">
                      <div className="text-center p-6">
                         <div className="text-white font-black text-lg mb-2">Emergency Plumbing?</div>
                         <div className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Get 20% Off Today</div>
                         <div className="mt-4 px-4 py-2 bg-[#007BFF] text-white text-[10px] font-black rounded-lg">Get Quote</div>
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-slate-100">
                   <div className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center">
                      <i className="fa-solid fa-envelope-open-text text-xs"></i>
                   </div>
                   <div className="text-slate-900 font-black text-xs">New Lead: John D.</div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
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
    </div>
  );
};

export default SocialLeadsPage;
