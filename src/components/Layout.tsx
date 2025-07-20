import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.variable} antialiased min-h-screen bg-[#f2e4d8] pt-24 pb-12 px-4 md:px-6 flex flex-col items-center justify-center font-sans`}>
      <ScrollProgress />
      <Navbar />
      <main className="w-full max-w-4xl">
        {children}
      </main>
      <Footer />
    </div>
  );
}