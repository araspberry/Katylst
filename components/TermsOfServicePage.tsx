
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-bg animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold text-ink tracking-tighter mb-12 font-serif italic">Terms of Service.</h1>
        <div className="prose prose-stone max-w-none space-y-8 text-ink-muted leading-relaxed font-sans font-light">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink mb-4 font-serif italic">1. Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink mb-4 font-serif italic">2. Services</h2>
            <p>Katylst provides digital marketing, web design, and SEO services. While we strive for excellence, we cannot guarantee specific rankings or lead volumes due to the dynamic nature of search engine algorithms and market conditions.</p>
          </section>

          <section>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink mb-4 font-serif italic">3. Payments</h2>
            <p>Payments for one-time builds are due upon project phases as outlined in your specific contract. Monthly retainers are billed in advance on a 30-day cycle.</p>
          </section>

          <section>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink mb-4 font-serif italic">4. Limitation of Liability</h2>
            <p>Katylst shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
