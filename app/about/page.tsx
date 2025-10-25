"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Code2, Server, Database, Smartphone } from "lucide-react"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    const element = document.getElementById('who-am-i')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Navbar />
      
      {/* Hero Section - About Me - IMPROVED RESPONSIVE */}
      <section className="min-h-screen flex items-center pt-16 sm:pt-20 pb-10 sm:pb-0">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Text */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h1>
                <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-blue-500 mb-6 sm:mb-8 mx-auto lg:mx-0"></div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                  A brief introduction about me and my interest.
                </p>

                <button 
                  onClick={scrollToContent}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 dark:bg-slate-800 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors"
                >
                  Scroll Down
                </button>
              </div>

              {/* Right - Large Photo with Grayscale Effect - IMPROVED */}
              <div className="flex justify-center order-1 lg:order-2">
                <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-md lg:max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="/images/wildan1.jpg" 
                    alt="Wildan Alfandi" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Am I Section - IMPROVED RESPONSIVE */}
      <section 
        id="who-am-i"
        className="pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Who Am I?
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Photos Grid - IMPROVED */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-900 dark:to-blue-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group">
                <img 
                  src="/images/wildan1.jpg" 
                  alt="wildan1" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group">
                <img 
                  src="/images/wildan2.jpg" 
                  alt="Wildan 2" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-200 to-green-300 dark:from-green-900 dark:to-green-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group">
                <img 
                  src="/images/wildan3.jpg" 
                  alt="Wildan 3" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-900 dark:to-orange-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group">
                <img 
                  src="/images/wildan4.jpg" 
                  alt="Wildan 4" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right - Bio - IMPROVED TEXT SIZING */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Wildan Alfandi
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                Hey there, I'm Wildan Alfandi, a <span className="font-semibold text-blue-500">passionate Full-Stack Web Developer</span> with 
                a growing expertise in modern web technologies. Hailing from Tangerang, Indonesia, I'm currently pursuing 
                my degree in <span className="font-semibold">Information Systems</span> at <span className="font-semibold">Primagraha University</span>.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                My work bridges modern web technologies with practical solutions—from building responsive, scalable 
                websites to creating efficient backend systems. I specialize in React, Next.js, Laravel, and Node.js, 
                with hands-on experience in cloud deployment using GCP and Vercel.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                Beyond development, I stay curious about emerging technologies and best practices. In today's 
                ever-changing digital landscape, I believe being a <span className="font-semibold text-blue-500">lifelong learner</span> is essential. 
                Let's connect and explore how we can build amazing solutions together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section - IMPROVED RESPONSIVE */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-3 sm:mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Explore my technical skills across different domains. Each category represents 
            the technologies and tools I work with.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Web Development */}
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Web Development
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">
                Building modern, responsive web applications
              </p>
            </div>

            {/* Backend */}
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <Server className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Backend Development
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">
                Creating robust server-side applications
              </p>
            </div>

            {/* Database */}
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Database Management
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">
                Designing and optimizing databases
              </p>
            </div>

            {/* Mobile Responsive */}
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Responsive Design
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">
                Mobile-first, adaptive interfaces
              </p>
            </div>
          </div>

          {/* Tech Stack - IMPROVED RESPONSIVE */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
              Technologies I Use
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", 
                "Node.js", "Express.js", "Laravel", "PHP", "MySQL", 
                "PostgreSQL", "MongoDB", "GCP", "Vercel", "Git", "GitHub"
              ].map((tool, index) => (
                <span 
                  key={tool}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 text-xs sm:text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
                  style={{
                    animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience - IMPROVED RESPONSIVE */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
            Professional Experience
          </h2>

          {/* Timeline */}
          <div className="space-y-8 sm:space-y-12">
            {/* Bangkit Academy */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500 hover:border-l-4 transition-all">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="mb-2">
                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                  2023
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bangkit Academy - Cloud Computing Cohort
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-2 font-medium">
                Google, GoTo, Traveloka
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                Designed cloud architecture and deployment using GCP. Collaborated in cross-disciplinary 
                teams (ML, Mobile, Cloud). Delivered cloud-based applications using best practices and 
                integrated Visual Location AI-based Tourism App with GCP and Flask.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">GCP</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Cloud Architecture</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Team Collaboration</span>
              </div>
            </div>

            {/* Bootcamp */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-green-500 hover:border-l-4 transition-all">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
              <div className="mb-2">
                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold">
                  2025
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bootcamp Fullstack Developer
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-2 font-medium">
                Harisenin.com - Online
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                Intensive training program focused on full-stack web development. Built multiple projects 
                using React, Next.js, Laravel, and Node.js. Learned modern development practices, API design, 
                database management, and deployment strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">React</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Next.js</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Laravel</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education - IMPROVED RESPONSIVE */}
      <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Education
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-8 sm:mb-12">
            Get to know more about my educational background.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left - Education Info */}
            <div>
              <div className="mb-2 text-sm sm:text-base text-gray-600 dark:text-slate-400 font-semibold">
                2021 - 2025
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Primagraha University
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-6">
                Department of Information Systems
              </p>
            </div>

            {/* Right - Certifications */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Certifications
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-base sm:text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1">
                        Google Cloud Platform (GCP)
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">
                        Bangkit Academy - 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 hover:border-green-500 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400 text-base sm:text-lg">📜</span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1">
                        Full-Stack Developer
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">
                        Harisenin.com - 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}