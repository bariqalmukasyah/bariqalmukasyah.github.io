/**
 * Site Configuration
 * Update this file to customize your landing page
 */

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Muhammad Bariq Al Mukasyah",
    title: "IT Support & Infrastructure Specialist",
    tagline: "IT seperlunya, hasil semaksimalnya.",
    phone: "085156960832",
    email: "b@riq.web.id",
    location: "Semarang, Indonesia",
  },

  // Social Links
  social: {
    whatsapp: "https://wa.me/6285156960832?text=Halo%20Mas%20Bariq,%20saya%20tertarik%20dengan%20jasa%20IT%20Support%20Anda.",
    linkedin: "https://www.linkedin.com/in/bariqalmukasyah",
    github: "https://bariqalmukasyah.github.io",
  },

  // Meta Information
  meta: {
    title: "Muhammad Bariq Al Mukasyah - IT Infrastructure Specialist",
    description: "IT Support & Infrastructure Specialist yang membantu bisnis Anda memiliki infrastruktur IT yang stabil dan efisien.",
    url: "https://bariqalmukasyah.github.io",
  },

  // Services
  services: [
    {
      title: "Jaringan & Infrastruktur",
      description: "Instalasi Mikrotik, Ubiquiti, Fiber Optic, dan manajemen jaringan LAN/WLAN yang stabil untuk kantor yang sedang berkembang.",
      icon: "network",
    },
    {
      title: "IT Technical Support",
      description: "Pemecahan masalah hardware/software cepat agar operasional harian bisnis tidak terganggu.",
      icon: "wrench",
    },
    {
      title: "CCTV & Security",
      description: "Instalasi sistem keamanan CCTV 24/7 untuk melindungi aset fisik kantor dan tempat usaha Anda.",
      icon: "shield-check",
    },
    {
      title: "Server & Virtualisasi",
      description: "Efisiensi biaya dengan konfigurasi Linux Server & Docker yang tepat guna untuk kebutuhan skala menengah.",
      icon: "server",
    },
    {
      title: "Web Development",
      description: "Pembuatan website profil perusahaan yang profesional untuk meningkatkan kredibilitas bisnis Anda.",
      icon: "code",
    },
  ],

  // Work Experience
  experience: [
    {
      company: "PT. Bromindo Mekar Mitra",
      role: "IT Support",
      period: "Aug 2021 - Present",
      description: "Bertanggung jawab penuh dalam merancang, mengelola, dan mengoptimalkan infrastruktur jaringan korporat. Fokus utama meliputi pemeliharaan integritas sistem, peningkatan efisiensi jaringan melalui monitoring aktif, serta memberikan solusi troubleshooting perangkat keras dan lunak secara preventif untuk menjamin kelancaran operasional bisnis harian.",
    },
    {
      company: "PT. Media Sarana Data (Gmedia)",
      role: "Access Support",
      period: "Nov 2019 - Jul 2021",
      description: "Mengelola konektivitas jaringan pelanggan secara end-to-end, mencakup instalasi Fiber Optic dan perangkat nirkabel. Melakukan survei lokasi teknis yang mendalam, konfigurasi perangkat MikroTik dan Ubiquiti, serta aktif menggunakan tool monitoring seperti 'The Dude' dan 'Cacti' untuk memastikan stabilitas sambungan berkualitas tinggi bagi klien korporat.",
    },
    {
      company: "Sofitel Bali Nusa Dua Beach Resort",
      role: "Engineer on Site",
      period: "Jul 2018 - Nov 2019",
      description: "Memberikan dukungan teknis tingkat tinggi di sektor perhotelan bintang 5 sebagai perwakilan PT Padi Internet. Spesialis dalam pemeliharaan Access Point Cisco Aironet dan pengelolaan sistem WiFi Billing Premium. Berhasil memastikan pengalaman konektivitas tamu yang lancar serta menangani troubleshoot sistem internal hotel dengan standar pelayanan hospitality yang ketat.",
    },
    {
      company: "PT. Padi Internet",
      role: "Technical Support Intern",
      period: "May 2017 - Jan 2018",
      description: "Membantu teknisi senior dalam manajemen konektivitas pelanggan, mulai dari survei lapangan hingga instalasi jaringan nirkabel. Berperan aktif dalam troubleshooting perangkat di sisi pengguna (CPE) dan mempelajari standar prosedur pemeliharaan jaringan ISP untuk memastikan kualitas layanan tetap terjaga.",
    },
  ],

  // Skills
  skills: [
    "MikroTik",
    "Ubiquiti",
    "Cisco Aironet",
    "Office Server",
    "Home Server",
    "Docker",
    "Ruijie",
    "PHP",
    "HTML/CSS",
    "CCTV Installation",
    "Printer Maintenance",
    "VPBX Maintenance",
    "Troubleshooting",
    "Customer Service",
    "Fiber Optic",
    "Network Monitoring",
    "Network Planning",
    "Web App Development",
    "Professional Landing Page",
  ],

  // Navigation
  navigation: [
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Kontak", href: "#contact" },
  ],
};
