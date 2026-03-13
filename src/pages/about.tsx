import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AnishMulay", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/anish-mulay/", icon: "linkedin" }
  ];

  return (
    <>
      <Head>
        <title>About - Sandstore</title>
        <meta name="description" content="Learn about the creator of Sandstore and the project&apos;s vision" />
      </Head>
      <Layout>
        <div className="pt-8 px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tighter uppercase">
            ABOUT
          </h1>
          <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto">
            The project, the person behind it, and the philosophy.
          </p>
        </div>

        <section className="w-full max-w-6xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full ">
            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]  mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-1">Anish Mulay</h2>
                <p className="text-gray-600 mb-4">Creator & Maintainer</p>
                <p className="text-lg mb-4">
                  I built Sandstore because I couldn&apos;t find a hands-on way to learn distributed systems. Everything was abstract or theoretical. Sandstore provides a real, working distributed file system with Raft consensus, file chunking, and metadata replication. All implemented with clean, readable Go code that you can actually understand and modify.
                </p>
                <p className="text-sm text-gray-500 text-center">
                  Actively developed. 386 commits. Last updated March 2026.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]  mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Vision</h2>
              <p className="mb-4">
                Sandstore is a modular framework for building and experimenting with distributed storage architectures. Define your components, swap implementations freely, and explore how fundamental design decisions change the behavior of your system. Whether you are building file or object storage, whether metadata is colocated or separated, the framework stays the same. Spin up a real cluster in minutes with Docker and Kubernetes.
              </p>
              <p>
                The next step is a second reference topology: a GFS-style disaggregated architecture with dedicated metadata servers and separate data nodes. After that, a FUSE client, additional placement strategies, and tooling that makes it easier for researchers to define and test new topologies without writing infrastructure from scratch.
              </p>
            </div>

            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]  mb-8">
              <h2 className="text-2xl font-bold mb-4">The Philosophy</h2>
              <div className="flex flex-col gap-4">
                <div><strong>Read the code, not just the paper:</strong> Most distributed systems knowledge lives in papers that describe finished systems. Sandstore lets you run the ideas, not just read them.</div>
                <div><strong>Topology is a design decision, not a constraint:</strong> Every architectural choice has tradeoffs. Sandstore makes those tradeoffs visible by letting you swap the components that embody them.</div>
                <div><strong>Real infrastructure, real behavior:</strong> A toy implementation teaches toy lessons. Sandstore runs on Docker and Kubernetes, uses durable storage, and handles node failures. The lessons are real.</div>
              </div>
            </div>

            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] ">
              <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
              <p className="mb-6">
                Sandstore is open source and actively developed. Whether you are exploring distributed systems for the first time or want to contribute a new topology implementation, there is a place for you here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/AnishMulay/sandstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  Contribute on GitHub
                </a>
                <Link
                  href="/devlog"
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  Follow the Devlog
                </Link>
                <Link
                  href="/architectures"
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white  font-bold hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  Explore Architectures
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}