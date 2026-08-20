import { Project, SkillGroup, Experience, Certification } from './types';

// Import local generated images to ensure Vite bundles them correctly
import avatarImg from './assets/images/ChatGPT Image 7 Jun 2026, 00.18.41.png';
import devProjImg from './assets/images/Screenshot 2026-08-16 220247.png';
import noteImg from './assets/images/Screenshot 2026-08-16 215858.png';

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
    id: 'dev-1',
    title: 'Weather-App',
    category: 'development',
    description: 'Aplikasi Cuaca yang terintegrasi dengan api, yang membuat senya realtime',
    image: devProjImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://hamweatherr.netlify.app/',
    githubUrl: 'https://github.com/hammam09/wheaterr-fe',
    highlights: [
      'Menampilkan cuaca realtime dari berbagai kota.',
      'Menampilkan data angin, suhu, kelembapan.',
      'Menggunakan api openweather' ,
      'Menampilkan jadwal solat',
    ]
  },
  {
    id: 'dev-2',
    title: 'Notes-App',
    category: 'development',
    description: 'Aplikasi catatan berbasis Web yang membantu kamu untuk mencatat hal penting dengan aman.',
    image: noteImg,
    tags: ['Express','React','PostgreSQL'],
    demoUrl: 'https://hamnotes.lovable.app',
    githubUrl: 'https://hamnotes.lovable.app',
    highlights: [
    'Buat catatan mu kapanpun dan dimanapun',
    'Aman dan terpercaya',
    'Mudah digunakan',
    ]
  },
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
    category: 'general'
  },
  {
    id: 'exp-3',
    role: 'Networking Computer Technology',
    company: 'SMK Al-Hadiid 1 Cileungsi',
    period: '2022 - 2025',
    description: 'Mempelajari Networking, Design, Mempelajari Dasar Programmer',
    category: 'networking'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    name: 'Dasar SQL',
    issuer: 'SQL 101: Belajar SQL dari Nol',
    year: '2021'
  },
  {
    id: 'cert-2',
    name: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'ID-Networkers',
    year: '2024'
  },
];
