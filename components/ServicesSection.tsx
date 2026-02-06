'use client';

import { Network, Wrench, ShieldAlert, Server, Code } from 'lucide-react';

const services = [
  { 
    icon: Network, 
    title: "Jaringan & Infrastruktur", 
    desc: "Instalasi Mikrotik, Ubiquiti, Fiber Optic, dan manajemen jaringan LAN/WLAN yang stabil untuk kantor yang sedang berkembang." 
  },
  { 
    icon: Wrench, 
    title: "IT Technical Support", 
    desc: "Pemecahan masalah hardware/software cepat agar operasional harian bisnis tidak terganggu." 
  },
  { 
    icon: ShieldAlert, 
    title: "CCTV & Security", 
    desc: "Instalasi sistem keamanan CCTV 24/7 untuk melindungi aset fisik kantor dan tempat usaha Anda." 
  },
  { 
    icon: Server, 
    title: "Server & Virtualisasi", 
    desc: "Efisiensi biaya dengan konfigurasi Linux Server & Docker yang tepat guna untuk kebutuhan skala menengah." 
  },
  { 
    icon: Code, 
    title: "Web Development", 
    desc: "Pembuatan website profil perusahaan yang profesional untuk meningkatkan kredibilitas bisnis Anda." 
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2 block">Layanan Kami</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Solusi IT Terintegrasi</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Paket lengkap kebutuhan IT agar Anda bisa fokus pada strategi bisnis tanpa pusing masalah teknis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                  <Icon size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
