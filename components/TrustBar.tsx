const NAMES = [
  "SARAH'S PLUMBING", 'Thorne Roofing', 'SUMMIT REALTY',
  'CoolAir HVAC', 'prime law associates', 'MILLER LANDSCAPING',
  'Blue Ridge Electric', 'COASTAL REMODELING',
]

export default function TrustBar() {
  const doubled = [...NAMES, ...NAMES]

  return (
    <div className="bg-white border-t border-k-border border-b overflow-hidden py-[22px]">
      <p className="text-center text-[10.5px] font-bold tracking-[2px] uppercase text-k-light mb-[18px]">
        Trusted by 450+ Industry Leaders
      </p>
      <div className="overflow-hidden">
        <div className="trust-ticker flex gap-14 w-max">
          {doubled.map((name, i) => (
            <span key={i} className="flex items-center gap-14 whitespace-nowrap">
              <span className="text-[14.5px] font-semibold text-[#c8cdd6]">{name}</span>
              <span className="text-k-orange text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
