import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-screen bg-blue-500">
      <div className="container flex gap-5 px-64 py-2 text-2xl text-slate-100">
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
