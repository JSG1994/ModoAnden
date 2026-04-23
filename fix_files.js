const fs = require('fs')
const path = require('path')

const BASE = String.raw`c:\Escritorio\Pagina Web\velqia`

const files = {}

files['app/escapadas/EscapasClient.tsx'] = `'use client'

import { useState } from 'react'
import { escapes } from '@/data/escapes'
import { filterEscapes, sortEscapes } from '@/lib/filters'
import type { SortOption } from '@/lib/filters'
import type { FilterState } from '@/types'
import FilterSidebar from '@/components/escapes/FilterSidebar'
import SortBar from '@/components/escapes/SortBar'
import EscapeCard from '@/components/escapes/EscapeCard'
import EmptyState from '@/components/ui/EmptyState'

const defaultFilters: FilterState = {
  departureCity: '',
  durationNights: null,
  category: null,
}

export default function EscapasClient() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [sort, setSort] = useState<SortOption>('relevancia')

  const filtered = filterEscapes(escapes, filters)
  const sorted = sortEscapes(filtered, sort)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-4 gap-8">
        <aside className="col-span-1">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </aside>
        <div className="col-span-3">
          <SortBar count={sorted.length} sort={sort} onSortChange={setSort} />
          {sorted.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 mt-6">
              {sorted.map(escape => (
                <EscapeCard key={escape.id} escape={escape} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
`

files['components/layout/Header.tsx'] = `'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/escapadas', label: 'Escapadas' },
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="ModoAnden" width={160} height={36} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
`

files['components/layout/Footer.tsx'] = `import Link from 'next/link'
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
`

files['components/home/HeroSection.tsx'] = `import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-brand text-white py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <MapPin size={14} className="text-brand-accent" />
          Escapadas sin coche desde Espana
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Escapadas y viajes sin coche
        </h1>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Destinos pensados para ir en tren. Guias editoriales con opinion, no listas de enlaces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/escapadas"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ver escapadas
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/sobre-nosotros"
            className="inline-flex items-center gap-2 border border-slate-400 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  )
}
`

files['components/home/QuickFilters.tsx'] = `'use client'

import Link from 'next/link'
import { Clock, Search } from 'lucide-react'

const durations = [
  { nights: 1, label: '1 noche' },
  { nights: 2, label: '2 noches' },
  { nights: 3, label: '3 noches' },
]

export default function QuickFilters() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <Clock size={15} className="text-brand-accent" />
          Duracion:
        </div>
        <div className="flex gap-2">
          {durations.map(d => (
            <Link
              key={d.nights}
              href={\`/escapadas?noches=\${d.nights}\`}
              className="text-sm px-4 py-1.5 rounded-full border border-slate-300 hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              {d.label}
            </Link>
          ))}
        </div>
        <Link
          href="/escapadas"
          className="ml-auto flex items-center gap-1.5 text-sm font-medium text-brand-accent hover:underline"
        >
          <Search size={14} />
          Ver todas
        </Link>
      </div>
    </section>
  )
}
`

files['components/home/FeaturedEscapes.tsx'] = `import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { escapes } from '@/data/escapes'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'

export default function FeaturedEscapes() {
  const featured = escapes.filter(e => e.featured)

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Escapadas destacadas" subtitle="Seleccion editorial de los mejores destinos" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featured.map(escape => (
            <Link key={escape.id} href={\`/escapadas/\${escape.slug}\`} className="group rounded-xl overflow-hidden border border-slate-200 hover:border-brand-accent transition-colors">
              <div className="relative h-48">
                <Image src={escape.heroImage} alt={escape.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge label={escape.category} />
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin size={11} />
                    {escape.departureCity}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-brand-accent transition-colors">{escape.title}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{escape.subtitle}</p>
                <div className="flex items-center gap-1 text-brand-accent text-sm font-medium mt-3">
                  Ver escapada <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
`

files['components/home/HowItWorks.tsx'] = `import { MapPin, Train, Clock } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    icon: MapPin,
    title: 'Elige destino',
    description: 'Filtra por duracion o ciudad de salida. Solo destinos con transporte publico.',
  },
  {
    icon: Train,
    title: 'Mira como llegar',
    description: 'Cada escapada incluye la ruta en tren y los tiempos reales de viaje.',
  },
  {
    icon: Clock,
    title: 'Decide tu formato',
    description: 'Te explicamos que ver segun vayas 1, 2 o 3 noches. Sin relleno.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Como funciona" subtitle="Sin publicidad ni listas de patrocinadores" />
        <div className="grid sm:grid-cols-3 gap-8 mt-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                <step.icon size={24} className="text-brand-accent" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`

files['components/home/ValueBlock.tsx'] = `import { CheckCircle } from 'lucide-react'

const values = [
  'Solo destinos alcanzables en tren o bus desde las principales ciudades',
  'Opinion editorial real: te decimos para quien encaja y para quien no',
  'Formato por noches: 1, 2 o 3 noches con planes diferentes',
  'Sin publicidad ni enlaces de afiliados que distorsionen el consejo',
  'Actualizamos los precios y horarios antes de publicar',
]

export default function ValueBlock() {
  return (
    <section className="bg-brand text-white py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-8">Por que ModoAnden</h2>
        <ul className="space-y-4 text-left">
          {values.map((v, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle size={20} className="text-brand-accent mt-0.5 shrink-0" />
              <span className="text-slate-200">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
`

files['components/home/SeoBlock.tsx'] = `export default function SeoBlock() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Escapadas en tren por Espana</h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          ModoAnden recopila las mejores escapadas de fin de semana en tren desde Madrid, Barcelona, Valencia y otras ciudades.
          Destinos como Toledo, Cuenca, Segovia o Avila son perfectos para una escapada de 1 a 3 noches sin necesidad de coche.
          Cada guia incluye que ver, donde dormir y como organizarte segun los dias que tengas.
        </p>
      </div>
    </section>
  )
}
`

files['components/escapes/EscapeCard.tsx'] = `import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import type { Escape } from '@/types'
import Badge from '@/components/ui/Badge'

interface Props {
  escape: Escape
}

export default function EscapeCard({ escape }: Props) {
  const minNights = Math.min(...escape.durationVariants.map(d => d.nights))
  const maxNights = Math.max(...escape.durationVariants.map(d => d.nights))
  const nightsLabel = minNights === maxNights ? \`\${minNights} noche\${minNights > 1 ? 's' : ''}\` : \`\${minNights}-\${maxNights} noches\`

  return (
    <Link href={\`/escapadas/\${escape.slug}\`} className="group flex flex-col sm:flex-row rounded-xl border border-slate-200 hover:border-brand-accent overflow-hidden transition-colors">
      <div className="relative w-full sm:w-56 h-48 sm:h-auto shrink-0">
        <Image src={escape.heroImage} alt={escape.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-2">
            <Badge label={escape.category} />
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin size={11} />
              {escape.departureCity}
            </span>
          </div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-accent transition-colors">{escape.title}</h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">{escape.subtitle}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-slate-400">{nightsLabel}</span>
          <span className="flex items-center gap-1 text-brand-accent text-sm font-medium">
            Ver escapada <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}
`

files['components/escapes/FilterSidebar.tsx'] = `'use client'

import type { FilterState, Category } from '@/types'
import { departureCities } from '@/data/escapes'

const categories: Category[] = ['ciudad', 'naturaleza', 'playa', 'cultura', 'gastronomia']
const durations = [1, 2, 3]

interface Props {
  filters: FilterState
  onChange: (f: FilterState) => void
}

export default function FilterSidebar({ filters, onChange }: Props) {
  function setCity(departureCity: string) {
    onChange({ ...filters, departureCity })
  }

  function setNights(durationNights: number | null) {
    onChange({ ...filters, durationNights: filters.durationNights === durationNights ? null : durationNights })
  }

  function setCategory(category: Category | null) {
    onChange({ ...filters, category: filters.category === category ? null : category })
  }

  function clear() {
    onChange({ departureCity: '', durationNights: null, category: null })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Ciudad de salida</label>
        <select
          value={filters.departureCity}
          onChange={e => setCity(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          <option value="">Todas</option>
          {departureCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Duracion</p>
        <div className="flex flex-wrap gap-2">
          {durations.map(n => (
            <button
              key={n}
              onClick={() => setNights(n)}
              className={\`px-3 py-1.5 rounded-full text-sm border transition-colors \${filters.durationNights === n ? 'bg-brand-accent text-white border-brand-accent' : 'border-slate-300 hover:border-brand-accent'}\`}
            >
              {n} noche{n > 1 ? 's' : ''}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Categoria</p>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={\`px-3 py-1.5 rounded-full text-sm border capitalize transition-colors \${filters.category === cat ? 'bg-brand-accent text-white border-brand-accent' : 'border-slate-300 hover:border-brand-accent'}\`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <button onClick={clear} className="text-xs text-slate-400 hover:text-slate-700 underline">
        Limpiar filtros
      </button>
    </div>
  )
}
`

files['components/escapes/SortBar.tsx'] = `'use client'

import type { SortOption } from '@/lib/filters'

interface Props {
  count: number
  sort: SortOption
  onSortChange: (s: SortOption) => void
}

export default function SortBar({ count, sort, onSortChange }: Props) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-200">
      <p className="text-sm text-slate-500">{count} escapada{count !== 1 ? 's' : ''}</p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-xs text-slate-400">Ordenar por</label>
        <select
          id="sort"
          value={sort}
          onChange={e => onSortChange(e.target.value as SortOption)}
          className="text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          <option value="relevancia">Relevancia</option>
          <option value="destacados">Destacados</option>
        </select>
      </div>
    </div>
  )
}
`

files['components/detail/EscapeDetailHero.tsx'] = `import Image from 'next/image'
import { MapPin } from 'lucide-react'
import type { Escape } from '@/types'
import Badge from '@/components/ui/Badge'

interface Props {
  escape: Escape
}

export default function EscapeDetailHero({ escape }: Props) {
  return (
    <div className="relative h-72 sm:h-96 w-full">
      <Image src={escape.heroImage} alt={escape.title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Badge label={escape.category} />
          {escape.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{escape.title}</h1>
        <p className="text-slate-200 mt-1">{escape.subtitle}</p>
        <p className="flex items-center gap-1 text-sm text-slate-300 mt-2">
          <MapPin size={13} />
          Desde {escape.departureCity}
        </p>
      </div>
    </div>
  )
}
`

files['components/detail/QuickFacts.tsx'] = `import type { Escape } from '@/types'

interface Props {
  escape: Escape
}

export default function QuickFacts({ escape }: Props) {
  return (
    <div className="bg-slate-50 rounded-xl p-5 space-y-5">
      <h2 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Datos practicos</h2>
      <dl className="space-y-3">
        {escape.practical.items.map(item => (
          <div key={item.label}>
            <dt className="text-xs text-slate-400 font-medium">{item.label}</dt>
            <dd className="text-sm text-slate-700">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div>
        <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">En resumen</p>
        <ul className="space-y-1">
          {escape.quickSummary.keys.map(k => (
            <li key={k} className="text-sm text-slate-600 before:content-['•'] before:mr-2 before:text-brand-accent">{k}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
`

files['components/detail/CTASection.tsx'] = `import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-brand text-white py-14 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-3">Te encaja esta escapada?</h2>
        <p className="text-slate-300 mb-8">Explora mas destinos o escribenos si tienes alguna duda.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/escapadas"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ver mas escapadas <ArrowRight size={16} />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border border-slate-400 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  )
}
`

files['components/ContactForm.tsx'] = `'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-xl p-8 text-center">
        <p className="font-semibold text-brand-accent text-lg mb-2">Mensaje enviado</p>
        <p className="text-sm text-slate-600">Gracias, te respondemos pronto.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        <Send size={15} />
        Enviar mensaje
      </button>
    </form>
  )
}
`

for (const [relPath, content] of Object.entries(files)) {
  const fullPath = path.join(BASE, relPath.replace(/\//g, path.sep))
  fs.mkdirSync(path.dirname(fullPath), { recursive: true })
  fs.writeFileSync(fullPath, content, 'utf8')
  const lines = content.split('\n').length
  console.log(`OK ${relPath}: ${lines} lines`)
}

console.log('\nDone!')
