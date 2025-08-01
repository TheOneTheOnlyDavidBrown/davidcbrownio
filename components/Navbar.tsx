import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link href="/">David C Brown</Link>
      </div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <Link href="/musings" className="hover:text-blue-600">Musings</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  )
}
