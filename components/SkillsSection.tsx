'use client';

const skills = [
  "MikroTik", "Ubiquiti", "Cisco Aironet", "Office Server", "Home Server", "Docker", "Ruijie",
  "PHP", "HTML/CSS", "CCTV Installation", "Printer Maintenance", "VPBX Maintenance",
  "Troubleshooting", "Customer Service", "Fiber Optic", "Network Monitoring", "Network Planning",
  "Web App Development", "Professional Landing Page"
];

export default function SkillsSection() {
  return (
    <section className="py-12 bg-slate-900 overflow-hidden border-b border-white/5">
      <div className="scroll-container py-2">
        {[...skills, ...skills].map((skill, idx) => (
          <div key={idx} className="mx-5 bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:scale-105 transition-all whitespace-nowrap cursor-default">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
