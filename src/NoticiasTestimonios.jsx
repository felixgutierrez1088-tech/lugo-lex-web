import React from 'react';
import logoFirma from './assets/logo-firma.png.jpg';
import { useLanguage } from './LanguageContext';

const noticiasPorIdioma = {
  ES: [
    {
      fecha: "ACTUALIDAD JURÍDICA",
      categoria: "DERECHO CORPORATIVO · DOF",
      titulo: "Marco Regulatorio en Fusiones y Adquisiciones: Implicaciones para el Sector Privado",
      desc: "Consulta las disposiciones vigentes y reformas publicadas en el Diario Oficial de la Federación en materia mercantil, societaria y de competencia económica.",
      url: "https://www.dof.gob.mx/"
    },
    {
      fecha: "JUSTICIA ALTERNATIVA",
      categoria: "CENTRO DE MEDIACIÓN · IJA",
      titulo: "La Mediación Privada como Alternativa al Litigio: Ventajas Jurídicas y Eficiencia Económica",
      desc: "Conoce los alcances de los convenios celebrados ante Centros Privados acreditados por el Instituto de Justicia Alternativa del Estado de Jalisco con carácter de sentencia ejecutoriada.",
      url: "https://ija.gob.mx/"
    },
    {
      fecha: "JURISPRUDENCIA Y CRITERIOS",
      categoria: "DERECHO CIVIL Y AMPARO · SCJN",
      titulo: "Criterios Relevantes en Contratos, Obligaciones Mercantiles y Defensa Constitucional",
      desc: "Accede a las resoluciones y tesis recientes de la Suprema Corte de Justicia de la Nación sobre validez contractual y seguridad jurídica patrimonial.",
      url: "https://www.scjn.gob.mx/"
    }
  ],
  EN: [
    {
      fecha: "LEGAL UPDATES",
      categoria: "CORPORATE LAW · DOF",
      titulo: "Regulatory Framework in Mergers & Acquisitions: Implications for the Private Sector",
      desc: "Review current provisions and reforms published in Mexico's Official Gazette (DOF) regarding corporate governance, commercial law, and antitrust compliance.",
      url: "https://www.dof.gob.mx/"
    },
    {
      fecha: "ALTERNATIVE DISPUTE RESOLUTION",
      categoria: "MEDIATION CENTER · IJA",
      titulo: "Private Mediation as an Alternative to Litigation: Legal Advantages and Cost Efficiency",
      desc: "Learn how settlement agreements executed before Private Centers accredited by the Jalisco Alternative Justice Institute carry final court judgment enforceability.",
      url: "https://ija.gob.mx/"
    },
    {
      fecha: "CASE LAW & RULINGS",
      categoria: "CIVIL & CONSTITUTIONAL LAW · SCJN",
      titulo: "Key Rulings on Contracts, Commercial Obligations, and Constitutional Protection",
      desc: "Explore recent precedents from Mexico's Supreme Court of Justice regarding contractual enforceability and asset protection.",
      url: "https://www.scjn.gob.mx/"
    }
  ]
};

export default function NoticiasTestimonios() {
  const { language, t } = useLanguage();
  const idiomaActual = language === 'EN' ? 'EN' : 'ES';
  const noticias = noticiasPorIdioma[idiomaActual];

  if (!t || !t.testimonio || !t.footer) return null;

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
                  {idiomaActual === 'ES' ? 'Noticias y Publicaciones' : 'News & Publications'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 font-normal">
                {idiomaActual === 'ES' ? 'Perspectiva Jurídica' : 'Legal Perspective'}
              </h2>
            </div>

            {/* Controles carrusel */}
            <div className="flex gap-2 self-start sm:self-auto">
              <button type="button" className="w-10 h-10 border border-neutral-400/60 bg-white/60 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition cursor-pointer">
                ‹
              </button>
              <button type="button" className="w-10 h-10 border border-neutral-400/60 bg-white/60 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition cursor-pointer">
                ›
              </button>
            </div>
          </div>

          {/* Tarjetas interactivas con enlace real */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticias.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
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
                  <span>{idiomaActual === 'ES' ? 'Consultar Fuente' : 'Read Source'}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
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
            {t.testimonio.texto}
          </blockquote>

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-sm font-bold tracking-wider text-neutral-900 uppercase">
              {t.testimonio.puesto}
            </h4>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span className="w-8 h-[1px] bg-[#C29B61]"></span>
              <span>{t.testimonio.empresa}</span>
              <span className="w-8 h-[1px] bg-[#C29B61]"></span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#A88246] font-semibold mt-1">
              {t.testimonio.categoria}
            </span>
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            <button type="button" className="w-8 h-8 border border-neutral-300 hover:border-black flex items-center justify-center text-xs text-neutral-600 transition">
              ‹
            </button>
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-1 bg-[#C29B61] rounded-full"></span>
              <span className="w-2 h-1 bg-neutral-300 rounded-full"></span>
              <span className="w-2 h-1 bg-neutral-300 rounded-full"></span>
            </div>
            <button type="button" className="w-8 h-8 border border-neutral-300 hover:border-black flex items-center justify-center text-xs text-neutral-600 transition">
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
                className="w-11 h-11 object-cover rounded-full border border-neutral-800/80 shadow-md"
              />
              <div className="leading-tight">
                <span className="block text-lg font-bold tracking-widest text-white font-serif">LUGO LEX</span>
                <span className="block text-[8px] tracking-wider text-[#C29B61] font-semibold uppercase">{t.nav.subtitulo1}</span>
                <span className="block text-[7px] text-neutral-500 uppercase">{t.nav.subtitulo2}</span>
              </div>
            </div>
            <div className="text-[10px] text-[#C29B61] tracking-wider uppercase font-semibold mb-4">
              <span>{t.footer.centroSub}</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              {t.footer.resumen}
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 block mb-6">
              {idiomaActual === 'ES' ? 'Navegación' : 'Navigation'}
            </span>
            <ul className="space-y-3 font-light text-neutral-300">
              <li><a href="#inicio" className="hover:text-[#C29B61] transition">{t.nav.inicio}</a></li>
              <li><a href="#inicio" className="hover:text-[#C29B61] transition">{t.nav.laFirma}</a></li>
              <li><a href="#areas" className="hover:text-[#C29B61] transition">{t.nav.areasPractica}</a></li>
              <li><a href="#mediacion" className="hover:text-[#C29B61] transition">{t.nav.centroMediacion}</a></li>
              <li><a href="#noticias" className="hover:text-[#C29B61] transition">{t.nav.noticias}</a></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 block mb-6">
              {idiomaActual === 'ES' ? 'Servicios' : 'Services'}
            </span>
            <ul className="space-y-3 font-light text-neutral-300">
              <li><a href="#areas" className="hover:text-[#C29B61] transition">{t.areas.eje1Titulo}</a></li>
              <li><a href="#areas" className="hover:text-[#C29B61] transition">{t.areas.eje2Titulo}</a></li>
              <li><a href="#mediacion" className="hover:text-[#C29B61] transition">{t.areas.eje3Titulo}</a></li>
              <li><a href="#areas" className="hover:text-[#C29B61] transition">{t.areas.eje4Titulo}</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto Interactivo */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 block mb-6">
              {t.nav.contacto}
            </span>
            <ul className="space-y-4 font-light text-neutral-300">
              {/* Google Maps con Pin */}
              <li className="flex items-start gap-3">
                <span className="text-[#C29B61] text-sm mt-0.5">📍</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Federico+E.+Ibarra+1073,+Col.+Santa+Mónica,+Guadalajara,+Jalisco+44220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C29B61] transition group"
                >
                  <span className="block font-medium text-white group-hover:text-[#C29B61] underline decoration-neutral-700 underline-offset-4">
                    Federico E. Ibarra 1073
                  </span>
                  <span className="text-neutral-400 text-[11px] block mt-0.5">
                    Col. Santa Mónica, Guadalajara, Jalisco CP 44220
                  </span>
                  <span className="text-[10px] text-[#C29B61] uppercase tracking-wider font-semibold mt-1 inline-block">
                    {idiomaActual === 'ES' ? 'Ver ubicación en Google Maps ↗' : 'View on Google Maps ↗'}
                  </span>
                </a>
              </li>

              {/* Llamada Directa */}
              <li className="flex items-center gap-3">
                <span className="text-[#C29B61] text-sm">📞</span>
                <a href="tel:+523315376659" className="hover:text-[#C29B61] transition">
                  33 15 37 66 59 ({idiomaActual === 'ES' ? 'Llamada' : 'Call'})
                </a>
              </li>

              {/* WhatsApp Directo */}
              <li className="flex items-center gap-3">
                <span className="text-[#C29B61] text-sm">💬</span>
                <a
                  href="https://wa.me/523315376659?text=Hola%20Lugo%20Lex,%20me%20gustaría%20solicitar%20asesoría."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C29B61] transition font-medium text-white"
                >
                  WhatsApp: 33 15 37 66 59
                </a>
              </li>

              {/* Correo Electrónico */}
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
          <span>
            © {new Date().getFullYear()} Lugo Lex Firma Jurídica y Contable · Centro de Mediación Privado No. 221, S.C.{' '}
            {idiomaActual === 'ES' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </span>
          <div className="flex gap-6">
            <a href="#inicio" className="hover:text-neutral-400">
              {idiomaActual === 'ES' ? 'Aviso de Privacidad' : 'Privacy Notice'}
            </a>
            <a href="#inicio" className="hover:text-neutral-400">
              {idiomaActual === 'ES' ? 'Términos Legales' : 'Legal Terms'}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}