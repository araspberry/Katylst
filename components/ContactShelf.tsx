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
    connectionPreference: 'asap',
    date: '',
    time: '',
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
    if (step === 6) {
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
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
    { name: 'connection', label: 'When should we connect?', type: 'custom', icon: 'fa-calendar-check' },
    { name: 'project', label: 'Describe the dream project', placeholder: 'We need to dominate the plumbing market in Dallas...', type: 'textarea', icon: 'fa-bolt' }
  ];

  const currentStep = steps[step - 1];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-charcoal/60 backdrop-blur-md z-[60] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-xl bg-bg z-[70] shadow-[0_0_100px_rgba(16,185,129,0.1)] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col overflow-hidden`}>
        
        <div className="absolute inset-0 bg-grid-ink/[0.02] pointer-events-none -z-10"></div>
        <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-float -z-10"></div>
        <div className="absolute bottom-[10%] left-[-20%] w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] animate-float-delayed -z-10"></div>

        <div className="p-6 flex justify-between items-center bg-bg/40 backdrop-blur-xl sticky top-0 z-30 border-b border-border">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-ink shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
              <svg viewBox="27 27 49 47" className="w-7 h-7 fill-bg">
                <path d="M30 30.5h16.6v39.5h-16.6z" />
                <path d="M51.6 30.5h15.2l-10.2 14z" />
                <path d="M47.2 48.4l10-1 15.6 22.6h-19.6z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-ink tracking-tighter uppercase leading-none font-serif italic">Katylst</span>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Partner Hub</span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="group relative w-12 h-12 flex items-center justify-center bg-surface hover:bg-ink hover:text-bg rounded-full transition-all duration-500 active:scale-90 shadow-md border border-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <i className="fa-solid fa-xmark text-lg relative z-10 group-hover:rotate-90 transition-transform duration-500"></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-8 md:px-16 pb-12 scrollbar-hide relative">
          
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-success py-20">
              <div className="w-32 h-32 bg-surface rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping"></div>
                <i className="fa-solid fa-check text-5xl text-accent relative z-10"></i>
              </div>
              <h2 className="text-4xl font-bold text-ink mb-4 tracking-tighter font-serif italic">Mission Accepted.</h2>
              <p className="text-ink-muted text-lg leading-relaxed max-w-sm font-sans font-light">
                We've received your transmission. A growth specialist will reach out within <span className="text-accent font-bold">2 business hours</span>.
              </p>
              <div className="mt-12 flex gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-12 mb-16 animate-in fade-in slide-in-from-top-8 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.1em] mb-6 border border-accent/10">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  Active Inquiry
                </div>
                <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-ink leading-[1] tracking-tight mb-10 font-serif italic">
                  Let's Ignite Your <br />
                  <span className="inline-block text-accent pb-2 not-italic">
                    Pipeline
                  </span>
                </h2>
              </div>

              <div className="mb-12 animate-in fade-in slide-in-from-top-12 duration-1000 delay-200">
                <div className="grid grid-cols-2 gap-4">
                  <button className="!bg-accent text-bg py-4 px-6 rounded-2xl font-bold transition-all active:scale-95 text-base shadow-xl shadow-accent/20 flex items-center justify-center gap-2">
                    <i className="fa-solid fa-calendar-days text-sm"></i>
                    Book Call
                  </button>
                  <button className="!bg-surface text-ink py-4 px-6 rounded-2xl font-bold hover:bg-surface-soft transition-all active:scale-95 text-base shadow-sm border border-border flex items-center justify-center gap-2">
                    <i className="fa-solid fa-tags text-sm"></i>
                    Pricing
                  </button>
                </div>
              </div>

              <div className="pt-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                <div className="mb-12 bg-surface/30 p-8 rounded-[2rem] border border-border">
                   <div className="flex justify-between items-end mb-4">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-accent text-bg flex items-center justify-center shadow-lg shadow-accent/20">
                          <i className={`fa-solid ${currentStep.icon} text-xl`}></i>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-accent uppercase tracking-[0.4em] mb-2">Phase {step}</h4>
                          <span className="text-xl font-bold text-ink font-serif italic leading-none">Project Discovery</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-2 block">Progress</span>
                        <span className="text-2xl font-bold text-accent leading-none">{Math.round((step / 6) * 100)}%</span>
                      </div>
                   </div>
                   <div className="h-[1px] w-full bg-border mt-6 relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000 ease-out"
                      style={{ width: `${(step / 6) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div key={step} className="animate-in fade-in zoom-in-95 duration-500">
                  <label className="block text-3xl font-bold text-ink mb-8 tracking-tight">
                    {currentStep.label}
                  </label>
                  
                  <div className="space-y-8">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {currentStep.type === 'custom' ? (
                        <div className="space-y-8">
                          <div className="grid grid-cols-1 gap-4">
                            <button 
                              onClick={() => {
                                setFormData({ ...formData, connectionPreference: 'asap' });
                                nextStep();
                              }}
                              className={`p-6 rounded-2xl border-2 transition-all text-left flex items-center justify-between group ${formData.connectionPreference === 'asap' ? 'border-accent bg-accent/5' : 'border-border bg-surface/30 hover:border-accent/30'}`}
                            >
                              <div>
                                <div className="text-xl font-bold text-ink mb-1">Call me ASAP</div>
                                <div className="text-sm text-ink-muted">I'm ready to grow right now.</div>
                              </div>
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${formData.connectionPreference === 'asap' ? 'bg-accent text-bg' : 'bg-surface-soft text-ink-muted group-hover:text-accent'}`}>
                                <i className="fa-solid fa-bolt"></i>
                              </div>
                            </button>

                            <div className={`p-8 rounded-3xl border-2 transition-all ${formData.connectionPreference === 'scheduled' ? 'border-accent bg-accent/5' : 'border-border bg-surface/30'}`}>
                              <div className="flex items-center justify-between mb-8">
                                <div>
                                  <div className="text-xl font-bold text-ink mb-1">Schedule a time</div>
                                  <div className="text-sm text-ink-muted">Pick a slot that works for you.</div>
                                </div>
                                <button 
                                  onClick={() => setFormData({ ...formData, connectionPreference: 'scheduled' })}
                                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${formData.connectionPreference === 'scheduled' ? 'bg-accent text-bg' : 'bg-surface-soft text-ink-muted hover:text-accent'}`}
                                >
                                  <i className="fa-solid fa-calendar-days"></i>
                                </button>
                              </div>

                              {formData.connectionPreference === 'scheduled' && (
                                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                      <label className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Select Date</label>
                                      <input 
                                        type="date" 
                                        name="date"
                                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-ink outline-none focus:border-accent/50"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <label className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">Select Time</label>
                                      <input 
                                        type="time" 
                                        name="time"
                                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-ink outline-none focus:border-accent/50"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                  <button 
                                    onClick={nextStep}
                                    disabled={!formData.date || !formData.time}
                                    className="w-full !bg-accent hover:!bg-accent-light text-bg font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                  >
                                    Confirm Time <i className="fa-solid fa-arrow-right"></i>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : currentStep.type === 'textarea' ? (
                        <div className="space-y-6">
                          <textarea
                            name={currentStep.name}
                            rows={4}
                            placeholder={currentStep.placeholder}
                            autoFocus
                            className="w-full bg-surface/30 border border-border rounded-2xl px-8 py-6 text-lg text-ink placeholder:text-ink-muted/50 focus:border-accent/50 focus:bg-surface/50 outline-none transition-all duration-500 resize-none font-medium"
                            value={(formData as any)[currentStep.name]}
                            onChange={handleInputChange}
                          />
                          <button 
                            onClick={nextStep}
                            disabled={isSubmitting}
                            className="w-full !bg-accent hover:!bg-accent-light active:scale-95 text-bg font-bold py-6 rounded-2xl transition-all flex items-center justify-center space-x-3 text-sm uppercase tracking-[0.1em] shadow-xl shadow-accent/20"
                          >
                            {isSubmitting ? (
                              <i className="fa-solid fa-dna fa-spin text-xl"></i>
                            ) : (
                              <>
                                <span>{step === 6 ? 'Send Message' : 'Next Step'}</span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </>
                            )}
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col sm:flex-row items-stretch gap-0 rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface/30 focus-within:border-accent/50 transition-all duration-500">
                          <div className="flex-grow relative">
                            <input
                              type={currentStep.type}
                              name={currentStep.name}
                              placeholder={currentStep.placeholder}
                              autoFocus
                              className="w-full bg-transparent px-8 py-6 text-lg text-ink placeholder:text-ink-muted/50 outline-none font-medium"
                              value={(formData as any)[currentStep.name]}
                              onChange={handleInputChange}
                              onKeyDown={(e) => e.key === 'Enter' && step < 6 && nextStep()}
                            />
                          </div>
                          <button 
                            onClick={nextStep}
                            disabled={isSubmitting}
                            className="!bg-accent hover:!bg-accent-light active:scale-95 text-bg font-bold px-10 py-6 transition-all flex items-center justify-center space-x-3 text-sm uppercase tracking-[0.1em] whitespace-nowrap"
                          >
                            {isSubmitting ? (
                              <i className="fa-solid fa-dna fa-spin text-xl"></i>
                            ) : (
                              <>
                                <span>{step === 6 ? 'Send' : 'Next'}</span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {step > 1 && (
                  <div className="mt-8 text-center">
                    <button 
                      onClick={prevStep}
                      disabled={isSubmitting}
                      className="bg-surface-soft hover:bg-surface text-ink-muted hover:text-ink px-6 py-3 rounded-xl transition-all text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 border border-border"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                      Back to previous step
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        
        {!isSuccess && (
          <div className="p-8 border-t border-border bg-surface/30 text-center">
            <p className="text-ink-muted text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              Encrypted SSL Channel Secure
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactShelf;