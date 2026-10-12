import React, { useState } from 'react';
import Hero from './Hero';
import AreasPractica from './AreasPractica';
import ServiciosDetalle from './ServiciosDetalle';
import CentroMediacion from './CentroMediacion';
import NoticiasTestimonios from './NoticiasTestimonios';
import logoFirma from './assets/logo-firma.png.jpg';

export default function App() {
  const [idioma, setIdioma] = useState('ES');
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900 font-sans ...">
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
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold tracking-widest text-neutral-900">LUGO</span>
              <span className="text-xl font-bold tracking-widest text-[#A88246]">LEX</span>
            </div>
            <span className="block text-[9px] tracking-wider text-neutral-500 font-medium uppercase">
              FIRMA JURÍDICA Y CONTABLE
            </span>
            <span className="block text-[8px] tracking-tight text-neutral-400 uppercase">
              CENTRO DE MEDIACIÓN PRIVADO NO. 221
            </span>
          </div>
        </div>

          <nav className="hidden xl:flex items-center gap-7 text-[11px] font-semibold tracking-widest text-neutral-600 uppercase">
            <a href="#inicio" className="hover:text-black transition">Inicio</a>
            <a href="#inicio" className="hover:text-black transition">La Firma</a>
            <a href="#areas" className="hover:text-black transition">Áreas de Práctica</a>
            <a href="#mediacion" className="hover:text-black transition">Centro de Mediación</a>
            <a href="#noticias" className="hover:text-black transition">Nuestro Equipo</a>
            <a href="#noticias" className="hover:text-black transition">Noticias</a>
            <a href="#contacto" className="hover:text-black transition">Contacto</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="text-xs font-semibold tracking-wider flex items-center gap-2">
              <button onClick={() => setIdioma('ES')} className={idioma === 'ES' ? 'text-black font-bold' : 'text-neutral-400'}>ES</button>
              <span className="text-neutral-300">|</span>
              <button onClick={() => setIdioma('EN')} className={idioma === 'EN' ? 'text-black font-bold' : 'text-neutral-400'}>EN</button>
            </div>
            <a href="#contacto" className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 transition hidden sm:inline-block">
              Contacto Directo
            </a>
            <button onClick={() => setMenuAbierto(!menuAbierto)} className="xl:hidden text-neutral-800 p-2 text-xl">
              ☰
            </button>
          </div>
        </div>

        {menuAbierto && (
          <div className="xl:hidden bg-white border-b border-neutral-200 px-6 py-6 flex flex-col gap-4 text-xs font-semibold tracking-widest uppercase text-neutral-700">
            <a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a>
            <a href="#areas" onClick={() => setMenuAbierto(false)}>Áreas de Práctica</a>
            <a href="#mediacion" onClick={() => setMenuAbierto(false)}>Centro de Mediación</a>
            <a href="#noticias" onClick={() => setMenuAbierto(false)}>Noticias</a>
            <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
          </div>
        )}
      </header>

      {/* Componentes en orden exacto */}
      <Hero />
      <AreasPractica />
      <ServiciosDetalle />
      <CentroMediacion />
      <NoticiasTestimonios />
    </div>
  );
}