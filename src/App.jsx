import React from 'react';
import Hero from './Hero';
import AreasPractica from './AreasPractica';
import CentroMediacion from './CentroMediacion';
import NoticiasTestimonios from './NoticiasTestimonios';
import logoFirma from './assets/logo-firma.png.jpg';
import { useLanguage } from './LanguageContext';

export default function App() {
  const { idioma, setIdioma, t } = useLanguage();
  const [menuAbierto, setMenuAbierto] = React.useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900 font-sans selection:bg-[#A88246]/20 selection:text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1500px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logoFirma}
              alt="Logo Lugo Lex"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 border border-neutral-200 shadow-sm"
            />
            <div className="leading-tight">
              <div className="flex items-line gap-1.5">
                <span className="text-xl font-bold tracking-widest text-neutral-900">LUGO</span>
                <span className="text-xl font-bold tracking-widest text-[#A88246]">LEX</span>
              </div>
              <span className="block text-[9px] tracking-wider text-neutral-500 font-medium uppercase">
                {t.nav.subtitulo1}
              </span>
              <span className="block text-[8px] tracking-tight text-neutral-400 uppercase">
                {t.nav.subtitulo2}
              </span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-7 text-[11px] font-semibold tracking-widest text-neutral-600 uppercase">
            <a href="#inicio" className="hover:text-black transition">{t.nav.inicio}</a>
            <a href="#inicio" className="hover:text-black transition">{t.nav.laFirma}</a>
            <a href="#areas" className="hover:text-black transition">{t.nav.areasPractica}</a>
            <a href="#mediacion" className="hover:text-black transition">{t.nav.centroMediacion}</a>
            <a href="#noticias" className="hover:text-black transition">{t.nav.nuestroEquipo}</a>
            <a href="#noticias" className="hover:text-black transition">{t.nav.noticias}</a>
            <a href="#contacto" className="hover:text-black transition">{t.nav.contacto}</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span
                className={idioma === 'ES' ? 'text-neutral-900 font-bold' : 'text-neutral-400 cursor-pointer'}
                onClick={() => setIdioma('ES')}
              >
                ES
              </span>
              <span className="text-neutral-300">|</span>
              <span
                className={idioma === 'EN' ? 'text-neutral-900 font-bold' : 'text-neutral-400 cursor-pointer'}
                onClick={() => setIdioma('EN')}
              >
                EN
              </span>
            </div>

            <a
              href="#contacto"
              className="hidden md:inline-flex items-center justify-center bg-neutral-900 text-white text-xs font-bold tracking-wider px-6 py-3.5 hover:bg-neutral-800 transition"
            >
              {t.nav.contactoDirecto}
            </a>

            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="xl:hidden text-neutral-800 p-2 text-xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {menuAbierto && (
        <div className="xl:hidden bg-neutral-50 border-b border-neutral-200 px-6 py-6 flex flex-col gap-4 text-xs font-semibold tracking-widest text-neutral-700 uppercase">
          <a href="#inicio" onClick={() => setMenuAbierto(false)}>{t.nav.inicio}</a>
          <a href="#areas" onClick={() => setMenuAbierto(false)}>{t.nav.areasPractica}</a>
          <a href="#mediacion" onClick={() => setMenuAbierto(false)}>{t.nav.centroMediacion}</a>
          <a href="#noticias" onClick={() => setMenuAbierto(false)}>{t.nav.noticias}</a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>{t.nav.contacto}</a>
        </div>
      )}

      {/* Los componentes ya se llaman limpios sin pasar props */}
      <main>
        <Hero />
        <AreasPractica />
        <CentroMediacion />
        <NoticiasTestimonios />
      </main>
    </div>
  );
}