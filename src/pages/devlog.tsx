import Layout from "../components/Layout";
import Head from "next/head";

export default function Devlog() {
  // Development log entries from the project's git history
  const devlogEntries = [
    {
      date: "July 19, 2025",
      title: "MCP Integration Complete",
      content: "Merged the Model Context Protocol (MCP) feature branch. This integration allows AI systems to interact with Sandstore directly through a standardized interface. The MCP server now supports file operations including storing, reading, and deleting files."
    },
    {
      date: "July 13, 2025",
      title: "MCP Server Development",
      content: "Started implementing the Model Context Protocol server. Added configuration loading functionality and created a dummy MCP server for initial testing. Updated the Makefile to include MCP binary creation."
    },
    {
      date: "July 12, 2025",
      title: "Error Standardization",
      content: "Standardized error handling across all components including the file service, chunk service, communicator, metadata replicator, and node registry. This improves debugging and creates a consistent error reporting system."
    },
    {
      date: "July 12, 2025",
      title: "Logging System Integration",
      content: "Added comprehensive logging service integration across all system components. This includes the file service, chunk replicator, communicators, and metadata services, enabling better system monitoring and debugging."
    },
    {
      date: "June 14, 2025",
      title: "Client-Server Testing",
      content: "Simplified the client and server implementations to facilitate testing. Improved the client's main functionality and streamlined the server implementation for more reliable test scenarios."
    },
    {
      date: "June 13, 2025",
      title: "Communication Layer Improvements",
      content: "Updated the server implementation and simplified the Communicator interface to make it more modular. These changes enhance the system's flexibility and maintainability."
    },
    {
      date: "June 10, 2025",
      title: "HTTP Communicator Implementation",
      content: "Developed the HTTP communicator component with functions for message handling, sending, and receiving. Added server functionality for message processing and implemented the core server structure."
    },
    {
      date: "June 9, 2025",
      title: "Project Inception",
      content: "Initialized the Sandstore project with the core message structure and communicator interface. The goal is to create a distributed file system that's easy to understand and modify."
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