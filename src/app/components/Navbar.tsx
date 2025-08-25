import Link from "next/link";

export default function Navbar() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-neutral-800 bg-black">
      <div className="flex h-full flex-col">
        {/* Logo (top) */}
        <div className="p-4">
          <Link
            href="/"
            className="block text-2xl font-bold text-white hover:text-neutral-300 transition-colors"
          >
            Evalyze
          </Link>
        </div>

        {/* Nav (centered vertically) */}
        <nav className="flex-1 px-4">
          <div className="flex h-full flex-col justify-center gap-1">
            <Link
              href="/categories"
              className="block rounded-lg px-3 py-2 text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/blog"
              className="block rounded-lg px-3 py-2 text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/aboutus"
              className="block rounded-lg px-3 py-2 text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/login"
              className="block rounded-lg px-3 py-2 text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
