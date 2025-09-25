"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-900 text-green-400 p-4 flex gap-6 shadow-md">
      <Link href="/" className="hover:text-white">Home</Link>
      <Link href="/about" className="hover:text-white">About</Link>
      <Link href="/contact" className="hover:text-white">Contact</Link>
    </nav>
  );
}
