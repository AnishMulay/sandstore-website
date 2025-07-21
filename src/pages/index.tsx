import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandstore - The Learning-First Distributed File System</title>
        <meta name="description" content="Sandstore is a distributed file system built for learning and experimentation" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="w-full max-w-4xl mb-16">
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
                <Link 
                  href="/how-it-works" 
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  📘 How It Works
                </Link>
              </div>
              

            </div>
          </div>
        </section>
        
        {/* What Is Sandstore Section */}
        <section className="w-full max-w-4xl mb-16">
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
        
        {/* Call to Action Section */}
        <section className="w-full max-w-4xl mb-16">
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
              <Link 
                href="/demo" 
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                📺 Watch the Demo
              </Link>
              <a 
                href="https://discord.gg/6xWrtWQMMT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                💬 Join Discord
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}