'use client';

import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const personalInfo = {
    name: "Muhammad Bariq Al Mukasyah",
    title: "IT Infrastructure Specialist",
    email: "b@riq.web.id",
    phone: "085156960832",
    whatsappLink: "https://wa.me/6285156960832?text=Halo%20Mas%20Bariq,%20saya%20tertarik%20dengan%20jasa%20IT%20Support%20Anda.",
    linkedin: "https://www.linkedin.com/in/bariqalmukasyah",
    github: "https://bariqalmukasyah.github.io"
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-8">
      <div className="container-custom" data-aos="fade-up">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-xl leading-tight">{personalInfo.name}</span>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 mt-1">{personalInfo.title}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition group">
              <Mail size={14} className="text-blue-500" /> {personalInfo.email}
            </a>
            <a href={personalInfo.whatsappLink} className="flex items-center gap-2 hover:text-white transition group">
              <Phone size={14} className="text-green-500" /> {personalInfo.phone}
            </a>
          </div>

          <div className="flex gap-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-lg hover:bg-slate-700 hover:text-white transition-all">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-[10px] text-center md:text-left flex flex-col md:flex-row justify-between opacity-40 uppercase tracking-widest">
          <span>&copy; 2026 Muhammad Bariq Al Mukasyah</span>
          <div className="flex gap-6 mt-3 md:mt-0 justify-center">
            <span>Semarang, Indonesia</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
