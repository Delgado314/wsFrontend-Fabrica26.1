import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md supports-backdrop-filter:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 md:h-17">
        <Link
          href="/"
          className="group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <span className="text-lg font-black italic tracking-tighter text-white sm:text-xl md:text-2xl">
            MR. POOPY
            <span className="text-green-500 underline decoration-green-500/80 underline-offset-4 transition-colors group-hover:text-green-400">
              BUTTHOLE
            </span>{" "}
            <span className="text-zinc-300 not-italic">ARCHIVE</span>
          </span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-green-400"
          >
            Catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}
