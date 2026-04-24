import Link from 'next/link'
import { Mail } from 'lucide-react'

const footerLinks = [
  { href: '/escapadas', label: 'Escapadas' },
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <p className="font-bold text-lg tracking-tight">ModoAndén</p>
          <a href="mailto:modoanden@gmail.com" className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors">
            <Mail size={13} />
            modoanden@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
          {footerLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-700 py-3 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} ModoAndén. Todos los derechos reservados.
      </div>
    </footer>
  )
}
