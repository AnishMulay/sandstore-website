// pages/toc.tsx
import SectionCard from '@/components/SectionCard';

export default function TOC() {
  return (
    <main className="min-h-screen bg-[#f2e4d8] p-6 flex flex-col items-center font-sans">
      <h2 className="text-4xl font-black text-black mb-8">Table of contents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <SectionCard number="01" title="About us" description="You can describe the topic of the section here" />
        <SectionCard number="02" title="Our services" description="You can describe the topic of the section here" />
        <SectionCard number="03" title="Our clients" description="You can describe the topic of the section here" />
        <SectionCard number="04" title="Our team" description="You can describe the topic of the section here" />
      </div>
    </main>
  );
}
