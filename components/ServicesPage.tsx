
import React from 'react';

interface ServicesPageProps {
  onOpenShelf: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenShelf }) => {
  // Common divider component for consistency
  const Divider = () => (
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </div>
  );

  return (
    <div className="pt-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-grid-slate-100 opacity-40"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[#007BFF] font-black text-xs mb-8 border border-blue-100 uppercase tracking-widest">
            The Katylst Method
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-10">
            Growth isn't an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-indigo-600">accident.</span><br />
            It's engineering.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Most SEO agencies sell "keywords." We sell <span className="text-slate-900 font-bold underline decoration-[#007BFF] decoration-4 underline-offset-4">booked calendars</span>. We specialize in flooding service businesses with local leads that actually convert.
          </p>
          <button 
            onClick={onOpenShelf}
            className="bg-[#007BFF] text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl shadow-[#007BFF]/30 hover:bg-[#0069d9] hover:-translate-y-1 transition-all active:scale-95"
          >
            Claim Your Service Area
          </button>
        </div>
      </section>

      <Divider />

      {/* Pain Points Section - The Hard Truth */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <h2 className="text-sm font-black text-[#007BFF] uppercase tracking-[0.3em] mb-6">The Hard Truth</h2>
              <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-8">
                Is your phone silent while your competitors are <span className="italic text-slate-400">booked out?</span>
              </h3>
              <div className="space-y-8">
                {[
                  { title: "Invisible Ranking", desc: "If you aren't in the top 3 on Google Maps, you basically don't exist to your customers." },
                  { title: "Leaking Buckets", desc: "A website that doesn't convert leads is just an expensive digital brochure." },
                  { title: "Wasted Ad Spend", desc: "Paying for 'impressions' instead of inquiries is a fast way to go broke." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-[#007BFF] shrink-0 border border-slate-700">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#007BFF]/10 rounded-full blur-[80px] -z-10"></div>
              
              {/* Compact Empty Calendar Mockup */}
              <div className="w-full max-w-[340px] bg-slate-800 rounded-[2.5rem] border border-slate-700 shadow-2xl p-6 relative group overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                <div className="flex items-center justify-between mb-8">
                   <div>
                     <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Schedule View</div>
                     <div className="text-lg font-black text-white">August 2024</div>
                   </div>
                   <div className="flex gap-2">
                     <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                       <i className="fa-solid fa-chevron-left text-[10px] text-slate-500"></i>
                     </div>
                     <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center border border-slate-600">
                       <i className="fa-solid fa-chevron-right text-[10px] text-white"></i>
                     </div>
                   </div>
                </div>

                {/* Calendar Grid Simulation */}
                <div className="space-y-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                    <div key={day} className="flex items-center gap-4">
                       <div className="w-12 text-[10px] font-bold text-slate-500 uppercase">{day}</div>
                       <div className="flex-grow h-12 bg-slate-900/50 rounded-xl border border-dashed border-slate-700 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                       </div>
                    </div>
                  ))}
                </div>

                {/* Center Warning Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 border border-slate-700 shadow-inner">
                    <i className="fa-regular fa-calendar-xmark text-slate-500 text-2xl"></i>
                  </div>
                  <div className="text-2xl font-black text-white mb-2 leading-none">0 Bookings</div>
                  <div className="text-[10px] font-black text-[#007BFF] uppercase tracking-[0.2em] mb-4">No Leads Found</div>
                  <div className="h-1 w-12 bg-slate-700 rounded-full"></div>
                </div>
                
                {/* Floating "Silent Phone" Indicator */}
                <div className="absolute -bottom-4 -left-4 bg-slate-700 p-4 rounded-2xl border border-slate-600 shadow-xl flex items-center gap-3 animate-float-delayed">
                   <i className="fa-solid fa-phone-slash text-slate-500 text-sm"></i>
                   <div className="h-2 w-16 bg-slate-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dives */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {/* Service 1: Web Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-[#007BFF] text-3xl mb-8">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                  Website Design Built for <br /><span className="text-[#007BFF]">Conversion.</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Your website shouldn't just look good; it should be your best salesperson. We build lightning-fast, mobile-optimized sites specifically for contractors and service pros.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    90+ PageSpeed Scores
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    High-Conversion Landing Pages
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    Direct Lead Capture Integration
                  </li>
                </ul>
                <button onClick={onOpenShelf} className="text-[#007BFF] font-black uppercase tracking-widest flex items-center gap-2 group">
                  Get a New Site <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-[100px] opacity-30 -z-10 group-hover:opacity-50 transition-opacity"></div>
                
                {/* Desktop Mockup */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Browser Bar */}
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-grow mx-4 bg-white rounded-md border border-slate-200 h-5 flex items-center px-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      <div className="h-1.5 w-24 bg-slate-100 rounded-full"></div>
                    </div>
                  </div>
                  {/* Website Hero Preview */}
                  <div className="aspect-video bg-white p-6 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                       <div className="flex items-center gap-2">
                         <div className="w-6 h-6 bg-[#007BFF] rounded-lg"></div>
                         <div className="h-3 w-16 bg-slate-100 rounded-full"></div>
                       </div>
                       <div className="flex gap-4">
                         <div className="h-2 w-8 bg-slate-50 rounded-full"></div>
                         <div className="h-2 w-8 bg-slate-50 rounded-full"></div>
                         <div className="h-2 w-8 bg-slate-50 rounded-full"></div>
                       </div>
                    </div>
                    <div className="max-w-[60%] space-y-3">
                      <div className="h-5 w-full bg-slate-100 rounded-full"></div>
                      <div className="h-5 w-3/4 bg-slate-100 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-slate-50 rounded-full pt-4"></div>
                      <div className="h-8 w-24 bg-[#007BFF] rounded-xl pt-6"></div>
                    </div>
                    {/* Abstract Contractor Image Placeholder */}
                    <div className="absolute right-0 bottom-0 top-12 left-2/3 bg-slate-50 rounded-tl-[3rem] p-4 flex items-center justify-center">
                       <i className="fa-solid fa-hard-hat text-slate-100 text-6xl"></i>
                    </div>
                  </div>
                </div>

                {/* Floating Speed Metrics */}
                <div className="absolute -top-10 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-float z-20">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                       <svg className="absolute inset-0 w-full h-full -rotate-90">
                         <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-100" />
                         <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="12.5" className="text-green-500" />
                       </svg>
                       <span className="text-[10px] font-black text-slate-900">98</span>
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Page Speed</div>
                      <div className="text-xs font-bold text-slate-900">EXCELLENT</div>
                    </div>
                  </div>
                </div>

                {/* Lead Captured Overlay */}
                <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-5 rounded-3xl shadow-2xl animate-success z-20">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500">
                        <i className="fa-solid fa-circle-check"></i>
                     </div>
                     <div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase">Conversion Lift</div>
                       <div className="text-xl font-black text-white leading-none">+42% Leads</div>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="py-8">
              <Divider />
            </div>

            {/* Service 2: SEO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="bg-slate-900 rounded-[3rem] p-4 text-white shadow-2xl shadow-blue-900/20 relative group overflow-hidden">
                 <div className="absolute inset-0 bg-grid-slate-100 opacity-5"></div>
                 {/* Google Search Simulation */}
                 <div className="bg-slate-800 rounded-[2rem] p-8 border border-slate-700 relative z-10 transition-transform duration-500 group-hover:scale-[1.01]">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                         <i className="fa-brands fa-google text-[#007BFF] text-xl"></i>
                       </div>
                       <div className="flex-grow bg-slate-700 rounded-full px-6 py-2.5 flex items-center border border-slate-600">
                          <span className="text-xs font-medium text-slate-400">Best HVAC Alpharetta GA</span>
                       </div>
                    </div>
                    {/* Search Results */}
                    <div className="space-y-8">
                       <div className="animate-in fade-in slide-in-from-left duration-500">
                          <div className="flex items-center gap-2 mb-1.5">
                             <div className="px-1.5 py-0.5 rounded-sm bg-blue-500 text-[8px] font-black text-white">AD</div>
                             <div className="h-2 w-32 bg-slate-600 rounded-full"></div>
                          </div>
                          <div className="h-4 w-3/4 bg-slate-600 rounded-full mb-3"></div>
                          <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                       </div>
                       {/* THE WINNING RESULT */}
                       <div className="p-6 bg-[#007BFF]/10 rounded-2xl border border-[#007BFF]/30 relative animate-in fade-in slide-in-from-right duration-700 delay-300">
                          <div className="absolute -top-3 -right-3 px-3 py-1 bg-green-500 text-white text-[10px] font-black rounded-lg shadow-lg">#1 RANKED</div>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                             <div className="h-2 w-48 bg-blue-300/30 rounded-full"></div>
                          </div>
                          <div className="h-5 w-5/6 bg-white rounded-full mb-3"></div>
                          <div className="h-2 w-2/3 bg-blue-100/20 rounded-full"></div>
                       </div>
                       <div className="opacity-40">
                          <div className="h-2 w-32 bg-slate-600 rounded-full mb-3"></div>
                          <div className="h-4 w-3/4 bg-slate-600 rounded-full mb-3"></div>
                          <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                       </div>
                    </div>
                 </div>

                 {/* Floating Map Marker Badges */}
                 <div className="absolute top-1/2 -right-12 lg:-right-20 transform -translate-y-1/2 flex flex-col gap-4 animate-float z-20">
                   {[1, 2, 3].map(i => (
                      <div key={i} className={`bg-white p-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-100 transition-all hover:scale-110 ${i === 2 ? 'translate-x-4' : ''}`}>
                         <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                           <i className="fa-solid fa-location-dot text-sm"></i>
                         </div>
                         <div className="pr-4">
                           <div className="h-1.5 w-12 bg-slate-100 rounded-full mb-1"></div>
                           <div className="flex gap-0.5">
                             {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star text-[6px] text-yellow-400"></i>)}
                           </div>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
              <div>
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-[#007BFF] text-3xl mb-8">
                  <i className="fa-solid fa-magnifying-glass-location"></i>
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                  SEO That Dominates <br /><span className="text-[#007BFF]">Your Local Zip Code.</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Be the only option they see when the pipe bursts at 2 AM. Our SEO strategy focuses on long-term organic authority and Google Maps dominance.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    Google Maps Pack Domination
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    Local Citation Building
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    Keyword Authority Strategy
                  </li>
                </ul>
                <button onClick={onOpenShelf} className="text-[#007BFF] font-black uppercase tracking-widest flex items-center gap-2 group">
                  Dominate Search <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>

            <div className="py-8">
              <Divider />
            </div>

            {/* Service 3: Social Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-[#007BFF] text-3xl mb-8">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                  Social Ads: <br /><span className="text-[#007BFF]">Instant Lead Injection.</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  SEO is the marathon; Social Ads are the sprint. We launch hyper-targeted Facebook and Instagram campaigns that put your offer in front of homeowners exactly when they need you.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    Hyper-Local Targeting
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    Lead Magnet Creation
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <i className="fa-solid fa-circle-check text-[#007BFF]"></i>
                    Daily ROI Monitoring
                  </li>
                </ul>
                <button onClick={onOpenShelf} className="text-[#007BFF] font-black uppercase tracking-widest flex items-center gap-2 group">
                  Start Sprints <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-[80px] opacity-40 -z-10"></div>
                
                {/* Detailed Mockup Container */}
                <div className="relative">
                  {/* Social Media Feed Mockup */}
                  <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden max-w-sm mx-auto transform -rotate-2 group hover:rotate-0 transition-all duration-500">
                    {/* App Header */}
                    <div className="px-5 py-4 flex items-center justify-between bg-white border-b border-slate-50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 flex items-center justify-center text-[10px] text-white font-bold">K</div>
                        <div className="text-[11px] font-black text-slate-900 tracking-tight">Your Business Name</div>
                      </div>
                      <i className="fa-solid fa-ellipsis text-slate-300 text-xs"></i>
                    </div>
                    {/* Sponsored Tag */}
                    <div className="px-5 py-1.5 bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                      Sponsored • Service Area: Dallas, TX
                    </div>
                    {/* Ad Creative Area */}
                    <div className="bg-slate-900 aspect-square relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80"></div>
                      <div className="text-center z-10 px-8">
                        <div className="text-white font-black text-2xl leading-none mb-2 drop-shadow-lg">FREE Emergency Inspection</div>
                        <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Plumbing • Roofing • HVAC</div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                          <div className="text-[10px] text-white font-bold">Limited Slots Remaining</div>
                          <div className="px-3 py-1 bg-[#007BFF] text-white text-[10px] font-black rounded-lg">Apply Now</div>
                        </div>
                      </div>
                    </div>
                    {/* Engagement Bar */}
                    <div className="p-4 flex items-center gap-4 border-b border-slate-50">
                      <i className="fa-regular fa-heart text-slate-300 text-lg"></i>
                      <i className="fa-regular fa-comment text-slate-300 text-lg"></i>
                      <i className="fa-regular fa-paper-plane text-slate-300 text-lg"></i>
                    </div>
                    <div className="px-4 py-3 pb-6">
                      <div className="h-2 w-2/3 bg-slate-100 rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-slate-50 rounded-full"></div>
                    </div>
                  </div>

                  {/* Floating Performance Analytics Overlay */}
                  <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-float">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500">
                        <i className="fa-solid fa-chart-line text-xl"></i>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Daily Output</div>
                        <div className="text-xl font-black text-slate-900 tracking-tight">+14 Leads Today</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div>
                         <div className="text-[9px] font-black text-slate-300 uppercase mb-1">CPL (Avg)</div>
                         <div className="text-sm font-black text-[#007BFF]">$12.42</div>
                       </div>
                       <div>
                         <div className="text-[9px] font-black text-slate-300 uppercase mb-1">ROI Status</div>
                         <div className="text-sm font-black text-green-500">EXCEPTIONAL</div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Floating Notification */}
                  <div className="absolute top-10 -left-10 lg:-left-20 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 animate-float-delayed flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] flex items-center justify-center">
                      <i className="fa-solid fa-comment-dots text-xs"></i>
                    </div>
                    <div className="text-[11px] font-bold">New Messenger Lead: "Roof Leak Dallas"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA Section */}
      <section className="py-24 bg-[#007BFF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Stop guessing.<br />Start <span className="underline decoration-white/30 decoration-8 underline-offset-8">growing.</span>
          </h2>
          <p className="text-blue-100 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            We only partner with one business per service area. Don't let your competitor be the one who calls us first.
          </p>
          <button 
            onClick={onOpenShelf}
            className="bg-white text-[#007BFF] px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-50 transition-all transform hover:scale-105"
          >
            Check Availability
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
