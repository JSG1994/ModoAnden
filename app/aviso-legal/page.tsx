import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso legal',
}

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Aviso legal</h1>
      <div className="text-slate-600 leading-relaxed space-y-4">
        <p>Este sitio web es propiedad de ModoAnden. El acceso implica la aceptacion de las condiciones aqui descritas.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Propiedad intelectual</h2>
        <p>Todos los contenidos estan protegidos por derechos de propiedad intelectual. Queda prohibida su reproduccion sin autorizacion.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Limitacion de responsabilidad</h2>
        <p>La informacion tiene caracter orientativo. ModoAnden no se hace responsable de decisiones tomadas en base a los contenidos. Los precios y horarios pueden variar.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Contacto</h2>
        <p>Para consultas legales escribe a <a href="mailto:modoanden@gmail.com" className="text-brand-accent hover:underline">modoanden@gmail.com</a>.</p>
      </div>
    </div>
  )
}
