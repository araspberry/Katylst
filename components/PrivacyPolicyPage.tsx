
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-12">Privacy Policy.</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and business details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, including performing SEO audits, managing advertising campaigns, and communicating with you about your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access. All lead data is encrypted and handled via secure SSL channels.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at info@katylst.co.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
