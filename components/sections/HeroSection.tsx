"use client"

import { personalInfo } from "@/lib/data"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-16 sm:pt-20 flex items-center px-4 sm:px-6">
      <div className="w-full">
        <div className={`max-w-7xl mx-auto md:pl-12 lg:pl-24 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left - Text */}
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 dark:text-slate-400 mb-3 sm:mb-4">
              {personalInfo.name.toUpperCase()}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              {personalInfo.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed">
              {personalInfo.description}
            </p>
            
            {/* Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="/cv/cvwildan.pdf" 
                download
                className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors text-center text-sm sm:text-base"
              >
                Download CV
              </a>
              <a 
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-800 dark:border-white text-slate-800 dark:text-white font-semibold rounded-lg hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors text-center text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right - Profile Image - Responsive */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl overflow-hidden group">
              <img 
                src="/images/wildan1.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}