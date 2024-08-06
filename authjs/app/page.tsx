import Navbar from "@/app/components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="absolute inset-0 h-full w-full bg-slate-700 text-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="max-w-7xl mx-auto mt-8">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
