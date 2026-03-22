import Image from "next/image";
import Catalog from "./components/Catalog";

export default function Home() {
  return (
    <main className="p-8 bg-zinc-950 min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-white tracking-tighter italic">
          MR. POOPY<span className="text-blue-500 underline">BUTTHOLE</span> ARCHIVE
        </h1>
        <p className="text-zinc-500 mt-2 font-medium">Explorando o multiverso, um personagem por vez oooooooohhh weeeeeeeee.</p>
      </header>
    
      <Catalog />
    </main>
  );
}
