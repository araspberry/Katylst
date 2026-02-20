
import React, { useState, useEffect } from 'react';
import { getSeoAudit } from '../services/geminiService';
import { AuditResult } from '../types';

const AiAuditTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadingMessages = [
    "Connecting to Gemini Intelligence...",
    "Analyzing domain structure...",
    "Evaluating market difficulty...",
    "Calculating local authority...",
    "Compiling growth roadmap..."
  ];

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setLoadingPhase((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
    } else {
      setLoadingPhase(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    let targetUrl = url.trim();
    if (!targetUrl) return;

    // Auto-fix protocol if missing to prevent browser validation errors
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = `https://${targetUrl}`;
    }
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await getSeoAudit(targetUrl, businessType || 'Service Professional');
      setResult(data);
    } catch (err: any) {
      console.error("Audit tool error:", err);
      setError('Analysis failed. Please ensure the URL is valid (e.g., website.com) and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#007BFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20 text-[#007BFF] font-black text-xs mb-6 uppercase tracking-[0.3em]">
            <i className="fa-solid fa-microchip mr-2 animate-pulse"></i>
            Proprietary AI Core
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-indigo-400">SEO Roadmap</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Instantly identify the bottlenecks holding your business back from the #1 spot on Google.
          </p>
        </div>

        <div className="bg-slate-800/40 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
          {!result && !loading && (
            <form onSubmit={handleAudit} className="space-y-8 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Website URL</label>
                  <div className="relative">
                    <i className="fa-solid fa-globe absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"></i>
                    <input
                      type="text"
                      placeholder="mysite.com"
                      required
                      className="w-full bg-slate-900/50 border-2 border-slate-700/50 rounded-2xl px-12 py-5 text-white placeholder:text-slate-600 focus:border-[#007BFF] focus:ring-4 focus:ring-[#007BFF]/10 outline-none transition-all font-medium"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Business Industry</label>
                  <div className="relative">
                    <i className="fa-solid fa-tags absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"></i>
                    <input
                      type="text"
                      placeholder="e.g. Plumbing, HVAC, Roofing"
                      className="w-full bg-slate-900/50 border-2 border-slate-700/50 rounded-2xl px-12 py-5 text-white placeholder:text-slate-600 focus:border-[#007BFF] focus:ring-4 focus:ring-[#007BFF]/10 outline-none transition-all font-medium"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#007BFF] hover:bg-[#0069d9] active:scale-95 text-white font-black py-6 rounded-2xl shadow-xl shadow-[#007BFF]/20 transition-all flex items-center justify-center space-x-3 text-lg"
              >
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <span>Run Free Analysis</span>
              </button>
              <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                Real-time analysis powered by Gemini 3 Flash
              </p>
            </form>
          )}

          {loading && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-500">
              <div className="relative">
                 <div className="w-24 h-24 border-4 border-[#007BFF]/20 border-t-[#007BFF] rounded-full animate-spin"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fa-solid fa-brain text-[#007BFF] text-2xl animate-pulse"></i>
                 </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">{loadingMessages[loadingPhase]}</h3>
                <div className="flex justify-center gap-1.5">
                   {loadingMessages.map((_, i) => (
                      <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === loadingPhase ? 'w-8 bg-[#007BFF]' : 'w-2 bg-slate-700'}`}></div>
                   ))}
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 p-6 bg-red-500/10 border-2 border-red-500/20 rounded-3xl text-red-400 text-sm flex items-center gap-4 animate-in shake duration-500">
              <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
              <div className="flex-grow">
                <p className="font-bold mb-1">Analysis Halted</p>
                <p className="opacity-80">{error}</p>
              </div>
              <button onClick={() => setError(null)} className="font-black text-xs uppercase hover:underline">Dismiss</button>
            </div>
          )}

          {result && (
            <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-white/5 pb-12">
                <div className="text-center md:text-left flex-grow">
                  <div className="text-xs font-black text-[#007BFF] uppercase tracking-[0.3em] mb-2">Audit for</div>
                  <h3 className="text-3xl font-black text-white tracking-tighter mb-4 break-all">{url.toLowerCase().replace(/(^\w+:|^)\/\//, '')}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 font-bold text-sm">
                    <i className="fa-solid fa-check-circle text-green-500"></i>
                    Blueprint Generated
                  </div>
                </div>
                
                {/* Visual Health Score - Adjusted sizing and safety margins */}
                <div className="relative w-48 h-48 flex items-center justify-center group shrink-0">
                  <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full -rotate-90">
                    <circle 
                      cx="80" 
                      cy="80" 
                      r="68" 
                      stroke="currentColor" 
                      strokeWidth="12" 
                      fill="transparent" 
                      className="text-slate-800" 
                    />
                    <circle 
                      cx="80" 
                      cy="80" 
                      r="68" 
                      stroke="currentColor" 
                      strokeWidth="12" 
                      fill="transparent" 
                      strokeDasharray="427.2" 
                      strokeDashoffset={427.2 - (427.2 * result.score) / 100} 
                      className={`${result.score > 70 ? 'text-green-500' : 'text-yellow-500'} transition-all duration-1000 ease-out`}
                    />
                  </svg>
                  <div className="text-center group-hover:scale-110 transition-transform relative z-10">
                    <div className="text-5xl font-black text-white leading-none">{result.score}</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Health Score</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 space-y-6">
                   <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
                      <h4 className="font-black text-white text-lg mb-4 flex items-center">
                        <i className="fa-solid fa-bolt text-[#007BFF] mr-3"></i>
                        AI Overview
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed italic">
                        &quot;{result.overview}&quot;
                      </p>
                   </div>
                   <div className="bg-[#007BFF] p-8 rounded-[2rem] shadow-xl shadow-[#007BFF]/20 group">
                      <h5 className="font-black text-white text-lg mb-2">Want the full report?</h5>
                      <p className="text-blue-100 text-sm mb-6">Let's walk through these results on a 15-min discovery call.</p>
                      <button className="w-full bg-white text-[#007BFF] py-3 rounded-xl font-black text-sm group-hover:bg-blue-50 transition-colors">
                        Book My Deep Dive
                      </button>
                   </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="font-black text-white text-xl mb-8 flex items-center">
                    <i className="fa-solid fa-list-check text-[#007BFF] mr-3"></i>
                    Strategic Action Plan
                  </h4>
                  <div className="space-y-4">
                    {result.strategies.map((strat, idx) => (
                      <div key={idx} className="group flex items-start bg-slate-900/30 hover:bg-slate-900/60 p-6 rounded-2xl border border-white/5 transition-all">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 text-[#007BFF] font-black flex items-center justify-center mr-5 group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                          {idx + 1}
                        </div>
                        <p className="text-slate-300 text-base leading-relaxed">{strat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5">
                 <p className="text-slate-500 text-[10px] font-bold italic uppercase tracking-widest">
                   Proprietary Katylst Intelligence Engine v2.4
                 </p>
                 <button 
                  onClick={() => setResult(null)}
                  className="text-slate-400 hover:text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 group"
                 >
                   <i className="fa-solid fa-rotate-left group-hover:-rotate-90 transition-transform"></i>
                   Start New Audit
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiAuditTool;
