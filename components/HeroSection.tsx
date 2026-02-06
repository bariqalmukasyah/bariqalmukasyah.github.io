'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck, Clock, Users, Phone } from 'lucide-react';

export default function HeroSection() {
  const [profileError, setProfileError] = useState(false);

  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleNavClick as EventListener));

    return () => links.forEach(link => link.removeEventListener('click', handleNavClick as EventListener));
  }, []);

  const personalInfo = {
    name: "Muhammad Bariq Al Mukasyah",
    title: "IT Support & Infrastructure Specialist",
    tagline: "IT seperlunya, hasil semaksimalnya.", 
    whatsappLink: "https://wa.me/6285156960832?text=Halo%20Mas%20Bariq,%20saya%20tertarik%20dengan%20jasa%20IT%20Support%20Anda.",
  };

  return (
    <header id="about" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container-custom relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-10 md:gap-16" data-aos="fade-up">
        <div className="md:w-3/5 space-y-6" data-aos="fade-right">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 text-xs font-medium text-blue-200 mb-2">
            Available for Freelance Projects
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            {personalInfo.tagline}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl">
            Saya {personalInfo.name}, membantu bisnis Anda memiliki infrastruktur IT yang stabil dan efisien layaknya perusahaan besar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href={personalInfo.whatsappLink} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold text-base transition flex items-center justify-center gap-2 shadow-xl shadow-blue-900/50 hover:-translate-y-1">
                <Phone size={20} />
              Konsultasi Gratis
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition backdrop-blur-sm">
              Lihat Layanan
            </a>
          </div>
        </div>
        
        <div className="md:w-2/5 w-full" data-aos="fade-left">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-blue-600 shadow-lg border-2 border-white/20 relative">
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={() => setProfileError(true)}
                />
                {profileError && <span className="absolute text-2xl font-bold text-white">MB</span>}
              </div>
              <div>
                <h3 className="font-bold text-xl">{personalInfo.name}</h3>
                <p className="text-blue-200 text-sm">{personalInfo.title}</p>
              </div>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 transition hover:bg-white/10">
                <div className="p-2 bg-green-500/20 rounded-lg"><ShieldCheck size={24} className="text-green-400" /></div>
                <div>
                  <h4 className="font-bold text-sm text-slate-200">Network Reliability 99.9%</h4>
                  <p className="text-xs text-slate-400">Jaminan koneksi stabil</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 transition hover:bg-white/10">
                <div className="p-2 bg-yellow-500/20 rounded-lg"><Clock size={24} className="text-yellow-400" /></div>
                <div>
                  <h4 className="font-bold text-sm text-slate-200">Fast Response Support</h4>
                  <p className="text-xs text-slate-400">Siap sedia saat dibutuhkan</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 transition hover:bg-white/10">
                <div className="p-2 bg-purple-500/20 rounded-lg"><Users size={24} className="text-purple-400" /></div>
                <div>
                  <h4 className="font-bold text-sm text-slate-200">Professional Experience</h4>
                  <p className="text-xs text-slate-400">Standar industri tinggi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
