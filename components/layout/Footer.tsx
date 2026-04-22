import Link from 'next/link'

const legalLinks = [
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]

const mainLinks = [
  { href: '/escapadas', label: 'Escapadas' },
  { href: '/sobre-velqia', label: 'Sobre VELQIA' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="text-white font-bold tracking-widest text-lg">VELQIA</span>
            <p className="mt-3 text-sm leading-relaxed">
              Selección curada de escapadas cortas fáciles de organizar. Sin coche ni complicaciones.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Navegación</p>
            <ul className="space-y-2">
              {mainLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Legal</p>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} VELQIA. Todos los derechos reservados.</p>
          <p className="text-slate-500 text-center sm:text-right">
            Algunos enlaces de esta web pueden ser de afiliación. No supone ningún coste adicional para ti.
          </p>
        </div>
      </div>
    </footer>
  )
}
