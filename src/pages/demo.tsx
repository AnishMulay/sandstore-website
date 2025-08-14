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
            <div className="text-center py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Demo</h1>
              <div className="bg-white border-[2px] border-black p-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg inline-block">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon</h2>
                <p className="text-lg text-gray-600">
                  We're working on an interactive demo to showcase Sandstore's capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}