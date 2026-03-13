import Layout from "../components/Layout";
import Head from "next/head";

export default function Architectures() {
    return (
        <>
            <Head>
                <title>Architectures - Sandstore</title>
                <meta name="description" content="Explore and build topological architectures for Sandstore" />
            </Head>
            <Layout>
                <div className="pt-8 px-4">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tighter uppercase">
                        ARCHITECTURES
                    </h1>
                    <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto">
                        Different assemblies of the same interfaces produce different storage systems.
                    </p>
                </div>

                {/* Section 1: Page intro card */}
                <section className="w-full max-w-6xl mb-12">
                    <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full">
                        <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <p className="text-lg mb-4">
                                In most distributed storage systems, the architecture is fixed. The topology, where metadata lives, how replication works, how nodes discover each other, is a decision made once at design time.
                            </p>
                            <p className="text-base">
                                In Sandstore, topology is a variable. The system is built around two orchestration interfaces: a ControlPlaneOrchestrator and a DataPlaneOrchestrator. Implement new versions of those interfaces, write a wiring file, and you have a new architecture. The server layer, the client, and the deploy tooling stay the same.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: "Available Now" card */}
                <section className="w-full max-w-6xl mb-12">
                    <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Available Now</h2>

                        <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <div className="text-xs font-bold tracking-widest text-gray-600 mb-1 uppercase">HYPERCONVERGED NODE</div>
                            <h3 className="text-2xl font-bold mb-6">Converged Architecture</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold mb-2">What it is</h4>
                                    <p className="mb-4 text-sm text-gray-800">Every node runs both the control plane and the data plane. There are no separate metadata servers. Cluster membership is handled by etcd. This is similar in spirit to CockroachDB.</p>

                                    <h4 className="font-bold mb-2">When to use it</h4>
                                    <p className="mb-4 text-sm text-gray-800">High read/write locality. Simpler operations. No single metadata bottleneck. Good for clusters where every node should be equal.</p>

                                    <h4 className="font-bold mb-2">Current component stack</h4>
                                    <div className="bg-gray-100 p-3 font-mono text-sm border-[1px] border-black">
                                        <div className="flex justify-between mb-1"><span>ClusterService</span><span>etcd</span></div>
                                        <div className="flex justify-between mb-1"><span>Communicator</span><span>gRPC</span></div>
                                        <div className="flex justify-between mb-1"><span>MetadataService</span><span>BoltDB</span></div>
                                        <div className="flex justify-between mb-1"><span>MetadataReplicator</span><span>Durable Raft (WAL + CRC)</span></div>
                                        <div className="flex justify-between"><span>ChunkService</span><span>Local disk</span></div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-2">How to run it</h4>
                                    <code className="text-sm block bg-gray-100 p-3 border-[1px] border-black font-mono mb-4 whitespace-pre-wrap">
                                        git clone https://github.com/AnishMulay/sandstore
                                        cd sandstore
                                        docker compose -f deploy/docker/etcd/docker-compose.yaml up -d
                                        ./scripts/dev/run-smoke.sh
                                    </code>
                                    <p className="text-sm text-gray-800 mb-6">This starts a 3-node cluster on localhost, waits for leader election, and runs a full smoke test. The cluster stays up after the script finishes.</p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="https://github.com/AnishMulay/sandstore/blob/main/servers/node/wire_grpc_etcd.go"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm text-center flex-1"
                                        >
                                            View Wiring File
                                        </a>
                                        <a
                                            href="https://github.com/AnishMulay/sandstore/tree/main/deploy/k8s"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm text-center flex-1"
                                        >
                                            Run on Kubernetes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: "Coming Soon" card */}
                <section className="w-full max-w-6xl mb-12">
                    <div className="bg-[#fff5ed] border-[3px] border-dashed border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full relative">
                        <div className="absolute top-4 right-4 md:top-8 md:right-8 border-[2px] border-black px-2 py-1 text-xs font-bold bg-white uppercase tracking-wider">PLANNED</div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Coming Soon</h2>

                        <div className="bg-white border-[2px] border-dashed border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <div className="text-xs font-bold tracking-widest text-gray-600 mb-1 uppercase">GFS-STYLE SEPARATED METADATA</div>
                            <h3 className="text-2xl font-bold mb-6">Disaggregated Architecture</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                <div>
                                    <h4 className="font-bold mb-2">What it will be</h4>
                                    <p className="mb-4 text-sm text-gray-800">Dedicated metadata servers handle all namespace and placement operations. Separate data nodes handle chunk storage and retrieval. This follows the architecture described in the Google File System paper.</p>

                                    <h4 className="font-bold mb-2">How it differs</h4>
                                    <p className="mb-4 text-sm text-gray-800">Unlike the converged topology, metadata and data live on different nodes. This enables independent scaling of the metadata and storage layers at the cost of additional network hops.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-2">What needs to be implemented</h4>
                                    <div className="bg-gray-100 p-3 font-mono text-sm border-[1px] border-black">
                                        <div className="flex justify-between mb-1"><span>PlacementStrategy</span><span>new</span></div>
                                        <div className="flex justify-between mb-1"><span>DataPlaneOrchestrator</span><span>new</span></div>
                                        <div className="flex justify-between mb-1"><span>TransactionCoordinator</span><span>new</span></div>
                                        <div className="flex justify-between mb-1"><span>MetadataService</span><span>optional new</span></div>
                                        <div className="flex justify-between"><span>MetadataReplicator</span><span>optional new</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <a
                                    href="https://github.com/AnishMulay/sandstore/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-[2px] border-black px-6 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm inline-block"
                                >
                                    Follow Progress on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: "Build Your Own" card */}
                <section className="w-full max-w-6xl mb-12">
                    <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Build Your Own</h2>

                        <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <p className="text-lg mb-6">
                                To build a new topology, implement the interfaces that matter for your design and write a wiring file that assembles them. You do not need to modify the server layer, the client, or the deploy tooling.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                <div>
                                    <h4 className="font-bold mb-3">The extension points</h4>
                                    <div className="bg-gray-100 p-3 font-mono text-sm border-[1px] border-black">
                                        <div className="mb-1">ControlPlaneOrchestrator</div>
                                        <div className="mb-1">DataPlaneOrchestrator</div>
                                        <div className="mb-1">PlacementStrategy</div>
                                        <div className="mb-1">TransactionCoordinator</div>
                                        <div className="mb-1">MetadataService</div>
                                        <div className="mb-1">MetadataReplicator</div>
                                        <div className="mb-1">ClusterService</div>
                                        <div className="mb-1">Communicator</div>
                                        <div>ChunkService</div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-3">The assembly pattern</h4>
                                    <code className="text-xs sm:text-sm block bg-gray-100 p-3 border-[1px] border-black font-mono whitespace-pre-wrap overflow-x-auto">
                                        {`// wire_your_topology.go
clusterSvc  := NewYourClusterService(...)
metaSvc     := NewYourMetadataService(...)
metaRepl    := NewYourMetadataReplicator(metaSvc, ...)
chunkSvc    := NewYourChunkService(...)
placement   := NewYourPlacementStrategy(clusterSvc)
txCoord     := NewYourTransactionCoordinator(...)
cpo         := NewYourControlPlane(metaSvc, metaRepl, placement, ...)
dpo         := NewYourDataPlane(chunkSvc, txCoord, ...)

server      := NewSimpleServer(comm, cpo, dpo, logSvc, metaRepl)`}
                                    </code>
                                </div>
                            </div>

                            <p className="text-gray-800 mb-6">
                                The canonical reference is servers/node/wire_grpc_etcd.go. It assembles the current topology in dependency order and is the clearest expression of how the system is meant to be extended.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://github.com/AnishMulay/sandstore/blob/main/internal/orchestrators/interfaces.go"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-[2px] border-black px-6 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm text-center flex-1"
                                >
                                    Read the Interfaces
                                </a>
                                <a
                                    href="https://github.com/AnishMulay/sandstore/blob/main/servers/node/wire_grpc_etcd.go"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-[2px] border-black px-6 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all text-sm text-center flex-1"
                                >
                                    Read the Wiring File
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: CTA card */}
                <section className="w-full max-w-6xl mb-16">
                    <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a topology idea?</h2>

                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            New topology implementations are the most valuable contribution to Sandstore. If you have an idea for a new architecture, open an issue to discuss it or submit an implementation directly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/AnishMulay/sandstore/issues/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all inline-block"
                            >
                                Open an Issue
                            </a>
                            <a
                                href="https://github.com/AnishMulay/sandstore/blob/main/CONTRIBUTING.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all inline-block"
                            >
                                View Contributing Guide
                            </a>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
