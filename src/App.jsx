import React from "react";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-stone-800 font-mono">
      <header className="text-center py-12 bg-white shadow">
        <h1 className="text-4xl font-bold">Indubala Selvaraj</h1>
        <p className="text-lg mt-2 text-gray-600">
          Backend Dev | Python | React | AI
        </p>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 text-center">
        {/* About Section */}
        <section id="about">
          <p>
            Python/React developer who loves building fast, fun,
            AI-powered apps. Currently working on some cool projects.
            </p>
            <p>
            Stay tuned for more updates
          </p>
          <div className="relative mx-auto mt-10 w-[50%] max-w-2xl rounded-xl overflow-hidden shadow-lg" style={{height: '280px'}}>
            <video 
              src="/seashore.mp4" 
              autoPlay 
              loop 
              muted 
              className="w-full object-cover block" 
              style={{borderRadius: '0.75rem', height: '280px'}}
            />
          </div>
        </section>

        {/* Projects Section */}

    
      </main>

      <footer className="text-center py-6 bg-white border-t-[1px] border-gray-100 mt-auto w-[90%] mx-auto">
        <p>Built with ❤️</p>
        <p>© 2025 Indubala Selvaraj | <a href="https://x.com/coffified" target="_blank" className="text-blue-600 underline">Twitter</a> | <a href="https://github.com/IndubalaSV" target="_blank" className="text-blue-600 underline">Github</a> | <a href="mailto:indubala09122000@gmail.com" className="text-blue-600 underline">Email</a> </p> 
      </footer>
    </div>
  );
}
