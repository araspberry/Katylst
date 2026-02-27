
import React, { useState } from 'react';
import { Site, Theme } from '../types';

interface DashboardProps {
  onNavigate: (view: any) => void;
}

const SERVICE_THEMES: Record<string, Theme> = {
  'Roofer': {
    primary: '#1E293B',
    accent: '#F97316', // Bold Orange
    bg: '#F8FAFC',
    surface: '#FFFFFF',
    ink: '#0F172A',
    inkMuted: '#64748B',
    fontSans: 'Inter',
    fontSerif: 'Space Grotesk',
    vibe: 'clean'
  },
  'Plumber': {
    primary: '#0369A1', // Trust Blue
    accent: '#0EA5E9',
    bg: '#F0F9FF',
    surface: '#FFFFFF',
    ink: '#0C4A6E',
    inkMuted: '#7DD3FC',
    fontSans: 'Inter',
    fontSerif: 'Inter',
    vibe: 'clean'
  },
  'Realtor': {
    primary: '#1A1A1A',
    accent: '#D4AF37', // Gold
    bg: '#F5F2ED',
    surface: '#FFFFFF',
    ink: '#1A1A1A',
    inkMuted: '#4A4A4A',
    fontSans: 'Montserrat',
    fontSerif: 'Playfair Display',
    vibe: 'luxury'
  },
  'Dentist': {
    primary: '#0D9488', // Teal
    accent: '#2DD4BF',
    bg: '#F0FDFA',
    surface: '#FFFFFF',
    ink: '#134E4A',
    inkMuted: '#5EEAD4',
    fontSans: 'Inter',
    fontSerif: 'Inter',
    vibe: 'organic'
  },
  'Real Estate Brokerage': {
    primary: '#0F172A', // Deep Navy
    accent: '#94A3B8', // Slate/Silver
    bg: '#F8FAFC',
    surface: '#FFFFFF',
    ink: '#0F172A',
    inkMuted: '#64748B',
    fontSans: 'Inter',
    fontSerif: 'Playfair Display',
    vibe: 'luxury'
  }
};

type Tab = 'overview' | 'sites' | 'cms' | 'analytics';

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const [sites, setSites] = useState<Site[]>([
    {
      id: '1',
      clientName: 'Dallas Elite Plumbing',
      serviceType: 'Plumber',
      theme: SERVICE_THEMES['Plumber'],
      status: 'active',
      leadsCount: 124,
      createdAt: '2024-02-15'
    }
  ]);

  const [leads] = useState([
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '(555) 123-4567', site: 'Dallas Elite Plumbing', status: 'New', date: '2024-02-26' },
    { id: 2, name: 'Sarah Miller', email: 'sarah@example.com', phone: '(555) 987-6543', site: 'Dallas Elite Plumbing', status: 'Contacted', date: '2024-02-25' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '(555) 456-7890', site: 'Dallas Elite Plumbing', status: 'Won', date: '2024-02-24' },
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [creationMode, setCreationMode] = useState<'template' | 'custom'>('template');
  const [customUrl, setCustomUrl] = useState('');
  const [previewSite, setPreviewSite] = useState<Site | null>(null);
  const [newClientName, setNewClientName] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'katylst2026') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleCreateSite = () => {
    if (!newClientName || !selectedService) return;
    if (creationMode === 'custom' && !customUrl) return;

    const newSite: Site = {
      id: Math.random().toString(36).substr(2, 9),
      clientName: newClientName,
      serviceType: selectedService,
      theme: SERVICE_THEMES[selectedService],
      status: 'active',
      leadsCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      url: creationMode === 'custom' ? customUrl : undefined,
      isCustom: creationMode === 'custom'
    };

    setSites([newSite, ...sites]);
    setIsCreating(false);
    setNewClientName('');
    setSelectedService('');
    setCustomUrl('');
    setCreationMode('template');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4 py-12">
        <div className="bg-surface w-full max-w-md rounded-[2.5rem] p-10 border border-border shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent rounded-2xl mx-auto flex items-center justify-center text-bg mb-6 shadow-lg shadow-accent/20">
              <i className="fa-solid fa-lock text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-ink mb-2 font-serif italic">Restricted Access</h2>
            <p className="text-ink-muted text-sm">Enter your partner credentials to access Mission Control.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-ink-muted uppercase tracking-widest mb-2">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-bg border ${loginError ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-4 text-ink focus:outline-none focus:border-accent transition-colors`}
              />
              {loginError && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-wider">Invalid Access Key</p>}
            </div>
            <button className="w-full bg-accent text-bg py-4 rounded-xl font-bold shadow-lg shadow-accent/20 active:scale-95 transition-transform">
              Unlock Dashboard
            </button>
          </form>
          <p className="text-center mt-8 text-[10px] text-ink-muted uppercase tracking-widest">Hint: katylst2026</p>
        </div>
      </div>
    );
  }

  const renderOverview = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Sites', value: sites.length, icon: 'fa-globe', color: 'text-accent' },
          { label: 'Total Leads', value: '1,248', icon: 'fa-users', color: 'text-accent-blue' },
          { label: 'Avg Health', value: '98.2%', icon: 'fa-heart-pulse', color: 'text-emerald-400' },
          { label: 'Monthly ROI', value: '$42.5k', icon: 'fa-chart-line', color: 'text-purple-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface p-6 rounded-3xl border border-border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl bg-bg flex items-center justify-center ${stat.color}`}>
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest">+12%</span>
            </div>
            <div className="text-2xl font-bold text-ink mb-1">{stat.value}</div>
            <div className="text-xs text-ink-muted uppercase tracking-widest font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface p-8 rounded-[2.5rem] border border-border">
          <h3 className="text-xl font-bold text-ink mb-6 font-serif italic">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="flex-grow">
                  <p className="text-sm text-ink font-medium">New lead generated for <span className="text-accent">Dallas Elite Plumbing</span></p>
                  <p className="text-[10px] text-ink-muted uppercase tracking-widest mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface p-8 rounded-[2.5rem] border border-border">
          <h3 className="text-xl font-bold text-ink mb-6 font-serif italic">System Health</h3>
          <div className="space-y-6">
            {['SEO Engine', 'Lead Routing', 'Payment Gateway', 'AI Audit Tool'].map(service => (
              <div key={service} className="flex items-center justify-between">
                <span className="text-sm text-ink font-medium">{service}</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest">Operational</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSites = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-ink font-serif italic">Client Fleet</h2>
        <button 
          onClick={() => setIsCreating(true)}
          className="bg-accent text-bg px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
        >
          <i className="fa-solid fa-rocket"></i>
          Launch New Site
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <div key={site.id} className="bg-surface rounded-[2rem] p-8 border border-border group hover:border-accent/50 transition-all shadow-sm hover:shadow-xl hover:shadow-accent/5">
            <div className="flex justify-between items-start mb-6">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: site.theme.accent }}
              >
                <i className={`fa-solid ${
                  site.serviceType === 'Plumber' ? 'fa-faucet' : 
                  site.serviceType === 'Roofer' ? 'fa-house-chimney' : 
                  site.serviceType === 'Realtor' ? 'fa-key' : 
                  site.serviceType === 'Real Estate Brokerage' ? 'fa-building-columns' : 'fa-tooth'
                } text-xl`}></i>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest">
                  {site.status}
                </div>
                {site.isCustom && (
                  <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest border border-purple-500/20">
                    Bespoke Project
                  </div>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-ink mb-1 tracking-tight">{site.clientName}</h3>
            <p className="text-ink-muted text-sm mb-8">{site.serviceType} • Created {site.createdAt}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-bg rounded-2xl p-4 border border-border">
                <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1">Leads</div>
                <div className="text-xl font-bold text-ink">{site.leadsCount}</div>
              </div>
              <div className="bg-bg rounded-2xl p-4 border border-border">
                <div className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1">Health</div>
                <div className="text-xl font-bold text-accent">98%</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => {
                  if (site.isCustom && site.url) {
                    window.open(site.url, '_blank');
                  } else {
                    setPreviewSite(site);
                  }
                }}
                className="flex-grow bg-surface-soft text-ink py-3 rounded-xl font-bold text-sm border border-border hover:bg-bg transition-colors"
              >
                {site.isCustom ? 'Open Project' : 'View Site'}
              </button>
              <button className="px-4 bg-surface-soft text-ink py-3 rounded-xl font-bold text-sm border border-border hover:bg-bg transition-colors">
                <i className="fa-solid fa-gear"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCMS = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-ink mb-8 font-serif italic">Lead Command Center</h2>
      <div className="bg-surface rounded-[2.5rem] border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-bg/50">
                <th className="px-6 py-4 text-[10px] font-bold text-ink-muted uppercase tracking-widest">Contact</th>
                <th className="px-6 py-4 text-[10px] font-bold text-ink-muted uppercase tracking-widest">Site</th>
                <th className="px-6 py-4 text-[10px] font-bold text-ink-muted uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-ink-muted uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-ink-muted uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leads.map(lead => (
                <tr key={lead.id} className="hover:bg-bg/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-ink">{lead.name}</div>
                    <div className="text-xs text-ink-muted">{lead.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-ink-muted">{lead.site}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      lead.status === 'New' ? 'bg-accent/10 text-accent' :
                      lead.status === 'Contacted' ? 'bg-accent-blue/10 text-accent-blue' :
                      'bg-emerald-400/10 text-emerald-400'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-ink-muted">{lead.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-accent hover:text-accent-light transition-colors">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-ink mb-8 font-serif italic">Katylst Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2 bg-surface p-8 rounded-[2.5rem] border border-border h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-ink">Growth Trajectory</h3>
            <div className="flex gap-2">
              {['7D', '30D', '90D', '1Y'].map(t => (
                <button key={t} className={`px-3 py-1 rounded-lg text-[10px] font-bold ${t === '30D' ? 'bg-accent text-bg' : 'bg-bg text-ink-muted'}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="flex-grow flex items-end gap-2">
            {[40, 60, 45, 70, 85, 65, 90, 100, 80, 95, 110, 120].map((h, i) => (
              <div key={i} className="flex-grow bg-accent/20 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface p-8 rounded-[2.5rem] border border-border">
          <h3 className="font-bold text-ink mb-8">Conversion Sources</h3>
          <div className="space-y-6">
            {[
              { label: 'Organic Search', value: '64%', color: 'bg-accent' },
              { label: 'Social Media', value: '22%', color: 'bg-accent-blue' },
              { label: 'Direct', value: '14%', color: 'bg-purple-400' },
            ].map(source => (
              <div key={source.label}>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                  <span className="text-ink-muted">{source.label}</span>
                  <span className="text-ink">{source.value}</span>
                </div>
                <div className="h-2 bg-bg rounded-full overflow-hidden">
                  <div className={`h-full ${source.color}`} style={{ width: source.value }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-bg flex">
      {/* Vertical Sidebar */}
      <div className="w-20 md:w-64 bg-surface border-r border-border flex flex-col sticky top-0 h-screen z-50">
        <div className="p-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-bg shadow-lg shadow-accent/20 shrink-0">
              <i className="fa-solid fa-k"></i>
            </div>
            <span className="hidden md:block text-xl font-bold text-ink tracking-tighter font-serif italic">Katylst</span>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {[
            { id: 'overview', icon: 'fa-gauge-high', label: 'Overview' },
            { id: 'sites', icon: 'fa-globe', label: 'Sites' },
            { id: 'cms', icon: 'fa-users-rectangle', label: 'CMS' },
            { id: 'analytics', icon: 'fa-chart-line', label: 'Analytics' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                activeTab === tab.id 
                  ? 'bg-accent text-bg shadow-lg shadow-accent/20' 
                  : 'text-ink-muted hover:bg-bg hover:text-ink'
              }`}
            >
              <i className={`fa-solid ${tab.icon} text-lg shrink-0`}></i>
              <span className="hidden md:block font-bold text-sm tracking-tight">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button 
            onClick={() => onNavigate('home')}
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-ink-muted hover:bg-bg hover:text-ink transition-all"
          >
            <i className="fa-solid fa-arrow-right-from-bracket text-lg shrink-0"></i>
            <span className="hidden md:block font-bold text-sm tracking-tight">Exit Admin</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-4 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'sites' && renderSites()}
          {activeTab === 'cms' && renderCMS()}
          {activeTab === 'analytics' && renderAnalytics()}
        </div>
      </div>

      {/* Modals */}
      {isCreating && (
        <div className="fixed inset-0 bg-bg/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-surface w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 border border-border shadow-2xl animate-in zoom-in-95 duration-300">
            <h2 className="text-3xl font-bold text-ink mb-6 font-serif italic">New Deployment</h2>
            
            <div className="flex p-1 bg-bg rounded-2xl mb-8 border border-border">
              <button 
                onClick={() => setCreationMode('template')}
                className={`flex-grow py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${creationMode === 'template' ? 'bg-accent text-bg shadow-lg shadow-accent/20' : 'text-ink-muted hover:text-ink'}`}
              >
                Template
              </button>
              <button 
                onClick={() => setCreationMode('custom')}
                className={`flex-grow py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${creationMode === 'custom' ? 'bg-accent text-bg shadow-lg shadow-accent/20' : 'text-ink-muted hover:text-ink'}`}
              >
                Connect Custom
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase tracking-widest mb-2">Client Name</label>
                <input 
                  type="text" 
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  placeholder="e.g. Dallas Elite Plumbing"
                  className="w-full bg-bg border border-border rounded-xl px-4 py-4 text-ink focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {creationMode === 'custom' && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-xs font-bold text-ink-muted uppercase tracking-widest mb-2">Project URL</label>
                  <input 
                    type="url" 
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://luxury-realty.com"
                    className="w-full bg-bg border border-border rounded-xl px-4 py-4 text-ink focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase tracking-widest mb-2">Industry / Service</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(SERVICE_THEMES).map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-4 rounded-xl border font-bold transition-all ${
                        selectedService === service 
                          ? 'bg-accent border-accent text-bg' 
                          : 'bg-bg border-border text-ink-muted hover:border-accent/50'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button 
                  onClick={handleCreateSite}
                  className="flex-grow bg-accent text-bg py-4 rounded-xl font-bold shadow-lg shadow-accent/20 active:scale-95 transition-transform"
                >
                  {creationMode === 'custom' ? 'Connect Project' : 'Generate Site'}
                </button>
                <button 
                  onClick={() => {
                    setIsCreating(false);
                    setCreationMode('template');
                  }}
                  className="px-8 bg-surface-soft text-ink py-4 rounded-xl font-bold border border-border"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {previewSite && (
        <div className="fixed inset-0 bg-bg/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-12">
          <div className="w-full h-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col relative border border-black/10">
            <div className="p-6 bg-white border-b border-black/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: previewSite.theme.accent }}>
                  <i className="fa-solid fa-eye"></i>
                </div>
                <div>
                  <h3 className="font-bold text-black leading-none">{previewSite.clientName}</h3>
                  <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest mt-1">Live Preview Mode</p>
                </div>
              </div>
              <button 
                onClick={() => setPreviewSite(null)}
                className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="flex-grow bg-gray-100 p-8 overflow-y-auto">
              <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden min-h-[1000px]">
                <div className="h-20 border-b border-gray-100 flex items-center justify-between px-8" style={{ backgroundColor: previewSite.theme.bg }}>
                  <div className="font-serif italic font-bold text-xl" style={{ color: previewSite.theme.primary }}>{previewSite.clientName}</div>
                  <div className="flex gap-6 text-sm font-medium" style={{ color: previewSite.theme.inkMuted }}>
                    <span>Services</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="py-24 px-12 text-center" style={{ backgroundColor: previewSite.theme.bg }}>
                  <h1 className="text-6xl font-bold mb-6 tracking-tighter" style={{ color: previewSite.theme.ink, fontFamily: previewSite.theme.fontSerif }}>
                    The Best <span style={{ color: previewSite.theme.accent }}>{previewSite.serviceType}</span> <br /> in Your Area.
                  </h1>
                  <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: previewSite.theme.inkMuted }}>
                    We provide top-tier {previewSite.serviceType.toLowerCase()} services with a focus on quality, reliability, and customer satisfaction.
                  </p>
                  <button className="px-10 py-5 rounded-full font-bold text-white shadow-xl" style={{ backgroundColor: previewSite.theme.accent }}>
                    Get Your Free Quote
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-8 p-12">
                  {[1,2,3].map(i => (
                    <div key={i} className="p-8 rounded-2xl border border-gray-100">
                      <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-white" style={{ backgroundColor: previewSite.theme.accent }}>
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Service Feature {i}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">High-quality professional service tailored to your specific needs.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
