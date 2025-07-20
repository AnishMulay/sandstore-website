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
              <h2 className="text-2xl font-bold mb-4">Video Walkthrough</h2>
              <div className="relative w-full h-0 pb-[56.25%] border-[2px] border-black rounded-lg overflow-hidden bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Video Demo Coming Soon</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Interactive Terminal</h2>
              <div className="bg-black text-green-400 font-mono p-4 rounded-lg border-[2px] border-white shadow-[4px_4px_0_0_rgba(255,255,255,0.5)]">
                <div className="mb-2">$ sandstore-cli --help</div>
                <div className="mb-2">Usage: sandstore-cli [command] [options]</div>
                <div className="mb-2">Commands:</div>
                <div className="mb-2">  put    Upload a file to Sandstore</div>
                <div className="mb-2">  get    Download a file from Sandstore</div>
                <div className="mb-2">  ls     List files in Sandstore</div>
                <div className="mb-2">  rm     Remove a file from Sandstore</div>
                <div className="mb-2">$ _</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Try It Yourself</h3>
                <p className="mb-4">Download the Sandstore client and run it locally:</p>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                  go get github.com/anish/sandstore/client
                </div>
              </div>
              
              <div className="bg-white border-[2px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Online Playground</h3>
                <p className="mb-4">Coming soon: Try Sandstore in your browser without installing anything.</p>
                <button disabled className="border-[3px] border-black px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-gray-200 text-gray-500 rounded-lg font-bold cursor-not-allowed">
                  Launch Playground (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}