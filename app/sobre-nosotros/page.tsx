import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Que es ModoAnden y como seleccionamos los destinos de escapadas sin coche.',
}

export default function SobreNosotrosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Sobre ModoAnden</h1>
      <div className="space-y-5 text-slate-600 leading-relaxed">
        <p>ModoAnden nace de una idea sencilla: hay muchas escapadas buenas en EspaÃ±a que puedes hacer sin coche y sin complicarte la vida.</p>
        <p>Aqui no vas a encontrar listas interminables de destinos ni guias kilometricas. Seleccionamos pocos sitios, pero los contamos bien.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Como elegimos los destinos</h2>
        <p>Solo incluimos destinos a los que puedes llegar comodamente en transporte publico y que funcionen bien para escapadas cortas de 1 a 3 noches.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Nuestro enfoque</h2>
        <p>Cada escapada tiene opinion editorial. Te contamos para quien encaja, cuantas noches recomendamos, que errores evitar y como sacarle el mejor partido.</p>
      </div>
    </div>
  )
}
