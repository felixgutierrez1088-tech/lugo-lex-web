import React from 'react';

const puntosClave = [
  "Acreditación oficial ante el IJA — Instituto de Justicia Alternativa",
  "Confidencialidad absoluta garantizada por protocolo",
  "Mediadores certificados con especialización internacional",
  "Acuerdos con plena eficacia jurídica y carácter ejecutivo"
];

export default function CentroMediacion() {
  return (
    <section id="mediacion" className="bg-[#0b0c0e] text-white">
      {/* 1. Franja Sede Principal de Operaciones */}
      <div className="relative py-20 px-6 border-t border-neutral-900 overflow-hidden text-center bg-radial from-neutral-900/60 to-[#0b0c0e]">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="block text-[10px] tracking-[0.3em] uppercase font-semibold text-[#A88246] mb-3">
            Sede Principal de Operaciones
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif tracking-[0.15em] uppercase text-neutral-200 font-light">
            Ciudad Judicial del Estado de Jalisco
          </h2>
        </div>
      </div>

      {/* 2. Sección Dividida: Cita + Información IJA */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 border-t border-neutral-900 min-h-[600px]">
        {/* Lado Izquierdo (Fondo arquitectónico oscuro con cita) */}
        <div className="relative bg-[#111215] p-10 sm:p-16 xl:p-20 flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-neutral-900 overflow-hidden">
          {/* Fondo sutil simulación edificio */}
          <div className="absolute inset-0 bg-neutral-950/60 backdrop-brightness-75 pointer-events-none"></div>

          <div className="relative z-10 max-w-lg">
            <div className="w-14 h-14 border border-[#C29B61]/50 bg-neutral-900/80 flex items-center justify-center text-xl text-[#C29B61] mb-10 shadow-inner">
              ⚖️
            </div>

            <blockquote className="text-xl sm:text-2xl font-serif italic text-neutral-300 leading-relaxed font-light mb-8">
              “La mediación es la forma más civilizada, eficiente y discreta de resolver lo que el litigio puede prolongar indefinidamente.”
            </blockquote>

            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C29B61]"></span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#A88246]">
                Centro 221 — Principio Rector
              </span>
            </div>
          </div>
        </div>

        {/* Lado Derecho (Detalle del Centro 221) */}
        <div className="p-10 sm:p-16 xl:p-20 flex flex-col justify-center bg-[#0e0f12]">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#C29B61]"></span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C29B61]">
                Acreditado ante el IJA
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight mb-8">
              Centro de Mediación <br />
              <span className="text-[#C29B61] italic">Privado No. 221</span>
            </h3>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light mb-10">
              Unidad autónoma acreditada ante el Instituto de Justicia Alternativa del Estado de Jalisco. Espacio neutro, confidencial y técnicamente superior para la resolución de disputas corporativas, familiares, inmobiliarias y comerciales.
            </p>

            <ul className="space-y-4">
              {puntosClave.map((punto, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#C29B61] mt-2 shrink-0"></span>
                  <span className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                    {punto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}