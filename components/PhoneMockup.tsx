import {
    MessageSquare, Mail, Users, Phone, Instagram,
    Globe, Star, Search, TrendingUp, Crown,
} from 'lucide-react'

const LEADS = [
  { src: 'sms',      icon: MessageSquare, color: 'text-amber-500',  label: 'SMS',       time: 'Just now', title: '"Hi! I need a quote for an emergency leak..."',          sub: 'From: (555) 012-3456' },
  { src: 'email',    icon: Mail,          color: 'text-green-600',  label: 'EMAIL',     time: '2m ago',   title: 'New Service Request: Roofing Inspection',               sub: 'customer@example.com' },
  { src: 'facebook', icon: Users,         color: 'text-blue-600',   label: 'FACEBOOK',  time: '15m ago',  title: '"Do you serve the downtown area?"',                      sub: 'Messenger Lead' },
  { src: 'call',     icon: Phone,         color: 'text-red-500',    label: 'CALL',      time: '1h ago',   title: 'Missed call from Google Maps Ad',                        sub: 'Local Prospect' },
  { src: 'ig',       icon: Instagram,     color: 'text-pink-500',   label: 'INSTAGRAM', time: '3h ago',   title: '"Love your portfolio! Are you free Friday?"',            sub: 'Direct Message' },
  { src: 'web',      icon: Globe,         color: 'text-k-orange',   label: 'WEB',       time: '5h ago',   title: 'New Form Submission: Kitchen Remodel',                   sub: 'Website Lead' },
  { src: 'yelp',     icon: Star,          color: 'text-red-600',    label: 'YELP',      time: '8h ago',   title: 'New Inquiry: Bathroom Tile Repair',                      sub: 'Yelp Lead' },
  { src: 'google',   icon: Search,        color: 'text-k-orange',   label: 'GOOGLE',    time: '12h ago',  title: 'New Lead from Business Profile',                         sub: 'Search Lead' },
  ]

function NotifCard({ lead }: { lead: typeof LEADS[0] }) {
    const Icon = lead.icon
    return (
          <div className="bg-white rounded-[14px] p-[11px_13px] shadow-[0_1px_6px_rgba(0,0,0,0.08)] flex-shrink-0">
                <div className="flex justify-between items-center mb-[5px]">
                        <span className={`flex items-center gap-[5px] text-[9px] font-extrabold tracking-[0.8px] uppercase ${lead.color}`}>
                                  <Icon className="w-3 h-3" />
                          {lead.label}
                        </span>span>
                        <span className="text-[8.5px] text-gray-400">{lead.time}</span>span>
                </div>div>
                <div className="text-[11.5px] font-bold text-[#111] leading-[1.3]">{lead.title}</div>div>
                <div className="text-[9.5px] text-gray-500 mt-[3px]">{lead.sub}</div>div>
          </div>div>
        )
}

export default function PhoneMockup() {
    const doubled = [...LEADS, ...LEADS]
      
        return (
              <div className="relative h-[660px] flex items-center justify-center">
              
                {/* Orange diamonds */}
                    <div className="absolute w-[290px] h-[290px] bg-k-orange rounded-[28px] rotate-45 top-5 right-8 opacity-[0.82]" />
                    <div className="absolute w-[315px] h-[315px] bg-k-orange rounded-[28px] rotate-45 bottom-8 -right-4" />
              
                {/* Organic Traffic stat card */}
                    <div className="absolute top-14 -right-6 z-10 bg-white rounded-[14px] shadow-[0_12px_36px_rgba(0,0,0,0.13)] p-[12px_16px] flex items-center gap-3 float-card">
                            <div className="w-9 h-9 rounded-[10px] bg-[#fff0eb] flex items-center justify-center flex-shrink-0">
                                      <TrendingUp className="w-5 h-5 text-k-orange" />
                            </div>div>
                            <div>
                                      <div className="text-[9px] font-bold tracking-[1.2px] uppercase text-k-orange mb-[2px]">Organic Traffic</div>div>
                                      <div className="font-serif text-[22px] font-extrabold text-k-dark leading-none">+312%</div>
                            </div>div>
                    </div>div>
              
                {/* iPhone — exact 320x580, thin 3px border, 48px radius */}
                    <div className="relative z-[5] w-[320px] h-[580px] bg-k-bg rounded-[48px] border-[3px] border-[rgba(26,26,26,0.9)] overflow-hidden flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.22),_0_8px_24px_rgba(0,0,0,0.12)]">
                    
                      {/* Screen content */}
                            <div className="flex-1 bg-[#f2f2f2] flex flex-col overflow-hidden">
                            
                              {/* Status bar + Dynamic Island */}
                                      <div className="flex items-center justify-between px-[18px] pt-3 pb-1.5 bg-[#f2f2f2] flex-shrink-0">
                                                  <span className="text-[12px] font-bold text-[#111]">9:41</span>span>
                                                  <div className="w-[90px] h-[27px] bg-[#0e0e0e] rounded-[20px] flex items-center justify-end pr-[10px]">
                                                                <div className="w-[7px] h-[7px] rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14,0_0_14px_#39ff14] live-dot" />
                                                  </div>div>
                                        {/* Battery / signal */}
                                                  <div className="flex items-center gap-1">
                                                                <svg viewBox="0 0 16 12" className="w-3.5 h-3 fill-[#111]">
                                                                                <rect x="0" y="6" width="3" height="6" rx="1"/>
                                                                                <rect x="4.5" y="4" width="3" height="8" rx="1"/>
                                                                                <rect x="9" y="2" width="3" height="10" rx="1"/>
                                                                                <rect x="13.5" y="0" width="3" height="12" rx="1" opacity=".3"/>
                                                                </svg>svg>
                                                                <svg viewBox="0 0 22 11" className="w-4 h-3">
                                                                                <rect x="0" y="0" width="19" height="11" rx="2.5" stroke="#111" strokeWidth="1" fill="none"/>
                                                                                <rect x="1.5" y="1.5" width="14" height="8" rx="1.5" fill="#111"/>
                                                                                <path d="M20 3.5v4a1.5 1.5 0 000-4z" fill="#111" opacity=".4"/>
                                                                </svg>svg>
                                                  </div>div>
                                      </div>div>
                            
                              {/* Scrolling feed */}
                                      <div className="flex-1 overflow-hidden px-2 pb-2">
                                                  <div className="phone</div>
