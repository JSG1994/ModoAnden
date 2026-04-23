cd "c:\Escritorio\Pagina Web\velqia"

# app\not-found.tsx
@'
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
'@ | Set-Content "app\not-found.tsx" -Encoding UTF8

# app\page.tsx
@'
import HeroSection from '@/components/home/HeroSection'
import QuickFilters from '@/components/home/QuickFilters'
import FeaturedEscapes from '@/components/home/FeaturedEscapes'
import HowItWorks from '@/components/home/HowItWorks'
import ValueBlock from '@/components/home/ValueBlock'
import SeoBlock from '@/components/home/SeoBlock'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickFilters />
      <FeaturedEscapes />
      <HowItWorks />
      <ValueBlock />
      <SeoBlock />
    </>
  )
}
'@ | Set-Content "app\page.tsx" -Encoding UTF8

# app\contacto\page.tsx
@'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escribenos si tienes alguna pregunta, sugerencia o propuesta.',
}

export default function ContactoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Contacto</h1>
      <p className="text-slate-500 mb-8">Si tienes alguna pregunta o quieres proponernos algo, escribenos.</p>
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-600">
        <Mail size={16} className="text-brand-accent" />
        <a href="mailto:modoanden@gmail.com" className="hover:text-brand-accent transition-colors">modoanden@gmail.com</a>
      </div>
      <ContactForm />
    </div>
  )
}
'@ | Set-Content "app\contacto\page.tsx" -Encoding UTF8

# app\cookies\page.tsx
@'
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
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Cookies que utilizamos</h2>
        <p>Solo utilizamos cookies tecnicas esenciales. No utilizamos cookies de publicidad ni de seguimiento de terceros.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">Contacto</h2>
        <p>Dudas sobre cookies: <a href="mailto:modoanden@gmail.com" className="text-brand-accent hover:underline">modoanden@gmail.com</a>.</p>
      </div>
    </div>
  )
}
'@ | Set-Content "app\cookies\page.tsx" -Encoding UTF8

# app\privacidad\page.tsx
@'
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
'@ | Set-Content "app\privacidad\page.tsx" -Encoding UTF8

# app\sobre-nosotros\page.tsx
@'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Que es ModoAnden y como seleccionamos los destinos de escapadas sin coche.',
}

export default function SobreNosotrosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Sobre ModoAnden</h1>
      <div className="space-y-5 text-slate-600 leading-relaxed">
        <p>ModoAnden nace de una idea sencilla: hay muchas escapadas buenas en España que puedes hacer sin coche y sin complicarte la vida.</p>
        <p>Aqui no vas a encontrar listas interminables de destinos ni guias kilometricas. Seleccionamos pocos sitios, pero los contamos bien.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Como elegimos los destinos</h2>
        <p>Solo incluimos destinos a los que puedes llegar comodamente en transporte publico y que funcionen bien para escapadas cortas de 1 a 3 noches.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Nuestro enfoque</h2>
        <p>Cada escapada tiene opinion editorial. Te contamos para quien encaja, cuantas noches recomendamos, que errores evitar y como sacarle el mejor partido.</p>
      </div>
    </div>
  )
}
'@ | Set-Content "app\sobre-nosotros\page.tsx" -Encoding UTF8

Write-Host "Pages done"
Get-ChildItem -Path app -Recurse -Include *.tsx | ForEach-Object { Write-Host "$($_.Name): $((Get-Content $_.FullName).Count)" }