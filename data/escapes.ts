import type { Escape } from '@/types'
import { toledoEscape } from './escapes/toledo'

export const escapes: Escape[] = [toledoEscape]

export const departureCities = Array.from(new Set(escapes.map(e => e.departureCity))).sort()
