import { personalInfo } from "@/lib/data"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-white dark:bg-slate-800/50">
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg">
              Feel free to contact me if you have any questions or just want to say hi.
            </p>

            <p className="text-2xl text-gray-900 dark:text-white mb-8 font-semibold">
              {personalInfo.email}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-14 h-14 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Mail className="w-6 h-6 text-white dark:text-slate-900" />
              </a>
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6 text-white dark:text-slate-900" />
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6 text-white dark:text-slate-900" />
              </a>
            </div>
          </div>

          {/* Right - Workspace Image Placeholder */}
          <div className="h-[600px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-400 dark:from-slate-700 dark:to-slate-900 shadow-xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-400 dark:text-slate-500">
              <div className="text-6xl mb-4">⌨️</div>
              <p>Workspace Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}