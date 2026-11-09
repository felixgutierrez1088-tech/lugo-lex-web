import React from 'react';
import { useLanguage } from './LanguageContext';

export default function AreasPractica() {
  const { t } = useLanguage();

  if (!t || !t.areas) return null;

  return (
    <section id="areas" className="py-24 border-b border-neutral-200">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Cabecera de la sección */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#A88246] uppercase border-b border-[#A88246]/40 pb-1">
              {t.areas.subtitulo}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-neutral-900 leading-tight">
              {t.areas.titulo}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
              {t.areas.descripcion}
            </p>
          </div>
        </div>

        {/* Cuadrícula de 4 Ejes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 01 Servicios Jurídicos */}
          <div className="bg-white p-8 md:p-12 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-neutral-300 font-light">01</span>
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900 font-medium">
                {t.areas.eje1Titulo}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.areas.eje1Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje1Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#A88246] border border-[#A88246]/30 px-2.5 py-1 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 02 Servicios Contables */}
          <div className="bg-neutral-900 text-white p-8 md:p-12 border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-neutral-600 font-light">02</span>
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">
                {t.areas.eje2Titulo}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t.areas.eje2Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje2Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#A88246] border border-[#A88246]/40 px-2.5 py-1 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 03 Centro de Mediación */}
          <div className="bg-neutral-900 text-white p-8 md:p-12 border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-neutral-600 font-light">03</span>
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">
                {t.areas.eje3Titulo}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t.areas.eje3Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje3Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#A88246] border border-[#A88246]/40 px-2.5 py-1 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 04 Servicios Inmobiliarios */}
          <div className="bg-white p-8 md:p-12 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-serif text-neutral-300 font-light">04</span>
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900 font-medium">
                {t.areas.eje4Titulo}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.areas.eje4Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {t.areas.eje4Tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold tracking-wider text-[#A88246] border border-[#A88246]/30 px-2.5 py-1 uppercase"
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