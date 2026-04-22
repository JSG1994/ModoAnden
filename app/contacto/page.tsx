import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbenos si tienes alguna pregunta, sugerencia o quieres proponer una escapada.',
}

export default function ContactoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Contacto
        </h1>
        <p className="text-slate-600">
          Escríbenos si tienes alguna pregunta, quieres proponer una escapada o has encontrado
          información desactualizada. Intentamos responder en un plazo de 48 horas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="sm:col-span-2">
          <ContactForm />
        </div>
        <div>
          <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Mail size={16} className="text-teal-600" />
              <span className="text-sm font-semibold text-slate-900">Email</span>
            </div>
            <p className="text-sm text-slate-600">
              También puedes escribirnos directamente. Respondemos en menos de 48 horas en días laborables.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
