import React, { useState, useEffect } from 'react';

// 1. Local Image Imports
import imgWineBottles from '../assets/images/wine-bottles.jpeg';
import imgJars from '../assets/images/jars.jpeg';
import imgBackground from '../assets/images/background.jpeg';
import bottles from '../assets/images/bottles.jpeg';
import club from '../assets/images/club.jpeg';
import honey from '../assets/images/honey.jpeg';
import food from '../assets/images/food.jpeg';

export default function RitterEstateLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [
    imgWineBottles,
    imgJars,
    imgBackground,
    bottles, 
    club,
    honey,
    food
  ];

  // Auto-advance slides smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);

  return (
    <div className="bg-[#080808] text-[#f4f2ee] font-sans antialiased overflow-x-hidden selection:bg-[#c5a880]/30 selection:text-[#e8dfd3] scroll-smooth">
      
      {/* 1. HERO SECTION - Side by Side Split Layout */}
      <section className="relative min-h-screen flex flex-col-reverse lg:flex-row w-full bg-[#080808] border-b border-white/5">
        
        {/* LEFT HALF: Text Content & Call to Action */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-16 py-20 lg:py-0 relative z-10 bg-[#080808]">
          
          {/* Subtle background glow behind the text */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1917_0%,transparent_70%)] pointer-events-none opacity-40" />

          <div className="max-w-xl w-full flex flex-col items-center text-center relative z-10 animate-[float_10s_ease-in-out_infinite]">
            
            {/* Brand Pill */}
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

            {/* Glowing CTA Button */}
            <div className="relative group mb-16">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c5a880]/0 via-[#c5a880]/30 to-[#c5a880]/0 blur-md opacity-0 group-hover:opacity-100 transition duration-1000 rounded-sm" />
              <a 
                href="#kickstarter" 
                className="relative inline-block bg-[#0a0a0a] border border-[#c5a880]/40 text-[#e8dfd3] uppercase text-[9px] sm:text-[10px] tracking-[0.4em] font-medium px-10 sm:px-12 py-5 transition-all duration-700 group-hover:bg-[#c5a880] group-hover:text-[#080808] group-hover:border-[#c5a880] rounded-sm shadow-xl"
              >
                Back Us On Kickstarter
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT HALF: Image Slider */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-screen overflow-hidden lg:border-l lg:border-[#c5a880]/10 bg-[#0a0a0a]">
          
          {/* Flawless Background Fade - Slower, cinematic Ken Burns effect */}
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
          
          {/* Soft vignette overlay to blend edges into the dark theme */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#080808_120%)] z-10 pointer-events-none" />

          {/* Inner Circular Navigation Arrows */}
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


      {/* 2. BRAND PHILOSOPHY - Refined Spacing & Rhythm */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
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
      </section>


      {/* 3. PRODUCT WORLD GRID - Flawless Micro-interactions */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] relative border-y border-[#c5a880]/10">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col items-center text-center mb-24 sm:mb-40">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#c5a880] mb-6">The Collection</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#f4f2ee] tracking-widest uppercase mb-8 drop-shadow-lg">Product World</h2>
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#c5a880]/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
            {[
              { title: "Fine Wine Estates", sub: "01 / Curated Vintages", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80" },
              { title: "Sealed Wine Cups", sub: "02 / Ready Coastal Rituals", img: "https://images.unsplash.com/photo-1516594918697-573678894f9e?auto=format&fit=crop&w=800&q=80", offset: "md:translate-y-16" },
              { title: "Artisanal Pantry", sub: "03 / Infused & Preserved", img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80", offset: "lg:translate-y-32" },
              { title: "Stone-Ground Chocolates", sub: "04 / Cacao Confections", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80", offset: "lg:-translate-y-16" },
              { title: "Home & Living", sub: "05 / Tactile Aesthetics", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" },
              { title: "Curated Merchandise", sub: "06 / Signature Artifacts", img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=800&q=80", offset: "md:translate-y-16 lg:translate-y-16" },
            ].map((item, idx) => (
              <div key={idx} className={`group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#0a0a0a] shadow-2xl ${item.offset || ''}`}>
                
                {/* Ultra-slow zoom on hover */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[30%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[3000ms] ease-out transform scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90 transition-opacity duration-1000 group-hover:opacity-60" />
                
                {/* Elevated Smoked Glass Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[800ms] ease-out">
                  <div className="backdrop-blur-xl bg-[#121110]/70 border border-[#c5a880]/30 p-6 rounded-sm flex flex-col gap-3 shadow-[0_-20px_50px_rgba(0,0,0,0.6)]">
                    <span className="text-[9px] tracking-[0.4em] text-[#c5a880] uppercase font-semibold">{item.sub}</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#f4f2ee] tracking-wide">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. THE EXPERIENCE - High Contrast Cinematic Scale */}
      <section className="relative py-40 sm:py-56 px-6 sm:px-12 flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=2000&q=80" 
            alt="Estate Gathering" 
            className="w-full h-full object-cover grayscale-[60%] opacity-30 brightness-50 object-center"
          />
          <div className="absolute inset-0 bg-[#080808]/60 backdrop-blur-[2px]" />
        </div>

        {/* Floating Centerpiece */}
        <div className="relative z-10 max-w-5xl w-full p-12 sm:p-24 text-center bg-[#080808]/40 backdrop-blur-3xl border border-white/5 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#c5a880] block mb-8">The Invitation</span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#f4f2ee] tracking-wide uppercase leading-[1.1] mb-10 drop-shadow-xl">
            Hospitality &<br/> Sovereign Gatherings
          </h2>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#c5a880]/60 to-transparent mx-auto mb-10" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#e8dfd3]/80 tracking-widest font-light leading-[2.2]">
            Ritter Estate isn’t just local output—it’s an invitation to pause. From seaside culinary pop-ups to open-air tastings held under historical architecture, we are crafting spaces for community and epicurean discovery.
          </p>
        </div>
      </section>


      {/* 5. EMAIL SIGNUP & KICKSTARTER - Robust Form UI */}
      <section id="kickstarter" className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#c5a880]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-20">
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#f4f2ee] tracking-widest uppercase mb-8 drop-shadow-md">
              Join the Genesis Tier
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#e8dfd3]/60 tracking-[0.2em] font-light max-w-xl mx-auto leading-[2.2]">
              We are launching exclusively via Kickstarter. Secure allocation keys for early batch releases and lifetime tier invitations.
            </p>
          </div>

          {/* Luxury Form Hub */}
          <div className="p-10 sm:p-20 border border-[#c5a880]/20 bg-[#121110]/50 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] rounded-sm relative group transition-all duration-1000 hover:border-[#c5a880]/40">
            
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a880] block mb-12 flex items-center justify-center gap-6">
              <span className="w-16 h-[1px] bg-[#c5a880]/30" />
              Campaign Launching Imminently
              <span className="w-16 h-[1px] bg-[#c5a880]/30" />
            </span>
            
            {/* Robust Input Group */}
            <form className="flex flex-col sm:flex-row justify-center items-stretch gap-0 max-w-3xl mx-auto shadow-2xl rounded-sm focus-within:ring-1 focus-within:ring-[#c5a880]/50 transition-shadow duration-500" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email for launch alerts" 
                className="flex-1 bg-[#080808]/80 backdrop-blur-md border border-[#c5a880]/30 sm:border-r-0 text-[#e8dfd3] px-8 py-6 text-[11px] sm:text-[13px] tracking-widest font-light focus:outline-none focus:bg-[#151413] transition-colors placeholder:text-white/20 rounded-t-sm sm:rounded-l-sm sm:rounded-tr-none"
                required
              />
              <button type="submit" className="bg-[#c5a880] text-[#050505] uppercase text-[10px] sm:text-[11px] tracking-[0.4em] font-bold px-12 py-6 transition-all duration-500 hover:bg-[#e8dfd3] whitespace-nowrap rounded-b-sm sm:rounded-r-sm sm:rounded-bl-none hover:shadow-[0_0_30px_rgba(197,168,128,0.5)]">
                Notify Me
              </button>
            </form>

            <div className="mt-16 pt-16 border-t border-white/5">
              <a 
                href="https://kickstarter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 text-[#f4f2ee] uppercase text-[10px] sm:text-[11px] tracking-[0.5em] font-medium transition-all duration-500 hover:text-[#c5a880] group/link"
              >
                <span>Preview Our Kickstarter Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 transform group-hover/link:translate-x-3 transition-transform duration-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center bg-[#050505] border-t border-white/5">
        <p className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-light">
          © {new Date().getFullYear()} Ritter Estate. All Rights Reserved.<br className="sm:hidden mt-4"/> <span className="hidden sm:inline"> | </span> Crafted for Gathering.
        </p>
      </footer>

    </div>
  );
}