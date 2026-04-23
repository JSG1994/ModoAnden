import { MapPin, Train, Clock } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    icon: MapPin,
    title: 'Elige destino',
    description: 'Filtra por duración o ciudad de salida. Solo destinos con transporte público.',
  },
  {
    icon: Train,
    title: 'Mira cómo llegar',
    description: 'Cada escapada incluye la ruta en tren y los tiempos reales de viaje.',
  },
  {
    icon: Clock,
    title: 'Decide tu formato',
    description: 'Te explicamos qué ver según vayas 1, 2 o 3 noches. Sin relleno.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Cómo funciona" subtitle="Sin publicidad ni listas de patrocinadores" />
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
