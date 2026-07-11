import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Briefcase, 
  Layers, 
  Globe, 
  ExternalLink, 
  Mail, 
  Instagram, 
  Linkedin, 
  Github, 
  Phone, 
  Copy, 
  Check, 
  Sparkles, 
  Cpu, 
  Palette, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  User, 
  ArrowUpRight, 
  Server
} from 'lucide-react';

export default function App() {
  // Notification Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Custom message state for the live messaging widget
  const [visitorName, setVisitorName] = useState('');
  const [visitorMessage, setVisitorMessage] = useState('');
  const [messageChannel, setMessageChannel] = useState<'wa' | 'email'>('wa');

  // Live Contact Form Trigger
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorMessage.trim()) {
      setToastMessage('Silakan isi pesan Anda terlebih dahulu.');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    const greeting = visitorName.trim() ? `Halo Hammam, saya ${visitorName.trim()}. ` : 'Halo Hammam. ';
    const fullText = `${greeting}${visitorMessage.trim()}`;

    if (messageChannel === 'wa') {
      const waUrl = `https://wa.me/628989200474?text=${encodeURIComponent(fullText)}`;
      window.open(waUrl, '_blank');
    } else {
      const emailUrl = `mailto:mmamm0403@gmail.com?subject=Tawaran Kolaborasi / Kontak dari Website&body=${encodeURIComponent(fullText)}`;
      window.open(emailUrl, '_blank');
    }
  };

  // Projects database with optimized, high-impact Indonesian descriptions and metric outcomes
  const projects = [
    {
      id: 'proj-1',
      title: 'Weather App',
      category: 'Real-time API SPA',
      desc: 'Aplikasi pencarian informasi cuaca yang memberikan data cuaca real-time, perkiraan cuaca 5 hari ke depan, serta kemampuan mengelola daftar kota favorit dengan transisi yang halus.',
      tech: ['JavaScript', 'Tailwind CSS', 'Fetch API', 'Local Storage'],
      link: 'https://hamweatherr.netlify.app',
      impact: 'Menyederhanakan pengambilan data API dengan latensi minimal, menghadirkan antarmuka responsif yang memudahkan pengguna memantau cuaca di berbagai lokasi secara langsung.'
    },
    {
      id: 'proj-2',
      title: 'Abah Kebab',
      category: 'Premium Landing Page',
      desc: 'Website landing page interaktif yang dirancang khusus untuk menghadirkan citra rasa premium dan eksklusif bagi bisnis kuliner lokal Kebab.',
      tech: ['HTML5', 'CSS3 / Tailwind', 'Javascript', 'Aesthetic Layout'],
      link: 'https://abah-kebab.netlify.app/',
      impact: 'Meningkatkan daya tarik visual brand makanan dengan tata letak menu yang modern serta optimalisasi visual yang berpotensi menaikkan konversi minat pelanggan.'
    },
    {
      id: 'proj-3',
      title: 'Quran Qu',
      category: 'Interactive Web App',
      desc: 'Aplikasi web Al-Qur\'an digital modern, responsif, dan interaktif yang memudahkan pengguna membaca, mencari surat, dan menjelajahi ayat-ayat suci dengan navigasi cepat.',
      tech: ['React / JS', 'Tailwind CSS', 'Al-Quran API', 'Interactive UI'],
      link: 'https://quranqu.netlify.app',
      impact: 'Menghadirkan pengalaman membaca yang nyaman dan inklusif dengan navigasi instan per surat/ayat serta kompatibilitas penuh di perangkat mobile.'
    },
    {
      id: 'proj-4',
      title: 'Table Manajer',
      category: 'Real-time Data Dashboard',
      desc: 'Sistem dashboard manajemen dan rekapitulasi data siswa secara real-time yang dilengkapi dengan sistem penyaringan (filtering) data tingkat lanjut untuk administrasi yang ringkas.',
      tech: ['React.js', 'Tailwind CSS', 'State Management', 'Advanced Filter'],
      link: 'https://tabel-data-siswa.netlify.app/',
      impact: 'Mempercepat pencarian dan pengolahan data administratif siswa, mereduksi waktu rekapitulasi manual secara signifikan dengan tingkat akurasi filter 100%.'
    },
    {
      id: 'proj-5',
      title: 'Finance Management (HamTrack)',
      category: 'Personal Finance Tracker',
      desc: 'Aplikasi web Single Page Application (SPA) interaktif premium yang dirancang untuk membantu pengguna mencatat dan memvisualisasikan pemasukan serta pengeluaran bulanan.',
      tech: ['React.js', 'Tailwind CSS', 'SPA Architecture', 'Dynamic Chart / State'],
      link: 'https://hamtrack.netlify.app/',
      impact: 'Membantu pengguna melacak alur pengeluaran harian secara visual dan real-time tanpa reload halaman, meningkatkan kesadaran manajemen finansial pribadi.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-16">
      
      {/* Dynamic Floating Toast Notification */}
      {toastMessage && (
        <div id="toast-notification" className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-indigo-900 text-white px-4 py-3 rounded-xl shadow-xl border border-indigo-700/30 animate-in fade-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Professional Sticky Header */}
      <header id="app-header" className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-base block">Hammam</span>
              <span className="text-xs text-indigo-600 font-semibold block -mt-0.5">Web Developer</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium border border-emerald-200/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Tersedia untuk Kerja Sama
            </span>
            <a 
              href="#contact-section" 
              className="text-xs md:text-sm bg-slate-900 text-white hover:bg-indigo-600 transition-all px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-1"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </header>

      {/* Hero Welcome Banner */}
      <section id="hero-section" className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/40 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-full font-semibold border border-indigo-100/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Portofolio & Resume Generator</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
            Hadirkan Ide Digital Menjadi <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600">Antarmuka Premium</span>
          </h1>

          <p id="hero-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Saya adalah seorang <strong className="text-slate-900">Web Developer (Fresh Graduate)</strong> yang berdedikasi membangun aplikasi web modern, interaktif, dan responsif. Berfokus penuh pada keunggulan sisi <strong className="text-indigo-600">Frontend</strong> dengan sentuhan desain berkualitas tinggi.
          </p>

          {/* Quick Tags / Traits */}
          <div id="hero-traits-grid" className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
            <span className="flex items-center gap-1 bg-white border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-700 shadow-sm">
              <Code className="w-3.5 h-3.5 text-indigo-500" /> Javascript Specialist
            </span>
            <span className="flex items-center gap-1 bg-white border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-700 shadow-sm">
              <Palette className="w-3.5 h-3.5 text-purple-500" /> Kepekaan Desain UI/UX
            </span>
            <span className="flex items-center gap-1 bg-white border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-700 shadow-sm">
              <Server className="w-3.5 h-3.5 text-emerald-500" /> Dasar Networking & Sistem
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main id="main-content-area" className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Area (About & Expertise & Projects) - 7 Columns */}
        <div id="about-and-projects-column" className="lg:col-span-7 space-y-12">
          
          {/* Section 1: Ringkasan Profil */}
          <section id="profile-summary-section" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Ringkasan Profil</h2>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Halo! My Name is <strong className="text-slate-900">Hammam</strong>. I am a beginner web developer who is passionate about creating modern responsive, and interactive websites. I enjoy turning ideas into beautiful digital experiences using HTML, CSS, and JavaScript.
              </p>
              <p>
                My journey in programming started from curiosity about how websites work, and now I continue learning new technologies, improving my design skills, and building creative projects every day.
              </p>
              <p>
                Besides coding, I also enjoy UI/UX design, exploring modern web trends, and creating smooth animations that make websites feel more alive and engaging.
              </p>
            </div>
          </section>

          {/* Section 2: Area Keahlian */}
          <section id="core-expertise-section" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Keahlian</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Expertise item 1 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">JavaScript & React</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pemahaman JavaScript ES6+, manajemen state interaktif, rendering data API, dan pembangunan Single Page Application (SPA) yang responsif.
                </p>
              </div>

              {/* Expertise item 2 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">Modern UI & Design</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Implementasi styling tingkat lanjut menggunakan Tailwind CSS, kepekaan terhadap rasio kontras warna, grid simetris, dan tipografi modern yang memikat mata.
                </p>
              </div>

              {/* Expertise item 3 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">Networking & Systems</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dasar-dasar jaringan komputer, integrasi protokol HTTP/HTTPS, optimasi pertukaran data API, dan pemahaman dasar infrastruktur hosting web.
                </p>
              </div>

              {/* Expertise item 4 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">Soft Skills & Adaptabilitas</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Kemampuan komunikasi yang asertif, semangat kolaborasi tim yang kuat, keingintahuan tinggi, dan kemampuan belajar teknologi baru secara mandiri.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Rekam Jejak Proyek */}
          <section id="key-projects-section" className="space-y-6">
            <div className="flex items-center gap-2 pl-1">
              <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Rekam Jejak Proyek</h2>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  id={project.id}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 hover:border-indigo-200 hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-full font-medium mb-2.5">
                        Proyek {index + 1}: {project.category}
                      </div>
                      <h3 className="text-lg md:text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg border border-slate-200 hover:border-indigo-200/60 transition-all self-start md:self-auto"
                    >
                      <span>Kunjungi Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Highlights section with specific professional impact and results */}
                  <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl mb-4">
                    <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider block mb-1">Dampak & Hasil (Impact & Result):</span>
                    <p className="text-xs md:text-sm text-emerald-900 leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech stack used badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Area (Interactive Tools: Contact Details) - 5 Columns */}
        <div id="interactive-sidebar-column" className="lg:col-span-5">
          
          {/* Tool: Direct Contacts Hub ("Gunakan Logo Saja tapi nanti bisa ngarah ke yang dimaksud") */}
          <div id="contact-hub-card" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm lg:sticky lg:top-24">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Kontak Utama & Media Sosial</h3>
            <p className="text-xs text-slate-500 mb-6">
              Klik salah satu logo di bawah untuk langsung terhubung dengan saya di berbagai platform profesional.
            </p>

            {/* Minimalist social logos grid as explicitly requested */}
            <div id="social-logos-grid" className="flex items-center justify-around gap-2 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/628989200474" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="WhatsApp (08989200474)"
                className="w-12 h-12 rounded-xl bg-white text-emerald-600 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Email */}
              <a 
                href="mailto:mmamm0403@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Email (mmamm0403@gmail.com)"
                className="w-12 h-12 rounded-xl bg-white text-amber-600 border border-slate-200 hover:border-amber-300 hover:bg-amber-50 flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/hammam-55476a371/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn Hammam"
                className="w-12 h-12 rounded-xl bg-white text-indigo-600 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/hammam09" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub hammam09"
                className="w-12 h-12 rounded-xl bg-white text-slate-800 border border-slate-200 hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/mmamm.dev26" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram @mmamm.dev26"
                className="w-12 h-12 rounded-xl bg-white text-pink-600 border border-slate-200 hover:border-pink-300 hover:bg-pink-50 flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Live Contact Composer Widget */}
            <div id="quick-contact-form" className="border-t border-slate-100 pt-6">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5 mb-3">
                <MessageSquare className="w-4 h-4 text-indigo-500" />
                <span>Kirim Pesan Instan Cepat</span>
              </h4>
              
              <form onSubmit={handleSendMessage} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nama Anda (Opsional)</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama Anda..." 
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Isi Pesan Anda</label>
                  <textarea 
                    rows={3} 
                    required
                    placeholder="Halo Hammam, saya tertarik mendiskusikan..." 
                    value={visitorMessage}
                    onChange={(e) => setVisitorMessage(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Communication channel selector */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Kirim Melalui Saluran</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMessageChannel('wa')}
                      className={`text-xs font-bold py-2 rounded-lg border flex items-center justify-center gap-1.5 transition-all ${
                        messageChannel === 'wa'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-500" />
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setMessageChannel('email')}
                      className={`text-xs font-bold py-2 rounded-lg border flex items-center justify-center gap-1.5 transition-all ${
                        messageChannel === 'email'
                          ? 'bg-amber-50 text-amber-800 border-amber-300 shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-500" />
                      Email
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs py-2.5 rounded-lg transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  Kirim Pesan Sekarang
                </button>
              </form>
            </div>

          </div>

        </div>

      </main>

      {/* Elegant CTA Footer section */}
      <footer id="contact-section" className="max-w-6xl mx-auto px-4 mt-20 border-t border-slate-200/80 pt-10 text-center">
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 text-white p-8 md:p-12 rounded-3xl shadow-xl border border-indigo-950 text-center relative overflow-hidden">
          {/* Subtle background glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-white">
            Mari Berkolaborasi & Bangun Solusi Hebat Bersama!
          </h3>
          <p className="text-indigo-200 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            Apakah Anda memiliki proyek menarik, butuh frontend developer penuh antusiasme, atau ingin sekadar berdiskusi teknologi? Pintu kontak saya selalu terbuka lebar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://wa.me/628989200474" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-indigo-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
            >
              <Phone className="w-4.5 h-4.5" />
              <span>Hubungi via WhatsApp</span>
            </a>
            
            <a 
              href="mailto:mmamm0403@gmail.com" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 rounded-xl transition-all"
            >
              <Mail className="w-4.5 h-4.5" />
              <span>Kirim Email Langsung</span>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-indigo-800/60 flex flex-col md:flex-row items-center justify-between text-xs text-indigo-300/80 gap-4">
            <span>© 2026 Hammam. All Rights Reserved.</span>
            <div className="flex items-center gap-1">
              <span>Hadir di Jogja, Indonesia</span>
              <span>•</span>
              <span className="font-semibold text-emerald-400">Aktif & Siap Bekerja</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
