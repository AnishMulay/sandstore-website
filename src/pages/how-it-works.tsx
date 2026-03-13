import Layout from "../components/Layout";
import Head from "next/head";
import RaftScrollStory from "../components/RaftScrollStory";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works - Sandstore</title>
        <meta name="description" content="Learn about the architecture and implementation of Sandstore's distributed file system" />
      </Head>
      <Layout>
        <div className="pt-8 px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tighter uppercase">
            HOW IT WORKS
          </h1>
          <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto">
            A walkthrough of the active topology and the interfaces that drive it.
          </p>
        </div>

        {/* Section 1: Overview */}
        <section className="w-full max-w-6xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">How Sandstore Works</h1>

            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]  mb-6">
              <p className="text-lg mb-4">
                Sandstore is built around two top-level orchestration interfaces: a ControlPlaneOrchestrator that owns metadata, placement, and consensus coordination, and a DataPlaneOrchestrator that owns chunk movement, replica fanout, and read failover. Everything beneath those interfaces is swappable.
              </p>
              <p className="text-base">
                The current topology is a hyperconverged node where every node runs both planes. This page walks through how that topology works. The same framework supports different topologies built from different implementations of the same interfaces.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: File Storage Flow */}
        <section className="w-full max-w-6xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How a Write Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">Client Request</h4>
                <p className="text-sm">A client sends a store-file request to the cluster leader, discovered automatically via the topology router.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">Placement Decision</h4>
                <p className="text-sm">The ControlPlaneOrchestrator selects chunk placement targets using the PlacementStrategy and creates a write intent in metadata.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">Chunk Write</h4>
                <p className="text-sm">The DataPlaneOrchestrator fans out prepare RPCs to the selected nodes, then coordinates commit across replicas.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">Metadata Commit</h4>
                <p className="text-sm">Once chunks are committed, metadata is applied through the MetadataReplicator and persisted across the cluster.</p>
              </div>
            </div>

            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
              <h4 className="font-bold mb-3">How a Read Works</h4>
              <p>The ControlPlaneOrchestrator resolves the file metadata, the DataPlaneOrchestrator retrieves chunks from available nodes with automatic failover, and the client receives the reassembled file.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Raft Consensus */}
        <section className="w-full max-w-6xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Consensus: The Current Implementation</h2>

            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]  mb-6">
              <p className="mb-4">
                The current topology uses Raft consensus to ensure metadata consistency across all nodes. This is one implementation of the MetadataReplicator interface. The interface accepts any consensus mechanism. What follows describes how the active Raft implementation works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Leader Election</h3>
                </div>
                <p>Nodes elect a leader using randomized timeouts and majority voting. Only the leader accepts write operations.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Log Replication</h3>
                </div>
                <p>Metadata operations are logged and replicated to followers. Commits happen only after majority acknowledgment.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Heartbeats</h3>
                </div>
                <p>The leader sends regular heartbeats to maintain authority and prevent unnecessary elections.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Architecture Components */}
        <section className="w-full max-w-6xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">System Architecture</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <h3 className="text-xl font-bold mb-3">ControlPlaneOrchestrator</h3>
                <p className="mb-4">Owns metadata lifecycle, namespace operations, placement decisions, write intent creation, and consensus RPC forwarding. The active implementation is backed by Raft and BoltDB.</p>
                <a
                  href="https://github.com/AnishMulay/sandstore/blob/main/internal/orchestrators/control_plane.go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <h3 className="text-xl font-bold mb-3">DataPlaneOrchestrator</h3>
                <p className="mb-4">Owns chunk byte movement, replica prepare fanout, read failover across replicas, and inbound chunk RPC handlers. The active implementation coordinates 2PC chunk writes.</p>
                <a
                  href="https://github.com/AnishMulay/sandstore/blob/main/internal/orchestrators/raft_data_plane.go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <h3 className="text-xl font-bold mb-3">MetadataReplicator</h3>
                <p className="mb-4">Consensus-backed metadata application. The active implementation is a durable Raft replicator with WAL, CRC envelope protection, and corruption recovery.</p>
                <a
                  href="https://github.com/AnishMulay/sandstore/blob/main/internal/metadata_replicator/durable_raft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <h3 className="text-xl font-bold mb-3">ClusterService</h3>
                <p className="mb-4">Node discovery, membership management, and liveness tracking. The active implementation uses etcd. The interface accepts any membership backend.</p>
                <a
                  href="https://github.com/AnishMulay/sandstore/blob/main/internal/cluster_service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: AI Integration */}
        <section className="w-full max-w-6xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">AI Integration via MCP</h2>

            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]  mb-6">
              <p className="mb-4">
                Sandstore includes a Model Context Protocol server that exposes the storage layer to AI systems through standardized interfaces. The MCP server is currently being realigned with the active node architecture. The vision is a tool that lets AI systems explore, query, and interact with a running Sandstore cluster directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <h4 className="font-bold mb-3">Planned Operations</h4>
                <p className="text-sm">Store, read, and delete files. Query cluster topology and node status. Inspect metadata and chunk placement. Trigger and observe leader election.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <h4 className="font-bold mb-3">Usage Example</h4>
                <code className="text-sm block bg-gray-100 p-2 ">
                  # Build the MCP server<br />
                  make mcp<br />
                  ./sandstore-mcp
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Getting Started */}
        <section className="w-full max-w-6xl mb-12">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Try It Yourself</h2>

            <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]  mb-6">
              <h4 className="font-bold mb-3">Quick Start Commands</h4>
              <code className="text-sm block bg-gray-100 p-3  font-mono">
                git clone https://github.com/AnishMulay/sandstore<br />
                cd sandstore<br />
                make build<br />
                make test-server  # Starts server and runs client test
              </code>
            </div>

            <div className="text-center">
              <p className="mb-4">
                The codebase is designed to be read. Start with servers/node/wire_grpc_etcd.go to see the full topology assembled in one place. Then read internal/orchestrators/interfaces.go to see where new implementations plug in.
              </p>
              <a
                href="https://github.com/AnishMulay/sandstore"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all inline-flex items-center gap-2"
              >
                Explore the Code
              </a>
            </div>
          </div>
        </section>

        <RaftScrollStory />
      </Layout>
    </>
  );
}