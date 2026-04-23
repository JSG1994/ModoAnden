import type { Escape } from '@/types'
import { toledoEscape } from './escapes/toledo'
import { aranjuezEscape } from './escapes/aranjuez'

export const escapes: Escape[] = [toledoEscape, aranjuezEscape]

export const departureCities = Array.from(new Set(escapes.map(e => e.departureCity))).sort()
