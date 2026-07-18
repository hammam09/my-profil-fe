import { useState } from 'react';
import { Globe, Terminal, Palette, ArrowRight, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_INFO } from '../data';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'net' | 'dev' | 'des'>('net');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-radial from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 overflow-hidden"
    >
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
              <span className="wave-hand text-sm">👋</span> Hallo, Welcome to My Portofolio
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              I'm <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">{PROFILE_INFO.name}</span>
            </h1>

            <p className="font-display text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
              {PROFILE_INFO.tagline}
            </p>

            <p className="font-sans text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              {PROFILE_INFO.subtagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                id="cta-projects"
                href="#projects"
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-sans font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Lihat Proyek 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                id="cta-contact"
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 text-zinc-800 dark:text-zinc-200 font-sans font-semibold transition-all duration-300 shadow-sm"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Micro highlights for recruiters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-cyan-500">100%</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">Uptime Jaringan</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-blue-500">20k+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">Baris Kode Bersih</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-purple-500">15+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">Aset Figma UI</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Tech Sandbox */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 font-semibold tracking-wider flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-500" /> ham_sandbox.sh
                </span>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-950/20">
                <button
                  id="tab-sandbox-net"
                  onClick={() => setActiveTab('net')}
                  className={`py-3 text-xs font-mono font-medium flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                    activeTab === 'net'
                      ? 'border-cyan-500 text-cyan-500 dark:text-cyan-400 bg-white dark:bg-zinc-900/50 font-bold'
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" /> NET
                </button>
                <button
                  id="tab-sandbox-dev"
                  onClick={() => setActiveTab('dev')}
                  className={`py-3 text-xs font-mono font-medium flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                    activeTab === 'dev'
                      ? 'border-blue-500 text-blue-500 dark:text-blue-400 bg-white dark:bg-zinc-900/50 font-bold'
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" /> DEV
                </button>
                <button
                  id="tab-sandbox-des"
                  onClick={() => setActiveTab('des')}
                  className={`py-3 text-xs font-mono font-medium flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                    activeTab === 'des'
                      ? 'border-purple-500 text-purple-500 dark:text-purple-400 bg-white dark:bg-zinc-900/50 font-bold'
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" /> DES
                </button>
              </div>

              {/* Interactive Screens */}
              <div className="p-5 min-h-[260px] flex flex-col justify-between font-mono text-sm bg-zinc-50/50 dark:bg-zinc-950/10">
                
                {/* NETWORKING SCREEN */}
                {activeTab === 'net' && (
                  <div className="space-y-3 text-left">
                    <div className="text-zinc-500 text-xs">// Cisco-IOS Router Console</div>
                    <div className="text-zinc-800 dark:text-zinc-300 font-mono text-xs">
                      Hammam-GW# <span className="text-zinc-900 dark:text-white font-semibold">show ip interface brief</span>
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-400 text-xs font-mono bg-zinc-100 dark:bg-zinc-900 p-2.5 rounded border border-zinc-200/60 dark:border-zinc-800 space-y-1">
                      <div>GigabitEthernet0/0  192.168.1.1   YES NVRAM  up  up</div>
                      <div>GigabitEthernet0/1  10.10.10.2    YES NVRAM  up  up</div>
                      <div>Vlan 10 (HRD)      192.168.10.1  YES NVRAM  up  up</div>
                      <div>Vlan 20 (IT)       192.168.20.1  YES NVRAM  up  up</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-500">
                      <CheckCircle2 className="w-4 h-4" /> Routing OSPF converged. Network secure.
                    </div>
                  </div>
                )}

                {/* DEVELOPMENT SCREEN */}
                {activeTab === 'dev' && (
                  <div className="space-y-3 text-left">
                    <div className="text-zinc-500 text-xs">// React Functional Component</div>
                    <div className="text-zinc-600 dark:text-zinc-400 text-xs font-mono bg-zinc-100 dark:bg-zinc-900 p-2.5 rounded border border-zinc-200/60 dark:border-zinc-800 overflow-x-auto">
                      <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
                      <span className="text-blue-500">HammamPortfolio</span> = () =&gt; &#123;
                      <div className="pl-3">
                        <span className="text-purple-500 dark:text-purple-400">const</span> [skills] ={' '}
                        <span className="text-emerald-500">useState</span>([<br />
                        <span className="pl-3 text-amber-600 dark:text-amber-400">"Networking"</span>,{' '}
                        <span className="text-amber-600 dark:text-amber-400">"Dev"</span>,{' '}
                        <span className="text-amber-600 dark:text-amber-400">"Design"</span>
                        <br />
                        ]);
                      </div>
                      <div className="pl-3">
                        <span className="text-purple-500 dark:text-purple-400">return</span> &lt;<span className="text-red-500">main</span>&gt;
                        <span className="text-zinc-400">&#123;</span>skills.map(s =&gt; &lt;<span className="text-red-500">Skill</span>&gt;...&lt;/<span className="text-red-500">Skill</span>&gt;)<span className="text-zinc-400">&#125;</span>&lt;/<span className="text-red-500">main</span>&gt;
                      </div>
                      &#125;
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-500">
                      <CheckCircle2 className="w-4 h-4" /> 0 vulnerabilities found. Build succeeded!
                    </div>
                  </div>
                )}

                {/* DESIGN SCREEN */}
                {activeTab === 'des' && (
                  <div className="space-y-4 text-left">
                    <div className="text-zinc-500 text-xs">// Figma Design Tokens & Palette</div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded bg-cyan-500 ring-2 ring-cyan-500/20" />
                        <span className="text-[10px] text-zinc-500 font-mono">#06B6D4</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded bg-blue-500 ring-2 ring-blue-500/20" />
                        <span className="text-[10px] text-zinc-500 font-mono">#3B82F6</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded bg-purple-500 ring-2 ring-purple-500/20" />
                        <span className="text-[10px] text-zinc-500 font-mono">#A855F7</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded bg-zinc-950 ring-2 ring-zinc-500/20" />
                        <span className="text-[10px] text-zinc-500 font-mono">#09090B</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                      <div>Primary Display: <span className="text-zinc-900 dark:text-white font-semibold">"Space Grotesk"</span></div>
                      <div>Fluid Grid: <span className="text-zinc-900 dark:text-white font-semibold">12-Columns, Gap: 24px</span></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-purple-500">
                      <CheckCircle2 className="w-4 h-4" /> Layout ratio verified. High Fidelity.
                    </div>
                  </div>
                )}

                {/* Shared footer inside console */}
                <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800 flex justify-between items-center text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                  <span>RAM: 3.2 GB / 8.0 GB</span>
                  <span className="flex items-center gap-1 text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> SECURE LIVE CONNECTION
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
