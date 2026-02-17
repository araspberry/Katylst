
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#007BFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">K</span>
              </div>
              <div className="text-xl font-black text-slate-900 tracking-tighter">
                Katylst<span className="text-[#007BFF]">.</span>
              </div>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Helping local service businesses dominate their service areas through performance-driven SEO and high-converting websites.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all">
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">About Katylst</a></li>
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">Client Results</a></li>
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">The Lead Machine</a></li>
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Services</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">Contractor Websites</a></li>
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">Local SEO</a></li>
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">Google Maps Growth</a></li>
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">AI Content Audit</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#007BFF] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 text-center text-slate-400 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Katylst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
