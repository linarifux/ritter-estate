import React from 'react';
import clubImg from '../assets/images/club.jpeg';

export default function PhilosophySection() {
  return (
    <section className="relative py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* --- PART 1: The Core Philosophy --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start relative z-10">
        <div className="lg:col-span-5 space-y-10">
          <div className="inline-flex items-center gap-6">
            <div className="w-12 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a880]">Our Philosophy</span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-[#e8dfd3] tracking-wide leading-[1.15]">
            Old World Soul.<br />
            <span className="text-[#c5a880] italic text-[clamp(2.2rem,3.5vw,3.5rem)]">California Sky.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-10 text-[#e8dfd3]/60 font-light leading-[2.2] tracking-wide text-sm sm:text-base md:pl-16 lg:border-l lg:border-[#c5a880]/10">
          <p className="text-[#f4f2ee] font-serif text-2xl sm:text-3xl leading-relaxed drop-shadow-sm">
            "We believe a true estate doesn't just harvest bottles—it curates an exquisite rhythm of life."
          </p>
          <p>
            Born from an enduring reverence for European heritage and the free spirit of the California coast, Ritter Estate bridges generations of craftsmanship. We weave modern hospitality with old-world soil to build spaces, flavors, and moments meant to be savored slowly.
          </p>
        </div>
      </div>


      {/* --- PART 2: The Social Club Expansion --- */}
      <div className="mt-32 sm:mt-48 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        
        {/* Left Side: The Image with offset architectural frame */}
        <div className="lg:col-span-7 relative group">
          
          {/* Decorative Offset Outline Frame */}
          <div className="absolute -inset-4 sm:-inset-6 border border-[#c5a880]/20 pointer-events-none -z-10 translate-y-6 -translate-x-4 sm:-translate-x-6 transition-transform duration-1000 group-hover:translate-y-4 group-hover:-translate-x-4" />
          
          {/* Main Image Container */}
          <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-sm bg-[#0a0a0a] relative shadow-2xl">
            <img 
              src={clubImg} 
              alt="Ritter Social Club" 
              className="w-full h-full object-cover grayscale-[25%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[3000ms] ease-out transform scale-100 group-hover:scale-105"
            />
            {/* Inner Vignette for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent opacity-60" />
          </div>
        </div>

        {/* Right Side: The Club Texts */}
        <div className="lg:col-span-5 space-y-8 lg:pl-10">
          <div className="inline-flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a880]">The Social Club</span>
            <div className="w-12 h-[1px] bg-[#c5a880]" />
          </div>
          
          <h3 className="font-serif text-3xl sm:text-4xl text-[#f4f2ee] tracking-wide leading-snug">
            Where the Evening <br />
            <span className="text-[#c5a880] italic">Takes Shape.</span>
          </h3>
          
          <div className="space-y-6 text-[#e8dfd3]/60 font-light leading-[2.2] tracking-wide text-sm sm:text-base">
            <p>
              As the sun dips beneath the horizon, the estate transforms. The Ritter Social Club is a sanctuary for the modern epicurean—a space where time slows down, and conversations linger long after the last pour.
            </p>
            <p>
              Beyond our vineyards, we cultivate a community of tastemakers. With exclusive access to limited-release vintages, private dining events, and curated cultural programming, our members hold the keys to the most guarded experiences of the estate.
            </p>
          </div>

          {/* Minimalist Link */}
          <div className="pt-6">
            <a 
              href="#kickstarter" 
              className="inline-flex items-center gap-4 text-[#f4f2ee] uppercase text-[9px] tracking-[0.4em] font-medium transition-all duration-500 hover:text-[#c5a880] group/link"
            >
              <span className="border-b border-transparent group-hover/link:border-[#c5a880] transition-colors duration-300 pb-1">Discover Membership</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}