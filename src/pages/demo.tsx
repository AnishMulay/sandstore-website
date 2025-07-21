import Layout from "../components/Layout";
import Head from "next/head";

export default function Demo() {
  return (
    <>
      <Head>
        <title>Demo - Sandstore</title>
        <meta name="description" content="Watch demos and interact with Sandstore" />
      </Head>
      <Layout>
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Demo</h1>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
                <p className="mb-4">
                  Sandstore is a distributed file system with a modular architecture. It consists of three main components:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Server:</strong> Handles file storage, chunking, and replication</li>
                  <li><strong>Client:</strong> Provides a simple interface for interacting with the system</li>
                  <li><strong>MCP Server:</strong> Enables AI integration through the Model Context Protocol</li>
                </ul>
                <p>
                  Follow the examples below to see how Sandstore works in practice.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Client Usage Example</h2>
              <div className="bg-black text-green-400 font-mono p-4 rounded-lg border-[2px] border-white shadow-[4px_4px_0_0_rgba(255,255,255,0.5)] mb-4 overflow-x-auto">
                <div className="mb-2">$ ./sandstore-client</div>
                <div className="mb-2">2025/07/19 14:23:45 Storing file with 73 bytes...</div>
                <div className="mb-2">2025/07/19 14:23:45 File stored successfully, response code: OK</div>
                <div className="mb-2"></div>
                <div className="mb-2">File has been stored and replicated.</div>
                <div className="mb-2">Now manually delete a chunk from server 8081 (localhost:8081)</div>
                <div className="mb-2">Press Enter after deleting a chunk to test lazy loading...</div>
                <div className="mb-2"></div>
                <div className="mb-2">2025/07/19 14:23:50 Reading file to test lazy chunk loading...</div>
                <div className="mb-2">2025/07/19 14:23:50 File read successfully, response code: OK</div>
                <div className="mb-2"></div>
                <div className="mb-2">File contents: This is sample file content that will be chunked and stored in the sandstore system.</div>
                <div className="mb-2">Original data: This is sample file content that will be chunked and stored in the sandstore system.</div>
                <div className="mb-2">✓ File contents match - lazy loading successful!</div>
                <div className="mb-2"></div>
                <div className="mb-2">Press Enter to delete the file...</div>
                <div className="mb-2"></div>
                <div className="mb-2">2025/07/19 14:23:55 Deleting file...</div>
                <div className="mb-2">2025/07/19 14:23:55 File deleted successfully, response code: OK</div>
                <div className="mb-2"></div>
                <div className="mb-2">File has been deleted.</div>
                <div className="mb-2">Please verify that all replicated chunks have been removed from all nodes.</div>
              </div>
              <p className="text-sm text-gray-600 italic">This example demonstrates storing a file, testing lazy chunk loading when a chunk is missing, and deleting the file.</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">MCP Server Integration</h2>
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-6">
                <p className="mb-4">
                  Sandstore includes an MCP (Model Context Protocol) server that allows AI systems to interact with the file system. The MCP server exposes the following tools:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>list_servers:</strong> Lists all available Sandstore servers</li>
                  <li><strong>store_file:</strong> Stores a file in the Sandstore system</li>
                  <li><strong>read_file:</strong> Reads a file from the Sandstore system</li>
                  <li><strong>delete_file:</strong> Deletes a file from the Sandstore system</li>
                </ul>
              </div>
              
              <div className="bg-black text-green-400 font-mono p-4 rounded-lg border-[2px] border-white shadow-[4px_4px_0_0_rgba(255,255,255,0.5)] mb-4 overflow-x-auto">
                <div className="mb-2">$ ./mcp-server</div>
                <div className="mb-2">{'{"type":"tool_call","name":"list_servers"}'}</div>
                <div className="mb-2">{'{"type":"tool_result","content":"Available servers:\\n- server1: localhost:8080\\n- server2: localhost:8081\\n- server3: localhost:8082\\nDefault server: server1\\n"}'}</div>
                <div className="mb-2"></div>
                <div className="mb-2">{'{"type":"tool_call","name":"store_file","parameters":{"path":"example.txt","content":"Hello from MCP!"}}'}</div>
                <div className="mb-2">{'{"type":"tool_result","content":"File stored successfully, response code: OK"}'}</div>
                <div className="mb-2"></div>
                <div className="mb-2">{'{"type":"tool_call","name":"read_file","parameters":{"path":"example.txt"}}'}</div>
                <div className="mb-2">{'{"type":"tool_result","content":"File content: Hello from MCP!"}'}</div>
              </div>
              <p className="text-sm text-gray-600 italic">This example shows how AI systems can interact with Sandstore through the MCP server.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Try It Yourself</h3>
                <p className="mb-4">Clone the Sandstore repository and build the components:</p>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm overflow-x-auto mb-4">
                  git clone https://github.com/AnishMulay/sandstore.git
                </div>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                  cd sandstore && make
                </div>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Chunk-based storage:</strong> Files are split into chunks for efficient storage</li>
                  <li><strong>Replication:</strong> Chunks are replicated across nodes for redundancy</li>
                  <li><strong>Lazy loading:</strong> Missing chunks are automatically retrieved from other nodes</li>
                  <li><strong>MCP integration:</strong> AI systems can interact with the file system</li>
                  <li><strong>Modular design:</strong> Components can be swapped out for experimentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}