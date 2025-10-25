"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [isVisible, setIsVisible] = useState(false)
  const project = projects.find(p => p.id === parseInt(params.id))
  
  if (!project) {
    notFound()
  }

  // Mapping foto untuk setiap project
  const projectImages: Record<number, {
    hero: string
    screenshots: string[]
  }> = {
    1: {
      hero: "/images/showcase1.png",
      screenshots: [
        "/images/manufaktur1.png",
        "/images/manufaktur2.png",
        "/images/manufaktur3.png"
      ]
    },
    2: {
      hero: "/images/showcase2.png",
      screenshots: [
        "/images/taskmanajemen1.png",
        "/images/taskmanajemen2.png",
        "/images/taskmanajemen3.png"
      ]
    },
    3: {
      hero: "/images/showcase3.png",
      screenshots: [
        "/images/movieapp1.png",
        "/images/movieapp2.png",
        "/images/movieapp3.png"
      ]
    },
    4: {
      hero: "/images/showcase4.png",
      screenshots: [
        "/images/vloc1.png",
        "/images/vloc2.png",
        "/images/vloc3.png",
        "/images/vloc4.png"
      ]
    }
  }

  // Ambil foto sesuai project ID
  const currentImages = projectImages[project.id] || {
    hero: "/images/default-project.png",
    screenshots: [
      "/images/default-project.png",
      "/images/default-project.png",
      "/images/default-project.png"
    ]
  }

  // Trigger animasi saat component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Navbar />
      
      {/* Back Button - FIXED DI ATAS, RESPONSIVE */}
      <div className="fixed top-20 sm:top-24 left-4 sm:left-6 lg:left-8 z-40">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 group border border-gray-200 dark:border-slate-700"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base font-medium hidden sm:inline">Back to Projects</span>
          <span className="text-sm font-medium sm:hidden">Back</span>
        </Link>
      </div>

      {/* Hero Image - RESPONSIVE & OPTIMIZED */}
      <div className="pt-20 sm:pt-24">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className={`w-full h-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img 
              src={currentImages.hero}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Gradient Overlay untuk better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
        </div>
      </div>

      {/* Main Content Container - IMPROVED RESPONSIVE */}
      <div className="relative -mt-12 sm:-mt-16 lg:-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Sidebar - Project Info - IMPROVED STICKY & RESPONSIVE */}
            <div className="lg:col-span-4">
              <div className={`lg:sticky lg:top-28 space-y-5 sm:space-y-6 lg:space-y-8 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Project Title */}
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-slate-500 mb-2 font-bold">
                    PROJECT
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    {project.title}
                  </h1>
                </div>

                {/* Technology Tags - IMPROVED DISPLAY */}
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-slate-500 mb-2 sm:mb-3 font-bold">
                    TECHNOLOGY
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-slate-500 mb-2 font-bold">
                    YEAR
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    {project.year || '2025'}
                  </p>
                </div>

                {/* Preview Links - IMPROVED BUTTONS */}
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-slate-500 mb-3 sm:mb-4 font-bold">
                    LINKS
                  </p>
                  <div className="flex flex-col gap-2.5 sm:gap-3">
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all shadow-md hover:shadow-lg group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm sm:text-base font-semibold">Live Demo</span>
                        </div>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-800 dark:bg-slate-700 hover:bg-gray-900 dark:hover:bg-slate-600 text-white transition-all shadow-md hover:shadow-lg group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base font-semibold">Source Code</span>
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Description & Screenshots - IMPROVED RESPONSIVE */}
            <div className="lg:col-span-8">
              <div className={`space-y-6 sm:space-y-8 lg:space-y-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Description Section - IMPROVED CARD */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      About This Project
                    </h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {(project.fullDescription || [project.description]).map((paragraph, index) => (
                      <p key={index} className="text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Screenshots Section - IMPROVED GRID & ANIMATIONS */}
                <div>
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      Screenshots
                    </h2>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {currentImages.screenshots.map((screenshot, index) => (
                      <div 
                        key={index} 
                        className={`group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                      >
                        {/* Image Number Badge */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-black/70 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold">
                          {index + 1} / {currentImages.screenshots.length}
                        </div>
                        
                        <img 
                          src={screenshot}
                          alt={`${project.title} - Screenshot ${index + 1}`}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back to Projects - MOBILE BOTTOM BUTTON */}
                <div className="lg:hidden pt-4">
                  <Link 
                    href="/projects"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gray-900 dark:bg-slate-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-800 dark:hover:bg-slate-600 group"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-base font-semibold">Back to Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}