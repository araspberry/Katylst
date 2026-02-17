
import React, { useState } from 'react';
import { getSeoAudit } from '../services/geminiService';
import { AuditResult } from '../types';

const AiAuditTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await getSeoAudit(url, businessType || 'General Business');
      setResult(data);
    } catch (err) {
      setError('Failed to analyze. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#007BFF]/20 text-[#007BFF] font-bold text-sm mb-4 uppercase tracking-widest">
            AI-Powered Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Free SEO Strategy Roadmap</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our proprietary AI analyzes your domain and industry to provide a high-level roadmap for search engine dominance.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleAudit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Website URL</label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-[#007BFF] outline-none transition-all"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Business Type</label>
                <input
                  type="text"
                  placeholder="e.g. SaaS, E-commerce, Local HVAC"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-[#007BFF] outline-none transition-all"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />
              </div>
            </div>
            <button
              disabled={loading}
              className="w-full bg-[#007BFF] hover:bg-[#0069d9] disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#007BFF]/20 transition-all flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin"></i>
                  <span>Analyzing with Gemini...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                  <span>Generate Free Roadmap</span>
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center">
              <i className="fa-solid fa-triangle-exclamation mr-2"></i>
              {error}
            </div>
          )}

          {result && (
            <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center justify-between border-b border-slate-700 pb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Audit Results</h3>
                  <p className="text-slate-400">{url}</p>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-black ${result.score > 70 ? 'text-green-400' : 'text-yellow-400'}`}>
                    {result.score}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">SEO Score</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#007BFF] mb-2 flex items-center">
                  <i className="fa-solid fa-eye mr-2"></i> Overview
                </h4>
                <p className="text-slate-300 leading-relaxed italic">
                  &quot;{result.overview}&quot;
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#007BFF] mb-4 flex items-center">
                  <i className="fa-solid fa-list-check mr-2"></i> Strategic Recommendations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.strategies.map((strat, idx) => (
                    <div key={idx} className="flex items-start bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#007BFF] text-[10px] flex items-center justify-center font-bold mr-3 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-slate-300 text-sm">{strat}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700 text-center">
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors inline-flex items-center space-x-2">
                  <span>Implement This Strategy</span>
                  <i className="fa-solid fa-arrow-right"></i>
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
