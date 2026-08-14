import { Project, SkillGroup, Experience, Certification } from './types';

// Import local generated images to ensure Vite bundles them correctly
import avatarImg from './assets/images/hammam_profile_avatar_1784302595467.jpg';
import netProjImg from './assets/images/networking_project_preview_1784302612305.jpg';
import devProjImg from './assets/images/developer_project_preview_1784302657755.jpg';
import desProjImg from './assets/images/design_project_preview_1784302675323.jpg';

export const PROFILE_INFO = {
  name: 'Hammam',
  fullName: 'Hammam',
  tagline: 'Connecting networks. Coding solutions. Designing experiences.',
  subtagline: 'Saya membantu perusahaan dan klien membangun infrastruktur jaringan yang aman, menulis kode web yang modular dan berkinerja tinggi, serta merancang pengalaman visual (UI/UX) yang memikat.',
  location: 'Jogjakarta, Indonesia',
  email: 'hammmam678970@gmail.com',
  whatsapp: '628989200474', // Format internasional tanpa '+' untuk link wa.me
  github: 'https://github.com/hammam09',
  linkedin: 'https://www.linkedin.com/in/hammam-55476a371/',
  instagram: 'https://instagram.com/mmamm.dev26',
  avatar: avatarImg,
  aboutLeft: 'Halo! My Name is Hammam. I am a beginner web developer who is passionate about creating modern responsive, and interactive websites. I enjoy turning ideas into beautiful digital experiences using HTML, CSS, and JavaScript.',
  aboutRight: 'My journey in programming started from curiosity about how websites work, and now I continue learning new technologies, improving my design skills, and building creative projects every day.'
};

export const PROJECTS: Project[] = [
  {
    id: 'net-1',
    title: 'HamNet Secure SOHO Topology',
    category: 'networking',
    description: 'Rancangan dan implementasi infrastruktur jaringan kantor kecil (SOHO) yang aman, dilengkapi dengan segmentasi VLAN, Firewall ACL, dan konfigurasi VPN.',
    image: netProjImg,
    tags: ['Cisco Packet Tracer', 'VLAN', 'Firewall ACL', 'Routing OSPF'],
    demoUrl: '#',
    githubUrl: 'https://github.com/hammam-dev/secure-soho',
    highlights: [
      'Segmentasi 4 VLAN berbeda untuk Departemen HRD, IT, Keuangan, dan Guest.',
      'Konfigurasi Firewall Access Control Lists (ACL) untuk membatasi akses antar VLAN.',
      'Implementasi Dynamic Routing OSPF untuk skalabilitas konektivitas antar cabang.',
      'Penyediaan koneksi VPN IPSec aman untuk pekerja remote.'
    ]
  },
  {
    id: 'dev-1',
    title: 'Weather-App',
    category: 'development',
    description: 'Aplikasi Cuaca yang terintegrasi dengan api, yang membuat senya realtime',
    image: devProjImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/hammam09/wheaterr-fe',
    highlights: [
      'Menampilkan cuaca realtime dari berbagai kota.',
      'Menampilkan data angin, suhu, kelembapan.',
      'Menggunakan api openweather' ,
      'Menampilkan jadwal solat',
    ]
  },
  {
    id: 'des-1',
    title: 'NetDesign UI Component Library',
    category: 'design',
    description: 'Sistem desain UI/UX komprehensif di Figma yang dirancang khusus untuk dashboard monitoring jaringan komputer dan visualisasi topologi.',
    image: desProjImg,
    tags: ['Figma', 'UI/UX Design', 'Design System', 'Network Icons'],
    demoUrl: 'https://figma.com',
    githubUrl: '#',
    highlights: [
      'Menyediakan lebih dari 150+ komponen siap pakai (buttons, charts, network nodes, cards).',
      'Dilengkapi dengan Mode Gelap (Dark Mode) bawaan dengan rasio kontras tinggi sesuai standar WCAG.',
      'Ikon kustomisasi bertema jaringan komputer (router, switch, server, cloud).',
      'Skema tata letak grid fleksibel untuk mempercepat proses prototyping dashboard IT.'
    ]
  },
  {
    id: 'net-2',
    title: 'RouterOS Automation Script',
    category: 'networking',
    description: 'Skrip otomatisasi menggunakan Python untuk melakukan backup konfigurasi RouterOS Mikrotik berkala dan mengirim notifikasi status kesehatan ke Telegram.',
    image: 'https://picsum.photos/seed/network-auto/800/600',
    tags: ['Python', 'Mikrotik API', 'Telegram Bot', 'Cron Job'],
    demoUrl: '#',
    githubUrl: 'https://github.com/hammam-dev/routeros-backup-bot',
    highlights: [
      'Mengotomatiskan backup file (.backup & .rsc) dari 10+ router Mikrotik secara remote.',
      'Pengiriman otomatis berkas enkripsi ke server backup terpusat via SFTP.',
      'Notifikasi real-time ke grup Telegram jika terjadi kegagalan jaringan atau suhu CPU berlebih.',
      'Log aktivitas terstruktur untuk audit kepatuhan keamanan berkala.'
    ]
  },
  {
    id: 'dev-2',
    title: 'Portofolio Engine Core',
    category: 'development',
    description: 'Generator situs portofolio statis bertenaga cepat yang membaca skema file JSON tunggal untuk menghasilkan halaman portofolio responsif.',
    image: 'https://picsum.photos/seed/portfolio-dev/800/600',
    tags: ['Vite', 'HTML5/CSS3', 'JavaScript ESM', 'SEO Friendly'],
    demoUrl: '#',
    githubUrl: 'https://github.com/hammam-dev/portfolio-engine',
    highlights: [
      'Waktu muat halaman kurang dari 0.8 detik dengan skor performa Lighthouse 100%.',
      'Mendukung kustomisasi tema tanpa perlu mengubah kode sumber inti.',
      'Optimasi SEO on-page otomatis (structured data, OpenGraph tags, sitemap generator).',
      'Terintegrasi mulus dengan hosting statis gratis seperti Vercel, Netlify, atau GitHub Pages.'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'networking',
    title: 'Networking & Infrastructure',
    description: 'Keahlian dalam merancang, mengonfigurasi, dan mengamankan jaringan komputer perusahaan skala menengah.',
    color: 'cyan',
    skills: [
      { name: 'Mikrotik RouterOS', level: 88, description: 'Bandwidth queue, firewall filter, VPN PPTP/L2TP.' },
      { name: 'Network Security & Firewalls', level: 80, description: 'Implementasi IDS/IPS, enkripsi data, dan hardening switch.' },
      { name: 'IP Subnetting & IPVLSM', level: 95, description: 'Efisiensi pengalamatan IPv4 dan dasar IPv6.' },
      { name: 'Network Monitoring Tools', level: 82, description: 'Pemonitoran real-time menggunakan Wireshark, Zabbix, PRTG.' }
    ]
  },
  {
    id: 'development',
    title: 'Web & Junior Development',
    description: 'Menulis kode web yang bersih, modular, dan responsif menggunakan teknologi Javascript modern dan framework populer.',
    color: 'blue',
    skills: [
      { name: 'React.js & TypeScript', level: 65, description: 'Hooks, state management, optimalisasi render, tipe data ketat.' },
      { name: 'HTML5 & CSS3 (Tailwind)', level: 90, description: 'Slicing presisi tinggi, responsive design, kustomisasi utility.' },
      { name: 'JavaScript ES6+', level: 85, description: 'Asynchronous, DOM manipulation, REST API integration.' },
      { name: 'Git & GitHub Workflow', level: 84, description: 'Version control, branching, PR reviews, kolaborasi tim.' },
      { name: 'Node.js & Express Basics', level: 70, description: 'Pembuatan API endpoint sederhana, database querying.' }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX & Graphic Design',
    description: 'Menerjemahkan ide abstrak menjadi purwarupa interaktif yang berpusat pada kenyamanan pengalaman pengguna (UX).',
    color: 'purple',
    skills: [
      { name: 'UI/UX Research & Wireframing', level: 80, description: 'User flows, persona creation, A/B testing, low-to-high fidelity.' },
      { name: 'Canva & Graphic Branding', level: 88, description: 'Pembuatan materi pemasaran, desain logo, presentasi investor.' },
      { name: 'Responsive Layout Design', level: 90, description: 'Memastikan kecocokan visual di layar ponsel, tablet, hingga desktop.' },
      { name: 'Typography & Color Theory', level: 85, description: 'Pemilihan palette harmonis dan hierarki keterbacaan tinggi.' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Junior Fullstack Web Developer & Designer',
    company: 'Pondok IT',
    period: 'Mei 2026 - Now',
    description: 'Mengembangkan aplikasi web berbasis React, memimpin proses transisi desain dari sketsa kasar ke prototipe Figma beresolusi tinggi, dan berkolaborasi dalam mengintegrasikan endpoint API.',
    category: 'development'
  },
  {
    id: 'exp-2',
    role: 'Warehouse Staff',
    company: 'PT Sakha Internasional',
    period: 'Mei 2025 -  Sep 2025',
    description: 'Menghitung Stok yang ada di gudang, Melakukan Pengecekan setiap loading dan unloading ',
    category: 'networking'
  },
  {
    id: 'exp-3',
    role: 'Networking Computer Technology',
    company: 'SMK Al-Hadiid 1 Cileungsi',
    period: '2022 - 2025',
    description: 'Mempelajari Networking, Design, Mempelajari Dasar Programmer',
    category: 'design'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    name: 'Cisco Certified Network Associate (CCNA 200-301) - Training Course',
    issuer: 'Cisco Networking Academy',
    year: '2025'
  },
  {
    id: 'cert-2',
    name: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    year: '2024'
  },
  {
    id: 'cert-3',
    name: 'MikroTik Certified Network Associate (MTCNA) Prep',
    issuer: 'ID-Networkers',
    year: '2024'
  },
  {
    id: 'cert-4',
    name: 'Google UX Design Professional Certificate',
    issuer: 'Coursera / Google',
    year: '2023'
  }
];
