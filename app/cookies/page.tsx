import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de VELQIA.',
}

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Política de Cookies</h1>

      <div className="space-y-7 text-slate-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador
            del usuario. Se utilizan para recordar preferencias, analizar el uso del sitio y, en
            algunos casos, mostrar publicidad personalizada.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Cookies que utilizamos</h2>
          <p>
            VELQIA es un sitio web estático que actualmente no utiliza cookies propias de seguimiento
            ni análisis. Las únicas cookies que pueden estar presentes son las técnicas imprescindibles
            para el funcionamiento básico del sitio web y las cookies de terceros generadas al acceder
            a plataformas externas mediante los enlaces de reserva.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Cookies de terceros</h2>
          <p>
            Al hacer clic en los enlaces de reserva o afiliación presentes en este sitio web, el
            usuario accede a plataformas externas que pueden instalar sus propias cookies de
            seguimiento y análisis. VELQIA no controla estas cookies. Consulta la política de
            cookies de cada plataforma para más información.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar tu navegador para rechazar, eliminar o recibir notificaciones sobre
            las cookies. Ten en cuenta que desactivar ciertas cookies puede afectar al funcionamiento
            de algunos sitios web externos a los que accedas desde VELQIA.
          </p>
          <p className="mt-2">
            La mayoría de navegadores modernos incluyen instrucciones para gestionar cookies en sus
            secciones de configuración o ayuda.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">Actualizaciones</h2>
          <p>
            Esta política puede actualizarse si incorporamos nuevas herramientas o servicios que
            impliquen el uso de cookies. Te recomendamos revisarla periódicamente.
          </p>
        </section>
      </div>
    </div>
  )
}
