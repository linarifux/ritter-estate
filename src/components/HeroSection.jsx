import React, { useState, useEffect } from 'react';

export default function HeroSection({ slideImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);

  return (
    <section className="relative min-h-screen flex flex-col-reverse lg:flex-row w-full bg-[#080808] border-b border-white/5">
      {/* LEFT HALF: Text Content & Call to Action */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-16 py-20 lg:py-0 relative z-10 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1917_0%,transparent_70%)] pointer-events-none opacity-40" />

        <div className="max-w-xl w-full flex flex-col items-center text-center relative z-10 animate-[float_10s_ease-in-out_infinite]">
          <div className="bg-[#0a0a0a] border border-[#c5a880]/30 px-10 py-2.5 rounded-full mb-10 shadow-lg">
            <span className="font-serif text-[9px] tracking-[0.6em] text-[#c5a880] uppercase whitespace-nowrap">Ritter Estate</span>
          </div>

          <p className="font-serif italic text-[13px] sm:text-[15px] text-[#c5a880] tracking-[0.2em] mb-6 drop-shadow-md">
            where old world tradition meets california living
          </p>
          
          <h1 className="font-serif text-[clamp(3.5rem,5vw,5.5rem)] text-[#f4f2ee] tracking-widest uppercase leading-[1.05] mb-6 select-none drop-shadow-2xl">
            RITTER<br/>ESTATE
          </h1>
          
          <p className="text-[12px] sm:text-[13px] text-[#e8dfd3]/80 tracking-[0.2em] font-light leading-[2] mb-12 drop-shadow-md">
            An authentic lifestyle brand rooted in heritage, craftsmanship,<br className="hidden md:block"/> and the raw beauty of the Pacific coast.
          </p>

          <div className="relative group mb-16">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c5a880]/0 via-[#c5a880]/30 to-[#c5a880]/0 blur-md opacity-0 group-hover:opacity-100 transition duration-1000 rounded-sm" />
            <a 
              href="#kickstarter" 
              className="relative inline-block bg-[#0a0a0a] border border-[#c5a880]/40 text-[#e8dfd3] uppercase text-[9px] sm:text-[10px] tracking-[0.4em] font-medium px-10 sm:px-12 py-5 transition-all duration-700 group-hover:bg-[#c5a880] group-hover:text-[#080808] group-hover:border-[#c5a880] rounded-sm shadow-xl"
            >
              Back Us On Kickstarter
            </a>
          </div>

          <div className="flex items-center gap-6">
            {slideImages.map((_, idx) => (
              <div 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className="flex flex-col items-center gap-3 cursor-pointer group py-2"
              >
                <span className={`font-sans text-[10px] tracking-[0.3em] transition-colors duration-700 ${idx === currentSlide ? 'text-[#c5a880]' : 'text-white/30 group-hover:text-white/80'}`}>
                  0{idx + 1}
                </span>
                <div className="relative h-[1px] w-6 overflow-hidden bg-white/10">
                  <div className={`absolute top-0 left-0 h-full bg-[#c5a880] transition-transform duration-[1000ms] ease-out w-full origin-left ${idx === currentSlide ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50 group-hover:bg-white/50'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT HALF: Image Slider */}
      <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-screen overflow-hidden lg:border-l lg:border-[#c5a880]/10 bg-[#0a0a0a]">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-out bg-cover bg-center ${
              index === currentSlide 
                ? 'opacity-100 scale-100 z-0' 
                : 'opacity-0 scale-105 z-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#080808_120%)] z-10 pointer-events-none" />

        <button 
          onClick={prevSlide} 
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#c5a880] hover:border-[#c5a880]/60 hover:scale-105 transition-all duration-500 bg-[#080808]/40 backdrop-blur-md shadow-xl"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-4 h-4 -ml-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#c5a880] hover:border-[#c5a880]/60 hover:scale-105 transition-all duration-500 bg-[#080808]/40 backdrop-blur-md shadow-xl"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-4 h-4 ml-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </button>
      </div>
    </section>
  );
}