import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de cookies',
}

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Politica de cookies</h1>
      <div className="text-slate-600 leading-relaxed space-y-4">
        <p>Este sitio web puede utilizar cookies tecnicas necesarias para su correcto funcionamiento.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Que son las cookies</h2>
        <p>Las cookies son pequeÃ±os archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Cookies que utilizamos</h2>
        <p>Solo utilizamos cookies tecnicas esenciales. No utilizamos cookies de publicidad ni de seguimiento de terceros.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Contacto</h2>
        <p>Dudas sobre cookies: <a href="mailto:modoanden@gmail.com" className="text-brand-accent hover:underline">modoanden@gmail.com</a>.</p>
      </div>
    </div>
  )
}
