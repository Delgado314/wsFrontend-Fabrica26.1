export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-10 sm:flex-row sm:items-start sm:px-6 lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <p className="text-sm leading-relaxed text-zinc-500">
            Dados por{" "}
            <a
              href="https://rickandmortyapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-green-400 hover:decoration-green-500/50"
            >
              The Rick and Morty API
            </a>
            . Personagens e marcas pertencem aos respectivos proprietários.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="text-xs font-mono text-zinc-600">
            Feito com Next.js · {year}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-700">
            Oooooh wee
          </p>
        </div>
      </div>
    </footer>
  );
}
