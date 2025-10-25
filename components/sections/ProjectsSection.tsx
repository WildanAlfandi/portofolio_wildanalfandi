"use client"

import Link from "next/link"
import { useEffect, useState, useRef } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="min-h-screen flex items-center px-4 sm:px-6"
    >
      <div className="w-full py-16 sm:py-20">
        <div className={`max-w-7xl mx-auto md:pl-12 lg:pl-24 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              My Projects
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mb-6 sm:mb-8"></div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-400 mb-6 sm:mb-8">
              This is some of my projects that I have done and currently working on.
            </p>

            <Link 
              href="/projects"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              View All Projects
            </Link>
          </div>

          {/* Right - Projects Visual with Photo - Responsive */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden relative group">
              {/* Background Photo with Grayscale Effect */}
              <img 
                src="/images/project2.png" 
                alt="My Projects" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating cards animation overlay - Responsive sizes */}
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute top-6 sm:top-10 left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 dark:bg-slate-600/30 backdrop-blur-sm rounded-lg shadow-lg animate-float" 
                  style={{ animationDelay: '0s' }}
                ></div>
                <div 
                  className="absolute bottom-12 sm:bottom-20 right-6 sm:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/20 dark:bg-slate-600/30 backdrop-blur-sm rounded-lg shadow-lg animate-float" 
                  style={{ animationDelay: '1s' }}
                ></div>
                <div 
                  className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 dark:bg-slate-600/30 backdrop-blur-sm rounded-lg shadow-lg animate-float" 
                  style={{ animationDelay: '0.5s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}