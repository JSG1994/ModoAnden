import Link from 'next/link'
import { SearchX } from 'lucide-react'

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
      <SearchX size={48} className="text-slate-300 mb-4" />
      <h3 className="text-xl font-semibold text-slate-700 mb-2">Sin resultados</h3>
      <p className="text-slate-500 mb-6 max-w-sm">
        No hemos encontrado escapadas que coincidan con tus filtros. Prueba a ampliar los criterios de búsqueda.
      </p>
      <Link
        href="/escapadas"
        className="px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
      >
        Ver todas las escapadas
      </Link>
    </div>
  )
}
