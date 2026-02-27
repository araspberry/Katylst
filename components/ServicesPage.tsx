
import React from 'react';

interface ServicesPageProps {
  onOpenShelf: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenShelf }) => {
  // Common divider component for consistency
  const Divider = () => (
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>
    </div>
  );

  return (
    <div className="pt-24 animate-in fade-in duration-700 bg-bg">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-grid-white opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs mb-8 border border-accent/20 uppercase tracking-[0.2em]">
            The Katylst Method
          </div>
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold text-ink leading-[1.05] tracking-tighter mb-10 font-serif italic">
            Growth isn't an <span className="text-accent not-italic">accident.</span><br />
            It's engineering.
          </h1>
          <p className="text-xl md:text-2xl text-ink-muted max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-light">
            Most SEO agencies sell "keywords." We sell <span className="text-ink font-bold underline decoration-accent decoration-4 underline-offset-4">booked calendars</span>. We specialize in flooding service businesses with local leads that actually convert.
          </p>
          <button 
            onClick={onOpenShelf}
            className="bg-accent text-bg px-12 py-6 rounded-3xl font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-2xl shadow-accent/30 hover:bg-accent-light hover:-translate-y-1 transition-all active:scale-95"
          >
            Claim Your Service Area
          </button>
        </div>
      </section>

      <Divider />

      {/* Pain Points Section - The Hard Truth */}
      <section className="py-24 bg-surface text-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-6">The Hard Truth</h2>
              <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight tracking-tighter mb-8 font-serif italic">
                Is your phone silent while your competitors are <span className="not-italic text-ink-muted">booked out?</span>
              </h3>
              <div className="space-y-8">
                {[
                  { title: "Invisible Ranking", desc: "If you aren't in the top 3 on Google Maps, you basically don't exist to your customers." },
                  { title: "Leaking Buckets", desc: "A website that doesn't convert leads is just an expensive digital brochure." },
                  { title: "Wasted Ad Spend", desc: "Paying for 'impressions' instead of inquiries is a fast way to go broke." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-soft flex items-center justify-center text-accent shrink-0 border border-border">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-ink-muted leading-relaxed font-sans font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[80px] -z-10"></div>
              
              {/* Compact Empty Calendar Mockup */}
              <div className="w-full max-w-[340px] bg-surface-soft rounded-[2.5rem] border border-border shadow-2xl p-6 relative group overflow-hidden transition-transform hover:scale-[1.02] duration-500">
                <div className="flex items-center justify-between mb-8">
                   <div>
                     <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1">Schedule View</div>
                     <div className="text-lg font-bold text-ink">August 2024</div>
                   </div>
                   <div className="flex gap-2">
                     <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
                       <i className="fa-solid fa-chevron-left text-[10px] text-ink-muted"></i>
                     </div>
                     <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-border">
                       <i className="fa-solid fa-chevron-right text-[10px] text-ink"></i>
                     </div>
                   </div>
                </div>

                {/* Calendar Grid Simulation */}
                <div className="space-y-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                    <div key={day} className="flex items-center gap-4">
                       <div className="w-12 text-[10px] font-bold text-ink-muted uppercase">{day}</div>
                       <div className="flex-grow h-12 bg-surface/50 rounded-xl border border-dashed border-border flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-surface"></div>
                       </div>
                    </div>
                  ))}
                </div>

                {/* Center Warning Overlay */}
                <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000">
                  <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-4 border border-border shadow-inner">
                    <i className="fa-regular fa-calendar-xmark text-ink-muted text-2xl"></i>
                  </div>
                  <div className="text-2xl font-bold text-ink mb-2 leading-none">0 Bookings</div>
                  <div className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">No Leads Found</div>
                  <div className="h-1 w-12 bg-surface-soft rounded-full"></div>
                </div>
                
                {/* Floating "Silent Phone" Indicator */}
                <div className="absolute -bottom-4 -left-4 bg-surface p-4 rounded-2xl border border-border shadow-xl flex items-center gap-3 animate-float-delayed">
                   <i className="fa-solid fa-phone-slash text-ink-muted text-sm"></i>
                   <div className="h-2 w-16 bg-surface-soft rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dives */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {/* Service 1: Web Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent text-3xl mb-8">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter mb-6 font-serif italic">
                  Website Design Built for <br /><span className="text-accent not-italic">Conversion.</span>
                </h3>
                <p className="text-ink-muted text-lg leading-relaxed mb-8 font-sans font-light">
                  Your website shouldn't just look good; it should be your best salesperson. We build lightning-fast, mobile-optimized sites specifically for contractors and service pros.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    90+ PageSpeed Scores
                  </li>
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    High-Conversion Landing Pages
                  </li>
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    Direct Lead Capture Integration
                  </li>
                </ul>
                <button onClick={onOpenShelf} className="text-accent font-bold uppercase tracking-[0.06em] text-[0.9rem] flex items-center gap-2 group active:scale-95">
                  Get a New Site <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-[100px] opacity-30 -z-10 group-hover:opacity-50 transition-opacity"></div>
                
                {/* Desktop Mockup */}
                <div className="bg-surface rounded-3xl border border-border shadow-2xl overflow-hidden relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Browser Bar */}
                  <div className="px-4 py-3 bg-surface-soft border-b border-border flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>
                    </div>
                    <div className="flex-grow mx-4 bg-surface rounded-md border border-border h-5 flex items-center px-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      <div className="h-1.5 w-24 bg-surface-soft rounded-full"></div>
                    </div>
                  </div>
                  {/* Website Hero Preview */}
                  <div className="aspect-video bg-surface p-6 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                       <div className="flex items-center gap-2">
                         <div className="w-6 h-6 bg-accent rounded-lg"></div>
                         <div className="h-3 w-16 bg-surface-soft rounded-full"></div>
                       </div>
                       <div className="flex gap-4">
                         <div className="h-2 w-8 bg-surface-soft rounded-full"></div>
                         <div className="h-2 w-8 bg-surface-soft rounded-full"></div>
                         <div className="h-2 w-8 bg-surface-soft rounded-full"></div>
                       </div>
                    </div>
                    <div className="max-w-[60%] space-y-3">
                      <div className="h-5 w-full bg-surface-soft rounded-full"></div>
                      <div className="h-5 w-3/4 bg-surface-soft rounded-full"></div>
                      <div className="h-2 w-1/2 bg-surface-soft rounded-full pt-4"></div>
                      <div className="h-8 w-24 bg-accent rounded-xl pt-6"></div>
                    </div>
                    {/* Abstract Contractor Image Placeholder */}
                    <div className="absolute right-0 bottom-0 top-12 left-2/3 bg-surface-soft rounded-tl-[3rem] p-4 flex items-center justify-center">
                       <i className="fa-solid fa-hard-hat text-border text-6xl"></i>
                    </div>
                  </div>
                </div>

                {/* Floating Speed Metrics */}
                <div className="absolute -top-10 -right-8 bg-surface p-4 rounded-2xl shadow-xl border border-border animate-float z-20">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                       <svg className="absolute inset-0 w-full h-full -rotate-90">
                         <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-surface-soft" />
                         <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="12.5" className="text-accent" />
                       </svg>
                       <span className="text-[10px] font-bold text-ink">98</span>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-ink-muted uppercase tracking-widest">Page Speed</div>
                      <div className="text-xs font-bold text-accent">EXCELLENT</div>
                    </div>
                  </div>
                </div>

                {/* Lead Captured Overlay */}
                <div className="absolute -bottom-8 -left-8 bg-surface-soft text-ink p-5 rounded-3xl shadow-2xl animate-success z-20">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                        <i className="fa-solid fa-circle-check"></i>
                     </div>
                     <div>
                       <div className="text-[10px] font-bold text-ink-muted uppercase">Conversion Lift</div>
                       <div className="text-xl font-bold text-ink leading-none">+42% Leads</div>
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
              <div className="bg-surface rounded-[3rem] p-4 text-ink shadow-2xl shadow-accent/20 relative group overflow-hidden">
                 <div className="absolute inset-0 bg-grid-white opacity-[0.02]"></div>
                 {/* Google Search Simulation */}
                 <div className="bg-surface-soft rounded-[2rem] p-8 border border-border relative z-10 transition-transform duration-500 group-hover:scale-[1.01]">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center">
                         <i className="fa-brands fa-google text-accent text-xl"></i>
                       </div>
                       <div className="flex-grow bg-surface rounded-full px-6 py-2.5 flex items-center border border-border">
                          <span className="text-xs font-medium text-ink-muted">Best HVAC Alpharetta GA</span>
                       </div>
                    </div>
                    {/* Search Results */}
                    <div className="space-y-8">
                       <div className="animate-in fade-in slide-in-from-left duration-500">
                          <div className="flex items-center gap-2 mb-1.5">
                             <div className="px-1.5 py-0.5 rounded-sm bg-accent text-[8px] font-bold text-bg">AD</div>
                             <div className="h-2 w-32 bg-surface rounded-full"></div>
                          </div>
                          <div className="h-4 w-3/4 bg-surface rounded-full mb-3"></div>
                          <div className="h-2 w-1/2 bg-surface-soft rounded-full"></div>
                       </div>
                       {/* THE WINNING RESULT */}
                       <div className="p-6 bg-accent/10 rounded-2xl border border-accent/30 relative animate-in fade-in slide-in-from-right duration-700 delay-300">
                          <div className="absolute -top-3 -right-3 px-3 py-1 bg-accent text-bg text-[10px] font-bold rounded-lg shadow-lg">#1 RANKED</div>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-4 h-4 rounded-full bg-accent/60"></div>
                             <div className="h-2 w-48 bg-accent/20 rounded-full"></div>
                          </div>
                          <div className="h-5 w-5/6 bg-ink rounded-full mb-3"></div>
                          <div className="h-2 w-2/3 bg-ink/20 rounded-full"></div>
                       </div>
                       <div className="opacity-40">
                          <div className="h-2 w-32 bg-surface rounded-full mb-3"></div>
                          <div className="h-4 w-3/4 bg-surface rounded-full mb-3"></div>
                          <div className="h-2 w-1/2 bg-surface-soft rounded-full"></div>
                       </div>
                    </div>
                 </div>

                 {/* Floating Map Marker Badges */}
                 <div className="absolute top-1/2 -right-12 lg:-right-20 transform -translate-y-1/2 flex flex-col gap-4 animate-float z-20">
                   {[1, 2, 3].map(i => (
                      <div key={i} className={`bg-surface p-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-border transition-all hover:scale-110 ${i === 2 ? 'translate-x-4' : ''}`}>
                         <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                           <i className="fa-solid fa-location-dot text-sm"></i>
                         </div>
                         <div className="pr-4">
                           <div className="h-1.5 w-12 bg-surface-soft rounded-full mb-1"></div>
                           <div className="flex gap-0.5">
                             {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star text-[6px] text-accent"></i>)}
                           </div>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
              <div>
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent text-3xl mb-8">
                  <i className="fa-solid fa-magnifying-glass-location"></i>
                </div>
                <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter mb-6 font-serif italic">
                  SEO That Dominates <br /><span className="text-accent not-italic">Your Local Zip Code.</span>
                </h3>
                <p className="text-ink-muted text-lg leading-relaxed mb-8 font-sans font-light">
                  Be the only option they see when the pipe bursts at 2 AM. Our SEO strategy focuses on long-term organic authority and Google Maps dominance.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    Google Maps Pack Domination
                  </li>
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    Local Citation Building
                  </li>
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    Keyword Authority Strategy
                  </li>
                </ul>
                <button onClick={onOpenShelf} className="text-accent font-bold uppercase tracking-[0.06em] text-[0.9rem] flex items-center gap-2 group active:scale-95">
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
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent text-3xl mb-8">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink tracking-tighter mb-6 font-serif italic">
                  Social Ads: <br /><span className="text-accent not-italic">Instant Lead Injection.</span>
                </h3>
                <p className="text-ink-muted text-lg leading-relaxed mb-8 font-sans font-light">
                  SEO is the marathon; Social Ads are the sprint. We launch hyper-targeted Facebook and Instagram campaigns that put your offer in front of homeowners exactly when they need you.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    Hyper-Local Targeting
                  </li>
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    Lead Magnet Creation
                  </li>
                  <li className="flex items-center gap-3 font-bold text-ink">
                    <i className="fa-solid fa-circle-check text-accent"></i>
                    Daily ROI Monitoring
                  </li>
                </ul>
                <button onClick={onOpenShelf} className="text-accent font-bold uppercase tracking-[0.06em] text-[0.9rem] flex items-center gap-2 group active:scale-95">
                  Start Sprints <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] opacity-40 -z-10"></div>
                
                {/* Detailed Mockup Container */}
                <div className="relative">
                  {/* Social Media Feed Mockup */}
                  <div className="bg-surface rounded-[2.5rem] border border-border shadow-2xl overflow-hidden max-w-sm mx-auto transform -rotate-2 group hover:rotate-0 transition-all duration-500">
                    {/* App Header */}
                    <div className="px-5 py-4 flex items-center justify-between bg-surface border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-accent-blue flex items-center justify-center text-[10px] text-bg font-bold">K</div>
                        <div className="text-[11px] font-bold text-ink tracking-tight">Your Business Name</div>
                      </div>
                      <i className="fa-solid fa-ellipsis text-ink-muted/30 text-xs"></i>
                    </div>
                    {/* Sponsored Tag */}
                    <div className="px-5 py-1.5 bg-surface-soft text-[9px] font-bold text-ink-muted uppercase tracking-widest border-b border-border">
                      Sponsored • Service Area: Dallas, TX
                    </div>
                    {/* Ad Creative Area */}
                    <div className="bg-bg aspect-square relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg/80"></div>
                      <div className="text-center z-10 px-8">
                        <div className="text-ink font-bold text-2xl leading-none mb-2 drop-shadow-lg font-serif italic">FREE Emergency Inspection</div>
                        <div className="text-accent text-xs font-bold uppercase tracking-widest">Plumbing • Roofing • HVAC</div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex justify-between items-center bg-surface/10 backdrop-blur-md rounded-xl p-3 border border-border/20">
                          <div className="text-[10px] text-ink font-bold">Limited Slots Remaining</div>
                          <div className="px-3 py-1 bg-accent text-bg text-[10px] font-bold rounded-lg uppercase tracking-widest">Apply Now</div>
                        </div>
                      </div>
                    </div>
                    {/* Engagement Bar */}
                    <div className="p-4 flex items-center gap-4 border-b border-border">
                      <i className="fa-regular fa-heart text-ink-muted/30 text-lg"></i>
                      <i className="fa-regular fa-comment text-ink-muted/30 text-lg"></i>
                      <i className="fa-regular fa-paper-plane text-ink-muted/30 text-lg"></i>
                    </div>
                    <div className="px-4 py-3 pb-6">
                      <div className="h-2 w-2/3 bg-surface-soft rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-surface-soft rounded-full"></div>
                    </div>
                  </div>

                  {/* Floating Performance Analytics Overlay */}
                  <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-surface p-6 rounded-3xl shadow-2xl border border-border animate-float">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                        <i className="fa-solid fa-chart-line text-xl"></i>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-ink-muted uppercase tracking-[0.2em]">Daily Output</div>
                        <div className="text-xl font-bold text-ink tracking-tight">+14 Leads Today</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div>
                         <div className="text-[9px] font-bold text-ink-muted/30 uppercase mb-1">CPL (Avg)</div>
                         <div className="text-sm font-bold text-accent font-serif italic">$12.42</div>
                       </div>
                       <div>
                         <div className="text-[9px] font-bold text-ink-muted/30 uppercase mb-1">ROI Status</div>
                         <div className="text-sm font-bold text-accent">EXCEPTIONAL</div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Floating Notification */}
                  <div className="absolute top-10 -left-10 lg:-left-20 bg-surface text-ink p-4 rounded-2xl shadow-2xl border border-border animate-float-delayed flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
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

      {/* CTA Section - Balanced for Consistency */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-ink/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink mb-8 font-serif italic">
            Stop guessing.<br /><span className="not-italic">Start growing.</span>
          </h2>
          
          <p className="text-ink text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-sans font-light opacity-90">
            We only partner with one business per service area. Don't let your competitor be the one who calls us first.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenShelf}
              className="w-full sm:w-auto bg-surface text-ink px-10 py-5 rounded-full font-bold text-[0.9rem] uppercase tracking-[0.06em] shadow-xl hover:bg-surface-soft transition-all active:scale-95 border border-accent-blue/50 ring-4 ring-accent-blue/10"
            >
              Schedule a Strategy Call
            </button>
            <button 
              onClick={onOpenShelf}
              className="w-full sm:w-auto bg-surface text-ink border border-ink/10 px-10 py-5 rounded-full font-bold text-[0.9rem] uppercase tracking-[0.06em] hover:bg-surface-soft transition-all active:scale-95"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
