
import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'services' | 'pricing') => void;
  onOpenShelf: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenShelf }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-accent-blue/5 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 border border-accent/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Local Lead Generation Pros
            </div>
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-ink leading-[1.1] mb-8 tracking-tight font-serif italic">
              Websites + SEO That <br />
              <span className="text-accent not-italic">Flood Your Phone</span> <br />
              with Local Jobs
            </h1>
            <p className="text-lg md:text-xl text-ink-muted mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-light">
              We build high-converting websites and run laser-focused local SEO for plumbers, roofers, HVAC pros, realtors & service businesses — delivering 3–5× more leads in 90 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto !bg-accent !text-bg px-10 py-5 rounded-full font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-xl border-2 border-transparent hover:!border-accent-light transition-all transform hover:-translate-y-1 active:scale-95"
              >
                View Pricing Plans
              </button>
              <button 
                onClick={onOpenShelf}
                className="w-full sm:w-auto bg-transparent !text-ink px-10 py-5 rounded-full font-bold text-[0.9rem] uppercase tracking-[0.06em] border-2 !border-ink hover:!border-accent hover:!text-accent transition-all flex items-center justify-center gap-2 active:scale-95 group"
              >
                <i className="fa-solid fa-calendar-days text-sm !text-ink group-hover:!text-accent transition-colors"></i>
                Book Strategy Call
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center items-center">
            {/* Phone Mockup */}
            <div className="relative z-10 w-80 h-[580px] bg-surface rounded-[3rem] border-[8px] border-surface-soft shadow-2xl overflow-hidden ring-4 ring-ink/10">
              {/* Notch - Fixed Centering */}
              <div className="absolute top-0 inset-x-0 mx-auto w-32 h-6 bg-surface-soft rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="absolute inset-0 bg-bg pt-10 flex flex-col">
                <div className="text-ink-muted text-[10px] font-bold uppercase tracking-wider mb-4 text-center sticky top-10 bg-bg/80 backdrop-blur-sm py-2 z-10">Live Lead Stream</div>
                
                <div className="flex-grow overflow-hidden relative">
                  <div className="animate-ticker-vertical flex flex-col gap-4 p-4">
                    {[
                      { type: 'SMS', icon: 'fa-comment-dots', color: 'text-accent', time: 'Just now', title: '"Hi! I need a quote for an emergency leak..."', sub: 'From: (555) 012-3456' },
                      { type: 'EMAIL', icon: 'fa-envelope', color: 'text-accent', time: '2m ago', title: 'New Service Request: Roofing Inspection', sub: 'customer@example.com' },
                      { type: 'FACEBOOK', icon: 'fa-brands fa-facebook', color: 'text-accent-blue', time: '15m ago', title: '"Do you serve the downtown area?"', sub: 'Messenger Lead' },
                      { type: 'CALL', icon: 'fa-phone', color: 'text-accent', time: '1h ago', title: 'Missed call from Google Maps Ad', sub: 'Local Prospect' },
                      { type: 'INSTAGRAM', icon: 'fa-brands fa-instagram', color: 'text-pink-500', time: '3h ago', title: '"Love your portfolio! Are you free Friday?"', sub: 'Direct Message' },
                      { type: 'WEB', icon: 'fa-globe', color: 'text-accent', time: '5h ago', title: 'New Form Submission: Kitchen Remodel', sub: 'Website Lead' },
                      { type: 'YELP', icon: 'fa-brands fa-yelp', color: 'text-red-500', time: '8h ago', title: 'New Inquiry: Bathroom Tile Repair', sub: 'Yelp Lead' },
                      { type: 'GOOGLE', icon: 'fa-brands fa-google', color: 'text-accent-blue', time: '12h ago', title: 'New Lead from Business Profile', sub: 'Search Lead' },
                    ].concat([
                      { type: 'SMS', icon: 'fa-comment-dots', color: 'text-accent', time: 'Just now', title: '"Hi! I need a quote for an emergency leak..."', sub: 'From: (555) 012-3456' },
                      { type: 'EMAIL', icon: 'fa-envelope', color: 'text-accent', time: '2m ago', title: 'New Service Request: Roofing Inspection', sub: 'customer@example.com' },
                      { type: 'FACEBOOK', icon: 'fa-brands fa-facebook', color: 'text-accent-blue', time: '15m ago', title: '"Do you serve the downtown area?"', sub: 'Messenger Lead' },
                      { type: 'CALL', icon: 'fa-phone', color: 'text-accent', time: '1h ago', title: 'Missed call from Google Maps Ad', sub: 'Local Prospect' },
                      { type: 'INSTAGRAM', icon: 'fa-brands fa-instagram', color: 'text-pink-500', time: '3h ago', title: '"Love your portfolio! Are you free Friday?"', sub: 'Direct Message' },
                      { type: 'WEB', icon: 'fa-globe', color: 'text-accent', time: '5h ago', title: 'New Form Submission: Kitchen Remodel', sub: 'Website Lead' },
                      { type: 'YELP', icon: 'fa-brands fa-yelp', color: 'text-red-500', time: '8h ago', title: 'New Inquiry: Bathroom Tile Repair', sub: 'Yelp Lead' },
                      { type: 'GOOGLE', icon: 'fa-brands fa-google', color: 'text-accent-blue', time: '12h ago', title: 'New Lead from Business Profile', sub: 'Search Lead' },
                    ]).map((lead, idx) => (
                      <div key={idx} className="bg-surface p-4 rounded-2xl shadow-sm border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`${lead.color} text-[10px] font-bold flex items-center gap-1 uppercase tracking-tight`}>
                            <i className={`fa-solid ${lead.icon}`}></i> {lead.type}
                          </span>
                          <span className="text-ink-muted text-[9px]">{lead.time}</span>
                        </div>
                        <p className="text-ink text-xs font-semibold leading-tight">{lead.title}</p>
                        <p className="text-ink-muted text-[10px] mt-1">{lead.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 right-0 md:-right-10 bg-surface p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms] z-20 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div>
                  <div className="text-xs text-ink-muted font-bold uppercase tracking-tighter">Organic Traffic</div>
                  <div className="text-lg font-bold text-ink">+312%</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-0 md:-left-10 bg-surface p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms] z-20 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue">
                  <i className="fa-solid fa-crown"></i>
                </div>
                <div>
                  <div className="text-xs text-ink-muted font-bold uppercase tracking-tighter">Keyword Rankings</div>
                  <div className="text-lg font-bold text-ink">#1 Spot</div>
                </div>
              </div>
            </div>

            {/* Background Circle Decor */}
            <div className="absolute inset-0 bg-accent/5 rounded-full scale-125 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
