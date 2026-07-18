import { Globe, Terminal, Palette, MapPin, Mail, Award } from 'lucide-react';
import { PROFILE_INFO } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Tentang <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Saya</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-cyan-500 rounded-full" />
          <p className="font-sans text-zinc-500 dark:text-zinc-400">
            Mengenal lebih dekat visi, filosofi kerja, dan sinergi keahlian unik yang saya tawarkan.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Story & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-display text-2xl font-bold text-zinc-800 dark:text-zinc-200">
              Mengapa Memilih Generalis Spesialis (Hybrid Talent)?
            </h3>
            
            <p className="font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg">
              {PROFILE_INFO.aboutLeft}
            </p>
            
            <p className="font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg">
              {PROFILE_INFO.aboutRight}
            </p>

            {/* Micro bento highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-start gap-2">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-200">Networking</div>
                <div className="font-sans text-xs text-zinc-500 dark:text-zinc-400 text-left">CCNA Training, RouterOS, VLAN Security.</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-start gap-2">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-200">Development</div>
                <div className="font-sans text-xs text-zinc-500 dark:text-zinc-400 text-left">React, TS, Vite, Clean Code optimization.</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-start gap-2">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                  <Palette className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-200">UI/UX Design</div>
                <div className="font-sans text-xs text-zinc-500 dark:text-zinc-400 text-left">Figma systems, prototyping, high fidelity.</div>
              </div>
            </div>
          </div>

          {/* Right Column - Avatar Badge Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Background gradient decorative frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              
              {/* Profile Card Body */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col items-center">
                
                {/* Avatar frame */}
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 shadow-md mb-6 relative">
                  <img
                    src={PROFILE_INFO.avatar}
                    alt={PROFILE_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Text */}
                <h4 className="font-display text-xl font-bold text-zinc-900 dark:text-white mb-1">
                  {PROFILE_INFO.fullName}
                </h4>
                <p className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-4 tracking-wider uppercase">
                  NetDevOps & Designer
                </p>

                {/* Key metadata badges */}
                <div className="w-full space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-left">
                  <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span>{PROFILE_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="truncate">{PROFILE_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Award className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span>Aktif Menerima Kontrak / Full-time</span>
                  </div>
                </div>

                {/* Footer seal */}
                <div className="w-full bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 mt-6 text-center">
                  <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 font-bold tracking-wider">
                    RECRUITER-READY PROFILE
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
