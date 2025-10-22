"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Footer } from "@/components/layout/Footer"
import { Code2, Server, Database, Smartphone, Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
              Wildan
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md flex items-center justify-center md:hidden">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-white mb-12">Menu</h2>
            <Link href="/" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">Home</Link>
            <a href="#about" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">Experience</a>
            <a href="#education" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">Education</a>
          </div>
        </div>
      )}
      
      {/* Who Am I Section */}
      <section 
        id="about"
        className="pt-32 pb-20 px-6"
        style={{
          opacity: Math.max(0, 1 - scrollY / 500),
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Who Am I?
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Photos Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-900 dark:to-blue-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
                <img 
                  src="/images/syifa.jpg" 
                  alt="wildan1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  transform: `translateY(${scrollY * 0.08}px)`
                }}
              >
                <img 
                  src="/images/wildan2.jpg" 
                  alt="Wildan 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-green-200 to-green-300 dark:from-green-900 dark:to-green-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  transform: `translateY(${scrollY * 0.06}px)`
                }}
              >
                <img 
                  src="/images/wildan3.jpg" 
                  alt="Wildan 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-900 dark:to-orange-700 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  transform: `translateY(${scrollY * 0.07}px)`
                }}
              >
                <img 
                  src="/images/wildan1.jpg" 
                  alt="Wildan 4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Bio */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Wildan Alfandi
              </h2>
              <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                Hey there, I'm Wildan Alfandi, a <span className="font-semibold text-blue-500">passionate Full-Stack Web Developer</span> with 
                a growing expertise in modern web technologies. Hailing from Tangerang, Indonesia, I'm currently pursuing 
                my degree in <span className="font-semibold">Information Systems</span> at <span className="font-semibold">Primagraha University</span>.
              </p>
              <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                My work bridges modern web technologies with practical solutions—from building responsive, scalable 
                websites to creating efficient backend systems. I specialize in React, Next.js, Laravel, and Node.js, 
                with hands-on experience in cloud deployment using GCP and Vercel.
              </p>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                Beyond development, I stay curious about emerging technologies and best practices. In today's 
                ever-changing digital landscape, I believe being a <span className="font-semibold text-blue-500">lifelong learner</span> is essential. 
                Let's connect and explore how we can build amazing solutions together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section 
        className="py-20 px-6 bg-white dark:bg-slate-800/50"
        style={{
          opacity: Math.max(0, Math.min(1, (scrollY - 300) / 300))
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Explore my technical skills across different domains. Each category represents 
            the technologies and tools I work with.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Web Development */}
            <div className="p-6 rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Web Development
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Building modern, responsive web applications
              </p>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Backend API
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Creating robust and scalable backend services
              </p>
            </div>

            {/* Database */}
            <div className="p-6 rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Database Design
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Designing efficient database schemas
              </p>
            </div>

            {/* Cloud */}
            <div className="p-6 rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Cloud Deployment
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Deploying applications on cloud platforms
              </p>
            </div>
          </div>

          {/* Languages & Frameworks */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Languages & Frameworks
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'React', 'Next.js', 'Laravel', 'Node.js', 'Express.js', 'TailwindCSS'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full border-2 border-gray-200 dark:border-slate-700 text-sm font-medium hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-pointer"
                  style={{
                    animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'MySQL', 'MongoDB', 'GCP', 'Vercel'].map((tool, index) => (
                <span 
                  key={tool}
                  className="px-4 py-2 rounded-full border-2 border-gray-200 dark:border-slate-700 text-sm font-medium hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all cursor-pointer"
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

      {/* Professional Experience */}
      <section 
        id="experience"
        className="py-20 px-6"
        style={{
          opacity: Math.max(0, Math.min(1, (scrollY - 800) / 300))
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Professional Experience
          </h2>

          {/* Timeline */}
          <div className="space-y-12">
            {/* Bangkit Academy */}
            <div className="relative pl-8 border-l-2 border-blue-500 hover:border-l-4 transition-all">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                  2023
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bangkit Academy - Cloud Computing Cohort
              </h3>
              <p className="text-gray-600 dark:text-slate-400 mb-2 font-medium">
                Google, GoTo, Traveloka
              </p>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                Designed cloud architecture and deployment using GCP. Collaborated in cross-disciplinary 
                teams (ML, Mobile, Cloud). Delivered cloud-based applications using best practices and 
                integrated Visual Location AI-based Tourism App with GCP and Flask.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">GCP</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Cloud Architecture</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Team Collaboration</span>
              </div>
            </div>

            {/* Bootcamp */}
            <div className="relative pl-8 border-l-2 border-green-500 hover:border-l-4 transition-all">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold">
                  2025
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bootcamp Fullstack Developer
              </h3>
              <p className="text-gray-600 dark:text-slate-400 mb-2 font-medium">
                Harisenin.com - Online
              </p>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                Intensive training program focused on full-stack web development. Built multiple projects 
                using React, Next.js, Laravel, and Node.js. Learned modern development practices, API design, 
                database management, and deployment strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">React</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Next.js</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Laravel</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-slate-800 text-xs">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section 
        id="education"
        className="py-20 px-6 bg-white dark:bg-slate-800/50"
        style={{
          opacity: Math.max(0, Math.min(1, (scrollY - 1300) / 300))
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-gray-600 dark:text-slate-400 mb-12">
            Get to know more about my educational background.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Education Info */}
            <div>
              <div className="mb-2 text-gray-600 dark:text-slate-400 font-semibold">
                2021 - 2025
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Primagraha University
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6">
                Department of Information Systems
              </p>
            </div>

            {/* Right - Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        Google Cloud Platform (GCP)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400">
                        Bangkit Academy - 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 hover:border-green-500 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400 text-lg">📜</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        Full-Stack Developer
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400">
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