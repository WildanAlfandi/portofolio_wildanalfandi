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
      {/* Navbar - Responsive */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">
          
          {/* Left side: Back Arrow + Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Back Arrow - only show if not on homepage */}
            {showBackArrow && (
              <Link 
                href="/"
                className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            )}
            
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Wildan Alfandi_
            </Link>
          </div>
          
          {/* Right side: Theme Toggle + Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay - Responsive */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md flex items-center justify-center">
          
          {/* Close Button */}
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white hover:text-blue-400 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
          
          {/* Menu Items */}
          <div className="text-center space-y-6 sm:space-y-8 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
              Menu
            </h2>
            
            <button 
              onClick={() => handleScroll('home')} 
              className="block w-full text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors py-2"
            >
              Home
            </button>
            
            <button 
              onClick={() => handleScroll('about')} 
              className="block w-full text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors py-2"
            >
              About
            </button>
            
            <button 
              onClick={() => handleScroll('projects')} 
              className="block w-full text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors py-2"
            >
              Projects
            </button>
            
            <button 
              onClick={() => handleScroll('contact')} 
              className="block w-full text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  )
}