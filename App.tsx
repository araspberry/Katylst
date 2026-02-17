
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiAuditTool from './components/AiAuditTool';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactShelf from './components/ContactShelf';

function App() {
  const [isShelfOpen, setIsShelfOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onOpenShelf={() => setIsShelfOpen(true)} />
      <ContactShelf isOpen={isShelfOpen} onClose={() => setIsShelfOpen(false)} />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-white py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
              Trusted by 450+ industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 md:h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-6 md:h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 md:h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" className="h-6 md:h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" alt="Coca Cola" className="h-6 md:h-8" />
            </div>
          </div>
        </div>

        <Services />
        <AiAuditTool />
        <Pricing />

        {/* Call to Action Section */}
        <section id="contact" className="py-24 bg-[#007BFF] relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to grow your organic traffic?</h2>
            <p className="text-blue-100 text-xl mb-12 leading-relaxed">
              Don't leave your search visibility to chance. Let our experts craft a custom SEO strategy that delivers measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsShelfOpen(true)}
                className="w-full sm:w-auto bg-white text-[#007BFF] px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-slate-50 transition-all"
              >
                Schedule a Strategy Call
              </button>
              <button className="w-full sm:w-auto bg-[#0069d9] text-white border border-[#007BFF] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#005cbf] transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
