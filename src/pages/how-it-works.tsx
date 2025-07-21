import Layout from "../components/Layout";
import Head from "next/head";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works - Sandstore</title>
        <meta name="description" content="Learn about the architecture and concepts behind Sandstore" />
      </Head>
      <Layout>
        {/* Section 1: High-level intro */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">How It Works</h1>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
              <p className="text-lg">
                Sandstore is a distributed file system designed with learning and experimentation as its primary goals. Unlike production systems that prioritize performance and reliability, Sandstore prioritizes clarity, modularity, and hackability. It provides a sandbox environment where students and engineers can understand distributed systems concepts by exploring, modifying, and extending a working implementation with clean interfaces and well-defined components.
              </p>
            </div>
            
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
        
        {/* Section 2: Client Interaction Flow */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Client Interaction Flow</h2>
            
            <p className="mb-4">
              Clients interact with Sandstore through two primary interfaces: the standard client library and the Model Context Protocol (MCP) server. The client library provides direct API access for applications, while the MCP server enables AI systems and tools to interact with the file system using natural language commands.              
            </p>
            <p>
              When a client makes a request, it's routed through the appropriate node in the system. Metadata operations are handled by the metadata service, while data operations involve both metadata lookups and chunk server interactions. The system's modular design allows each component to be swapped or modified independently, making it ideal for learning and experimentation.
            </p>
          </div>
        </section>
        
        {/* Section 3: Key Components */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Components</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Communicator */}
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Communicator</h3>
                <p className="mb-4">Handles all network communication between system components. Implements both gRPC and HTTP protocols for message passing.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/communication" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
              
              {/* MetadataStore */}
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Metadata Service</h3>
                <p className="mb-4">Tracks file metadata including chunk locations, sizes, and replication status. Provides a clean interface for metadata operations.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/metadata_service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
              
              {/* ChunkReplicator */}
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Chunk Replicator</h3>
                <p className="mb-4">Manages data redundancy by replicating chunks across multiple nodes. Implements configurable replication strategies.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/chunk_replicator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
              
              {/* StorageBackend */}
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Chunk Service</h3>
                <p className="mb-4">Handles the actual storage and retrieval of data chunks. Supports pluggable storage backends including local disk and memory.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/chunk_service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
              
              {/* MCP Server */}
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">MCP Server</h3>
                <p className="mb-4">Implements the Model Context Protocol for AI integration. Exposes file operations as tools that can be used by AI systems.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/cmd/mcp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 4: Learning Features */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Learning Features</h2>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">A Different Approach</h3>
              <p className="mb-4">
                Unlike traditional distributed file systems that prioritize performance, scalability, and reliability, Sandstore prioritizes clarity, modularity, and hackability. Every component is designed to be understandable, replaceable, and extensible.
              </p>
              <p>
                The system uses clean interfaces throughout, making it easy to swap implementations or add new features. This interface-based design means you can focus on understanding or modifying one part of the system without needing to understand the entire codebase.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h4 className="font-bold mb-2">Interface-Based Design</h4>
                <p className="text-sm">All components implement clean interfaces, making them easy to replace or extend.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h4 className="font-bold mb-2">QCLI Integration</h4>
                <p className="text-sm">Use AI assistants to interact with the system through natural language commands.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h4 className="font-bold mb-2">Comprehensive Logging</h4>
                <p className="text-sm">Detailed logs help you understand exactly what's happening in the system.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 5: Request Lifecycle */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Request Lifecycle</h2>
            
            <div className="space-y-4">
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black font-bold">1</div>
                  <h4 className="font-bold">Client Request</h4>
                </div>
                <p className="mt-2 pl-11">Client initiates a file operation (store/retrieve) through the client library or MCP server.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black font-bold">2</div>
                  <h4 className="font-bold">Metadata Lookup</h4>
                </div>
                <p className="mt-2 pl-11">System queries the metadata service to locate file chunks or allocate space for new chunks.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black font-bold">3</div>
                  <h4 className="font-bold">Chunk Operations</h4>
                </div>
                <p className="mt-2 pl-11">Data is read from or written to the appropriate chunk servers based on metadata information.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black font-bold">4</div>
                  <h4 className="font-bold">Replication (for writes)</h4>
                </div>
                <p className="mt-2 pl-11">For write operations, the chunk replicator ensures data is properly replicated across nodes.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black font-bold">5</div>
                  <h4 className="font-bold">Response to Client</h4>
                </div>
                <p className="mt-2 pl-11">Operation results are returned to the client, completing the request lifecycle.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 6: Extending Sandstore */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Extending Sandstore</h2>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
              <p className="mb-4">
                Sandstore is designed to be extended and modified. Every component implements a clean interface, making it easy to swap in your own implementations or add new features. Want to experiment with a new replication strategy? Create a new implementation of the ChunkReplicator interface. Need a different storage backend? Implement the ChunkService interface with your custom logic.
              </p>
              <p>
                This interface-based design means you can focus on the specific part of the system you're interested in without having to understand or modify the entire codebase. It's the perfect sandbox for testing new ideas and learning about distributed systems concepts in a hands-on way.
              </p>
            </div>
          </div>
        </section>
        

        
        {/* Section 8: Call to Action */}
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Dive In?</h2>
            
            <p className="text-lg mb-8">
              Join the Sandstore community and start exploring, learning, and contributing today!            
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/AnishMulay/sandstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                🚀 Start Hacking
              </a>
              <a 
                href="https://discord.gg/6xWrtWQMMT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                💬 Join the Community
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}