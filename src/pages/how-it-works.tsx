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
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">How It Works</h1>
            
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
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Architecture Overview</h2>
              <div className="relative w-full h-64 border-[2px] border-black rounded-lg overflow-hidden bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Detailed Architecture Diagram</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Key Components</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Metadata Service:</strong> Tracks file locations and chunk mappings</li>
                  <li><strong>Chunk Servers:</strong> Store and retrieve data chunks</li>
                  <li><strong>Client Library:</strong> Provides a clean API for applications</li>
                  <li><strong>MCP Server:</strong> Model Context Protocol server for AI integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}