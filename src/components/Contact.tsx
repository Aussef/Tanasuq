import React, { useState, useEffect } from 'react';
import { Mail, MapPin, CheckCircle } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/projectsData';

interface ContactProps {
  initialScope?: {
    discipline: string;
    budgetTier: string;
    note: string;
  } | null;
}

export const Contact: React.FC<ContactProps> = ({ initialScope }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    discipline: '',
    projectScale: 'Regional District (50 – 250 Hectares)',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        discipline: initialScope.discipline || prev.discipline,
        message: prev.message ? prev.message : initialScope.note,
      }));
    }
  }, [initialScope]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.discipline) errs.discipline = 'Please select the required master planning service.';
    if (!formData.message.trim()) errs.message = 'Please provide a brief outline of the master plan.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#171716]/8 bg-[#FBFBFA]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">
          
          {/* Coordinates */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest text-[#9E9B94] mb-3">
              Initiate Consultation
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171716] leading-tight mb-5">
              Direct Advisory with Dr. Alaa Youssef.
            </h2>
            <p className="text-base text-[#5E5C56] leading-relaxed mb-10">
              Dr. Alaa Youssef personally reviews all inquiries regarding territorial master plans, Integrated Tourism Complexes (ITC) peer review, statutory audits, and campus urban design.
            </p>

            <div className="space-y-6">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#9E9B94] mb-1">
                  Direct Correspondence Email
                </span>
                <a
                  href={`mailto:${DOCTOR_PROFILE.email}`}
                  className="text-base sm:text-lg font-medium text-[#171716] hover:opacity-75 transition-opacity"
                >
                  {DOCTOR_PROFILE.email}
                </a>
              </div>

              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#9E9B94] mb-1">
                  Practice Locations
                </span>
                <div className="text-sm text-[#5E5C56] space-y-1">
                  <p>Muscat, Sultanate of Oman</p>
                  <p>Cairo, Arab Republic of Egypt</p>
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#9E9B94] mb-1">
                  Advisory Protocol
                </span>
                <p className="text-sm text-[#5E5C56]">
                  Direct consultations for statutory authorities, master developers, and international design teams.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl border border-[#171716]/8">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#F0FDF4] text-[#166534] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl font-semibold text-[#171716]">
                  Advisory Inquiry Dispatched
                </h3>
                <p className="text-sm text-[#5E5C56] max-w-[420px] mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#171716]">{formData.name}</strong>. Dr. Alaa Youssef has received your project briefing and will respond to <span className="font-mono text-xs">{formData.email}</span> within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      organization: '',
                      discipline: '',
                      projectScale: 'Regional District (50 – 250 Hectares)',
                      location: '',
                      message: '',
                    });
                  }}
                  className="mt-4 text-xs font-medium text-[#171716] underline underline-offset-4 cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-client-name" className="block text-xs font-semibold text-[#171716] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="form-client-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eng. Tariq Al-Husseini"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBFA] border border-[#171716]/15 rounded focus:border-[#171716] focus:outline-none"
                    />
                    {errors.name && <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="form-client-email" className="block text-xs font-semibold text-[#171716] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="form-client-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. info@development-authority.om"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBFA] border border-[#171716]/15 rounded focus:border-[#171716] focus:outline-none"
                    />
                    {errors.email && <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-client-organization" className="block text-xs font-semibold text-[#171716] mb-1.5">
                      Organization / Authority
                    </label>
                    <input
                      id="form-client-organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Ministry / Engineering Consultant / Developer"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBFA] border border-[#171716]/15 rounded focus:border-[#171716] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-discipline" className="block text-xs font-semibold text-[#171716] mb-1.5">
                      Required Service *
                    </label>
                    <select
                      id="form-discipline"
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBFA] border border-[#171716]/15 rounded focus:border-[#171716] focus:outline-none"
                    >
                      <option value="" disabled>Select primary focus</option>
                      <option value="Integrated Tourism Complexes (ITC) & Master Planning">Integrated Tourism Complexes (ITC) & Master Planning</option>
                      <option value="Waterfront & Coastal Master Planning">Waterfront & Coastal Master Planning</option>
                      <option value="Campus & Community Master Planning">Campus & Community Master Planning</option>
                      <option value="Master Plan Peer Review & Coordination">Master Plan Peer Review & Coordination</option>
                    </select>
                    {errors.discipline && <span className="text-[11px] text-red-600 mt-1 block">{errors.discipline}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-scale" className="block text-xs font-semibold text-[#171716] mb-1.5">
                      Development Scale
                    </label>
                    <select
                      id="form-scale"
                      value={formData.projectScale}
                      onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBFA] border border-[#171716]/15 rounded focus:border-[#171716] focus:outline-none"
                    >
                      <option value="Focused Parcel (< 50 Hectares)">Focused Parcel (&lt; 50 Hectares)</option>
                      <option value="Regional District (50 – 250 Hectares)">Regional District (50 – 250 Hectares)</option>
                      <option value="Territorial Mega-Development (> 250 Hectares)">Territorial Mega-Development (&gt; 250 Hectares)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-location" className="block text-xs font-semibold text-[#171716] mb-1.5">
                      Country / Territory
                    </label>
                    <input
                      id="form-location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Oman, Egypt, Saudi Arabia, UAE, Morocco"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBFA] border border-[#171716]/15 rounded focus:border-[#171716] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-client-message" className="block text-xs font-semibold text-[#171716] mb-1.5">
                    Brief Master Plan Overview *
                  </label>
                  <textarea
                    id="form-client-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the site location, current master planning status, or statutory review requirements..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FBFBFA] border border-[#171716]/15 rounded focus:border-[#171716] focus:outline-none resize-y"
                  />
                  {errors.message && <span className="text-[11px] text-red-600 mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#171716] hover:bg-[#2F2E2C] text-white text-xs font-medium rounded transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Dispatching Brief to Dr. Alaa Youssef...' : 'Submit Consultation Request'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
