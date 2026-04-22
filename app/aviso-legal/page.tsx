import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de VELQIA. Información sobre el titular del sitio web y condiciones de uso.',
}

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Aviso Legal</h1>

      <div className="space-y-7 text-slate-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">1. Titular del sitio web</h2>
          <p>
            En cumplimiento con el deber de información dispuesto en el artículo 10 de la Ley 34/2002,
            de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico
            (LSSI-CE), se informa de que el responsable del sitio web <strong>velqia.com</strong> es
            su titular, cuya información de contacto puede encontrarse en la sección de Contacto de
            este sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">2. Objeto y ámbito de aplicación</h2>
          <p>
            VELQIA es un sitio web editorial que ofrece selecciones curadas de escapadas cortas en
            España. El contenido publicado tiene carácter meramente informativo y orientativo. VELQIA
            no actúa como agencia de viajes, intermediario de reservas ni prestador de servicios
            turísticos regulados.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">3. Propiedad intelectual</h2>
          <p>
            Los textos, imágenes, logotipos, estructura y diseño de este sitio web son propiedad de
            VELQIA o de sus licenciantes, y están protegidos por la legislación española e internacional
            sobre propiedad intelectual. Queda prohibida su reproducción, distribución o comunicación
            pública sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">4. Exención de responsabilidad</h2>
          <p>
            VELQIA no garantiza la exactitud, completitud o actualidad de la información publicada.
            Los precios, horarios de transporte, disponibilidad de alojamientos y condiciones de
            actividades pueden variar. El usuario es responsable de verificar la información antes
            de realizar cualquier reserva.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">5. Enlaces de afiliación</h2>
          <p>
            Algunos enlaces externos presentes en este sitio web pueden ser enlaces de afiliación.
            Esto significa que VELQIA puede recibir una comisión si el usuario realiza una compra o
            reserva a través de esos enlaces. Ello no implica ningún coste adicional para el usuario
            ni condiciona la selección editorial de las escapadas publicadas.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">6. Ley aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para la resolución de
            cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, las
            partes se someten a los Juzgados y Tribunales competentes según la legislación vigente.
          </p>
        </section>
      </div>
    </div>
  )
}
