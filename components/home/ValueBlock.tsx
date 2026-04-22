import { Check } from 'lucide-react'

const values = [
  'Escapadas pensadas para decidir, no para navegar eternamente',
  'Itinerarios concretos, no ideas vagas de qué hacer',
  'Información de transporte real: cuánto tarda y cómo se llega',
  'Filtros que funcionan de verdad, no de decoración',
  'Sin anuncios molestos ni pop-ups de suscripción',
  'Actualizado regularmente con escapadas nuevas y revisadas',
]

export default function ValueBlock() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Por qué VELQIA es diferente
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Hay muchos sitios con listas de destinos. VELQIA existe para ayudarte a decidir rápido
              y con información útil, no para inspirarte de forma vaga y dejarte solo con Google.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Cada escapada ha sido revisada manualmente: transporte verificado, alojamiento
              contextualizado, itinerario práctico. Si no hay coche, hay alternativa real de
              transporte público.
            </p>
          </div>

          <ul className="space-y-3">
            {values.map((value, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                  <Check size={11} className="text-teal-700" strokeWidth={3} />
                </div>
                <span className="text-sm text-slate-700 leading-relaxed">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
