"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Show back arrow if not on homepage
  const showBackArrow = pathname !== "/"

  const handleScroll = (sectionId: string) => {
    setMenuOpen(false)
    // If not on homepage, go to homepage first
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Back Arrow - only show if not on homepage */}
            {showBackArrow && (
              <Link 
                href="/"
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
            )}
            
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Alvalens
            </Link>
          </div>
          
          {/* Right side: Theme Toggle + Hamburger Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md flex items-center justify-center">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-white mb-12">Menu</h2>
            <button 
              onClick={() => handleScroll('home')} 
              className="block w-full text-2xl text-white hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleScroll('about')} 
              className="block w-full text-2xl text-white hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleScroll('projects')} 
              className="block w-full text-2xl text-white hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleScroll('contact')} 
              className="block w-full text-2xl text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  )
}