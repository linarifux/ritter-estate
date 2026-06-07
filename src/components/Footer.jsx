import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 text-center bg-[#050505] border-t border-white/5">
      <p className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-light">
        © {new Date().getFullYear()} Ritter Estate. All Rights Reserved.<br className="sm:hidden mt-4"/> <span className="hidden sm:inline"> | </span> Crafted for Gathering.
      </p>
    </footer>
  );
}