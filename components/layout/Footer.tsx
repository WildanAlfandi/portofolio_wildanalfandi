import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900">
      
      {/* Get In Touch Section - Responsive */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Small Text */}
          <p className="text-gray-400 dark:text-slate-500 mb-3 sm:mb-4 tracking-widest uppercase text-xs sm:text-sm">
            Want something like this?
          </p>
          
          {/* Get In Touch Link - Responsive */}
          <a 
            href="/#contact"
            className="inline-flex items-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
          >
            Get In Touch
            <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Copyright - Responsive */}
      <div className="py-6 sm:py-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm">
            ©2025 - Wildan Alfandi
          </p>
        </div>
      </div>
    </footer>
  )
}