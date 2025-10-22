export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white dark:bg-slate-800/50">
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-gray-600 dark:text-slate-400 mb-6 text-lg italic">
              A brief introduction about me and my interest.
            </p>
            
            <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
              I'm a Full-Stack Web Developer with expertise in modern web technologies including React.js, 
              Next.js, Laravel, and Node.js. Experienced in building scalable web applications, authentication 
              systems, and cloud deployments through intensive bootcamps and real-world projects.
            </p>
            
            <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
              Currently a student at Primagraha University, Department of Information Systems (2021-2025). 
              I've completed training programs at Bangkit Academy (Google, GoTo, Traveloka) and built 
              real-world applications that solve actual problems.
            </p>

            <a 
  href="/about"  // ← GANTI DARI #projects JADI /about
  className="inline-block px-6 py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors"
>
  Learn More
</a>
          </div>

          {/* Right - Image Placeholder */}
          <div className="h-[600px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 shadow-xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-400 dark:text-slate-500">
              <div className="text-6xl mb-4">📸</div>
              <p>Your Photo Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}