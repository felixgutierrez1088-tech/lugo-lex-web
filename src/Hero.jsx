import React from 'react';
import heroBg from './assets/hero-bg.jpg.jpeg';

export default function Hero() {
  return (
    <section id="inicio" className="max-w-[1500px] mx-auto min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2">
      {/* Lado Izquierdo con imagen institucional de fondo */}
      <div 
        className="relative text-white p-8 sm:p-14 xl:p-20 flex flex-col justify-between overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 18, 21, 0.88), rgba(17, 18, 21, 0.94)), url(${heroBg})`
        }}
      >
        <div className="relative z-10 pt-4">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-[1px] bg-[#C29B61]"></span>
            <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-medium">
              Guadalajara, Jalisco · Acreditado ante el IJA
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif leading-[1.15] tracking-tight font-medium">
            Excelencia Jurídica <br />
            <span className="italic font-normal">y Solución Efectiva</span> <br />
            de Controversias
          </h1>

          <p className="mt-8 text-neutral-300 text-sm sm:text-base max-w-lg leading-relaxed font-light">
            Lugo Lex: Firma Jurídica, Contable y Centro de Mediación Privado No. 221 acreditado ante el Instituto de Justicia Alternativa.
          </p>
        </div>

        <div className="relative z-10 pt-12 flex flex-wrap gap-4 items-center">
          <a
            href="#areas"
            className="border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-semibold px-6 py-4 flex items-center gap-3 transition"
          >
            <span>Conocer la firma</span>
            <span className="text-sm">→</span>
          </a>

          <a
            href="#mediacion"
            className="bg-[#C29B61] hover:bg-[#b08b53] text-white text-xs uppercase tracking-widest font-semibold px-6 py-4 flex items-center gap-2 transition"
          >
            <span>Centro de mediación</span>
            <span className="text-base">⚖️</span>
          </a>
        </div>
      </div>

      {/* Lado Derecho */}
      <div className="bg-white p-8 sm:p-14 xl:p-20 flex flex-col justify-between border-l border-neutral-200">
        <div className="max-w-xl pt-4">
          <blockquote className="text-xl sm:text-2xl font-serif italic text-neutral-500 leading-relaxed font-light">
            “La excelencia en la práctica del derecho no es una opción, es la única forma de ejercer la profesión con verdadera responsabilidad hacia nuestros clientes.”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#A88246]"></span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-700">
              Lugo Lex — Filosofía de Firma
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 pt-14 border-t border-neutral-200 mt-12">
          <div className="pr-6 pb-8 border-r border-b border-neutral-200">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              +10M USD
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              En asuntos ganados
            </span>
          </div>

          <div className="pl-6 pb-8 border-b border-neutral-200">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              +1,000
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              Asuntos ganados
            </span>
          </div>

          <div className="pr-6 pt-8 border-r border-neutral-200">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              +30
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              Abogados, contadores y mediadores
            </span>
          </div>

          <div className="pl-6 pt-8">
            <span className="block text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
              MX · EE.UU.
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium mt-1">
              Presencia internacional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}