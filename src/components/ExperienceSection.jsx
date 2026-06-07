import React from 'react';

// Import your local experience images here so the bundler processes them
import gatheringImg from '../assets/experience/evening-gathering.png';
import pouringImg from '../assets/experience/pouring-wine.png';

export default function ExperienceSection() {
  return (
    <section className="relative py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] overflow-hidden flex items-center justify-center border-b border-[#c5a880]/10">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a880]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">

        {/* LEFT: Emotional Image Collage */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] group lg:pr-12">
          
          {/* Main Emotional Shot (Background/Large) */}
          <div className="absolute top-0 left-0 w-[85%] h-[80%] overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10 border border-white/5 bg-[#0a0a0a]">
            <img
              src={gatheringImg}
              alt="Evening gathering"
              className="w-full h-full object-cover grayscale-[20%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3000ms] ease-out"
            />
            {/* Cinematic color grade overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/60 to-transparent pointer-events-none" />
          </div>

          {/* Intimate Detail Shot (Foreground/Overlapping) */}
          <div className="absolute bottom-0 right-0 w-[65%] h-[55%] overflow-hidden rounded-sm shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-20 border border-[#c5a880]/20 bg-[#0a0a0a]">
            <img
              src={pouringImg}
              alt="Pouring wine"
              className="w-full h-full object-cover grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3000ms] ease-out delay-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Decorative Minimalist Circle */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#c5a880]/20 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none border-dashed z-0" />
        </div>

        {/* RIGHT: Typography & Text Content */}
        <div className="flex flex-col items-start text-left lg:-ml-12 relative z-30">
          
          {/* Glassmorphic backplate for text readability when it overlaps the images */}
          <div className="p-8 sm:p-12 lg:p-16 bg-[#050505]/60 backdrop-blur-2xl border border-white/5 rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
            
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#c5a880] block mb-8">
              The Invitation
            </span>
            
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] text-[#f4f2ee] tracking-wide uppercase leading-[1.1] mb-8 drop-shadow-xl">
              Hospitality &<br/> Sovereign<br/> Gatherings
            </h2>
            
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#c5a880] to-transparent mb-10" />
            
            <p className="text-[12px] sm:text-[14px] text-[#e8dfd3]/70 tracking-[0.2em] font-light leading-[2.2] max-w-lg mb-10">
              Ritter Estate isn’t just local output—it’s an invitation to pause. From seaside culinary pop-ups to open-air tastings held under historical architecture, we are crafting spaces for community, genuine epicurean discovery, and memories that outlast the evening.
            </p>

            <p className="font-serif italic text-xl sm:text-2xl text-[#c5a880] leading-relaxed drop-shadow-md">
              "Where time slows down, and every glass holds a story."
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}