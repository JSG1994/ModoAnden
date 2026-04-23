import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de privacidad',
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Politica de privacidad</h1>
      <div className="text-slate-600 leading-relaxed space-y-4">
        <p>En ModoAnden respetamos tu privacidad. Esta politica explica como tratamos la informacion que puedas facilitarnos.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Datos que recogemos</h2>
        <p>A traves del formulario de contacto podemos recoger tu nombre, correo y mensaje. Solo para responder tu consulta.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Uso de los datos</h2>
        <p>No compartimos tus datos con terceros. No enviamos comunicaciones comerciales sin consentimiento.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Derechos</h2>
        <p>Puedes ejercer tus derechos escribiendo a <a href="mailto:modoanden@gmail.com" className="text-brand-accent hover:underline">modoanden@gmail.com</a>.</p>
      </div>
    </div>
  )
}
