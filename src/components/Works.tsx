import React, { useState } from 'react';
import type { CategoryFilter, Project, ProjectTrack } from '../types';
import { PRINCIPAL_PROJECTS, TANASUQ_PROJECTS, PRINCIPAL_EXPERIENCE_DISCLAIMER } from '../data/projectsData';
import { ArrowUpRight, ExternalLink, Info, Compass, Building2, CheckCircle2 } from 'lucide-react';

interface WorksProps {
  onSelectProject: (project: Project) => void;
}

export const Works: React.FC<WorksProps> = ({ onSelectProject }) => {
  const [activeTrack, setActiveTrack] = useState<ProjectTrack>('principal');
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const currentTrackProjects = activeTrack === 'principal' ? PRINCIPAL_PROJECTS : TANASUQ_PROJECTS;

  const filteredProjects = currentTrackProjects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Anchor for backward compatibility with #works links */}
      <div id="works" className="absolute -top-24 left-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-[820px] mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFEA] border border-[#171716]/10 rounded text-xs font-semibold uppercase tracking-wider text-[#171716] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Master Planning & Spatial Portfolio</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171716] leading-tight">
            Projects & Master Planning Tracks.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6862] mt-3 leading-relaxed">
            Explore Dr. Alaaeldin Youssef&apos;s urban design portfolio organized into two distinct directions: 
            <strong> Principal Experience</strong> with premier regional consultancies and statutory ministries, and 
            <strong> Tanasuq Projects</strong> representing curated flagship initiatives under the independent practice.
          </p>
        </div>

        {/* Dual Track Primary Sub-Navigation Bar */}
        <div className="bg-[#F8F6F2] border border-[#171716]/10 rounded-xl p-2 sm:p-2.5 mb-8 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            
            {/* Tab 1: Principal Experience (Default) */}
            <button
              type="button"
              onClick={() => {
                setActiveTrack('principal');
                setFilter('all');
              }}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-lg text-left transition-all cursor-pointer ${
                activeTrack === 'principal'
                  ? 'bg-white border border-[#171716]/15 shadow-sm text-[#171716]'
                  : 'text-[#6B6862] hover:text-[#171716] hover:bg-white/50 border border-transparent'
              }`}
              aria-pressed={activeTrack === 'principal'}
            >
              <div className={`p-2 rounded-md shrink-0 mt-0.5 ${
                activeTrack === 'principal' ? 'bg-[#171716] text-white' : 'bg-[#EAE5DC] text-[#6B6862]'
              }`}>
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm sm:text-base text-[#171716]">
                    Principal Experience
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    activeTrack === 'principal' ? 'bg-[#171716] text-white' : 'bg-[#EAE5DC] text-[#6B6862]'
                  }`}>
                    {PRINCIPAL_PROJECTS.length} Commissions
                  </span>
                </div>
                <p className="text-xs text-[#6B6862] mt-1 leading-normal">
                  Works performed during previous associations with former employers, consultancy partnerships, or government agencies.
                </p>
              </div>
            </button>

            {/* Tab 2: Tanasuq Projects */}
            <button
              type="button"
              onClick={() => {
                setActiveTrack('tanasuq');
                setFilter('all');
              }}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-lg text-left transition-all cursor-pointer ${
                activeTrack === 'tanasuq'
                  ? 'bg-white border border-[#171716]/15 shadow-sm text-[#171716]'
                  : 'text-[#6B6862] hover:text-[#171716] hover:bg-white/50 border border-transparent'
              }`}
              aria-pressed={activeTrack === 'tanasuq'}
            >
              <div className={`p-2 rounded-md shrink-0 mt-0.5 ${
                activeTrack === 'tanasuq' ? 'bg-[#171716] text-white' : 'bg-[#EAE5DC] text-[#6B6862]'
              }`}>
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm sm:text-base text-[#171716]">
                    Tanasuq Projects
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    activeTrack === 'tanasuq' ? 'bg-[#171716] text-white' : 'bg-[#EAE5DC] text-[#6B6862]'
                  }`}>
                    {TANASUQ_PROJECTS.length} Initiatives
                  </span>
                </div>
                <p className="text-xs text-[#6B6862] mt-1 leading-normal">
                  Curated flagship urban design, waterfront regeneration, and strategic advisory initiatives under the Tanasuq practice.
                </p>
              </div>
            </button>

          </div>
        </div>

        {/* Track Specific Context & Attribution Banner */}
        {activeTrack === 'principal' ? (
          <div className="mb-10 p-5 rounded-lg bg-[#F3EFEA] border border-[#171716]/12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#171716] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#171716] mb-1">
                  Principal Experience Attribution Notice
                </span>
                <p className="text-xs text-[#52504B] leading-relaxed max-w-[880px]">
                  {PRINCIPAL_EXPERIENCE_DISCLAIMER}
                </p>
              </div>
            </div>
            <a
              href="https://alaayoussef.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171716] underline underline-offset-4 shrink-0 self-start md:self-auto hover:opacity-80"
            >
              <span>Original Archive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <div className="mb-10 p-5 rounded-lg bg-[#EFEBE4] border border-[#171716]/12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Compass className="w-5 h-5 text-[#171716] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#171716] mb-1">
                  Tanasuq (تناسق) Practice Flagship Initiatives
                </span>
                <p className="text-xs text-[#52504B] leading-relaxed max-w-[880px]">
                  Curated flagship urban master planning and advisory studies authored under the Tanasuq independent practice. Founded on spatial balance, ecological sensitivity, and regional architectural identity across Oman, Saudi Arabia, and Egypt.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171716] text-white rounded text-xs font-medium shrink-0 self-start md:self-auto hover:bg-[#2F2E2C] transition-colors"
            >
              <span>Consult with Tanasuq</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Secondary Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#171716]/8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#9E9B94]">
            Filter {activeTrack === 'principal' ? 'Principal Commissions' : 'Tanasuq Initiatives'}:
          </div>

          <div className="flex items-center gap-1 p-1 bg-[#F3EFEA] border border-[#171716]/8 rounded overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#171716] shadow-xs font-semibold'
                  : 'text-[#6B6862] hover:text-[#171716]'
              }`}
            >
              All ({currentTrackProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('tourism')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                filter === 'tourism'
                  ? 'bg-white text-[#171716] shadow-xs font-semibold'
                  : 'text-[#6B6862] hover:text-[#171716]'
              }`}
            >
              Tourism & ITCs
            </button>
            <button
              type="button"
              onClick={() => setFilter('waterfront')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                filter === 'waterfront'
                  ? 'bg-white text-[#171716] shadow-xs font-semibold'
                  : 'text-[#6B6862] hover:text-[#171716]'
              }`}
            >
              Waterfront & Cities
            </button>
            <button
              type="button"
              onClick={() => setFilter('campus')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                filter === 'campus'
                  ? 'bg-white text-[#171716] shadow-xs font-semibold'
                  : 'text-[#6B6862] hover:text-[#171716]'
              }`}
            >
              Campus & Communities
            </button>
            <button
              type="button"
              onClick={() => setFilter('leisure')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                filter === 'leisure'
                  ? 'bg-white text-[#171716] shadow-xs font-semibold'
                  : 'text-[#6B6862] hover:text-[#171716]'
              }`}
            >
              Leisure & Theme Parks
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-lg border border-[#171716]/8 overflow-hidden flex flex-col hover:border-[#171716]/25 hover:shadow-md transition-all duration-300"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3EFEA]">
                <img
                  src={project.primaryImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Track Pill */}
                <div className="absolute top-3 left-3 bg-[#171716]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium">
                  {project.projectTrack === 'principal' ? 'Principal Experience' : 'Tanasuq Initiative'}
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-[#171716] border border-[#171716]/10 px-2.5 py-1 rounded text-xs font-semibold">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#6B6862] mb-3">
                  <span className="font-medium text-[#171716]">{project.client}</span>
                  <span aria-hidden="true" className="text-[#9E9B94]">·</span>
                  <span>{project.location}</span>
                </div>

                <h3 className="font-editorial text-2xl font-semibold text-[#171716] mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-[#5E5C56] leading-relaxed mb-5 flex-grow">
                  {project.summary}
                </p>

                {/* Key Outcomes Preview */}
                <div className="mb-5 space-y-1.5 text-xs text-[#6B6862] bg-[#FAF8F5] p-3 rounded border border-[#171716]/5">
                  <span className="block font-semibold text-[11px] uppercase tracking-wider text-[#171716] mb-1">
                    Key Outcomes:
                  </span>
                  {project.keyOutcomes.slice(0, 2).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#4A4843]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#171716] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Row */}
                <div className="pt-3 border-t border-[#171716]/6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#171716] border-b border-[#171716] pb-0.5 hover:opacity-75 transition-opacity cursor-pointer"
                  >
                    <span>View Full Study & Drawings</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.projectTrack === 'principal' ? (
                    <a
                      href={`https://alaayoussef.myportfolio.com/${project.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9E9B94] hover:text-[#171716] transition-colors p-1"
                      title="View on original Adobe Portfolio"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-[#9E9B94]">
                      Tanasuq
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
