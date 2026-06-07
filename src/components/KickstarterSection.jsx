import React from 'react';

export default function KickstarterSection() {
  return (
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

        <div className="p-10 sm:p-20 border border-[#c5a880]/20 bg-[#121110]/50 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] rounded-sm relative group transition-all duration-1000 hover:border-[#c5a880]/40">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a880] block mb-12 flex items-center justify-center gap-6">
            <span className="w-16 h-[1px] bg-[#c5a880]/30" />
            Campaign Launching Imminently
            <span className="w-16 h-[1px] bg-[#c5a880]/30" />
          </span>
          
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
  );
}