import { useState } from 'react';
import { ExternalLink, Github, Eye, X, Check, Code } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project, ProjectCategory } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const categories: { id: ProjectCategory; name: string }[] = [
    { id: 'all', name: 'Semua Kategori' },
    { id: 'networking', name: 'Networking' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Galeri <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Proyek</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-cyan-500 rounded-full" />
          <p className="font-sans text-zinc-500 dark:text-zinc-400">
            Berikut adalah proyek-proyek terpilih yang mewakili keahlian saya dalam merancang jaringan, menulis kode web, dan mendesain UI/UX.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              id={`filter-btn-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-sans text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-500/10'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 dark:hover:border-cyan-400/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              id={`project-card-${project.id}`}
              key={project.id}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/80 shadow-md hover:shadow-xl hover:border-cyan-500/30 dark:hover:border-cyan-400/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-md cursor-pointer"
                    title="Detail Proyek"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      id={`github-link-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-900 text-white rounded-full hover:scale-110 transition-transform shadow-md border border-zinc-700"
                      title="Lihat Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Floating category badge */}
                <span className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full shadow-md text-white ${
                  project.category === 'networking' ? 'bg-cyan-600' :
                  project.category === 'development' ? 'bg-blue-600' : 'bg-purple-600'
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white mb-2 line-clamp-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons at Footer */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                  <button
                    id={`details-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-sans text-xs font-bold hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Detail Proyek
                  </button>
                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <a
                      id={`demo-btn-${project.id}`}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black font-sans text-xs font-bold transition-colors shadow-sm"
                    >
                      Kunjungi <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <a
                      id={`github-bottom-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-black text-white dark:bg-zinc-800 dark:hover:bg-zinc-750 font-sans text-xs font-bold transition-colors shadow-sm border border-zinc-700"
                    >
                      Repo <Github className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Dynamic Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop filter */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Body */}
            <div className="relative bg-white dark:bg-zinc-950 rounded-2xl max-w-2xl w-full border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl z-10 transition-all transform scale-100 text-left">
              
              {/* Cover Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/70 text-white hover:bg-black rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className={`absolute bottom-4 left-4 px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase rounded-full text-white ${
                  selectedProject.category === 'networking' ? 'bg-cyan-600' :
                  selectedProject.category === 'development' ? 'bg-blue-600' : 'bg-purple-600'
                }`}>
                  {selectedProject.category}
                </span>
              </div>

              {/* Info Area */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="font-sans text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <Code className="w-4 h-4 text-cyan-500" /> Spesifikasi & Pencapaian Teknis
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5 pl-1">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans">
                        <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-500 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    Tech Stack Terkait
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Link */}
                <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a
                      id="modal-github-link"
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-black text-white font-sans text-sm font-semibold transition-colors shadow"
                    >
                      <Github className="w-4 h-4" /> Repo GitHub
                    </a>
                  )}
                  {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a
                      id="modal-demo-link"
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-sans text-sm font-semibold transition-colors shadow shadow-cyan-500/10"
                    >
                      Kunjungi Proyek <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
