import Hero3D from './components/Hero3D'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero3D />

      <section id="projects" className="relative py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Highlighted Projects</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">A curated selection spanning product design, frontend engineering, and immersive WebGL experiments.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-indigo-100 via-sky-100 to-cyan-100" />
                <div className="mt-4">
                  <h3 className="font-semibold">Project {i}</h3>
                  <p className="text-sm text-slate-600">Exploration of motion, interaction, and polished UI systems.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-3 text-slate-600">Open to freelance, full-time, and collaborations. Drop a note and I’ll reply quickly.</p>
          <form className="mt-8 grid grid-cols-1 gap-4">
            <input className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Your name" />
            <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Email" />
            <textarea rows="5" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="What would you like to create?" />
            <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition w-fit">Send message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App