import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandstore - Modular Distributed File System in Go</title>
        <meta name="description" content="Learn distributed systems through Sandstore - a working implementation with Raft consensus, file chunking, and metadata replication built in Go" />
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
              
              <p className="text-lg md:text-xl mb-3 font-medium">Modular Distributed File System in Go</p>
              <p className="text-sm md:text-base mb-8 text-gray-700 font-mono">Raft Consensus • File Chunking • Metadata Replication • AI Integration</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a 
                  href="https://github.com/AnishMulay/sandstore" 
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
              Sandstore is a modular distributed file system built in Go that implements core distributed systems concepts like Raft consensus, file chunking, and metadata replication. It's designed as a learning platform where you can explore real distributed systems architecture through clean, interface-driven code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🧑‍🎓
                  </div>
                  <h3 className="text-xl font-bold">For Students</h3>
                </div>
                <p>Study distributed systems concepts through a working implementation with Raft consensus, file chunking, and metadata replication.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🛠️
                  </div>
                  <h3 className="text-xl font-bold">For Engineers</h3>
                </div>
                <p>Experiment with distributed systems patterns in a modular codebase that supports both HTTP and gRPC communication.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Core Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold">Raft Consensus</h3>
                </div>
                <p>Full Raft implementation with leader election, log replication, and metadata consistency across nodes.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    📦
                  </div>
                  <h3 className="text-xl font-bold">File Chunking</h3>
                </div>
                <p>Automatic file chunking with configurable chunk sizes, checksums, and distributed chunk storage.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🔗
                  </div>
                  <h3 className="text-xl font-bold">Multi-Protocol Communication</h3>
                </div>
                <p>Support for both HTTP and gRPC communication protocols with pluggable communicator interfaces.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🤖
                  </div>
                  <h3 className="text-xl font-bold">AI Integration</h3>
                </div>
                <p>Model Context Protocol (MCP) server for seamless AI system integration and file operations.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Architecture Section */}
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Modular Architecture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <h4 className="font-bold mb-2">FileService</h4>
                <p className="text-sm">High-level file operations with chunking</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <h4 className="font-bold mb-2">ChunkService</h4>
                <p className="text-sm">Low-level chunk storage and retrieval</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <h4 className="font-bold mb-2">MetadataService</h4>
                <p className="text-sm">File metadata and directory management</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <h4 className="font-bold mb-2">ClusterService</h4>
                <p className="text-sm">Node management with Raft consensus</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <h4 className="font-bold mb-2">MetadataReplicator</h4>
                <p className="text-sm">Raft-based metadata replication</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <h4 className="font-bold mb-2">Communication</h4>
                <p className="text-sm">HTTP/gRPC inter-node communication</p>
              </div>
            </div>
            
            <p className="text-center text-gray-700">
              Each component implements clean interfaces, making the system highly modular and testable.
            </p>
          </div>
        </section>
        
        {/* Get Started Section */}
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started</h2>
            
            <p className="text-lg mb-6">
              Ready to explore distributed systems? Clone the repo, build the project, and start experimenting with a real distributed file system.
            </p>
            
            <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg mb-6 text-left">
              <h4 className="font-bold mb-2">Quick Start:</h4>
              <code className="text-sm font-mono block">
                git clone https://github.com/AnishMulay/sandstore<br/>
                cd sandstore<br/>
                make build<br/>
                make test-server
              </code>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="https://github.com/AnishMulay/sandstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                🚀 View on GitHub
              </a>
              <Link 
                href="/devlog" 
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                📊 Development Status
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
        
        {/* Contribute Section */}
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contribute & Learn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    📚
                  </div>
                  <h3 className="text-xl font-bold">Study the Code</h3>
                </div>
                <p>Explore the modular architecture, understand Raft consensus implementation, and learn how distributed file systems work in practice.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    🔧
                  </div>
                  <h3 className="text-xl font-bold">Contribute Features</h3>
                </div>
                <p>Add new features, optimize performance, improve documentation, or help with testing. Every contribution helps make distributed systems more accessible.</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-700 mb-4">
                Whether you're learning distributed systems or building them professionally, Sandstore provides a solid foundation for understanding and experimentation.
              </p>
              <a 
                href="https://github.com/AnishMulay/sandstore/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all inline-flex items-center gap-2"
              >
                🐛 View Issues & Contribute
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}