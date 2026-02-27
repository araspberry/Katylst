
import React, { useState, useEffect } from 'react';
import { getSeoAudit } from '../services/geminiService';
import { AuditResult } from '../types';

const AiAuditTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [businessType] = useState('');
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
    <section id="audit" className="py-24 bg-bg text-ink overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-12 text-left">
            <div className="text-accent font-bold text-xs mb-6 uppercase tracking-[0.2em]">
              Free SEO Roadmap
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-8 tracking-tighter leading-[1.1]">
              See exactly how your <br />
              <span className="text-accent font-serif italic">SEO stacks up.</span>
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed font-sans font-light">
              Enter your website URL below and our analyzer will scan your site and deliver an instant SEO health report with actionable recommendations.
            </p>
          </div>

          <div className="relative">
            {!result && !loading && (
              <form onSubmit={handleAudit} className="animate-in fade-in duration-500">
                <div className="flex flex-col md:flex-row items-stretch gap-0 rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <div className="flex-grow relative bg-surface/30">
                    <input
                      type="text"
                      placeholder="https://yourwebsite.com"
                      required
                      className="w-full bg-transparent px-8 py-6 text-ink placeholder:text-ink-muted/50 outline-none transition-all font-medium text-lg"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="!bg-accent hover:!bg-accent-light active:scale-95 text-bg font-bold px-8 py-6 transition-all flex items-center justify-center space-x-3 text-sm uppercase tracking-[0.1em] whitespace-nowrap"
                  >
                    <span>Analyze My Site</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            )}

          {loading && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-500 bg-surface/20 rounded-2xl border border-border/10">
              <div className="relative">
                 <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-ink">{loadingMessages[loadingPhase]}</h3>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 p-6 bg-red-500/10 border-2 border-red-500/20 rounded-2xl text-red-400 text-sm flex items-center gap-4 animate-in shake duration-500">
              <i className="fa-solid fa-triangle-exclamation text-xl"></i>
              <div className="flex-grow">
                <p className="opacity-80">{error}</p>
              </div>
              <button onClick={() => setError(null)} className="font-black text-xs uppercase hover:underline">Dismiss</button>
            </div>
          )}

          {result && (
            <div className="bg-surface/40 backdrop-blur-2xl border border-border/10 p-8 md:p-12 rounded-[3rem] shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-border/10 pb-12">
                <div className="text-center md:text-left flex-grow">
                  <div className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-2">Audit for</div>
                  <h3 className="text-3xl font-bold text-ink tracking-tighter mb-4 break-all italic">{url.toLowerCase().replace(/(^\w+:|^)\/\//, '')}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-ink-muted font-bold text-sm">
                    <i className="fa-solid fa-check-circle text-accent"></i>
                    Blueprint Generated
                  </div>
                </div>
                
                <div className="relative w-48 h-48 flex items-center justify-center group shrink-0">
                  <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="80" cy="80" r="68" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-surface" />
                    <circle 
                      cx="80" cy="80" r="68" stroke="currentColor" strokeWidth="12" fill="transparent" 
                      strokeDasharray="427.2" 
                      strokeDashoffset={427.2 - (427.2 * result.score) / 100} 
                      className={`${result.score > 70 ? 'text-accent' : 'text-accent-blue'} transition-all duration-1000 ease-out`}
                    />
                  </svg>
                  <div className="text-center group-hover:scale-110 transition-transform relative z-10">
                    <div className="text-5xl font-bold text-ink leading-none">{result.score}</div>
                    <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mt-1">Health Score</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <div className="lg:col-span-1 space-y-6">
                   <div className="bg-surface/50 p-8 rounded-[2rem] border border-border/10">
                      <h4 className="font-bold text-ink text-lg mb-4 flex items-center">
                        <i className="fa-solid fa-bolt text-accent mr-3"></i>
                        AI Overview
                      </h4>
                      <p className="text-ink-muted text-sm leading-relaxed italic font-sans font-light">
                        &quot;{result.overview}&quot;
                      </p>
                   </div>
                   <div className="bg-accent p-8 rounded-[2rem] shadow-xl shadow-accent/20 group text-bg">
                      <h5 className="font-bold text-lg mb-2">Want the full report?</h5>
                      <p className="text-bg/80 text-sm mb-6">Let's walk through these results on a 15-min discovery call.</p>
                      <button className="w-full bg-bg text-accent py-3 rounded-xl font-bold text-sm group-hover:bg-surface transition-colors uppercase tracking-[0.06em]">
                        Book My Deep Dive
                      </button>
                   </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="font-bold text-ink text-xl mb-8 flex items-center">
                    <i className="fa-solid fa-list-check text-accent mr-3"></i>
                    Strategic Action Plan
                  </h4>
                  <div className="space-y-4">
                    {result.strategies.map((strat, idx) => (
                      <div key={idx} className="group flex items-start bg-surface/30 hover:bg-surface/60 p-6 rounded-2xl border border-border/10 transition-all">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-surface-soft text-accent font-bold flex items-center justify-center mr-5 group-hover:bg-accent group-hover:text-bg transition-all">
                          {idx + 1}
                        </div>
                        <p className="text-ink/80 text-base leading-relaxed font-sans font-light">{strat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/10">
                 <p className="text-ink-muted text-[10px] font-bold italic uppercase tracking-widest">
                   Proprietary Katylst Intelligence Engine v2.4
                 </p>
                 <button 
                  onClick={() => setResult(null)}
                  className="text-ink-muted hover:text-ink font-bold text-xs uppercase tracking-widest flex items-center gap-2 group"
                 >
                   <i className="fa-solid fa-rotate-left group-hover:-rotate-90 transition-transform"></i>
                   Start New Audit
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);
};

export default AiAuditTool;
