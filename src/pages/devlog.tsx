import Layout from "../components/Layout";
import Head from "next/head";

export default function Devlog() {
  // Sample devlog entries
  const devlogEntries = [
    {
      date: "June 15, 2023",
      title: "Project Inception",
      content: "Started working on the initial design for Sandstore. The goal is to create a distributed file system that's easy to understand and modify."
    },
    {
      date: "August 3, 2023",
      title: "Metadata Service Implementation",
      content: "Completed the first version of the metadata service. It can now track file chunks across the system."
    },
    {
      date: "October 12, 2023",
      title: "Chunk Server Protocol",
      content: "Defined the protocol for chunk servers to communicate with each other and with the metadata service."
    },
    {
      date: "January 20, 2024",
      title: "MCP Integration",
      content: "Added Model Context Protocol support to allow AI systems to interact with Sandstore directly."
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
            
            <div className="mt-8 bg-[#f2e4d8] border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">Subscribe to Updates</h3>
              <p className="mb-4">Get notified when new development updates are posted</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="border-[2px] border-black px-4 py-2 rounded-md focus:outline-none"
                />
                <button className="border-[3px] border-black px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}