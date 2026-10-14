import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#121211]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-xl border border-[#171716]/10 max-w-[920px] w-full max-h-[92vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B6862] hover:text-[#171716] hover:bg-[#F3EFEA] rounded-full transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10">
          
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B6862] mb-3">
            <span className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
              project.projectTrack === 'principal'
                ? 'bg-[#F3EFEA] text-[#171716] border border-[#171716]/10'
                : 'bg-[#171716] text-white'
            }`}>
              {project.projectTrack === 'principal' ? 'Principal Experience' : 'Tanasuq Practice'}
            </span>
            <span aria-hidden="true" className="text-[#9E9B94]">·</span>
            <span className="font-semibold text-[#171716]">{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-[#9E9B94]">·</span>
            <span>{project.client}</span>
            <span aria-hidden="true" className="text-[#9E9B94]">·</span>
            <span>{project.location}</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#171716] leading-tight mb-4">
            {project.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B6862] pb-6 border-b border-[#171716]/8 mb-6">
            <div>
              <span className="font-medium text-[#171716]">Role:</span> {project.role}
            </div>
            <span aria-hidden="true" className="text-[#9E9B94]">·</span>
            <div>
              <span className="font-medium text-[#171716]">Scale/Scope:</span> {project.areaOrScope}
            </div>
          </div>

          {/* Main Visual Display */}
          <div className="rounded-lg overflow-hidden border border-[#171716]/8 mb-4 bg-[#F3EFEA] relative group">
            <img
              src={project.images[activeImgIndex] || project.primaryImage}
              alt={`${project.title} master planning drawing ${activeImgIndex + 1}`}
              className="w-full max-h-[500px] object-contain mx-auto"
              loading="eager"
            />
          </div>

          {/* Image Thumbnail Selector (if multiple images) */}
          {project.images.length > 1 && (
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              <span className="text-xs text-[#9E9B94] mr-2">Drawings/Photos:</span>
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImgIndex(i)}
                  className={`w-16 h-12 rounded overflow-hidden border shrink-0 transition-all ${
                    activeImgIndex === i
                      ? 'border-[#171716] ring-2 ring-[#171716]/20'
                      : 'border-[#171716]/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Key Strategic Outcomes */}
          <div className="bg-[#F8F6F2] p-5 rounded-lg border border-[#171716]/6 mb-8">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#9E9B94] mb-3">
              Master Plan Inclusions & Outcomes
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#171716]">
                  <CheckCircle2 className="w-4 h-4 text-[#171716] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-[#5E5C56] leading-relaxed mb-8">
            {project.fullDescription.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Attribution Note */}
          {project.attributionNote && (
            <div className="p-4 rounded-lg bg-[#F8F6F2] border border-[#171716]/10 text-xs text-[#52504B] mb-8">
              <strong className="text-[#171716] block uppercase tracking-wider text-[11px] mb-1">
                Project Attribution & Association Record:
              </strong>
              <span>{project.attributionNote}</span>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-6 border-t border-[#171716]/8 flex flex-wrap items-center justify-between gap-4">
            {project.projectTrack === 'principal' ? (
              <a
                href={`https://alaayoussef.myportfolio.com/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171716] underline underline-offset-4"
              >
                <span>View Original Submission on alaayoussef.myportfolio.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="text-xs text-[#6B6862]">
                <strong className="text-[#171716]">Tanasuq Flagship Master Planning</strong> · Independent Practice
              </div>
            )}

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 bg-[#171716] text-white rounded text-xs font-medium hover:bg-[#2F2E2C] transition-colors"
            >
              Inquire Regarding Similar Master Plan
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
