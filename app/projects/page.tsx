"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { projects } from "@/lib/data"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, ExternalLink, Calendar } from "lucide-react"

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Featured project (Manufacturing Management System)
  const featuredProject = projects[0]

  // Array gambar untuk setiap project
  const projectImages = [
    "/images/showcase1.png",   
    "/images/showcase2.png", 
    "/images/showcase3.png",
    "/images/showcase4.png"
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToHighlight = () => {
    const element = document.getElementById('highlight')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Navbar />
      
      {/* Hero Section - My Projects - IMPROVED RESPONSIVE */}
      <section className="min-h-screen flex items-center pt-16 sm:pt-20 pb-10 sm:pb-0 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Left - Text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                My Projects
              </h1>
              <div className="w-20 sm:w-28 lg:w-32 h-1.5 sm:h-2 bg-blue-500 mb-6 sm:mb-8 mx-auto lg:mx-0"></div>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                List of my projects that I have done and currently working on.
              </p>

              <button 
                onClick={scrollToHighlight}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 dark:bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-600 dark:hover:bg-slate-700 transition-all hover:gap-3 text-base sm:text-lg group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right - Large Photo with Grayscale Effect - IMPROVED */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-[320px] sm:max-w-md lg:max-w-lg aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group relative">
                <img 
                  src="/images/project3.png" 
                  alt="My Projects" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section - IMPROVED RESPONSIVE */}
      <section id="highlight" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Featured Project
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 max-w-2xl">
              My most recent and impactful project, showcasing the latest technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Left - Single Large Image - IMPROVED */}
            <div className="w-full order-2 lg:order-1">
              <div className="relative group">
                {/* Main Image Card */}
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/showcase1.png" 
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover View Project Button */}
                  <Link 
                    href={`/projects/${featuredProject.id}`}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl font-semibold shadow-xl transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-2">
                      <span>View Project</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
                
                {/* Decorative element - Desktop only */}
                <div className="hidden lg:block absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/10 rounded-3xl -z-10"></div>
              </div>
            </div>

            {/* Right - Project Info - IMPROVED */}
            <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                <Calendar className="w-4 h-4" />
                <span>2025</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {featuredProject.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                {featuredProject.description}
              </p>
              
              {/* Tech Stack Tags - IMPROVED */}
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-3 font-semibold">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold border border-blue-200 dark:border-blue-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons - IMPROVED */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link 
                  href={`/projects/${featuredProject.id}`}
                  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-800 dark:bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-700 dark:hover:bg-slate-600 transition-all shadow-lg hover:shadow-xl group"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={featuredProject.demo || featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-slate-800 dark:border-slate-400 text-slate-800 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects List - IMPROVED RESPONSIVE */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              All Projects
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-slate-400 max-w-3xl">
              Explore all of my projects and see what I've been working on. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid - IMPROVED */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <Link 
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-slate-800">
                  
                  {/* Year Badge - IMPROVED */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm text-white font-bold rounded-lg text-xs sm:text-sm shadow-lg">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{2025}</span>
                  </div>

                  {/* Project Image - IMPROVED */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800">
                    <img 
                      src={projectImages[index] || "/images/default-project.png"} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Base Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    
                    {/* Hover Overlay - Info Muncul dari Bawah - IMPROVED */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/98 via-slate-900/90 to-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                      
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-200 text-sm sm:text-base mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.description}
                      </p>
                      
                      {/* Tech Tags - IMPROVED */}
                      <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm bg-white/15 backdrop-blur-md text-white border border-white/30 font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm bg-white/10 backdrop-blur-md text-white/70 border border-white/20 font-semibold">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                      
                      {/* View Project Link - IMPROVED */}
                      <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>

                  
                </div>
              </Link>
            ))}
          </div>

          {/* View More Section - OPTIONAL */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-gray-600 dark:text-slate-400 mb-4">
              More projects coming soon...
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}