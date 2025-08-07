import Layout from "../components/Layout";
import Head from "next/head";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works - Sandstore</title>
        <meta name="description" content="Learn about the architecture and implementation of Sandstore's distributed file system" />
      </Head>
      <Layout>
        {/* Section 1: Overview */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">How Sandstore Works</h1>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
              <p className="text-lg mb-4">
                Sandstore implements a complete distributed file system with Raft consensus for metadata consistency, automatic file chunking for scalable storage, and pluggable communication protocols. The system demonstrates core distributed systems concepts through clean, modular Go code.
              </p>
              <p className="text-base">
                Files are automatically chunked, metadata is replicated using Raft consensus, and the entire system can be controlled through both direct APIs and AI integration via Model Context Protocol.
              </p>
            </div>
          </div>
        </section>
        
        {/* Section 2: File Storage Flow */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">File Storage Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h4 className="font-bold mb-2">File Chunking</h4>
                <p className="text-sm">File split into configurable chunks with SHA256 checksums</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <div className="text-2xl mb-2">2️⃣</div>
                <h4 className="font-bold mb-2">Chunk Storage</h4>
                <p className="text-sm">Chunks stored via ChunkService with unique IDs</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <div className="text-2xl mb-2">3️⃣</div>
                <h4 className="font-bold mb-2">Metadata Creation</h4>
                <p className="text-sm">File metadata with chunk references created</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
                <div className="text-2xl mb-2">4️⃣</div>
                <h4 className="font-bold mb-2">Raft Replication</h4>
                <p className="text-sm">Metadata replicated across cluster via Raft consensus</p>
              </div>
            </div>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
              <h4 className="font-bold mb-3">Reading Files</h4>
              <p>File reads reverse this process: metadata lookup → chunk retrieval → reassembly. The Raft consensus ensures all nodes have consistent metadata, while chunks can be retrieved from any available node.</p>
            </div>
          </div>
        </section>
        
        {/* Section 3: Raft Consensus */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Raft Consensus Algorithm</h2>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
              <p className="mb-4">
                Sandstore implements the complete Raft consensus algorithm to ensure metadata consistency across all nodes. This includes leader election, log replication, and commit index management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    👑
                  </div>
                  <h3 className="text-xl font-bold">Leader Election</h3>
                </div>
                <p>Nodes elect a leader using randomized timeouts and majority voting. Only the leader can accept write operations.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    📝
                  </div>
                  <h3 className="text-xl font-bold">Log Replication</h3>
                </div>
                <p>Metadata operations are logged and replicated to followers. Commits happen only after majority acknowledgment.</p>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f2e4d8] rounded-full flex items-center justify-center border-2 border-black">
                    💓
                  </div>
                  <h3 className="text-xl font-bold">Heartbeats</h3>
                </div>
                <p>Leaders send regular heartbeats to maintain authority and prevent unnecessary elections.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 4: Architecture Components */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">System Architecture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">FileService</h3>
                <p className="mb-4">High-level file operations with automatic chunking, checksum generation, and metadata management. Coordinates between ChunkService and MetadataService.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/file_service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">ChunkService</h3>
                <p className="mb-4">Low-level chunk storage with local disk backend. Handles chunk write, read, and delete operations with comprehensive logging.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/chunk_service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">MetadataReplicator</h3>
                <p className="mb-4">Raft-based metadata replication with log entry processing, commit index management, and state machine application.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/metadata_replicator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Communication</h3>
                <p className="mb-4">Multi-protocol communication layer supporting both HTTP and gRPC. Handles message routing, serialization, and error handling.</p>
                <a 
                  href="https://github.com/AnishMulay/sandstore/tree/main/internal/communication" 
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
        
        {/* Section 5: AI Integration */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">AI Integration via MCP</h2>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
              <p className="mb-4">
                Sandstore includes a Model Context Protocol (MCP) server that allows AI systems to interact with the file system through standardized interfaces. This enables natural language file operations and system management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h4 className="font-bold mb-3">Supported Operations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Store, read, and delete files</li>
                  <li>List available servers</li>
                  <li>Stop servers for testing</li>
                  <li>Server configuration management</li>
                </ul>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h4 className="font-bold mb-3">Usage Example</h4>
                <code className="text-sm block bg-gray-100 p-2 rounded">
                  # Build and run MCP server<br/>
                  make mcp<br/>
                  ./sandstore-mcp
                </code>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 6: Getting Started */}
        <section className="w-full max-w-4xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Try It Yourself</h2>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
              <h4 className="font-bold mb-3">Quick Start Commands</h4>
              <code className="text-sm block bg-gray-100 p-3 rounded font-mono">
                git clone https://github.com/AnishMulay/sandstore<br/>
                cd sandstore<br/>
                make build<br/>
                make test-server  # Starts server and runs client test
              </code>
            </div>
            
            <div className="text-center">
              <p className="mb-4">
                Ready to explore distributed systems? The codebase is designed for learning - start with the interfaces, then dive into implementations.
              </p>
              <a 
                href="https://github.com/AnishMulay/sandstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all inline-flex items-center gap-2"
              >
                🚀 Explore the Code
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}