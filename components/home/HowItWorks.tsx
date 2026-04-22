import { SlidersHorizontal, LayoutGrid, ExternalLink } from 'lucide-react'

const steps = [
  {
    icon: SlidersHorizontal,
    number: '01',
    title: 'Filtra lo que te apetece',
    description:
      'Ciudad de salida, duración, presupuesto y si necesitas coche o no. Sin registros, sin formularios largos.',
  },
  {
    icon: LayoutGrid,
    number: '02',
    title: 'Compara escapadas claras',
    description:
      'Cada escapada tiene itinerario, alojamiento y actividades concretas. Nada de información vaga o fotos de stock sin contexto.',
  },
  {
    icon: ExternalLink,
    number: '03',
    title: 'Reserva rápido desde enlaces útiles',
    description:
      'Enlazamos directamente con alojamientos, actividades y transporte. Sin intermediarios innecesarios.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Cómo funciona</h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Tres pasos para pasar de &ldquo;quiero escaparme&rdquo; a tener la escapada reservada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map(step => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="text-6xl font-black text-slate-800 leading-none mb-4 select-none">
                  {step.number}
                </div>
                <div className="mb-3">
                  <Icon size={24} className="text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
