import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de VELQIA. Cómo tratamos tus datos personales.',
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Política de Privacidad</h1>

      <div className="space-y-7 text-slate-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos personales recogidos a través de este sitio
            web es el titular de VELQIA, cuya información de contacto está disponible en la sección
            de Contacto.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">2. Datos que recogemos</h2>
          <p>
            Únicamente recopilamos los datos que el usuario introduce voluntariamente a través del
            formulario de contacto: nombre, dirección de correo electrónico y el contenido del mensaje.
            No recopilamos datos de pago ni datos sensibles de ningún tipo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">3. Finalidad del tratamiento</h2>
          <p>
            Los datos facilitados a través del formulario de contacto se utilizan exclusivamente
            para responder a las consultas o sugerencias del usuario. No se utilizan para campañas
            comerciales sin consentimiento previo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">4. Base legal</h2>
          <p>
            El tratamiento se basa en el consentimiento del usuario, prestado de forma libre e
            inequívoca al enviar el formulario de contacto.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">5. Conservación de los datos</h2>
          <p>
            Los datos se conservarán durante el tiempo necesario para atender la consulta y durante
            los plazos legalmente establecidos, tras lo cual serán eliminados de forma segura.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">6. Derechos del usuario</h2>
          <p>
            El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación
            del tratamiento, portabilidad y oposición enviando una solicitud a través del formulario
            de contacto disponible en este sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-2">7. Servicios de terceros y afiliación</h2>
          <p>
            Algunos enlaces de este sitio web dirigen a plataformas externas de reservas (alojamiento,
            actividades, transporte). Estas plataformas tienen sus propias políticas de privacidad,
            sobre las que VELQIA no tiene control. Te recomendamos que consultes la política de
            privacidad de cada plataforma antes de facilitar tus datos de reserva.
          </p>
        </section>
      </div>
    </div>
  )
}
