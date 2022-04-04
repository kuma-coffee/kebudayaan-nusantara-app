import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-center w-screen bg-slate-800">
      <div className="container flex justify-end gap-8 px-64 py-2 text-2xl text-slate-100">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </div>
    </nav>
  );
}
