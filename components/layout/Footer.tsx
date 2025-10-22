import { personalInfo } from "@/lib/data"

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 dark:text-slate-400 text-sm">
        <p>© 2025 {personalInfo.name}. Built with Next.js & TypeScript</p>
      </div>
    </footer>
  )
}