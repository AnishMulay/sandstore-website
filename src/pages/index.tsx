import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import GitHubStatsBar from "../components/GitHubStatsBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandstore - Modular Distributed File System in Go</title>
        <meta name="description" content="Learn distributed systems through Sandstore - a working implementation with Raft consensus, file chunking, and metadata replication built in Go" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="w-full max-w-6xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full min-h-[100vh] flex flex-col justify-between items-center">
            {/* Top Zone */}
            <div className="flex justify-between w-full">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-black " />
                <div className="w-4 h-4 bg-black " />
                <div className="w-4 h-4 bg-black " />
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 border border-black " />
                <div className="w-4 h-4 border border-black " />
                <div className="w-4 h-4 border border-black " />
              </div>
            </div>

            {/* Middle Zone */}
            <div className="text-center flex flex-col items-center justify-center">
              <h1 className="font-black mb-4 text-gray-900 leading-none tracking-tight" style={{ fontSize: "clamp(64px, 10vw, 120px)" }}>
                Sandstore
              </h1>

              <p className="font-medium font-mono mb-3" style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                A framework for building distributed storage architectures
              </p>

              <p className="text-gray-700 font-mono" style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}>
                Modular • Storage-Agnostic • Deploy in Minutes
              </p>
            </div>

            {/* Bottom Zone */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a
                href="https://github.com/AnishMulay/sandstore"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                View on GitHub
              </a>
              <Link
                href="/architectures"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                Explore Architectures
              </Link>
              <Link
                href="/how-it-works"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                How It Works
              </Link>
            </div>
          </div>
        </section>

        <GitHubStatsBar />

        {/* What Is Sandstore Section */}
        <section className="w-full max-w-6xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What Is Sandstore?</h2>

            <p className="text-lg mb-8 text-center">
              Sandstore is a modular framework for building and experimenting with distributed storage architectures. Define your components, swap implementations freely, and explore how fundamental design decisions change the behavior of your system. Whether you are building file or object storage, whether metadata is colocated or separated, the framework stays the same. Spin up a real cluster in minutes with Docker and Kubernetes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">For Students</h3>
                </div>
                <p>Study distributed systems concepts through a working implementation. Read the interfaces, follow the wiring, run the cluster, and see exactly how the pieces fit together.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">For Researchers</h3>
                </div>
                <p>Experiment with how architectural decisions change system behavior. Swap components, build new topologies, and test your hypotheses against a real running cluster.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">For Engineers</h3>
                </div>
                <p>Explore production distributed storage patterns in a clean, modular codebase. Understand the tradeoffs before committing to them in your own systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-6xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Core Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Pluggable Components</h3>
                </div>
                <p>Every layer is an interface with swappable implementations. Metadata engine, consensus mechanism, transport, chunk storage. Change any of them without touching the rest.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Real Topologies</h3>
                </div>
                <p>Start with a working hyperconverged architecture today. The framework is designed so that building a new topology means writing new implementations, not modifying existing ones.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Deploy in Minutes</h3>
                </div>
                <p>A 3-node cluster, leader election, and smoke tests from a single script. Docker and Kubernetes configurations are included and working.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Storage Agnostic</h3>
                </div>
                <p>The interfaces make no assumptions about whether you are building file storage, object storage, or something else entirely. The topology is yours to define.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="w-full max-w-6xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Modular Architecture</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">ControlPlaneOrchestrator</h4>
                <p className="text-sm">Owns metadata lifecycle, placement decisions, namespace operations, and consensus coordination.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">DataPlaneOrchestrator</h4>
                <p className="text-sm">Owns chunk movement, replica fanout, read failover, and inbound chunk RPC handlers.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">MetadataReplicator</h4>
                <p className="text-sm">Consensus-backed metadata application. Current implementation uses durable Raft with WAL and CRC protection.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">ClusterService</h4>
                <p className="text-sm">Node discovery and membership management. Current implementation uses etcd.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">Communicator</h4>
                <p className="text-sm">Inter-node transport. gRPC is the active implementation. HTTP is available as an alternative.</p>
              </div>
              <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  text-center">
                <h4 className="font-bold mb-2">ChunkService</h4>
                <p className="text-sm">Low-level chunk storage and retrieval. Current implementation uses local disk.</p>
              </div>
            </div>

            <p className="text-center text-gray-700">
              The server layer depends only on the orchestrator interfaces. Every component beneath them is an extension point.
            </p>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="w-full max-w-6xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full  text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started</h2>

            <p className="text-lg mb-6">
              Ready to explore distributed systems? Clone the repo, build the project, and start experimenting with a real distributed file system.
            </p>

            <div className="bg-white border-[2px] border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]  mb-6 text-left">
              <h4 className="font-bold mb-2">Start a 3-node cluster</h4>
              <code className="text-sm font-mono block">
                git clone https://github.com/AnishMulay/sandstore<br />
                cd sandstore<br />
                docker compose -f deploy/docker/etcd/docker-compose.yaml up -d<br />
                ./scripts/dev/run-smoke.sh
              </code>
            </div>

            <p className="text-lg mb-6">
              This boots a full 3-node Sandstore cluster on localhost, waits for leader election, and runs an end-to-end smoke test against it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://github.com/AnishMulay/sandstore"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                View on GitHub
              </a>
              <Link
                href="/architectures"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                Explore Architectures
              </Link>
              <a
                href="https://discord.gg/6xWrtWQMMT"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                Join Discord
              </a>
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section className="w-full max-w-6xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contribute & Learn</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Study the Code</h3>
                </div>
                <p>Start with servers/node/wire_grpc_etcd.go to see how the current topology is assembled. Then read internal/orchestrators/interfaces.go to understand the extension points.</p>
              </div>

              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold">Build a Topology</h3>
                </div>
                <p>Implement new versions of the orchestrator interfaces, write a wiring file, and you have a new architecture. No changes to the server layer or deploy tooling required.</p>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-700 mb-4">
                Whether you are learning distributed systems for the first time or designing them professionally, Sandstore gives you something real to run, read, and modify.
              </p>
              <a
                href="https://github.com/AnishMulay/sandstore/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all inline-flex items-center gap-2"
              >
                View Issues and Contribute
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}