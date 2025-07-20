import IntroAnimation from "../components/IntroAnimation";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <main className="min-h-screen bg-[#f2e4d8] pt-24 pb-12 px-4 md:px-6 flex flex-col items-center justify-center font-sans">
        {/* Hero Section */}
        <section id="home" className="w-full max-w-4xl mb-16">
          <div className="sticky top-20 z-10 bg-[#f2e4d8] py-2 mb-4 text-center rounded-lg border-2 border-black shadow-md hidden md:block">
            <h2 className="text-lg font-bold">Home</h2>
          </div>
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <div className="flex justify-between mb-6">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-black rounded-full" />
                <div className="w-4 h-4 bg-black rounded-full" />
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 border border-black rounded-full" />
                <div className="w-4 h-4 border border-black rounded-full" />
                <div className="w-4 h-4 border border-black rounded-full" />
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
                Sandstore
              </h1>
              
              <p className="text-lg md:text-xl mb-3 font-medium">The Learning-First Distributed File System</p>
              <p className="text-sm md:text-base mb-8 text-gray-700 font-mono">Built in Go • Modular • Open Source • Interface-Driven</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  🚀 View on GitHub
                </a>
                <a 
                  href="#how-it-works" 
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  📘 How It Works
                </a>
              </div>
              
              {/* Placeholder for system diagram */}
              <div className="relative w-full h-48 md:h-64 border-[2px] border-black rounded-lg overflow-hidden bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">System Architecture Diagram</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Is Sandstore Section */}
        <section className="w-full max-w-4xl mb-16">
          <div className="sticky top-20 z-10 bg-[#f2e4d8] py-2 mb-4 text-center rounded-lg border-2 border-black shadow-md hidden md:block">
            <h2 className="text-lg font-bold">What Is Sandstore?</h2>
          </div>
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What Is Sandstore?</h2>
            
            <p className="text-lg mb-8 text-center">
              Sandstore isn't just a distributed file system — it's a place to understand one. Built with modular components, clean interfaces, and production-inspired design, it's a sandbox for learning, experimentation, and innovation in systems thinking.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🧑‍🎓
                  </div>
                  <h3 className="text-xl font-bold">For Students</h3>
                </div>
                <p>Learn distributed systems by exploring a real implementation with clear interfaces and modular components.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🛠️
                  </div>
                  <h3 className="text-xl font-bold">For Engineers</h3>
                </div>
                <p>Experiment with new ideas in a safe environment designed for tinkering and innovation.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why It's Different Section */}
        <section id="how-it-works" className="w-full max-w-4xl mb-16">
          <div className="sticky top-20 z-10 bg-[#f2e4d8] py-2 mb-4 text-center rounded-lg border-2 border-black shadow-md hidden md:block">
            <h2 className="text-lg font-bold">How It Works</h2>
          </div>
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why It's Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🧩
                  </div>
                  <h3 className="text-xl font-bold">Pluggable Design</h3>
                </div>
                <p>Swap out components like metadata storage, chunk replication, and more.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    📚
                  </div>
                  <h3 className="text-xl font-bold">Built to Learn</h3>
                </div>
                <p>Designed for explainability, experimentation, and tinkering.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🤖
                  </div>
                  <h3 className="text-xl font-bold">MCP Server + AI Integration</h3>
                </div>
                <p>Use an MCP server to interact with the system, even via AI (e.g. QCLI).</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🔓
                  </div>
                  <h3 className="text-xl font-bold">Open and Extensible</h3>
                </div>
                <p>Fork it, break it, improve it — the system is yours to experiment with.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Founder's Note Section */}
        <section id="about-me" className="w-full max-w-4xl mb-16">
          <div className="sticky top-20 z-10 bg-[#f2e4d8] py-2 mb-4 text-center rounded-lg border-2 border-black shadow-md hidden md:block">
            <h2 className="text-lg font-bold">About Me</h2>
          </div>
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your Vision</h2>
            
            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black text-xl">
                  👋
                </div>
                <div>
                  <h3 className="text-xl font-bold">Anish Mulay</h3>
                  <p className="text-sm text-gray-600">Founder</p>
                </div>
              </div>
              <p className="text-lg">
                I built Sandstore because I couldn't find a hands-on way to learn distributed systems. Everything was abstract or theoretical. I wanted to create something real, where people can experiment, fail, and understand — all in a safe, modular environment. This is my vision for Sandstore.
              </p>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section id="devlog" className="w-full max-w-4xl mb-16">
          <div className="sticky top-20 z-10 bg-[#f2e4d8] py-2 mb-4 text-center rounded-lg border-2 border-black shadow-md hidden md:block">
            <h2 className="text-lg font-bold">Devlog</h2>
          </div>
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Journey</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                ⭐ Star the Repo
              </a>
              <a 
                href="#demo" 
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                📺 Watch the Demo
              </a>
              <a 
                href="#devlog" 
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                🧠 Learn with Me
              </a>
            </div>
          </div>
        </section>
        
        {/* Demo section placeholder */}
        <section id="demo" className="w-full max-w-4xl mb-16">
          <div className="sticky top-20 z-10 bg-[#f2e4d8] py-2 mb-4 text-center rounded-lg border-2 border-black shadow-md hidden md:block">
            <h2 className="text-lg font-bold">Demo</h2>
          </div>
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Demo Coming Soon</h2>
            <p className="text-lg mb-4">This section will be implemented in the future.</p>
          </div>
        </section>
        
        <footer className="w-full max-w-4xl text-center mt-8 text-sm">
          &copy; {new Date().getFullYear()} Sandstore Project by Anish Mulay
        </footer>
      </main>
    </>
  );
}
