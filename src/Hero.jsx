import { useLanguage } from './LanguageContext';
import React from 'react';
import heroBg from './assets/hero-bg.jpg.jpeg';

export default function Hero() {
  const { t } = useLanguage();

  if (!t || !t.hero) return null;

  return (
    <section id="inicio" className="max-w-[1500px] mx-auto min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2">
      {/* Lado Izquierdo con imagen institucional de fondo */}
      <div 
        className="relative text-white p-8 sm:p-14 xl:p-20 flex flex-col justify-between overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 18, 21, 0.88), rgba(17, 18, 21, 0.94)), url(${heroBg})`
        }}
      >
        <div className="relative z-10 pt-4 space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-[1px] bg-[#C29B61]"></span>
            <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium">
              {t.hero.tagline}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif leading-[1.15] tracking-tight font-medium">
            {t.hero.tituloPrincipal}
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-light leading-relaxed">
            {t.hero.descripcion}
          </p>
        </div>

        <div className="relative z-10 pt-12 flex flex-wrap gap-4 items-center">
          <a
            href="#areas"
            className="border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-semibold px-6 py-4 flex items-center gap-3 transition"
          >
            {t.hero.botonFirma}
            <span className="text-sm">→</span>
          </a>

          <a
            href="#mediacion"
            className="bg-[#C29B61] hover:bg-[#b08b53] text-white text-xs uppercase tracking-widest font-semibold px-6 py-4 flex items-center gap-2 transition"
          >
            {t.hero.botonMediacion}
          </a>
        </div>
      </div>

      {/* Lado Derecho con textura geométrica animada tipo oleaje */}
      <div className="relative overflow-hidden bg-white p-8 sm:p-14 xl:p-20 flex flex-col justify-between border-l border-neutral-200">
        {/* Capa animada de textura en el fondo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-textura-lugolex pointer-events-none"
        ></div>

        {/* Contenido principal por encima de la textura */}
        <div className="relative z-10 max-w-xl pt-4">
          <blockquote className="text-xl sm:text-2xl font-serif italic text-neutral-600 leading-relaxed font-light">
            {t.hero.cita}
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#A88246]"></span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-700">
              {t.hero.autorCita}
            </span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 pt-14 border-t border-neutral-200/80 mt-12">
          <div className="pr-6 pb-8 border-r border-b border-neutral-200/80">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              {t.hero.stat1Valor}
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              {t.hero.stat1Texto}
            </span>
          </div>

          <div className="pl-6 pb-8 border-b border-neutral-200/80">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              {t.hero.stat2Valor}
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              {t.hero.stat2Texto}
            </span>
          </div>

          <div className="pr-6 pt-8 border-r border-neutral-200/80">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              {t.hero.stat3Valor}
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              {t.hero.stat3Texto}
            </span>
          </div>

          <div className="pl-6 pt-8">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              {t.hero.stat4Valor}
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              {t.hero.stat4Texto}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}