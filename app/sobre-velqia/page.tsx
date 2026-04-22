import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre VELQIA',
  description:
    'Qué es VELQIA, por qué existe y cómo funciona. Una herramienta práctica para encontrar escapadas cortas fáciles de organizar en España.',
}

export default function SobreVelqiaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
        Sobre VELQIA
      </h1>

      <div className="prose-like space-y-5 text-slate-600 leading-relaxed">
        <p className="text-lg text-slate-700">
          VELQIA existe porque organizar una escapada corta debería ser fácil, y demasiadas veces no lo es.
        </p>

        <p>
          Empiezas buscando ideas para un fin de semana y acabas en diez pestañas abiertas, foros
          desactualizados y guías que no responden a lo básico: cuánto tarda el tren, si hace falta
          coche o cuánto presupuesto necesitas realmente para dos noches.
        </p>

        <p>
          VELQIA es una selección curada de escapadas de 1 a 3 noches desde las principales ciudades
          de España. Cada escapada tiene itinerario concreto, recomendaciones de alojamiento con
          contexto real y actividades organizadas por prioridad.
        </p>

        <p>
          Priorizamos destinos accesibles en transporte público, especialmente en tren. Si una
          escapada requiere coche, lo decimos claramente. Si hay una alternativa sin coche,
          también la indicamos.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Cómo funciona</h2>

        <p>
          Filtra por ciudad de salida, número de noches, presupuesto y si quieres ir sin coche.
          Las escapadas resultantes tienen toda la información necesaria para decidir: qué ver,
          dónde dormir, cuánto cuesta aproximadamente y cómo llegar.
        </p>

        <p>
          Los botones de reserva enlazan directamente con plataformas externas. Algunos de esos
          enlaces pueden generar una pequeña comisión de afiliación cuando haces una reserva, sin
          coste adicional para ti. Eso nos ayuda a mantener el proyecto activo.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Lo que no somos</h2>

        <p>
          No somos una agencia de viajes. No organizamos nada por ti. No tenemos acceso a tus
          reservas ni a tus datos de pago. Somos un directorio editorial de escapadas con
          información práctica y enlaces útiles.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Contacto</h2>

        <p>
          Si quieres sugerir una escapada, reportar información desactualizada o simplemente
          escribirnos, puedes hacerlo desde la{' '}
          <a href="/contacto" className="text-teal-600 hover:underline font-medium">
            página de contacto
          </a>
          .
        </p>
      </div>
    </div>
  )
}
