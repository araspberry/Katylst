
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#007BFF]/10 text-[#007BFF] font-bold text-sm mb-6 border border-[#007BFF]/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007BFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007BFF]"></span>
              </span>
              Local Lead Generation Pros
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
              Websites + SEO That <br />
              <span className="text-[#007BFF]">Flood Your Phone</span> <br />
              with Local Jobs
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We build high-converting websites and run laser-focused local SEO for plumbers, roofers, HVAC pros, realtors & service businesses — delivering 3–5× more leads in 90 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-[#007BFF] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-[#007BFF]/20 hover:bg-[#0069d9] transition-all transform hover:-translate-y-1">
                View Pricing Plans
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <i className="fa-solid fa-calendar-days text-sm text-[#007BFF]"></i>
                Book Strategy Call
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center items-center">
            {/* Phone Mockup - Made wider: w-80 (20rem) instead of w-72 (18rem) */}
            <div className="relative z-10 w-80 h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-4 ring-white/20">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="absolute inset-0 bg-slate-50 p-4 pt-10 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2 text-center">New Notifications</div>
                
                {/* Lead 1 - Text */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-right duration-500 delay-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#007BFF] text-xs font-bold flex items-center gap-1">
                      <i className="fa-solid fa-comment-dots"></i> SMS
                    </span>
                    <span className="text-slate-400 text-[10px]">Just now</span>
                  </div>
                  <p className="text-slate-800 text-sm font-semibold">"Hi! I need a quote for an emergency leak..."</p>
                  <p className="text-slate-400 text-xs mt-1">From: (555) 012-3456</p>
                </div>

                {/* Lead 2 - Email */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-right duration-500 delay-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                      <i className="fa-solid fa-envelope"></i> EMAIL
                    </span>
                    <span className="text-slate-400 text-[10px]">2m ago</span>
                  </div>
                  <p className="text-slate-800 text-sm font-semibold">New Service Request: Roofing Inspection</p>
                  <p className="text-slate-400 text-xs mt-1">customer@example.com</p>
                </div>

                {/* Lead 3 - Social */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-right duration-500 delay-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sky-500 text-xs font-bold flex items-center gap-1">
                      <i className="fa-brands fa-facebook"></i> FACEBOOK
                    </span>
                    <span className="text-slate-400 text-[10px]">15m ago</span>
                  </div>
                  <p className="text-slate-800 text-sm font-semibold">"Do you serve the downtown area?"</p>
                  <p className="text-slate-400 text-xs mt-1">Messenger Lead</p>
                </div>

                {/* Lead 4 - Google */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-right duration-500 delay-400">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-500 text-xs font-bold flex items-center gap-1">
                      <i className="fa-solid fa-phone"></i> CALL
                    </span>
                    <span className="text-slate-400 text-[10px]">1h ago</span>
                  </div>
                  <p className="text-slate-800 text-sm font-semibold">Missed call from Google Maps Ad</p>
                  <p className="text-slate-400 text-xs mt-1">Local Prospect</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 right-0 md:-right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms] z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Organic Traffic</div>
                  <div className="text-lg font-bold text-slate-900">+312%</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-0 md:-left-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms] z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#007BFF]">
                  <i className="fa-solid fa-crown"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Keyword Rankings</div>
                  <div className="text-lg font-bold text-slate-900">#1 Spot</div>
                </div>
              </div>
            </div>

            {/* Background Circle Decor */}
            <div className="absolute inset-0 bg-[#007BFF]/5 rounded-full scale-125 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
