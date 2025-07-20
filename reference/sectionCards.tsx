// components/SectionCard.tsx
interface SectionCardProps {
    number: string;
    title: string;
    description: string;
  }
  
  export default function SectionCard({ number, title, description }: SectionCardProps) {
    return (
      <div className="bg-[#fff5ed] border-[3px] border-black p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] text-left">
        <h3 className="text-3xl font-black text-black">{number}</h3>
        <h4 className="text-xl font-bold text-black mt-2">{title}</h4>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    );
  }
  