import React, { useState } from 'react';
import logoFirma from './assets/logo-firma.png.jpg';

const noticias = [
  {
    fecha: "10 DE JUNIO, 2026",
    categoria: "DERECHO CORPORATIVO",
    titulo: "Nuevo Marco Regulatorio en Fusiones y Adquisiciones: Implicaciones para el Sector Privado",
    desc: "El Congreso aprobó reformas que refuerzan la supervisión de la COFECE en operaciones de concentración empresarial, ampliando los umbrales de notificación obligatoria."
  },
  {
    fecha: "28 DE MAYO, 2026",
    categoria: "CENTRO DE MEDIACIÓN",
    titulo: "La Mediación Privada como Alternativa al Litigio: Ventajas Jurídicas y Eficiencia Económica",
    desc: "Analizamos cómo el Centro de Mediación Privado 221 ha resuelto controversias complejas en un promedio de 60 días, con acuerdos vinculantes y de plena eficacia legal."
  },
  {
    fecha: "15 DE MAYO, 2026",
    categoria: "DERECHO CIVIL",
    titulo: "Reforma al Código Civil Federal: Impacto Directo en Contratos y Obligaciones Mercantiles",
    desc: "Las modificaciones en materia de nulidades y vicios del consentimiento obligan a revisar la estructura contractual de operaciones en curso antes del 1° de septiembre."
  }
];

export default function NoticiasTestimonios() {
  return (
    <>
      {/* 1. Sección Perspectiva Jurídica */}
      <section id="noticias" className="relative py-24 px-6 sm:px-12 xl:px-16 bg-[#e9ecef] border-t border-neutral-300 overflow-hidden">
        {/* Fondo sutil tipo oficina */}
        <div className="absolute inset-0 bg-neutral-200/50 backdrop-blur-[2px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1500px] mx-auto">
          {/* Header de la sección */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-[1px] bg-[#C29B61]"></span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#A88246]">
                  Noticias y Publicaciones
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 font-normal">
                Perspectiva Jurídica
              </h2>
            </div>

            {/* Controles carrusel */}
            <div className="flex gap-2 self-start sm:self-auto">
              <button className="w-10 h-10 border border-neutral-400/60 bg-white/60 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition cursor-pointer">
                ‹
              </button>
              <button className="w-10 h-10 border border-neutral-400/60 bg-white/60 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition cursor-pointer">
                ›
              </button>
            </div>
          </div>

          {/* Tarjetas interactivas con Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticias.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/70 hover:bg-white border border-neutral-300/80 hover:border-neutral-400/80 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer min-h-[380px]"
              >
                <div>
                  <div className="w-8 h-[2px] bg-[#C29B61] mb-6"></div>
                  
                  <div className="flex items-center gap-2 text-[10px] tracking-widest font-semibold uppercase mb-4">
                    <span className="text-neutral-500">{item.fecha}</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[#C29B61]">{item.categoria}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-medium text-neutral-900 group-hover:text-[#9e763b] leading-snug mb-4 transition-colors duration-300">
                    {item.titulo}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-neutral-200/60 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-800 group-hover:text-[#C29B61] transition-colors">
                  <span>Leer Más</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicadores */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <span className="w-8 h-1 bg-neutral-900 rounded-full"></span>
            <span className="w-4 h-1 bg-neutral-400 rounded-full"></span>
            <span className="w-4 h-1 bg-neutral-400 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* 2. Sección Testimonial / Cita */}
      <section className="bg-white py-28 px-6 text-center border-t border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl sm:text-3xl xl:text-4xl font-serif italic text-neutral-800 leading-relaxed font-light mb-12">
            “La asesoría de Lugo Lex fue determinante para la exitosa conclusión de nuestra operación corporativa. Su conocimiento del marco regulatorio y su compromiso con la excelencia son incomparables en el mercado.”
          </blockquote>

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-sm font-bold tracking-wider text-neutral-900 uppercase">
              Director General
            </h4>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span className="w-8 h-[1px] bg-[#C29B61]"></span>
              <span>Grupo Industrial del Bajío, S.A.B.</span>
              <span className="w-8 h-[1px] bg-[#C29B61]"></span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#A88246] font-semibold mt-1">
              Cliente Corporativo — Servicios Jurídicos
            </span>
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-8 h-8 border border-neutral-300 hover:border-black flex items-center justify-center text-xs text-neutral-600 transition">
              ‹
            </button>
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-1 bg-[#C29B61] rounded-full"></span>
              <span className="w-2 h-1 bg-neutral-300 rounded-full"></span>
              <span className="w-2 h-1 bg-neutral-300 rounded-full"></span>
            </div>
            <button className="w-8 h-8 border border-neutral-300 hover:border-black flex items-center justify-center text-xs text-neutral-600 transition">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* 3. Footer Corporativo Completo */}
      <footer id="contacto" className="bg-[#0a0b0d] text-white pt-20 pb-12 px-6 sm:px-12 xl:px-16 border-t border-neutral-900">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-900 text-xs">
          {/* Columna 1: Firma & Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
             <img 
              src={logoFirma} 
              alt="Logo Lugo Lex" 
              className="w-11 h-11 object-contain rounded-full border border-neutral-800/80 shadow-md"
            />
              <div className="leading-tight">
                <span className="block text-lg font-bold tracking-widest text-white font-serif">LUGO LEX</span>
                <span className="block text-[8px] tracking-wider text-[#C29B61] font-semibold uppercase">Firma Jurídica y Contable</span>
                <span className="block text-[7px] text-neutral-500 uppercase">Centro de Mediación Privado No. 221</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-[#C29B61] tracking-wider uppercase font-semibold mb-4">
              <span>⚖️</span>
              <span>Centro de Mediación Privado No. 221</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Firma jurídica, contable y centro de mediación de élite con sede en Guadalajara, Jalisco. Acreditados ante el Instituto de Justicia Alternativa.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 block mb-6">
              Navegación
            </span>
            <ul className="space-y-3 font-light text-neutral-300">
              <li><a href="#inicio" className="hover:text-[#C29B61] transition">Inicio</a></li>
              <li><a href="#inicio" className="hover:text-[#C29B61] transition">La Firma</a></li>
              <li><a href="#areas" className="hover:text-[#C29B61] transition">Áreas de Práctica</a></li>
              <li><a href="#mediacion" className="hover:text-[#C29B61] transition">Centro de Mediación</a></li>
              <li><a href="#noticias" className="hover:text-[#C29B61] transition">Nuestro Equipo</a></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 block mb-6">
              Servicios
            </span>
            <ul className="space-y-3 font-light text-neutral-300">
              <li><a href="#areas" className="hover:text-[#C29B61] transition">Servicios Jurídicos</a></li>
              <li><a href="#areas" className="hover:text-[#C29B61] transition">Servicios Contables</a></li>
              <li><a href="#mediacion" className="hover:text-[#C29B61] transition">Mediación Privada — Centro 221</a></li>
              <li><a href="#areas" className="hover:text-[#C29B61] transition">Servicios Inmobiliarios-Patrimoniales</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 block mb-6">
              Contacto
            </span>
            <ul className="space-y-4 font-light text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-[#C29B61] text-sm">📍</span>
                <div>
                  <span className="block font-medium text-white">Federico E. Ibarra 1073</span>
                  <span className="text-neutral-400 text-[11px]">Col. Santa Mónica, Guadalajara, Jalisco CP 44220</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C29B61] text-sm">📞</span>
                <a href="tel:3315376659" className="hover:text-[#C29B61] transition">33 15 37 66 59</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C29B61] text-sm">✉️</span>
                <a href="mailto:lugolexfirmajuridicacontacto@gmail.com" className="hover:text-[#C29B61] transition break-all">
                  lugolexfirmajuridicacontacto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-[1500px] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-600 gap-4">
          <span>© {new Date().getFullYear()} Lugo Lex Firma Jurídica y Contable. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400">Aviso de Privacidad</a>
            <a href="#" className="hover:text-neutral-400">Términos Legales</a>
          </div>
        </div>
      </footer>
    </>
  );
}