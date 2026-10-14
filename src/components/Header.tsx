import React, { useState } from 'react';
import { Download, Code2, Award } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/projectsData';

interface HeaderProps {
  onOpenSourceModal: () => void;
  onOpenQualifications: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSourceModal,
  onOpenQualifications,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#171716]/8 transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#hero"
            className="font-editorial text-2xl font-semibold text-[#171716] tracking-tight whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Tanasuq
          </a>
          <span className="hidden lg:inline text-xs font-medium text-[#9E9B94] border-l border-[#171716]/10 pl-3">
            {DOCTOR_PROFILE.fullName} · Urban Planning & Design
          </span>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-[#6B6862]" aria-label="Main navigation">
          <a href="#about" className="hover:text-[#171716] transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <button
            onClick={onOpenQualifications}
            className="hover:text-[#171716] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Qualifications
          </button>
          <a href="#projects" className="hover:text-[#171716] transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#171716] transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenQualifications}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#171716] bg-[#F3EFEA] hover:bg-[#EAE5DC] rounded border border-[#171716]/10 transition-colors whitespace-nowrap cursor-pointer"
            title="Inspect Dr. Alaaeldin Youssef's qualifications and credentials"
          >
            <Award className="w-3.5 h-3.5 text-[#171716]" />
            <span>Key Qualifications</span>
          </button>

          <button
            onClick={onOpenSourceModal}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#6B6862] hover:text-[#171716] bg-transparent border border-[#171716]/15 hover:border-[#171716] rounded transition-colors whitespace-nowrap cursor-pointer"
            title="Inspect HTML, CSS & JavaScript standalone source code"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Source</span>
          </button>

          <a
            href="/tanasuq-website.zip"
            download="tanasuq-website.zip"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#171716] hover:bg-[#2F2E2C] rounded transition-all whitespace-nowrap shadow-xs"
            title="Download complete static HTML/CSS/JS ZIP"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171716] hover:bg-[#F3EFEA] rounded focus-visible:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-[#171716] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-[#171716] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-[#171716] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#171716]/10 bg-[#FBFBFA] px-6 py-6 transition-all animate-in fade-in">
          <div className="mb-4 pb-3 border-b border-[#171716]/10">
            <span className="text-xs text-[#9E9B94] block uppercase tracking-wider">Practice Profile</span>
            <span className="text-sm font-semibold text-[#171716]">{DOCTOR_PROFILE.fullName}, PhD</span>
            <span className="text-xs text-[#6B6862] block">Planning & Urban Design Consultant</span>
          </div>

          <nav className="flex flex-col gap-3.5 mb-6">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#171716] hover:text-[#6B6862]"
            >
              About Principal & Practice
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQualifications();
              }}
              className="text-left text-sm font-medium text-[#171716] hover:text-[#6B6862] cursor-pointer"
            >
              Key Qualifications & Credentials
            </button>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#171716] hover:text-[#6B6862]"
            >
              Projects (Principal & Tanasuq)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#171716] hover:text-[#6B6862]"
            >
              Direct Contact
            </a>
          </nav>

          <div className="pt-4 border-t border-[#171716]/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSourceModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#171716] border border-[#171716]/20 rounded cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Inspect HTML / CSS / JS Source</span>
            </button>
            <a
              href="/tanasuq-website.zip"
              download="tanasuq-website.zip"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-white bg-[#171716] rounded"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download tanasuq-website.zip</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
