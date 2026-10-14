import React, { useEffect } from 'react';
import { X, ExternalLink, Award, ShieldCheck, GraduationCap, Building2, MapPin } from 'lucide-react';
import { DOCTOR_PROFILE, QUALIFICATIONS_TIMELINE, PRINCIPAL_EXPERIENCE_DISCLAIMER } from '../data/projectsData';

interface QualificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QualificationsModal: React.FC<QualificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121211]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="qual-modal-title"
    >
      <div
        className="bg-white rounded-xl border border-[#171716]/10 max-w-[960px] w-full max-h-[92vh] flex flex-col relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#171716]/10 flex items-center justify-between gap-4 bg-[#FBFBFA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#171716] text-white flex items-center justify-center font-editorial text-base font-semibold shrink-0">
              AY
            </div>
            <div>
              <h2 id="qual-modal-title" className="text-base font-semibold text-[#171716] leading-tight">
                {DOCTOR_PROFILE.fullName} — Key Qualifications & Credentials
              </h2>
              <span className="text-xs text-[#6B6862]">
                {DOCTOR_PROFILE.title} · 30+ Years Academic Research, Statutory Advisory & Urban Design
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={DOCTOR_PROFILE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#171716] bg-[#F3EFEA] hover:bg-[#EAE5DC] rounded border border-[#171716]/10 transition-colors"
            >
              <span>Portfolio Archive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6B6862] hover:text-[#171716] rounded-full hover:bg-[#F3EFEA] transition-colors cursor-pointer"
              aria-label="Close qualifications view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Core Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#F8F6F2] border border-[#171716]/8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E9B94] mb-1.5">
                <GraduationCap className="w-4 h-4 text-[#171716]" />
                <span>Academic Rank</span>
              </div>
              <span className="text-sm font-semibold text-[#171716] block">
                PhD in Planning & Urban Design
              </span>
              <p className="text-xs text-[#5E5C56] mt-1 leading-relaxed">
                Faculty Staff Member & Lecturer (1991–2010), Faculty of Urban and Regional Planning, Cairo University.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#F8F6F2] border border-[#171716]/8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E9B94] mb-1.5">
                <Building2 className="w-4 h-4 text-[#171716]" />
                <span>Government Advisory</span>
              </div>
              <span className="text-sm font-semibold text-[#171716] block">
                Minister's Office Advisor
              </span>
              <p className="text-xs text-[#5E5C56] mt-1 leading-relaxed">
                Ministry of Heritage and Tourism, Sultanate of Oman. Auditing mega Integrated Tourism Complexes (ITCs) and coastal controls.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#F8F6F2] border border-[#171716]/8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E9B94] mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#171716]" />
                <span>Consulting Partners</span>
              </div>
              <span className="text-sm font-semibold text-[#171716] block">
                Tier-1 Global Consultancies
              </span>
              <p className="text-xs text-[#5E5C56] mt-1 leading-relaxed">
                WATG, Arab Consulting Engineers (ACE Moharram Bakhoum), Zuhair Fayez, CDC Abdelhalim Ibrahim, Talat Imam.
              </p>
            </div>
          </div>

          {/* Regional Reach & Specialized Competencies */}
          <div className="p-4 rounded-lg bg-[#F3EFEA] border border-[#171716]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7D7A74] block">
                Regional Jurisdictions & Territory
              </span>
              <p className="text-sm font-semibold text-[#171716] mt-0.5">
                Sultanate of Oman · Arab Republic of Egypt · Kingdom of Saudi Arabia · Kingdom of Morocco
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#5E5C56]">
              <MapPin className="w-3.5 h-3.5 text-[#171716]" />
              <span>Muscat & Cairo Advisory Base</span>
            </div>
          </div>

          {/* Career Appointments & Specializations Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#171716]" />
              <h3 className="font-editorial text-2xl font-semibold text-[#171716]">
                Career Appointments & Professional Practice
              </h3>
            </div>
            
            <div className="divide-y divide-[#171716]/8 border-y border-[#171716]/8">
              {QUALIFICATIONS_TIMELINE.map((item, idx) => (
                <div key={idx} className="py-4.5 grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-2 sm:gap-6 items-start">
                  <span className="font-mono text-xs font-semibold text-[#171716] bg-[#F3EFEA] px-2.5 py-1 rounded inline-block w-fit">
                    {item.period}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#171716] mb-1">
                      {item.role} · <span className="text-[#6B6862] font-normal">{item.institution}</span>
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#5E5C56] leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience Disclaimer */}
          <div className="p-4.5 rounded-lg bg-[#FAF9F5] border border-[#171716]/10 text-xs text-[#5E5C56] leading-relaxed">
            <strong className="text-[#171716] block mb-1">Principal Experience Attribution</strong>
            {PRINCIPAL_EXPERIENCE_DISCLAIMER}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#FBFBFA] border-t border-[#171716]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B6862]">
          <span>Direct Contact: <strong className="text-[#171716]">Dr.Alaa.Yousef@gmail.com</strong></span>
          <div className="flex items-center gap-3">
            <a
              href={DOCTOR_PROFILE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171716] hover:underline flex items-center gap-1 font-medium"
            >
              <span>alaayoussef.myportfolio.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#171716] text-white rounded text-xs hover:bg-[#2E2D2B] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
