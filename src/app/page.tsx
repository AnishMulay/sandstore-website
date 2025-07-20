export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2e4d8] p-6 flex flex-col items-center justify-center text-center font-sans">
      <div className="bg-[#fff5ed] border-[3px] border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full max-w-4xl">
        <div className="flex justify-between mb-6">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
            <div className="w-4 h-4 bg-black" />
          </div>
          <div className="flex gap-2">
            <div className="w-4 h-4 border border-black" />
            <div className="w-4 h-4 border border-black" />
            <div className="w-4 h-4 border border-black" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
          sandstore
        </h1>
        
        <p className="text-lg mb-6">A project by Anish Mulay</p>
        
        <div className="border-[3px] border-black px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white inline-block">
          Welcome to Sandstore
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-left">
            <h3 className="text-xl font-bold">About</h3>
            <p className="mt-2 text-sm">Sandstore is a revolutionary project that aims to transform how we think about data storage.</p>
          </div>
          
          <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-left">
            <h3 className="text-xl font-bold">Features</h3>
            <p className="mt-2 text-sm">Discover the innovative features that make Sandstore unique in the market.</p>
          </div>
        </div>
      </div>
      
      <footer className="mt-8 text-sm">
        &copy; {new Date().getFullYear()} Sandstore Project
      </footer>
    </main>
  );
}
