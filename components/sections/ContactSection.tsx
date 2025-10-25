"use client"

import { personalInfo } from "@/lib/data"
import { Mail, Github, Linkedin } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function ContactSection() {
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
      id="contact" 
      className="min-h-screen flex items-center bg-white dark:bg-slate-800/50 px-4 sm:px-6"
    >
      <div className="w-full py-16 sm:py-20">
        <div className={`max-w-7xl mx-auto md:pl-12 lg:pl-24 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mb-6 sm:mb-8"></div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-400 mb-6 sm:mb-8">
              Feel free to contact me if you have any questions or just want to say hi.
            </p>

            {/* Email - Responsive */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white mb-6 sm:mb-8 font-semibold break-all">
              {personalInfo.email}
            </p>

            {/* Social Icons - Responsive */}
            <div className="flex gap-3 sm:gap-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-slate-900" />
              </a>
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Visit GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-slate-900" />
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Visit LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-slate-900" />
              </a>
            </div>
          </div>

          {/* Right - Workspace Image - Responsive */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group">
              <img 
                src="/images/setup.jpg" 
                alt="Get In Touch" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}