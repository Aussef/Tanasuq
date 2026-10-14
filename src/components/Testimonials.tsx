import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Dr. Alaa Youssef’s ability to coordinate complex spatial conflicts between international master planning concepts and lead infrastructure engineering on Marassi was instrumental in delivering an executable master plan.',
      author: 'Senior Executive Directorate',
      role: 'Arab Consulting Engineers (ACE Moharram Bakhoum) / Emaar Coastal Works',
    },
    {
      quote:
        'His statutory audits and master plan revisions for Integrated Tourism Complexes across Oman established clear development control standards, safeguarding our cultural identity while unlocking premier international investments.',
      author: 'Directorate General of Tourism Planning',
      role: 'Ministry of Heritage and Tourism, Sultanate of Oman',
    },
    {
      quote:
        'Dr. Youssef brings both deep academic rigor from Cairo University and decades of real-world site planning instinct on complex topography like King Khaled University in Abha.',
      author: 'Master Planning Division Lead',
      role: 'Zuhair Fayez Partnership (KSA Campus Planning)',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        
        <div className="max-w-[760px] mb-14">
          <span className="block text-xs font-semibold uppercase tracking-widest text-[#9E9B94] mb-3">
            Institutional Provenance
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#171716] leading-tight">
            Trusted by government ministries & premier consultancies.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className="bg-white p-8 rounded-lg border border-[#171716]/8 flex flex-col justify-between"
            >
              <p className="font-editorial text-lg text-[#171716] leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <footer className="border-t border-[#171716]/6 pt-4">
                <cite className="not-italic block font-semibold text-xs text-[#171716]">
                  {t.author}
                </cite>
                <span className="text-[11px] text-[#6B6862]">
                  {t.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
};
