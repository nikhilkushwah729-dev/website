import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ExternalLink, Github, ArrowUpRight, Check, Play, Layers, X, Sparkles, Star, Activity, ChevronRight } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProjectForDemo: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProjectForDemo }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full-Stack Web', 'AI & LLM', 'Mobile & SaaS', 'UI/UX Design'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Proven Client Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Selected Client Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2 font-normal">
              Real-world web applications built for startups and enterprise clients. Each project is engineered with high-impact client metrics and clean architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Thumbnail Header Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-semibold text-indigo-300">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-medium text-slate-300">
                      {project.clientIndustry}
                    </span>
                  </div>

                  {/* Interactive Demo Tag */}
                  {project.hasInteractiveDemo && (
                    <div className="absolute top-4 right-4 bg-emerald-500/90 text-slate-950 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center space-x-1 shadow-lg">
                      <Play className="w-3 h-3 fill-slate-950" />
                      <span>Interactive Demo</span>
                    </div>
                  )}

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium mt-0.5 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 space-y-5">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metric Callouts Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm sm:text-base font-extrabold text-indigo-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium line-clamp-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-900/80 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 transition-colors"
                >
                  <span>Full Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {project.hasInteractiveDemo && (
                  <button
                    onClick={() => onSelectProjectForDemo(project)}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-all flex items-center space-x-1.5 shadow-md shadow-indigo-600/20"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Try Prototype</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-indigo-400">{selectedProject.clientName}</span>
                <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Image banner */}
              <div className="rounded-xl overflow-hidden aspect-video relative">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Client Metrics */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-extrabold text-indigo-400">{m.value}</div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">The Challenge</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">The Solution</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3">Key Deliverables & Engineered Features</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Testimonial if present */}
              {selectedProject.testimonial && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/50 to-slate-950 border border-indigo-900/40 space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm italic text-slate-200">
                    "{selectedProject.testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3 pt-1">
                    <img
                      src={selectedProject.testimonial.avatar}
                      alt={selectedProject.testimonial.author}
                      className="w-8 h-8 rounded-full object-cover border border-slate-700"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{selectedProject.testimonial.author}</div>
                      <div className="text-[11px] text-slate-400">{selectedProject.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex items-center justify-end space-x-3 pt-2">
                {selectedProject.hasInteractiveDemo && (
                  <button
                    onClick={() => {
                      const proj = selectedProject;
                      setSelectedProject(null);
                      onSelectProjectForDemo(proj);
                    }}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg flex items-center space-x-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Launch Live Interactive Demo</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
