
import React, { useState, useEffect } from 'react';

interface ContactShelfProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactShelf: React.FC<ContactShelfProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitting(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  const nextStep = () => {
    if (step === 5) {
      handleSubmit();
    } else {
      setStep((s) => s + 1);
    }
  };
  
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate high-impact submission effect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Wait a bit before closing on success
      setTimeout(() => {
        onClose();
      }, 3500);
    }, 1800);
  };

  const steps = [
    { name: 'name', label: 'What is your name?', placeholder: 'John Doe', type: 'text', icon: 'fa-user-ninja' },
    { name: 'email', label: 'Where should we reply?', placeholder: 'john@example.com', type: 'email', icon: 'fa-paper-plane' },
    { name: 'company', label: 'Your business name?', placeholder: 'Acme Growth Co.', type: 'text', icon: 'fa-rocket' },
    { name: 'phone', label: 'Best number to call?', placeholder: '(555) 000-0000', type: 'tel', icon: 'fa-phone-volume' },
    { name: 'project', label: 'Describe the dream project', placeholder: 'We need to dominate the plumbing market in Dallas...', type: 'textarea', icon: 'fa-bolt' }
  ];

  const currentStep = steps[step - 1];

  return (
    <>
      {/* Overlay with dynamic blur */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Shelf */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white z-[70] shadow-[0_0_100px_rgba(0,123,255,0.1)] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col overflow-hidden border-l border-slate-100`}>
        
        {/* Creative Background Layers */}
        <div className="absolute inset-0 bg-grid-slate-100 pointer-events-none -z-10"></div>
        <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#007BFF]/5 rounded-full blur-[120px] animate-float -z-10"></div>
        <div className="absolute bottom-[10%] left-[-20%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] animate-float-delayed -z-10"></div>

        {/* Floating Header */}
        <div className="p-6 flex justify-between items-center bg-white/40 backdrop-blur-xl sticky top-0 z-30 border-b border-slate-50">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-10 h-10 bg-[#007BFF] rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#007BFF]/20 group-hover:rotate-12 transition-transform">K</div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-slate-900 tracking-tighter uppercase leading-none">Katylst</span>
              <span className="text-[10px] font-bold text-[#007BFF] uppercase tracking-[0.2em]">Partner Hub</span>
            </div>
          </div>
          <button onClick={onClose} className="group p-3 hover:bg-slate-100 rounded-2xl transition-all active:scale-90">
            <i className="fa-solid fa-xmark text-xl text-slate-300 group-hover:text-slate-900"></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-8 md:px-16 pb-12 scrollbar-hide relative">
          
          {isSuccess ? (
            /* Creative Success Screen */
            <div className="h-full flex flex-col items-center justify-center text-center animate-success py-20">
              <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                <i className="fa-solid fa-check text-5xl text-green-500 relative z-10"></i>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Mission Accepted.</h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                We've received your transmission. A growth specialist will reach out within <span className="text-[#007BFF] font-bold">2 business hours</span>.
              </p>
              <div className="mt-12 flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[#007BFF] animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-[#007BFF] animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 rounded-full bg-[#007BFF] animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          ) : (
            <>
              {/* Creative Intro Section */}
              <div className="mt-12 mb-16 animate-in fade-in slide-in-from-top-8 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007BFF]/10 text-[#007BFF] text-[10px] font-black uppercase tracking-[0.1em] mb-6 border border-[#007BFF]/10">
                  <span className="w-1.5 h-1.5 bg-[#007BFF] rounded-full animate-pulse"></span>
                  Active Inquiry
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
                  Let's ignite <br />your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-indigo-600">pipeline.</span>
                </h2>
              </div>

              {/* Central Hub Actions */}
              <div className="mb-20 animate-in fade-in slide-in-from-top-12 duration-1000 delay-200">
                <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-slate-100 to-white shadow-sm border border-slate-100">
                  <div className="p-8">
                    <a href="mailto:info@katylst.co" className="text-2xl md:text-4xl font-black text-[#007BFF] tracking-tighter hover:opacity-70 transition-all flex items-center justify-between group">
                      INFO@KATYLST.CO
                      <i className="fa-solid fa-arrow-right -rotate-45 text-slate-200 group-hover:text-[#007BFF] group-hover:rotate-0 transition-all duration-500"></i>
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button className="relative overflow-hidden group bg-[#007BFF] text-white py-5 px-6 rounded-3xl font-black shadow-2xl shadow-[#007BFF]/20 transition-all active:scale-95 animate-pulse-soft">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <i className="fa-solid fa-calendar text-sm"></i>
                      Book Call
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  <button className="bg-white border-2 border-slate-50 text-slate-900 py-5 px-6 rounded-3xl font-black hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm">
                    Pricing
                  </button>
                </div>
              </div>

              {/* Multi-step Experience */}
              <div className="pt-16 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                <div className="mb-12">
                   <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#007BFF] text-white flex items-center justify-center shadow-xl shadow-[#007BFF]/30 rotate-3 group-hover:rotate-0 transition-all">
                          <i className={`fa-solid ${currentStep.icon} text-xl`}></i>
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-[#007BFF] uppercase tracking-[0.3em]">Phase {step}</h4>
                          <span className="text-lg font-black text-slate-900">Project Discovery</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-black text-slate-300 uppercase block tracking-widest">Progress</span>
                        <span className="text-xl font-black text-[#007BFF]">{Math.round((step / 5) * 100)}%</span>
                      </div>
                   </div>
                   <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#007BFF] to-indigo-500 transition-all duration-1000 ease-out"
                      style={{ width: `${(step / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div key={step} className="animate-in fade-in zoom-in-95 duration-500">
                  <label className="block text-2xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                    {currentStep.label}
                  </label>
                  
                  <div className="relative">
                    {currentStep.type === 'textarea' ? (
                      <textarea
                        name={currentStep.name}
                        rows={4}
                        placeholder={currentStep.placeholder}
                        autoFocus
                        className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] px-10 py-8 text-xl text-slate-900 placeholder:text-slate-300 focus:border-[#007BFF] focus:bg-white focus:shadow-[0_20px_50px_rgba(0,123,255,0.08)] outline-none transition-all duration-500 resize-none font-medium"
                        value={(formData as any)[currentStep.name]}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <input
                        type={currentStep.type}
                        name={currentStep.name}
                        placeholder={currentStep.placeholder}
                        autoFocus
                        className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-[2.5rem] px-10 py-8 text-xl text-slate-900 placeholder:text-slate-300 focus:border-[#007BFF] focus:bg-white focus:shadow-[0_20px_50px_rgba(0,123,255,0.08)] outline-none transition-all duration-500 font-medium"
                        value={(formData as any)[currentStep.name]}
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.key === 'Enter' && step < 5 && nextStep()}
                      />
                    )}
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  {step > 1 && (
                    <button 
                      onClick={prevStep}
                      disabled={isSubmitting}
                      className="w-20 h-20 rounded-3xl border-2 border-slate-50 flex items-center justify-center text-slate-300 hover:text-[#007BFF] hover:border-[#007BFF]/20 hover:bg-[#007BFF]/5 transition-all active:scale-90"
                    >
                      <i className="fa-solid fa-arrow-left text-lg"></i>
                    </button>
                  )}
                  <button 
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className="flex-grow bg-[#007BFF] text-white py-6 h-20 rounded-3xl font-black text-xl shadow-2xl shadow-[#007BFF]/30 hover:shadow-[#007BFF]/50 hover:bg-[#0069d9] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-4 overflow-hidden relative"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-dna fa-spin text-2xl"></i>
                        <span>Syncing Data...</span>
                      </div>
                    ) : (
                      <>
                        <span>{step === 5 ? 'Initiate Partnership' : 'Continue'}</span>
                        <i className={`fa-solid ${step === 5 ? 'fa-bolt-lightning' : 'fa-chevron-right'} text-sm`}></i>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Subtle Bottom Bar */}
        {!isSuccess && (
          <div className="p-8 border-t border-slate-50 bg-slate-50/30 text-center">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              Encrypted SSL Channel Secure
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactShelf;
