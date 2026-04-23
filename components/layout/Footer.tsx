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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-bold text-lg mb-2">ModoAnden</p>
          <p className="text-sm text-slate-300">Escapadas y viajes sin coche desde Espana.</p>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3 uppercase tracking-wide text-slate-400">Paginas</p>
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
        <div>
          <p className="font-semibold text-sm mb-3 uppercase tracking-wide text-slate-400">Contacto</p>
          <a href="mailto:modoanden@gmail.com" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
            <Mail size={14} />
            modoanden@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} ModoAnden. Todos los derechos reservados.
      </div>
    </footer>
  )
}
