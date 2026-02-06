'use client';

import { ChevronRight, Linkedin } from 'lucide-react';

const experiences = [
  {
    company: "PT. Bromindo Mekar Mitra",
    role: "IT Support",
    period: "Aug 2021 - Present",
    desc: "Bertanggung jawab penuh dalam merancang, mengelola, dan mengoptimalkan infrastruktur jaringan korporat. Fokus utama meliputi pemeliharaan integritas sistem, peningkatan efisiensi jaringan melalui monitoring aktif, serta memberikan solusi troubleshooting perangkat keras dan lunak secara preventif untuk menjamin kelancaran operasional bisnis harian."
  },
  {
    company: "PT. Media Sarana Data (Gmedia)",
    role: "Access Support",
    period: "Nov 2019 - Jul 2021",
    desc: "Mengelola konektivitas jaringan pelanggan secara end-to-end, mencakup instalasi Fiber Optic dan perangkat nirkabel. Melakukan survei lokasi teknis yang mendalam, konfigurasi perangkat MikroTik dan Ubiquiti, serta aktif menggunakan tool monitoring seperti 'The Dude' dan 'Cacti' untuk memastikan stabilitas sambungan berkualitas tinggi bagi klien korporat."
  },
  {
    company: "Sofitel Bali Nusa Dua Beach Resort",
    role: "Engineer on Site",
    period: "Jul 2018 - Nov 2019",
    desc: "Memberikan dukungan teknis tingkat tinggi di sektor perhotelan bintang 5 sebagai perwakilan PT Padi Internet. Spesialis dalam pemeliharaan Access Point Cisco Aironet dan pengelolaan sistem WiFi Billing Premium. Berhasil memastikan pengalaman konektivitas tamu yang lancar serta menangani troubleshoot sistem internal hotel dengan standar pelayanan hospitality yang ketat."
  },
  {
    company: "PT. Padi Internet",
    role: "Technical Support Intern",
    period: "May 2017 - Jan 2018",
    desc: "Membantu teknisi senior dalam manajemen konektivitas pelanggan, mulai dari survei lapangan hingga instalasi jaringan nirkabel. Berperan aktif dalam troubleshooting perangkat di sisi pengguna (CPE) dan mempelajari standar prosedur pemeliharaan jaringan ISP untuk memastikan kualitas layanan tetap terjaga."
  }
];

export default function ExperienceSection() {
  const personalInfo = {
    linkedin: "https://www.linkedin.com/in/bariqalmukasyah"
  };

  return (
    <section id="experience" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3" data-aos="fade-right">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2 block">Portofolio Karir</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Pengalaman Profesional</h2>
            <p className="text-slate-600 mb-8 text-base leading-relaxed">
              Rekam jejak komprehensif dalam mengelola infrastruktur IT kritis, sistem jaringan, dan dukungan teknis di berbagai lini industri selama bertahun-tahun.
            </p>
            <div className="flex flex-col gap-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-blue-600 font-bold hover:translate-x-2 transition-transform group">
                Profil LinkedIn Profesional <ChevronRight size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-2/3 flex gap-10">
            <div className="timeline-line rounded-full flex-shrink-0">
              <div className="timeline-light"></div>
            </div>

            <div className="space-y-16 w-full">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="relative group w-full" 
                  data-aos="fade-left"
                  data-aos-delay={idx * 150}
                >
                  <div className="absolute -left-[45px] top-1.5 w-5 h-5 bg-white border-2 border-blue-500 rounded-full z-10 shadow-sm group-hover:bg-blue-500 transition-colors"></div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                  <div className="text-blue-600 font-semibold mb-5 flex items-center gap-3 text-sm md:text-base">
                    {exp.company} <span className="text-slate-300">|</span> {exp.period}
                  </div>
                  <p className="text-slate-600 text-sm md:text-lg leading-relaxed text-justify opacity-90">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
