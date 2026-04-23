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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="font-bold text-2xl mb-2 tracking-tight">ModoAndén</p>
          <p className="text-sm text-slate-300 max-w-sm">Escapadas y viajes sin coche por España, con guías directas y útiles.</p>
        </div>
        <div className="md:col-span-4">
          <p className="font-semibold text-sm mb-3 uppercase tracking-wide text-slate-400">Páginas</p>
          <ul className="space-y-2">
            {footerLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-semibold text-sm mb-3 uppercase tracking-wide text-slate-400">Contacto</p>
          <a href="mailto:modoanden@gmail.com" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
            <Mail size={14} />
            modoanden@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} ModoAndén. Todos los derechos reservados.
      </div>
    </footer>
  )
}
