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
      <div className="bg-slate-700 dark:bg-slate-800 rounded-r-3xl py-6 pl-4 pr-4 shadow-lg">
        <nav className="flex flex-col gap-8">
          {/* Home */}
          <button
            onClick={() => handleScroll('home')}
            className="group relative p-3 transition-all duration-300"
            aria-label="Go to Home"
          >
            <Home className="w-6 h-6 text-white" strokeWidth={2} />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              Home
            </span>
          </button>

          {/* About */}
          <button
            onClick={() => handleScroll('about')}
            className="group relative p-3 transition-all duration-300"
            aria-label="Go to About"
          >
            <User className="w-6 h-6 text-white" strokeWidth={2} />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              About
            </span>
          </button>

          {/* Projects */}
          <button
            onClick={() => handleScroll('projects')}
            className="group relative p-3 transition-all duration-300"
            aria-label="Go to Projects"
          >
            <Briefcase className="w-6 h-6 text-white" strokeWidth={2} />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              Projects
            </span>
          </button>

          {/* Contact */}
          <button
            onClick={() => handleScroll('contact')}
            className="group relative p-3 transition-all duration-300"
            aria-label="Go to Contact"
          >
            <Mail className="w-6 h-6 text-white" strokeWidth={2} />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
              Contact
            </span>
          </button>
        </nav>
      </div>
    </aside>
  )
}