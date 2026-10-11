import React from 'react';

const areas = [
  {
    num: "01",
    icon: "⚖️",
    title: "Servicios Jurídicos",
    desc: "Representación y asesoría integral ante todas las instancias del Poder Judicial de Jalisco y federal, con especialización en las ramas de mayor complejidad procesal.",
    tags: ["CIVIL", "MERCANTIL", "CORPORATIVO", "FAMILIAR", "LABORAL", "AMPARO", "PROPIEDAD INTELECTUAL", "PENAL"],
  },
  {
    num: "02",
    icon: "🧮",
    title: "Servicios Contables",
    desc: "Asesoría fiscal y contable integral para personas físicas y morales. Contabilidad corporativa, cumplimiento tributario, dictámenes fiscales y planeación financiera.",
    tags: ["CONTABILIDAD CORPORATIVA", "CUMPLIMIENTO FISCAL", "DICTÁMENES FISCALES", "PLANEACIÓN TRIBUTARIA", "AUDITORÍA"],
  },
  {
    num: "03",
    icon: "💼",
    title: "Mediación Privada — Centro 221",
    desc: "Centro de Mediación Privado No. 221 acreditado ante el Instituto de Justicia Alternativa (IJA). Resolución eficiente, confidencial y vinculante de controversias de toda naturaleza.",
    tags: ["MEDIACIÓN CIVIL", "MEDIACIÓN MERCANTIL", "MEDIACIÓN FAMILIAR", "DIVORCIOS EXPRESS", "CONVENIOS PREVENTIVOS DE ARRENDAMIENTO"],
  },
  {
    num: "04",
    icon: "🏛️",
    title: "Servicios Inmobiliarios-Patrimoniales",
    desc: "Asesoría integral en adquisición, transmisión y defensa de bienes inmuebles, planificación patrimonial, regularización de propiedad y estructuración de portafolios inmobiliarios.",
    tags: ["ADQUISICIÓN DE INMUEBLES", "PLANEACIÓN PATRIMONIAL", "REGULARIZACIÓN DE PROPIEDAD", "INVERSIÓN INMOBILIARIA", "ARRENDAMIENTOS"],
  }
];

export default function AreasPractica() {
  return (
    <section id="areas" className="max-w-[1500px] mx-auto border-t border-neutral-200 py-20 px-6 sm:px-12 xl:px-16 bg-[#fbfbfb]">
      {/* Encabezado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-amber-600"></span>
            <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold">
              Áreas de Práctica
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-neutral-900 leading-tight">
            Cuatro Ejes de <br /> Servicio Integral
          </h2>
        </div>
        <div>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light max-w-xl">
            Lugo Lex opera bajo cuatro divisiones especializadas que cubren el espectro completo de las necesidades jurídicas, contables, patrimoniales y de resolución alternativa de conflictos de nuestros clientes.
          </p>
        </div>
      </div>

      {/* Grid de 4 tarjetas interactivas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {areas.map((area) => (
          <div
            key={area.num}
            className="group bg-white hover:bg-[#111215] border border-neutral-200 hover:border-neutral-800 p-8 sm:p-12 relative flex flex-col justify-between transition-colors duration-300 shadow-xs hover:shadow-xl cursor-pointer"
          >
            <div>
              {/* Header de tarjeta (Número, Icono y Flecha) */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-neutral-300 group-hover:text-neutral-700 transition-colors duration-300">
                    {area.num}
                  </span>
                  <span className="border border-amber-200 bg-amber-50/60 text-amber-700 group-hover:border-amber-700/50 group-hover:bg-amber-900/20 group-hover:text-amber-400 px-2.5 py-1 text-sm rounded transition-colors duration-300">
                    {area.icon}
                  </span>
                </div>
                <span className="text-neutral-400 group-hover:text-neutral-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lg">
                  ↗
                </span>
              </div>

              {/* Título y Descripción */}
              <h3 className="text-2xl font-serif font-medium text-neutral-900 group-hover:text-white mb-4 transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-neutral-600 group-hover:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8 font-light transition-colors duration-300">
                {area.desc}
              </p>
            </div>

            {/* Tags / Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 group-hover:border-neutral-800 transition-colors duration-300">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 border border-amber-200/80 bg-amber-50/40 text-amber-900 group-hover:border-amber-800/60 group-hover:bg-amber-950/40 group-hover:text-amber-300 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}