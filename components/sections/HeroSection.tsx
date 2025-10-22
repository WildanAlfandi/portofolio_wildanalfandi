import { personalInfo } from "@/lib/data"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-slate-400 mb-4">
              {personalInfo.name.toUpperCase()}
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {personalInfo.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex gap-4">
              <a 
                href="/cv/wildan-cv.pdf" 
                download
                className="px-8 py-4 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors"
              >
                Download CV
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 border-2 border-slate-800 dark:border-white text-slate-800 dark:text-white font-semibold rounded-lg hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right - Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-white text-8xl font-bold">W</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}