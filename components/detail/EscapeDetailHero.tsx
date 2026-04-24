import Image from 'next/image'
import { MapPin } from 'lucide-react'
import type { Escape } from '@/types'
import Badge from '@/components/ui/Badge'

interface Props {
  escape: Escape
}

export default function EscapeDetailHero({ escape }: Props) {
  const imageAlt = escape.heroImageAlt || `${escape.title} - Escapada sin coche desde ${escape.departureCity} | ModoAndén`
  
  return (
    <div className="relative h-72 sm:h-96 w-full">
      <Image src={escape.heroImage} alt={imageAlt} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Badge>{escape.category}</Badge>
          {escape.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{escape.title}</h1>
        <p className="text-slate-200 mt-1">{escape.subtitle}</p>
        <p className="flex items-center gap-1 text-sm text-slate-300 mt-2">
          <MapPin size={13} />
          Desde {escape.departureCity}
        </p>
      </div>
    </div>
  )
}
