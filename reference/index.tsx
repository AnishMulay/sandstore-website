// pages/index.tsx
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
            Soft Colors UI Design for Agencies
          </h1>
          <p className="border-[3px] border-black px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white inline-block">
            Here is where your presentation begins
          </p>
        </div>
      </main>
    );
  }
  