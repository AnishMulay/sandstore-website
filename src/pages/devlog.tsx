import Layout from "../components/Layout";
import Head from "next/head";

export default function Devlog() {
  // Development log entries from the project's git history
  const devlogEntries = [
    {
      date: "August 7, 2025",
      title: "Raft Metadata Replication Complete",
      content: "Fixed metadata duplication in leader node and completed Raft metadata replication system. The system now properly handles log entry processing for follower nodes and ensures consistent metadata across the cluster with proper quorum-based replication."
    },
    {
      date: "August 6, 2025",
      title: "Raft File Service Implementation",
      content: "Added a new Raft file service with strong dependency on Raft metadata replicator. Refactored store file functionality and improved quorum request handling for distributed file operations."
    },
    {
      date: "August 5, 2025",
      title: "Raft Leader Election Improvements",
      content: "Fixed leader election race condition in Raft implementation and refactored metadata replicator interface to make it more modular. Enhanced the stability of the consensus algorithm."
    },
    {
      date: "August 3, 2025",
      title: "Raft Metadata Log System",
      content: "Added MetadataLogEntry types and helper functions for metadata log operations. Implemented support for create and delete operations in the Raft log, with proper commit index management and log entry processing."
    },
    {
      date: "July 31, 2025",
      title: "Enhanced Logging System",
      content: "Improved local disc logging with levels and assigned integer levels to logging levels. Added better term logging for leader election processes to improve debugging and system monitoring."
    },
    {
      date: "July 19, 2025",
      title: "MCP Integration Complete",
      content: "Merged the Model Context Protocol (MCP) feature branch. This integration allows AI systems to interact with Sandstore directly through a standardized interface. The MCP server now supports file operations including storing, reading, and deleting files."
    },
    {
      date: "June 18, 2025",
      title: "Chunk Service Implementation",
      content: "Added chunk service interface and file chunk struct. Renamed chunk service directory and implemented the foundation for distributed chunk storage with proper data structures."
    },
    {
      date: "June 14, 2025",
      title: "gRPC Communicator",
      content: "Tested and added gRPC communicator implementation, providing an alternative to HTTP for inter-node communication. This gives the system flexibility in choosing communication protocols."
    },
    {
      date: "June 10, 2025",
      title: "HTTP Communicator Implementation",
      content: "Developed the HTTP communicator component with functions for message handling, sending, and receiving. Added server functionality for message processing and implemented the core server structure."
    },
    {
      date: "June 9, 2025",
      title: "Project Inception",
      content: "Initialized the Sandstore project with the core message structure and communicator interface. The goal is to create a distributed file system that's easy to understand and modify for learning distributed systems concepts."
    }
  ];

  return (
    <>
      <Head>
        <title>Development Log - Sandstore</title>
        <meta name="description" content="Follow the development journey of Sandstore" />
      </Head>
      <Layout>
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Development Log</h1>
            
            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-center">Current State</h3>
              <p className="text-center mb-4">
                Sandstore is a fully functional distributed file system with core features implemented and tested. 
                The system demonstrates key distributed systems concepts through clean, modular Go code.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-green-100 border border-green-400 px-3 py-1 rounded-full text-sm font-medium">✅ Raft Consensus</span>
                <span className="bg-green-100 border border-green-400 px-3 py-1 rounded-full text-sm font-medium">✅ File Chunking</span>
                <span className="bg-green-100 border border-green-400 px-3 py-1 rounded-full text-sm font-medium">✅ Metadata Replication</span>
                <span className="bg-green-100 border border-green-400 px-3 py-1 rounded-full text-sm font-medium">✅ Multi-Protocol Communication</span>
                <span className="bg-green-100 border border-green-400 px-3 py-1 rounded-full text-sm font-medium">✅ AI Integration (MCP)</span>
                <span className="bg-yellow-100 border border-yellow-400 px-3 py-1 rounded-full text-sm font-medium">🔄 Performance Optimization</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {devlogEntries.map((entry, index) => (
                <div key={index} className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold">{entry.title}</h3>
                    <span className="text-sm text-gray-600 font-mono">{entry.date}</span>
                  </div>
                  <p>{entry.content}</p>
                </div>
              ))}
            </div>
            

          </div>
        </section>
      </Layout>
    </>
  );
}