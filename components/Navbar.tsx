'use client';

import { useEffect } from 'react';
import { MenuIcon, XIcon, Phone } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ onMenuOpen }: NavbarProps) {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalInfo = {
    name: "Muhammad Bariq Al Mukasyah",
    whatsappLink: "https://wa.me/6285156960832?text=Halo%20Mas%20Bariq,%20saya%20tertarik%20dengan%20jasa%20IT%20Support%20Anda.",
  };

  useEffect(() => {
    onMenuOpen(isMenuOpen);
  }, [isMenuOpen, onMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container-custom py-3 flex justify-between items-center">
          <a href="#about" className="flex items-center">
            {!logoError ? (
              <img 
                src="/BITS-transparant.png" 
                alt="BITS - BRQ IT Solution" 
                className="h-10 md:h-12 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900 tracking-tighter leading-none">BITS</span>
                <span className="text-[0.5rem] font-bold text-slate-500 tracking-widest uppercase">BRQ IT Solution</span>
              </div>
            )}
          </a>
          
          <div className="hidden md:flex gap-8 font-medium text-slate-600 text-sm">
            <a href="#about" className="hover:text-blue-600 transition">Tentang</a>
            <a href="#services" className="hover:text-blue-600 transition">Layanan</a>
            <a href="#experience" className="hover:text-blue-600 transition">Pengalaman</a>
            <a href="#contact" className="hover:text-blue-600 transition">Kontak</a>
          </div>

          <a href={personalInfo.whatsappLink} className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-md shadow-green-200">
            <Phone size={16} /> Hubungi Saya
          </a>

          <button className="md:hidden text-slate-600" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-semibold text-slate-800">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Tentang</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Layanan</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Pengalaman</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontak</a>
            <a href={personalInfo.whatsappLink} className="bg-green-500 text-white p-4 rounded-xl text-center">Chat WhatsApp</a>
          </div>
        </div>
      )}
    </>
  );
}
