import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escribenos si tienes alguna pregunta, sugerencia o propuesta.',
}

export default function ContactoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Contacto</h1>
      <p className="text-slate-500 mb-8">Si tienes alguna pregunta o quieres proponernos algo, escribenos.</p>
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-600">
        <Mail size={16} className="text-brand-accent" />
        <a href="mailto:modoanden@gmail.com" className="hover:text-brand-accent transition-colors">modoanden@gmail.com</a>
      </div>
      <ContactForm />
    </div>
  )
}
