import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-black text-slate-200 leading-none mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Página no encontrada</h1>
        <p className="text-slate-600 mb-8">
          La página que buscas no existe o ha sido movida. Puede que la escapada que buscabas
          haya cambiado de dirección.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
          >
            <ArrowLeft size={15} />
            Ir al inicio
          </Link>
          <Link
            href="/escapadas"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            Ver escapadas
          </Link>
        </div>
      </div>
    </div>
  )
}
