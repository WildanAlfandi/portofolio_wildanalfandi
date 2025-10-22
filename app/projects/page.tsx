"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { projects } from "@/lib/data"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  // Featured project (Manufacturing Management System)
  const featuredProject = projects[0]
  
  // Other projects
  const otherProjects = projects.slice(1)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Navbar />
      
      {/* Highlight Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12">
            Highlight
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Project Screenshot Placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-gray-400 dark:text-slate-500">
                  <div className="text-6xl mb-4">🖥️</div>
                  <p className="text-sm">Manufacturing System Screenshot</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Right - Project Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredProject.title}
              </h2>
              <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/projects/${featuredProject.id}`}
                  className="px-6 py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors"
                >
                  More Details
                </Link>
                <a 
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-slate-800 dark:border-white text-slate-800 dark:text-white font-semibold rounded-lg hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Projects List */}
      <section className="py-20 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-8"></div>
          
          <p className="text-gray-600 dark:text-slate-400 mb-12 text-lg">
            List of my projects that I have done and currently working on.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.id}`}
                className="group"
              >
                <div className="rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                    <div className="text-5xl">{project.id === 1 ? '🏭' : project.id === 2 ? '✅' : '🎬'}</div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 rounded text-xs bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Down Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => window.scrollBy({ top: 600, behavior: 'smooth' })}
              className="px-8 py-4 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors"
            >
              Scroll Down
            </button>
          </div>
        </div>
      </section>

      {/* Other Note Worthy Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Other Note Worthy Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <div 
                key={project.id}
                className="p-8 rounded-xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{project.id === 2 ? '✅' : '🎬'}</div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="text-gray-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description.slice(0, 150)}...
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}