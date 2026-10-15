import React from 'react';
import { Award } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/projectsData';

interface HeroProps {
  onOpenQualifications: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQualifications }) => {
  return (
    <section id="hero" className="pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        
        {/* Editorial Header */}
        <div className="max-w-[900px] mb-10 md:mb-14">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#6B6862] tracking-wider uppercase mb-5">
            <span>Urban Planning</span>
            <span aria-hidden="true" className="text-[#9E9B94]">·</span>
            <span>Master Planning</span>
            <span aria-hidden="true" className="text-[#9E9B94]">·</span>
            <span>Integrated Tourism Complexes (ITC)</span>
            <span aria-hidden="true" className="text-[#9E9B94]">·</span>
            <span>Site Planning</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] font-normal text-[#171716] mb-6 balance-text">
            Architectural proportion, regional scale & urban harmony.
          </h1>

          <p className="text-lg md:text-xl text-[#5E5C56] font-normal leading-relaxed max-w-[760px] mb-8">
            <strong>{DOCTOR_PROFILE.fullName}</strong>, {DOCTOR_PROFILE.title}, leads <strong>Tanasuq</strong> (تناسق) — a senior advisory practice specializing in mega-scale master planning, Integrated Tourism Complexes (ITCs), waterfront resort cities, and institutional campus urbanism across the Sultanate of Oman, Egypt, Saudi Arabia, and Morocco.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#171716] hover:bg-[#2E2D2B] rounded transition-transform active:translate-y-0.5"
            >
              About Principal
            </a>
            
            <a
              href="#works"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#171716] bg-[#F3EFEA] hover:bg-[#EAE5DC] rounded border border-[#171716]/10 transition-colors"
            >
              Principal Experience
            </a>

            <button
              onClick={onOpenQualifications}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#6B6862] hover:text-[#171716] bg-transparent border border-[#171716]/15 hover:border-[#171716] rounded transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#171716]" />
              <span>Key Qualifications</span>
            </button>
          </div>
        </div>

        {/* Dominant Visual Anchor: Authentic Master Planning Showcase */}
        <div className="relative rounded-lg overflow-hidden mb-12 border border-[#171716]/8 bg-[#F3EFEA]">
          <img
            src="/portfolio-images/marrasi-sidi-abd-el-rahman-1.jpg"
            alt="Marassi Sidi Abd El Rahman Mediterranean Waterfront Master Plan, Egypt - Coordination by Dr. Alaa Youssef"
            className="w-full aspect-[16/9] object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="px-4 py-3 bg-[#FFFFFF] border-t border-[#171716]/8 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B6862]">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#171716]">Featured Commission</span>
              <span aria-hidden="true" className="text-[#9E9B94]">·</span>
              <span>Marassi Sidi Abd El Rahman Master Plan (6.5 Million m²)</span>
              <span aria-hidden="true" className="text-[#9E9B94]">·</span>
              <span>Coordination with WATG & Arab Consulting Engineers (ACE)</span>
            </div>
            <span className="font-mono text-[11px] text-[#8C8880]">
              Principal Experience Commission
            </span>
          </div>
        </div>

        {/* Provenance Numbers Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[#171716]/8">
          <div>
            <span className="block text-3xl font-semibold text-[#171716] tracking-tight font-mono">30+</span>
            <span className="text-xs text-[#6B6862]">Years Practice & Advisory</span>
          </div>
          <div>
            <span className="block text-3xl font-semibold text-[#171716] tracking-tight font-mono">19</span>
            <span className="text-xs text-[#6B6862]">Years Faculty (Cairo University)</span>
          </div>
          <div>
            <span className="block text-3xl font-semibold text-[#171716] tracking-tight font-mono">12+</span>
            <span className="text-xs text-[#6B6862]">Mega ITCs & Master Plans Advised</span>
          </div>
          <div>
            <span className="block text-3xl font-semibold text-[#171716] tracking-tight font-mono">4</span>
            <span className="text-xs text-[#6B6862]">Countries: Oman · Egypt · KSA · Morocco</span>
          </div>
        </div>

      </div>
    </section>
  );
};
