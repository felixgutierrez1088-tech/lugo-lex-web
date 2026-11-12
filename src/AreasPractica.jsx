import React from 'react';
import { useLanguage } from './LanguageContext';
import areasBg from './assets/areas-bg.jpg.jpeg';

export default function AreasPractica() {
  const { t } = useLanguage();

  if (!t || !t.areas) return null;

  return (
    <section
      id="areas"
      className="relative py-24 border-b border-neutral-800 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 17, 21, 0.78), rgba(15, 17, 21, 0.88)), url(${areasBg})`
      }}
    >
      <div className="relative z-10 max-w-[1500px] mx-auto px-6">
        {/* Cabecera de la sección */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#C29B61] uppercase border-b border-[#C29B61]/50 pb-1">
              {t.areas.subtitulo}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight">
              {t.areas.titulo}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base text-neutral-300 leading-relaxed max-w-xl font-light">
              {t.areas.descripcion}
            </p>
          </div>
        </div>

        {/* Cuadrícula de 4 Ejes Translúcidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 01 Servicios Jurídicos */}
          <div className="bg-white/10 backdrop-blur-md text-white p-8 md:p-12 border border-white/20 shadow-xl flex flex-col justify-between transition duration-300 hover:bg-white/15">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-white/40 font-light">01</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">
                {t.areas.eje1Titulo}
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed font-light">
                {t.areas.eje1Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje1Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#e2be84] bg-black/30 border border-[#C29B61]/50 px-2.5 py-1 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 02 Servicios Contables */}
          <div className="bg-black/45 backdrop-blur-md text-white p-8 md:p-12 border border-white/15 shadow-xl flex flex-col justify-between transition duration-300 hover:bg-black/55">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-neutral-500 font-light">02</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">
                {t.areas.eje2Titulo}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {t.areas.eje2Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje2Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#e2be84] bg-black/40 border border-[#C29B61]/40 px-2.5 py-1 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 03 Centro de Mediación */}
          <div className="bg-black/45 backdrop-blur-md text-white p-8 md:p-12 border border-white/15 shadow-xl flex flex-col justify-between transition duration-300 hover:bg-black/55">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-neutral-500 font-light">03</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">
                {t.areas.eje3Titulo}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {t.areas.eje3Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje3Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#e2be84] bg-black/40 border border-[#C29B61]/40 px-2.5 py-1 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 04 Servicios Inmobiliarios */}
          <div className="bg-white/10 backdrop-blur-md text-white p-8 md:p-12 border border-white/20 shadow-xl flex flex-col justify-between transition duration-300 hover:bg-white/15">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-white/40 font-light">04</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">
                {t.areas.eje4Titulo}
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed font-light">
                {t.areas.eje4Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje4Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#e2be84] bg-black/30 border border-[#C29B61]/50 px-2.5 py-1 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}