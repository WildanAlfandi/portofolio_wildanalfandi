import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900">
      {/* Get In Touch Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 dark:text-slate-500 mb-4 tracking-widest uppercase text-sm">
            Want something like this?
          </p>
          <a 
            href="/#contact"
            className="inline-flex items-center gap-3 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
          >
            Get In Touch
            <ArrowRight className="w-12 h-12 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-slate-400 text-sm">
            ©2025 - Wildan
          </p>
        </div>
      </div>
    </footer>
  )
}