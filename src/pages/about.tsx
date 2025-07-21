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
        <meta name="description" content="Learn about the creator of Sandstore and the project's vision" />
      </Head>
      <Layout>
        <section className="w-full max-w-4xl mb-16">
          <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About</h1>
            
            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-8">
              <div className="flex flex-col items-center mb-6">
                <div className="w-40 h-40 rounded-full border-2 border-black overflow-hidden mb-4">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Anish Mulay" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-1">Anish Mulay</h2>
                  <p className="text-gray-600 mb-4">Creator & Maintainer</p>
                </div>
                <p className="text-lg text-center">
                  I built Sandstore because I couldn't find a hands-on way to learn distributed systems. Everything was abstract or theoretical. I wanted to create something real, where people can experiment, fail, and understand — all in a safe, modular environment.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-[2px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white rounded-md font-bold hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Vision</h2>
              <p className="mb-4">
                Sandstore aims to be the go-to learning resource for distributed systems. By providing a real, working implementation with clean interfaces and modular components, it bridges the gap between theory and practice.
              </p>
              <p>
                The project is designed to be accessible to students, educators, and engineers who want to understand how distributed file systems work without getting lost in the complexity of production systems.
              </p>
            </div>
            
            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
              <p className="mb-6">
                Sandstore is an open-source project and welcomes contributions from the community. Whether you're a student learning about distributed systems or an experienced engineer with ideas to share, there's a place for you in the Sandstore community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/AnishMulay/sandstore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  🚀 Contribute on GitHub
                </a>
                <Link 
                  href="/devlog" 
                  className="border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white rounded-lg font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
                >
                  📝 Follow the Devlog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}