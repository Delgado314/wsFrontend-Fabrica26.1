import { Suspense } from "react";
import Catalog from "./components/Catalog";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section
        className="mb-10 border-b border-zinc-800/80 pb-10"
        aria-labelledby="home-intro"
      >
        <p
          id="home-intro"
          className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-500"
        >
          Explorando o multiverso, um personagem por vez — oooooooohhh
          weeeeeeeee.
        </p>
      </section>

      <Suspense
        fallback={
          <div className="flex min-h-[40vh] items-center justify-center text-zinc-500">
            Carregando catálogo…
          </div>
        }
      >
        <Catalog />
      </Suspense>
    </div>
  );
}
