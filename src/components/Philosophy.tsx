import React from 'react';

export const Philosophy: React.FC = () => {
  const principles = [
    {
      num: '01.',
      title: 'Topographic & Contextual Rigor',
      description: 'Master planning must begin with the natural geology, wadis, and coastal wind patterns. We design stepped contours in mountainous terrain and preserved coastal setback zones that protect visual horizons.',
    },
    {
      num: '02.',
      title: 'Multi-Consultant Integration',
      description: 'Master plans fail when design vision and infrastructure engineering diverge. Having coordinated between WATG and ACE on Marassi, Dr. Youssef specializes in resolving land use conflicts before ground is broken.',
    },
    {
      num: '03.',
      title: 'ITC & Mega-Tourism Governance',
      description: 'Drawing from senior advisory tenure at Oman’s Ministry of Tourism, our frameworks balance high-yield hospitality investment with statutory public beach access, cultural identity, and sustainable density limits.',
    },
    {
      num: '04.',
      title: 'Pedestrian Dignity & Microclimates',
      description: 'Whether in Abha’s mountain breezes, Muscat’s coastal bluffs, or Marrakech’s medinas, communities thrive when vehicular traffic is tamed, providing continuous shaded pedestrian spines and vibrant civic plazas.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 bg-[#F3EFEA] border-y border-[#171716]/8">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        
        <div className="max-w-[800px] mb-14">
          <span className="block text-xs font-semibold uppercase tracking-widest text-[#9E9B94] mb-3">
            The Planning Ethos
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171716] leading-tight mb-4">
            Order, proportion & context at the territorial scale.
          </h2>
          <p className="text-base sm:text-lg text-[#5E5C56] leading-relaxed">
            The Arabic principle of <em>Tanasuq</em> (تناسق) guides every scale of Dr. Alaa Youssef’s work — from territorial regional master plans to parcel subdivision and street corridor sections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => (
            <div
              key={item.num}
              className="bg-[#FFFFFF] p-7 rounded-lg border border-[#171716]/8 flex flex-col justify-between"
            >
              <div>
                <span className="block text-xs font-semibold text-[#9E9B94] font-mono mb-6">
                  {item.num}
                </span>
                <h3 className="text-base font-semibold text-[#171716] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6862] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
