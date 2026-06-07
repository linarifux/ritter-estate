import React, { useState, useRef } from 'react';

// Import the logo
import logoImg from '../assets/images/logo.png';
// Import the coastal video
import heroVideo from '../assets/videos/coastal.mp4';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-auto lg:h-[65vh] min-h-[550px] bg-[#050505] border-b border-[#c5a880]/20 overflow-hidden flex items-center">
      
      {/* Full-Width Background Video
        playsInline, autoPlay, and muted are required for the video to play automatically on all devices.
      */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Cinematic Gradients 
        Creates a dark shadow exclusively on the left side so the white text pops,
        while fading to completely transparent on the right so the coastal view is unobstructed.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent z-0 pointer-events-none" />

      {/* Left-Aligned Content Container
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-start justify-center">
        
        <div className="max-w-lg w-full flex flex-col items-start text-left animate-[float_10s_ease-in-out_infinite]">
          
          {/* Genesis Tier Pill
          <div className="bg-[#050505]/40 backdrop-blur-md border border-[#c5a880]/30 px-6 py-1.5 rounded-full mb-8 shadow-[0_0_20px_rgba(197,168,128,0.1)]">
            <span className="font-serif text-[8px] tracking-[0.6em] text-[#c5a880] uppercase whitespace-nowrap">Genesis Tier</span>
          </div> */}

          {/* Brand Logo - Inverted to crisp white with a gentle drop shadow */}
          <img 
            src={logoImg} 
            alt="Ritter Estate" 
            className="w-full max-w-[220px] sm:max-w-[280px] h-auto object-contain mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] brightness-0 invert opacity-95"
          />

          <p className="font-serif italic text-[14px] sm:text-[16px] text-[#c5a880] tracking-[0.2em] mb-5 drop-shadow-md">
            where old world tradition meets coastal elegance
          </p>
          
          <p className="text-[11px] sm:text-[13px] text-[#e8dfd3]/80 tracking-[0.2em] font-light leading-[2.2] mb-10 drop-shadow-md max-w-md">
            An authentic lifestyle brand rooted in heritage, craftsmanship, and the raw beauty of the Pacific coast.
          </p>

          {/* Champagne Gold CTA Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a880]/0 via-[#c5a880]/30 to-[#c5a880]/0 blur-lg opacity-0 group-hover:opacity-100 transition duration-1000 rounded-sm" />
            <a 
              href="#kickstarter" 
              className="relative inline-flex items-center justify-center bg-[#050505]/40 backdrop-blur-sm border border-[#c5a880]/50 text-[#f4f2ee] uppercase text-[9px] sm:text-[10px] tracking-[0.4em] font-medium px-10 py-4 transition-all duration-700 group-hover:bg-[#c5a880] group-hover:text-[#050505] group-hover:border-[#c5a880] rounded-sm shadow-xl"
            >
              Back Us On Kickstarter
            </a>
          </div>

        </div>
      </div>

      {/* Luxurious Audio Toggle
        Placed elegantly in the bottom right corner to allow users to opt-in to the sound of the waves.
      */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20">
        <button 
          onClick={toggleMute}
          className="group flex items-center gap-3 bg-[#050505]/40 backdrop-blur-md border border-[#c5a880]/30 px-5 py-2.5 rounded-full transition-all duration-700 hover:border-[#c5a880] hover:bg-[#c5a880]/10 shadow-lg"
          aria-label={isMuted ? "Unmute waves" : "Mute waves"}
        >
          <div className="flex items-end gap-[2px] h-3">
            <span className={`w-[2px] bg-[#c5a880] transition-all duration-300 ${isMuted ? 'h-[2px]' : 'h-full animate-pulse'}`} />
            <span className={`w-[2px] bg-[#c5a880] transition-all duration-300 ${isMuted ? 'h-[2px]' : 'h-2/3 animate-pulse delay-75'}`} />
            <span className={`w-[2px] bg-[#c5a880] transition-all duration-300 ${isMuted ? 'h-[2px]' : 'h-full animate-pulse delay-150'}`} />
            <span className={`w-[2px] bg-[#c5a880] transition-all duration-300 ${isMuted ? 'h-[2px]' : 'h-1/2 animate-pulse delay-200'}`} />
          </div>
          <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[#e8dfd3] group-hover:text-[#c5a880] transition-colors duration-500">
            {isMuted ? 'Experience Audio' : 'Mute Waves'}
          </span>
        </button>
      </div>

    </section>
  );
}