"use client"

import { Home, User, Briefcase, Mail } from "lucide-react"

export function Sidebar() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-r-3xl shadow-2xl py-8 pl-4 pr-5">
        <nav className="flex flex-col gap-4">
          {/* Home */}
          <button
            onClick={() => handleScroll('home')}
            className="group relative p-4 rounded-2xl bg-slate-700/50 dark:bg-slate-800/50 hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm"
            aria-label="Go to Home"
          >
            <Home className="w-6 h-6 text-white" strokeWidth={2} />
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white text-sm font-medium rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              Home
            </span>
          </button>

          {/* About */}
          <button
            onClick={() => handleScroll('about')}
            className="group relative p-4 rounded-2xl bg-slate-700/50 dark:bg-slate-800/50 hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm"
            aria-label="Go to About"
          >
            <User className="w-6 h-6 text-white" strokeWidth={2} />
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white text-sm font-medium rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              About
            </span>
          </button>

          {/* Projects */}
          <button
            onClick={() => handleScroll('projects')}
            className="group relative p-4 rounded-2xl bg-slate-700/50 dark:bg-slate-800/50 hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm"
            aria-label="Go to Projects"
          >
            <Briefcase className="w-6 h-6 text-white" strokeWidth={2} />
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white text-sm font-medium rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              Projects
            </span>
          </button>

          {/* Contact */}
          <button
            onClick={() => handleScroll('contact')}
            className="group relative p-4 rounded-2xl bg-slate-700/50 dark:bg-slate-800/50 hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm"
            aria-label="Go to Contact"
          >
            <Mail className="w-6 h-6 text-white" strokeWidth={2} />
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white text-sm font-medium rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              Contact
            </span>
          </button>
        </nav>
      </div>
    </aside>
  )
}