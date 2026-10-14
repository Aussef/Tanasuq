/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Works } from './components/Works';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SourceCodeModal } from './components/SourceCodeModal';
import { QualificationsModal } from './components/QualificationsModal';
import { DOCTOR_PROFILE } from './data/projectsData';
import type { Project } from './types';
import { Download, Award } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);
  const [isQualModalOpen, setIsQualModalOpen] = useState(false);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleOpenQualifications = () => {
    setIsQualModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#171716] flex flex-col font-sans selection:bg-[#EAE5DC]">
      
      {/* Top Banner with Portfolio Sync Notice */}
      <div className="bg-[#171716] text-[#EFECE6] px-4 py-2.5 text-xs border-b border-white/10">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-medium text-white">
              Official Portfolio Live:
            </span>
            <span className="text-[#A3A09A]">
              Integrated from <strong className="text-white">alaayoussef.myportfolio.com</strong> ({DOCTOR_PROFILE.fullName}, PhD)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenQualifications}
              className="inline-flex items-center gap-1 text-xs text-[#D1CFCA] hover:text-white underline underline-offset-4 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Key Qualifications</span>
            </button>
            <span className="text-white/20">|</span>
            <a
              href="/tanasuq-website.zip"
              download="tanasuq-website.zip"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#171716] bg-white hover:bg-[#EFECE6] rounded transition-colors"
            >
              <Download className="w-3 h-3" />
              <span>Download ZIP Package</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <Header
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
        onOpenQualifications={handleOpenQualifications}
      />

      {/* Main Site Sections */}
      <main className="flex-grow">
        <Hero onOpenQualifications={handleOpenQualifications} />
        <About onOpenQualifications={handleOpenQualifications} />
        <Philosophy />
        <Works onSelectProject={handleSelectProject} />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
        onOpenQualifications={handleOpenQualifications}
      />

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <QualificationsModal
        isOpen={isQualModalOpen}
        onClose={() => setIsQualModalOpen(false)}
      />

      <SourceCodeModal
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
      />

    </div>
  );
}
