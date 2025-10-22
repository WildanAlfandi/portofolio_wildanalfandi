import { projects } from "@/lib/data"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "border-blue-500",
      green: "border-green-500",
      purple: "border-purple-500",
    }
    return colors[color] || "border-blue-500"
  }

  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text & Project List */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg">
              This is some of my projects that I have done and currently working on.
            </p>

            {/* Project List */}
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className={`border-l-4 ${getColorClasses(project.color)} pl-6`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 mb-3 text-sm">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="flex items-center gap-1 text-sm text-green-500 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="https://github.com/WildanAlfandi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors"
            >
              View All on GitHub
            </a>
          </div>

          {/* Right - Projects Visual Placeholder */}
          <div className="h-[600px] rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 shadow-xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-400 dark:text-slate-500">
              <div className="text-6xl mb-4">💻</div>
              <p>Project Screenshots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}