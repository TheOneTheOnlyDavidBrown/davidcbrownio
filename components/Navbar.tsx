import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-accent2 px-4 py-2 flex justify-between items-center">
      <div>
        <Link href="/" className="font-bold text-xl text-accent2">David C Brown</Link>
        <span className="block text-sm text-accent1 font-medium">Fractional CTO & Senior Software Engineer</span>
      </div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-accent1 text-accent2">Home</Link>
        <Link href="/about" className="hover:text-accent1 text-accent2">About</Link>
        <Link href="/projects" className="hover:text-accent1 text-accent2">Projects</Link>
        <Link href="/musings" className="hover:text-accent1 text-accent2">Musings</Link>
        <Link href="/contact" className="hover:text-highlight text-accent2">Contact</Link>
      </div>
    </nav>
  )
}
