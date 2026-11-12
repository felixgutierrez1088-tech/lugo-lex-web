import React from 'react';
import { useLanguage } from './LanguageContext';

export default function CentroMediacion() {
  const { t } = useLanguage();

  if (!t || !t.mediacionSeccion) return null;

  return (
    <section id="mediacion" className="bg-[#0b0c0e] text-white">
      {/* 1. Franja Sede Principal de Operaciones */}
      <div className="relative py-20 px-6 border-t border-neutral-900 overflow-hidden text-center bg-radial from-neutral-900/60 to-[#0b0c0e]">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="block text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A88246] mb-3">
            {t.sede.subtitulo}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif tracking-[0.15em] uppercase text-neutral-200 font-light">
            {t.sede.titulo}
          </h2>
        </div>
      </div>

      {/* 2. Sección Dividida: Cita + Información IJA */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 border-t border-neutral-900 min-h-[600px]">
        {/* Lado Izquierdo (Fondo arquitectónico oscuro con cita sin emoji ni Principio Rector) */}
        <div className="relative bg-[#111215] p-10 sm:p-16 xl:p-20 flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-neutral-900">
          <div className="absolute inset-0 bg-neutral-950/60 backdrop-brightness-75 pointer-events-none"></div>

          <div className="relative z-10 max-w-lg space-y-8">
            <blockquote className="text-2xl sm:text-3xl font-serif italic text-neutral-100 leading-relaxed font-light">
              {t.mediacionSeccion.cita}
            </blockquote>

            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C29B61]"></span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C29B61] font-semibold">
                {t.mediacionSeccion.autorCita}
              </span>
            </div>
          </div>
        </div>

        {/* Lado Derecho (Información Centro 221, S.C. y viñetas) */}
        <div className="p-10 sm:p-16 xl:p-20 flex flex-col justify-center space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#C29B61]"></span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C29B61] font-semibold">
              {t.mediacionSeccion.tagline}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-medium leading-tight text-white">
            {t.mediacionSeccion.titulo}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            {t.mediacionSeccion.descripcion}
          </p>

          <ul className="space-y-4 pt-4 border-t border-neutral-900">
            {t.mediacionSeccion.puntos.map((punto, index) => (
              <li key={index} className="flex items-start gap-4 text-sm text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C29B61] mt-2 flex-shrink-0"></span>
                <span className="leading-relaxed">{punto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}