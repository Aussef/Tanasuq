import React from 'react';
import { Award, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { DOCTOR_PROFILE, PRINCIPAL_EXPERIENCE_DISCLAIMER } from '../data/projectsData';

interface AboutProps {
  onOpenQualifications: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQualifications }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#171716]/8">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-[840px] mb-14 md:mb-16">
          <span className="block text-xs font-semibold uppercase tracking-widest text-[#9E9B94] mb-3">
            About the Principal & Practice
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171716] leading-tight mb-4">
            {DOCTOR_PROFILE.fullName} · Planning & Urban Design
          </h2>
          <p className="text-base sm:text-lg text-[#5E5C56] leading-relaxed">
            Leading <strong>Tanasuq</strong> (تناسق), an independent practice founded on proportion, contextual site rigor, and interdisciplinary coordination for territorial master plans and mega-scale developments.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Credentials Snapshot */}
          <div className="bg-[#FBFBFA] border border-[#171716]/8 rounded-xl p-6 sm:p-7 flex flex-col gap-6">
            <div className="relative rounded-lg overflow-hidden border border-[#171716]/10 bg-[#F3EFEA] aspect-[4/3] sm:aspect-square flex items-center justify-center">
              <img
                src={DOCTOR_PROFILE.portraitImage}
                alt={`${DOCTOR_PROFILE.fullName} - ${DOCTOR_PROFILE.title}`}
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-[#171716]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium">
                {DOCTOR_PROFILE.fullName}, PhD
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-[#5E5C56] border-y border-[#171716]/8 py-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#171716] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171716] block">Faculty Staff Member (1991 – 2010)</strong>
                  <span>Faculty of Urban and Regional Planning, Cairo University</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#171716] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171716] block">Urban Planning Advisor (Minister’s Office)</strong>
                  <span>Ministry of Heritage and Tourism, Sultanate of Oman</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#171716] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171716] block">Independent Regional Practice</strong>
                  <span>Oman, Egypt, Kingdom of Saudi Arabia, and Morocco</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenQualifications}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-[#171716] bg-[#F3EFEA] hover:bg-[#EAE5DC] rounded border border-[#171716]/10 transition-colors cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Key Qualifications & Credentials</span>
            </button>

            <a
              href={DOCTOR_PROFILE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-[#6B6862] hover:text-[#171716] hover:underline flex items-center justify-center gap-1"
            >
              <span>View Official Portfolio Archive on Adobe</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Right Column: Narrative & Formal Attribution Statement */}
          <div className="space-y-6">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#171716] mb-4">
                Three Decades of Urban Planning Leadership & Pedagogy
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-[#5E5C56] leading-relaxed">
                <p>
                  With more than 30 years of comprehensive experience spanning academic research, statutory ministry governance, and private consulting practice, <strong>{DOCTOR_PROFILE.fullName}</strong> has helped shape landmark master plans across the Middle East and North Africa.
                </p>
                <p>
                  For nearly two decades (1991–2010), Dr. Youssef served as a staff member at the prestigious <strong>Faculty of Urban and Regional Planning, Cairo University</strong>, teaching urban design, site planning, and landscape architecture through studios and research lectures.
                </p>
                <p>
                  As an Urban Planning Advisor in the Minister’s Office at the <strong>Ministry of Heritage and Tourism in the Sultanate of Oman</strong>, he oversaw statutory auditing and policy structuring for national Integrated Tourism Complexes (ITCs). In private practice, he has collaborated with premier international consultancies—including <strong>WATG</strong>, <strong>Arab Consulting Engineers (ACE Moharram Bakhoum)</strong>, <strong>Zuhair Fayez Partnership</strong>, <strong>CDC Abdelhalim Ibrahim</strong>, and <strong>Talat Imam Consultant</strong>—on major tourism, campus, and residential master plans.
                </p>
              </div>
            </div>

            {/* Strategic Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#F8F6F2] border border-[#171716]/6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171716] mb-1">
                  Territorial Scope & Feasibility
                </h4>
                <p className="text-xs text-[#6B6862] leading-relaxed">
                  Resolving multi-disciplinary conflicts between master architectural vision and underground infrastructure feasibility.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F8F6F2] border border-[#171716]/6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171716] mb-1">
                  Statutory & Heritage Integrity
                </h4>
                <p className="text-xs text-[#6B6862] leading-relaxed">
                  Enforcing coastal setbacks, wadi preservation, public beach accessibility, and culturally harmonious architectural guidelines.
                </p>
              </div>
            </div>

            {/* Formal Professional Experience Notice & Credits */}
            <div className="mt-8 p-5 sm:p-6 rounded-lg bg-[#F3EFEA] border border-[#171716]/15 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171716]">
                <Info className="w-4 h-4 text-[#171716] shrink-0" />
                <span>Professional Experience & Attribution Notice</span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#4A4843] leading-relaxed">
                {PRINCIPAL_EXPERIENCE_DISCLAIMER}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
