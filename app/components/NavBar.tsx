import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 text-white shadow-lg">

            <div className="mx-auto flex max-w-7x1 items-center justify-end gap-2 px-6 py-4">

                <Link
                    href="/"
                    className="rounded-lg  px-4 py-2 text-sm fornt-medium text-slate-300  transition hover:bg-slate-800 hover:text-white"
                >
                    Home
                </Link>

                <Link
                    href="/gallery"
                    className="rounded-lg  px-4 py-2 text-sm fornt-medium text-slate-300  transition hover:bg-slate-800 hover:text-white"
                >
                    Gallery
                </Link>

                <Link
                    href="/about"
                    className="rounded-lg  px-4 py-2 text-sm fornt-medium text-slate-300  transition hover:bg-slate-800 hover:text-white"
                >
                    About
                </Link>

            </div>

        </nav>

    )
}