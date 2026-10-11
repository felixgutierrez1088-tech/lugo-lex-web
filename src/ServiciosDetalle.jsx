import React from 'react';

const litigios = [
  {
    icon: "👥",
    title: "LITIGIO FAMILIAR",
    desc: "Representación experta en divorcios contenciosos, custodia, alimentos, violencia familiar y sucesiones ante el Poder Judicial de Jalisco.",
    sede: "En Ciudad Judicial del Estado de Jalisco"
  },
  {
    icon: "⚖️",
    title: "LITIGIO CIVIL",
    desc: "Defensa y litigación en controversias sobre contratos, bienes inmuebles, responsabilidad civil extracontractual y nulidades.",
    sede: "En Ciudad Judicial del Estado de Jalisco"
  },
  {
    icon: "💼",
    title: "LITIGIO MERCANTIL",
    desc: "Representación en juicios ejecutivos mercantiles, concursos mercantiles, disputas societarias y controversias de naturaleza comercial.",
    sede: "En Ciudad Judicial del Estado de Jalisco"
  }
];

const mediaciones = [
  {
    title: "Mediación Civil",
    desc: "Resolución de controversias civiles sobre contratos, posesión, daños y obligaciones entre particulares con plena eficacia jurídica."
  },
  {
    title: "Mediación Mercantil",
    desc: "Solución ágil y confidencial de disputas entre empresas, socios comerciales o en materia de contratos de prestación de servicios."
  },
  {
    title: "Mediación Familiar",
    desc: "Acuerdos en materia de alimentos, régimen de convivencia, bienes conyugales y demás conflictos familiares con carácter vinculante."
  },
  {
    title: "Divorcios Express",
    desc: "Procedimiento simplificado y de resolución ágil para la disolución del vínculo matrimonial con acuerdo previo de las partes."
  },
  {
    title: "Convenios Preventivos de Arrendamiento",
    desc: "Elaboración de convenios de mediación preventiva para arrendadores y arrendatarios que eviten controversias futuras ante tribunales."
  }
];

export default function ServiciosDetalle() {
  return (
    <section id="servicios-detalle" className="bg-[#111215] text-white py-24 px-6 sm:px-12 xl:px-16 border-t border-neutral-900">
      <div className="max-w-[1500px] mx-auto">
        {/* Encabezado Superior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end pb-16 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[1px] bg-[#C29B61]"></span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C29B61]">
                Especialidades — Ciudad Judicial del Estado de Jalisco
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white">
              Nuestros Servicios
            </h2>
          </div>
          <div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
              Atención jurídica especializada con presencia activa en la Ciudad Judicial del Estado de Jalisco y resolución alternativa de conflictos en nuestro Centro de Mediación.
            </p>
          </div>
        </div>

        {/* Columnas Principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16">
          {/* COLUMNA 01: Atención a Litigios */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#A88246] block mb-2">
                  Columna 01
                </span>
                <h3 className="text-3xl font-serif font-normal text-white">
                  Atención a <span className="text-[#C29B61] italic">Litigios</span>
                </h3>
                <div className="w-12 h-[1px] bg-[#C29B61] mt-4"></div>
              </div>

              <div className="space-y-8">
                {litigios.map((item, idx) => (
                  <div key={idx} className="flex gap-5 group p-4 -mx-4 rounded hover:bg-neutral-900/60 transition">
                    <div className="w-12 h-12 border border-neutral-800 bg-neutral-900/90 flex items-center justify-center text-lg text-[#C29B61] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-sans mb-2">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light mb-3">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-[#C29B61] font-medium">
                        <span>📍</span>
                        <span>{item.sede}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 mt-12 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 uppercase tracking-widest">
              <div>
                <span className="block text-neutral-400 font-medium">Abogados Litigantes</span>
                <span>Experiencia · Estrategia · Resultados</span>
              </div>
              <a href="#contacto" className="text-[#C29B61] hover:text-[#d8b57d] flex items-center gap-2 transition">
                <span>Ver Más</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* COLUMNA 02: Mediación Privada No. 221 */}
          <div className="flex flex-col justify-between lg:border-l lg:border-neutral-800/80 lg:pl-16">
            <div>
              <div className="mb-8">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#A88246] block mb-2">
                  Columna 02
                </span>
                <h3 className="text-3xl font-serif font-normal text-white">
                  Mediación Privada <span className="text-[#C29B61] font-serif">No. 221</span>
                </h3>
                <div className="w-12 h-[1px] bg-[#C29B61] mt-4"></div>
              </div>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light mb-10">
                Centro acreditado ante el Instituto de Justicia Alternativa (IJA). Resolución alternativa de conflictos con confidencialidad absoluta y acuerdos de plena eficacia jurídica.
              </p>

              <div className="divide-y divide-neutral-900">
                {mediaciones.map((med, idx) => (
                  <div key={idx} className="py-5 group cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C29B61] mt-2 shrink-0"></span>
                        <div>
                          <h4 className="text-sm font-medium text-white group-hover:text-[#C29B61] transition font-sans">
                            {med.title}
                          </h4>
                          <p className="text-neutral-400 text-xs leading-relaxed font-light mt-1 max-w-lg">
                            {med.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-neutral-600 group-hover:text-[#C29B61] text-xs transition">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-neutral-800 flex items-center justify-between">
              <a
                href="#contacto"
                className="border border-[#C29B61]/60 bg-[#C29B61]/10 hover:bg-[#C29B61]/20 text-[#C29B61] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 flex items-center gap-2 transition"
              >
                <span>Solicitar Sesión</span>
                <span>⚖️</span>
              </a>
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-medium">
                Confidencialidad Garantizada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}