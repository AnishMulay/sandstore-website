import Layout from "../components/Layout";
import Head from "next/head";

export default function Devlog() {
  const devlogEntries = [
    {
      date: "MARCH 11, 2026",
      title: "KUBERNETES CLUSTER SMOKE TESTS",
      content: "Merged Kubernetes-native cluster smoke and durability test flow. Added RBAC configuration, test helper code, and Makefile wiring. Cluster integration tests now run entirely inside Kubernetes jobs with proper namespace isolation.",
      link: "https://github.com/AnishMulay/sandstore/pull/38"
    },
    {
      date: "MARCH 10, 2026",
      title: "DURABLE RAFT WAL AND STABLE STORE",
      content: "Merged durable Raft WAL and stable store implementation. Added CRC validation, envelope structure for corruption detection, and tests for log store and stable store corruption handling. Raft state now survives node restarts.",
      link: "https://github.com/AnishMulay/sandstore/pull/36"
    },
    {
      date: "MARCH 9, 2026",
      title: "GRPC CLIENT RETRY AND TIMEOUT",
      content: "Added client-side RPC timeout and improved gRPC client management with retry logic. Improved client routing robustness for leader changes and temporary node unavailability.",
      link: "https://github.com/AnishMulay/sandstore/commit/ff8cf0e"
    },
    {
      date: "MARCH 9, 2026",
      title: "GRPC COMMUNICATOR SIMPLIFICATION",
      content: "Reduced complexity in the gRPC communicator. Simplified client bootstrap logic and communicator internals. Removed accumulated state that was no longer needed after the smart client refactor.",
      link: "https://github.com/AnishMulay/sandstore/commit/aacd106"
    },
    {
      date: "MARCH 9, 2026",
      title: "SMART CLIENT AND TOPOLOGY ROUTER",
      content: "Merged the smart client refactor. Introduced ConvergedRouter for automatic leader discovery and request routing. The client SDK now handles topology changes transparently without requiring manual leader tracking.",
      link: "https://github.com/AnishMulay/sandstore/pull/34"
    },
    {
      date: "MARCH 9, 2026",
      title: "CONTROL PLANE ORCHESTRATOR REFACTOR",
      content: "Refactored controlplaneorchestrator to include consensus message handling. Improved orchestrator interfaces to define the boundary for the new topology pattern.",
      link: "https://github.com/AnishMulay/sandstore/commit/c9bd519"
    },
    {
      date: "MARCH 9, 2026",
      title: "CONVERGED ROUTER IMPLEMENTATION",
      content: "Implemented ConvergedRouter for automatic request routing and topology management. The client SDK now handles topology changes transparently.",
      link: "https://github.com/AnishMulay/sandstore/commit/ba8fac0"
    },
    {
      date: "MARCH 9, 2026",
      title: "STANDARD REQUEST MANAGER",
      content: "Added new SandstoreClient initialization and StandardRequestManager for robust client operation. Updated open smoke test according to new client library.",
      link: "https://github.com/AnishMulay/sandstore/commit/53c37ed"
    },
    {
      date: "MARCH 8, 2026",
      title: "RAFT DATA PLANE ORCHESTRATOR",
      content: "Implemented the RaftDataPlaneOrchestrator with ExecuteWrite and ExecuteRead methods. Updated ControlPlaneOrchestrator methods to include chunk location handling.",
      link: "https://github.com/AnishMulay/sandstore/commit/4722b0b"
    },
    {
      date: "MARCH 8, 2026",
      title: "RAFT TRANSACTION COORDINATOR",
      content: "Implemented the RaftTransactionCoordinator and RaftTxHandle with transaction management methods. Added a static endpoint resolver and legacy sorted placement strategy.",
      link: "https://github.com/AnishMulay/sandstore/commit/72ab24c"
    },
    {
      date: "MARCH 8, 2026",
      title: "DOMAIN AND ORCHESTRATOR INTERFACES",
      content: "Added domain and orchestrator interfaces defining the boundary for the new topology pattern. Introduced the decoupled architecture with ControlPlaneOrchestrator and DataPlaneOrchestrator.",
      link: "https://github.com/AnishMulay/sandstore/commit/e89aa5b"
    },
    {
      date: "MARCH 7, 2026",
      title: "DECOUPLED ORCHESTRATOR ARCHITECTURE",
      content: "Fixed client chunk handling and integrated some transaction support in file services. Patched in the orchestrators and updated chunk handling to use ChunkDescriptor.",
      link: "https://github.com/AnishMulay/sandstore/commit/ceeb13c"
    },
    {
      date: "MARCH 6, 2026",
      title: "TRANSACTIONAL FILE SERVICE",
      content: "Implemented TransactionalFileService for chunked file operations with two phase commit support. Refactored BoltMetadataService to support chunk intent operations and transaction handling.",
      link: "https://github.com/AnishMulay/sandstore/commit/f39da30"
    },
    {
      date: "MARCH 6, 2026",
      title: "LOCAL DISC CHUNK SERVICE UPDATES",
      content: "Updated LocalDiscChunkService to support two phase commits and improved chunk management. Refactored Chunk and Metadata Services and set them up for two phase commit.",
      link: "https://github.com/AnishMulay/sandstore/commit/a936495"
    },
    {
      date: "MARCH 5, 2026",
      title: "DURABILITY SMOKE TESTS",
      content: "Implemented durability smoke tests and docker compose for localized testing. Moved config file to deploy docker directory.",
      link: "https://github.com/AnishMulay/sandstore/commit/d032e41"
    },
    {
      date: "MARCH 5, 2026",
      title: "DURABLE RAFT SNAPSHOTS",
      content: "Implemented snapshot logic and wired durable raft into node. Refactored durable raft storage and added snapshot handling to ensure reliable replication.",
      link: "https://github.com/AnishMulay/sandstore/commit/ba5bfe5"
    },
    {
      date: "AUGUST 7, 2025",
      title: "RAFT METADATA REPLICATION COMPLETE",
      content: "Fixed metadata duplication in leader node and completed Raft metadata replication system. The system now properly handles log entry processing for follower nodes and ensures consistent metadata across the cluster with proper quorum-based replication.",
      link: "https://github.com/AnishMulay/sandstore/commit/e6591c2"
    },
    {
      date: "AUGUST 6, 2025",
      title: "RAFT FILE SERVICE IMPLEMENTATION",
      content: "Added a new Raft file service with strong dependency on Raft metadata replicator. Refactored store file functionality and improved quorum request handling for distributed file operations.",
      link: "https://github.com/AnishMulay/sandstore/commit/ac43871"
    },
    {
      date: "AUGUST 5, 2025",
      title: "RAFT LEADER ELECTION IMPROVEMENTS",
      content: "Fixed leader election race condition in Raft implementation and refactored metadata replicator interface to make it more modular. Enhanced the stability of the consensus algorithm.",
      link: "https://github.com/AnishMulay/sandstore/commit/30508b0"
    },
    {
      date: "AUGUST 3, 2025",
      title: "RAFT METADATA LOG SYSTEM",
      content: "Added MetadataLogEntry types and helper functions for metadata log operations. Implemented support for create and delete operations in the Raft log, with proper commit index management and log entry processing.",
      link: "https://github.com/AnishMulay/sandstore/commit/4df7904"
    },
    {
      date: "JULY 31, 2025",
      title: "ENHANCED LOGGING SYSTEM",
      content: "Improved local disc logging with levels and assigned integer levels to logging levels. Added better term logging for leader election processes to improve debugging and system monitoring.",
      link: "https://github.com/AnishMulay/sandstore/commit/aacd106"
    },
    {
      date: "JULY 19, 2025",
      title: "MCP INTEGRATION COMPLETE",
      content: "Merged the Model Context Protocol (MCP) feature branch. This integration allows AI systems to interact with Sandstore directly through a standardized interface. The MCP server now supports file operations including storing, reading, and deleting files.",
      link: "https://github.com/AnishMulay/sandstore/commit/ff8cf0e"
    },
    {
      date: "JUNE 18, 2025",
      title: "CHUNK SERVICE IMPLEMENTATION",
      content: "Added chunk service interface and file chunk struct. Renamed chunk service directory and implemented the foundation for distributed chunk storage with proper data structures.",
      link: "https://github.com/AnishMulay/sandstore/commit/b7d556b"
    },
    {
      date: "JUNE 14, 2025",
      title: "GRPC COMMUNICATOR",
      content: "Tested and added gRPC communicator implementation, providing an alternative to HTTP for inter-node communication. This gives the system flexibility in choosing communication protocols.",
      link: "https://github.com/AnishMulay/sandstore/commit/a4497ed"
    },
    {
      date: "JUNE 10, 2025",
      title: "HTTP COMMUNICATOR IMPLEMENTATION",
      content: "Developed the HTTP communicator component with functions for message handling, sending, and receiving. Added server functionality for message processing and implemented the core server structure.",
      link: "https://github.com/AnishMulay/sandstore/commit/d9e5d42"
    },
    {
      date: "JUNE 9, 2025",
      title: "PROJECT INCEPTION",
      content: "Initialized the Sandstore project with the core message structure and communicator interface. The goal is to create a distributed file system that's easy to understand and modify for learning distributed systems concepts.",
      link: "https://github.com/AnishMulay/sandstore/commit/20b1a11"
    }
  ];

  return (
    <>
      <Head>
        <title>Development Log - Sandstore</title>
        <meta name="description" content="Follow the development journey of Sandstore" />
      </Head>
      <Layout>
        <div className="w-full max-w-6xl mx-auto mb-16 pt-8 px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tighter uppercase">
            Development Log
          </h1>
          <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto">
            A running record of what has been built, fixed, and shipped.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {devlogEntries.map((entry, index) => (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-white border-[3px] border-black flex flex-col h-full shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] transition-all group block"
              >
                {/* Card Header */}
                <div className="bg-[#171717] text-[#fff5ed] border-b-[3px] border-black p-4 flex items-center gap-3">
                  <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs shadow-[2px_2px_0_0_rgba(255,255,255,0.5)]">
                    {index + 1}
                  </div>
                  <span className="font-bold text-sm tracking-widest uppercase">{entry.date}</span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black mb-4 leading-tight uppercase tracking-tight">{entry.title}</h3>
                  <p className="text-base font-medium text-gray-800 leading-relaxed mb-4 flex-grow">
                    {entry.content}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="bg-[#171717] text-white p-4 border-t-[3px] border-black flex justify-between items-center transition-colors">
                  <span className="text-xs font-bold tracking-widest flex items-center gap-2">LOG ENTRY</span>
                  <span className="text-xs font-bold tracking-widest text-[#fff5ed]">READ →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}