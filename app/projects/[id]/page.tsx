import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Project Info */}
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-slate-400 mb-2">
                PROJECT
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                {project.title}
              </h1>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-slate-400 mb-2">
                  TECHNOLOGY
                </p>
                <p className="text-gray-700 dark:text-slate-300">
                  {project.tags.join(', ')}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-slate-400 mb-2">
                  YEAR
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {project.year || '2024'}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-slate-400 mb-2">
                  PREVIEW
                </p>
                <div className="flex flex-col gap-3">
                  {/* GitHub Button */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  {/* Preview Button */}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Preview
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Description */}
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-slate-400 mb-4">
                DESCRIPTION
              </p>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                A comprehensive {project.category || 'web'} application developed as a technical assessment, 
                completed in approximately {project.id === 2 ? '3 hours' : 'several weeks'}. The application 
                demonstrates proficiency in modern web development practices, featuring complete CRUD operations 
                with optimistic UI updates for a seamless user experience. The system includes advanced filtering 
                capabilities, efficient data management, and a comprehensive dashboard providing insights into 
                key metrics.
              </p>
            </div>
          </div>

          {/* Project Screenshot Placeholder */}
          <div className="mt-16">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-700 shadow-2xl flex items-center justify-center">
              <div className="text-center text-gray-400 dark:text-slate-500">
                <div className="text-6xl mb-4">🖼️</div>
                <p>Project Screenshot Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}