import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-brand mb-4">404</h1>
      <p className="text-lg text-slate-600 mb-6">La pagina que buscas no existe.</p>
      <Link href="/" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors">
        Volver al inicio
      </Link>
    </div>
  )
}
