import { CheckCircle } from 'lucide-react'

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
