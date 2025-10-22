"use client"

import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg">
              This is some of my projects that I have done and currently working on.
            </p>

            <Link 
              href="/projects"
              className="inline-block px-8 py-4 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>

          {/* Right - Projects Visual Placeholder */}
          <div className="h-[600px] rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 shadow-xl overflow-hidden flex items-center justify-center relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-400 dark:text-slate-500">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-lg font-semibold">Project Screenshots</p>
              </div>
            </div>
            {/* Floating cards animation */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white dark:bg-slate-600 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white dark:bg-slate-600 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white dark:bg-slate-600 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
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