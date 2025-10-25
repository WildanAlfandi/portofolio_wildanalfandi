"use client"

import { useEffect, useState, useRef } from "react"

export function AboutSection() {
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
      id="about" 
      className="min-h-screen flex items-center bg-white dark:bg-slate-800/50 px-4 sm:px-6"
    >
      <div className="w-full py-16 sm:py-20">
        <div className={`max-w-7xl mx-auto md:pl-12 lg:pl-24 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mb-6 sm:mb-8"></div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-400 mb-5 sm:mb-6 italic">
              A brief introduction about me and my interest.
            </p>
            <a 
              href="/about"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>

          {/* Right - Image - Responsive */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group">
              <img 
                src="/images/wildan5.jpg" 
                alt="About Me" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}