import React from 'react';

// Import local product images
import imgWineBottles from '../assets/products/wine-bottles.jpeg';
import imgSealedCups from '../assets/products/bottles.jpeg';
import imgPantry from '../assets/products/honey.jpeg';
import imgChocolates from '../assets/products/chockolates.png';
import imgHomeLiving from '../assets/products/image5.png';
import imgMerch from '../assets/products/tshirts.png';

export default function ProductGridSection() {
  const products = [
    { 
      title: "Fine Wine Estates", 
      sub: "01 / Curated Vintages", 
      img: imgWineBottles 
    },
    { 
      title: "Sealed Wine Cups", 
      sub: "02 / Ready Coastal Rituals", 
      img: imgSealedCups, 
      offset: "md:translate-y-16" 
    },
    { 
      title: "Artisanal Pantry", 
      sub: "03 / Infused & Preserved", 
      img: imgPantry, 
      offset: "lg:translate-y-32" 
    },
    { 
      title: "Stone-Ground Chocolates", 
      sub: "04 / Cacao Confections", 
      img: imgChocolates, 
      offset: "lg:-translate-y-16" 
    },
    { 
      title: "Home & Living", 
      sub: "05 / Tactile Aesthetics", 
      img: imgHomeLiving 
    },
    { 
      title: "Curated Merchandise", 
      sub: "06 / Signature Artifacts", 
      img: imgMerch, 
      offset: "md:translate-y-16 lg:translate-y-16" 
    },
  ];

  return (
    <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] relative border-y border-[#c5a880]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 sm:mb-40">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#c5a880] mb-6">The Collection</span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#f4f2ee] tracking-widest uppercase mb-8 drop-shadow-lg">Product World</h2>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#c5a880]/60 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
          {products.map((item, idx) => (
            <div key={idx} className={`group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#0a0a0a] shadow-2xl ${item.offset || ''}`}>
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-[30%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[3000ms] ease-out transform scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90 transition-opacity duration-1000 group-hover:opacity-60" />
              
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
  );
}