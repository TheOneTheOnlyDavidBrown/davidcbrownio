import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Menu, Terminal } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-accent2 px-4 py-2 flex items-center justify-between">
      <div>
        <Link href="/" className="font-bold text-xl text-accent2">David C Brown</Link>
        <span className="block text-sm text-accent1 font-medium">
          Fractional CTO, Senior Software Engineer & Tech Lead
        </span>
      </div>
      {/* Desktop menu */}
      <div className="space-x-4 flex items-center">
        <Link href="/" className="hover:text-accent1 text-accent2">Home</Link>
        <Link href="/about" className="hover:text-accent1 text-accent2">About</Link>
        {/* <Link href="/projects" className="hover:text-accent1 text-accent2">Projects</Link>
        <Link href="/musings" className="hover:text-accent1 text-accent2">Musings</Link> */}
        <Link href="/contact" className="hover:text-highlight text-accent2 flex items-center gap-1">
          <Mail size={18} />
        </Link>
        <a href="https://linkedin.com/in/davidbrownucf" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 text-accent2 flex items-center gap-1">
          <Linkedin size={18} />
        </a>
        <a href="https://twitter.com/theonetheonlydb" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 text-accent2 flex items-center gap-1">
          <Twitter size={18} />
        </a>
        <a href="https://github.com/theonetheonlydavidbrown" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 text-accent2 flex items-center gap-1">
          <Github size={18} />
        </a>
        <a
          href="https://tolvasoft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent1 text-accent2 font-semibold flex items-center gap-1"
        >
          <Terminal size={18} />
        </a>
      </div>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-accent2"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>
      {/* Mobile menu dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-primary border-b border-accent2 flex flex-col items-start px-4 py-2 md:hidden">
          <Link href="/" className="hover:text-accent1 text-accent2 py-2 w-full" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-accent1 text-accent2 py-2 w-full" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-accent1 text-accent2 py-2 w-full" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/musings" className="hover:text-accent1 text-accent2 py-2 w-full" onClick={() => setOpen(false)}>Musings</Link>
          <Link href="/contact" className="hover:text-highlight text-accent2 flex items-center gap-1 py-2 w-full" onClick={() => setOpen(false)}>
            <Mail size={18} />
            Contact
          </Link>
          <a href="https://linkedin.com/in/davidbrownucf" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 text-accent2 flex items-center gap-1 py-2 w-full" onClick={() => setOpen(false)}>
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href="https://twitter.com/theonetheonlydb" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 text-accent2 flex items-center gap-1 py-2 w-full" onClick={() => setOpen(false)}>
            <Twitter size={18} />
            X
          </a>
          <a href="https://github.com/theonetheonlydavidbrown" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 text-accent2 flex items-center gap-1 py-2 w-full" onClick={() => setOpen(false)}>
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://tolvasoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent1 text-accent2 font-semibold py-2 w-full"
            onClick={() => setOpen(false)}
          >
            Tolva
          </a>
        </div>
      )}
    </nav>
  )
}
