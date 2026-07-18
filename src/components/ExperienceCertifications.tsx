import { Briefcase, Award, Calendar, CheckSquare } from 'lucide-react';
import { EXPERIENCES, CERTIFICATIONS } from '../data';

export default function ExperienceCertifications() {
  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Work Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-cyan-500" />Work <span className="text-cyan-500">Experience</span>
              </h2>
              <div className="w-12 h-1 bg-cyan-500 rounded-full mt-3 mb-6" />
              <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
                Here is a summary of my work experience, showing how my skills have evolved.
              </p>
            </div>

            {/* Timeline wrapper */}
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 sm:pl-8 space-y-10">
              {EXPERIENCES.map((exp) => (
                <div id={`experience-timeline-item-${exp.id}`} key={exp.id} className="relative">
                  {/* Circle indicator on line */}
                  <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-cyan-500 shadow-sm z-10">
                    <CheckSquare className="w-3.5 h-3.5" />
                  </span>

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-md w-fit">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                  </div>

                  <div className="font-sans text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                    {exp.company}
                  </div>

                  <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Industry Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-purple-500" /> Lisensi & <span className="text-purple-500">Sertifikasi</span>
              </h2>
              <div className="w-12 h-1 bg-purple-500 rounded-full mt-3 mb-6" />
              <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
                Validasi kompetensi akademis dan industri dari berbagai institusi teknologi global terkemuka.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  id={`cert-item-${cert.id}`}
                  key={cert.id}
                  className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all flex gap-4 items-start"
                >
                  <div className="p-3 bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 rounded-lg flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-zinc-950 dark:text-white leading-tight">
                      {cert.name}
                    </h3>
                    <div className="font-sans text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {cert.issuer}
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400">
                      Tahun Terbit: {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
