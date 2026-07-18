import { Globe, Terminal, Palette } from 'lucide-react';
import { SKILL_GROUPS } from '../data';

export default function Skills() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'networking':
        return <Globe className="w-6 h-6 text-cyan-500" />;
      case 'development':
        return <Terminal className="w-6 h-6 text-blue-500" />;
      case 'design':
        return <Palette className="w-6 h-6 text-purple-500" />;
      default:
        return <Terminal className="w-6 h-6" />;
    }
  };

  const getColorTheme = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          bg: 'bg-cyan-500/10 border-cyan-500/20',
          text: 'text-cyan-500',
          bar: 'bg-gradient-to-r from-cyan-500 to-teal-400',
          dot: 'bg-cyan-500'
        };
      case 'blue':
        return {
          bg: 'bg-blue-500/10 border-blue-500/20',
          text: 'text-blue-500',
          bar: 'bg-gradient-to-r from-blue-500 to-indigo-400',
          dot: 'bg-blue-500'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500/10 border-purple-500/20',
          text: 'text-purple-500',
          bar: 'bg-gradient-to-r from-purple-500 to-pink-400',
          dot: 'bg-purple-500'
        };
      default:
        return {
          bg: 'bg-zinc-500/10 border-zinc-500/20',
          text: 'text-zinc-500',
          bar: 'bg-zinc-500',
          dot: 'bg-zinc-500'
        };
    }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Keahlian & <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-cyan-500 rounded-full" />
          <p className="font-sans text-zinc-500 dark:text-zinc-400">
            Kombinasi keterampilan teknis yang telah dikuasai dan siap diimplementasikan ke dalam infrastruktur serta kode web sesungguhnya.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => {
            const theme = getColorTheme(group.color);
            return (
              <div
                id={`skill-group-${group.id}`}
                key={group.id}
                className="bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl p-6 sm:p-8 border border-zinc-200/50 dark:border-zinc-800/60 shadow-sm flex flex-col h-full hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                {/* Header group */}
                <div className="flex items-center gap-3.5 mb-5 text-left">
                  <div className={`p-3 rounded-xl ${theme.bg} border`}>
                    {getIcon(group.id)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className={`font-mono text-[10px] font-bold tracking-wider uppercase ${theme.text}`}>
                      {group.id} Core
                    </p>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-8 text-left leading-relaxed">
                  {group.description}
                </p>

                {/* Skills progress lines */}
                <div className="space-y-6 flex-grow">
                  {group.skills.map((skill) => (
                    <div id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`} key={skill.name} className="space-y-2 text-left">
                      <div className="flex justify-between items-baseline font-sans">
                        <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                        <span className={`font-mono text-xs font-bold ${theme.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative">
                        <div
                          className={`h-full rounded-full ${theme.bar}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Micro description */}
                      {skill.description && (
                        <p className="font-sans text-xs text-zinc-500 dark:text-zinc-500 leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
