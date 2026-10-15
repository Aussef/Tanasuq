import React from 'react';
import { ArrowUp } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/projectsData';

interface FooterProps {
  onOpenSourceModal: () => void;
  onOpenQualifications: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSourceModal,
  onOpenQualifications,
}) => {
  return (
    <footer className="bg-[#171716] text-[#EFECE6] py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-16 border-b border-white/10">
          
          <div>
            <a href="#hero" className="font-editorial text-3xl font-semibold text-white tracking-tight block mb-2">
              Tanasuq
            </a>
            <span className="text-xs text-[#A3A09A] block mb-4">
              {DOCTOR_PROFILE.fullName} · {DOCTOR_PROFILE.title}
            </span>
            <p className="text-sm text-[#A3A09A] max-w-[380px] leading-relaxed mb-6">
              Senior urban planning, territorial master planning, and Integrated Tourism Complexes (ITC) advisory across the Sultanate of Oman, Egypt, Saudi Arabia, and Morocco.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSourceModal}
                className="text-xs font-mono text-[#D1CFCA] hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Source Files
              </button>
              <span className="text-white/20">·</span>
              <a
                href="/tanasuq-website.zip"
                download="tanasuq-website.zip"
                className="text-xs font-mono text-[#D1CFCA] hover:text-white underline underline-offset-4"
              >
                Download ZIP
              </a>
            </div>
          </div>

          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest text-[#7D7A74] mb-4">
              Portfolio Navigation
            </span>
            <div className="flex flex-col gap-2.5 text-sm text-[#D1CFCA]">
              <a href="#about" className="hover:text-white transition-colors">About Principal & Practice</a>
              <button
                onClick={onOpenQualifications}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Key Qualifications & Credentials
              </button>
              <a href="#projects" className="hover:text-white transition-colors">Projects (Principal & Tanasuq)</a>
              <a href="#contact" className="hover:text-white transition-colors">Direct Contact</a>
            </div>
          </div>

          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest text-[#7D7A74] mb-4">
              Practice Locations
            </span>
            <div className="flex flex-col gap-2 text-sm text-[#A3A09A]">
              <p>Muscat, Sultanate of Oman</p>
              <p>Cairo, Arab Republic of Egypt</p>
              <p className="pt-2 text-xs text-[#7D7A74]">
                Inquiries: {DOCTOR_PROFILE.email}
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D7A74]">
          <p>&copy; {new Date().getFullYear()} {DOCTOR_PROFILE.fullName} · Tanasuq Urban Design. All rights reserved.</p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-[#D1CFCA] hover:text-white transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
