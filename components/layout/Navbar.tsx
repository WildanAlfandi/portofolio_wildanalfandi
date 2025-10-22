"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
            Wildan
          </a>
          
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
            <a href="#home" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-2xl text-white hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </>
  )
}