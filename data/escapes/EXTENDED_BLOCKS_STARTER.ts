import type {
  DetailedItinerary,
  EscapeSeoBlocks,
  FoodAndRestaurants,
  HonestWarnings,
  HotelDecisionGuide,
  RealExperience,
  SeasonalPlans,
} from '@/types'

export interface ExtendedBlocksStarter {
  realExperience: RealExperience
  detailedItinerary: DetailedItinerary
  foodAndRestaurants: FoodAndRestaurants
  seasonalPlans: SeasonalPlans
  hotelDecisionGuide: HotelDecisionGuide
  honestWarnings: HonestWarnings
  seoBlocks: EscapeSeoBlocks
}

export const extendedBlocksStarter: ExtendedBlocksStarter = {
  realExperience: {
    title: 'Lo que hace especial a [CIUDAD]',
    intro: 'Contexto real del destino en 3-4 lineas.',
    officialReading: 'Lectura institucional o patrimonial del destino.',
    realTravelerReading: 'Patrones reales que se repiten en viajeros.',
    honestVerdict: 'Veredicto claro para ajustar expectativas antes de reservar.',
  },

  detailedItinerary: {
    title: 'Como organizar [CIUDAD] sin correr',
    intro: 'Resumen de ritmo recomendado segun tipo de viaje.',
    oneDayFromMadrid: {
      title: 'Si vas en el dia',
      plan: 'Plan realista de manana, comida y tarde.',
      warning: 'Que no intentar meter en un solo dia.',
    },
    oneNight: {
      title: 'Si duermes 1 noche',
      plan: 'Plan por bloques para dia 1 y dia 2.',
      whyItWorks: 'Por que esta formula suele funcionar.',
    },
    twoNights: {
      title: 'Si duermes 2 noches',
      plan: 'Plan con mas margen, gastronomia o temporada.',
      whyItWorks: 'Cuando compensa de verdad la segunda noche.',
    },
    threeNights: {
      title: 'Si duermes 3 noches',
      plan: 'Solo si el hotel/descanso pesa en el viaje.',
      warning: 'No vender 3 noches como estandar.',
    },
  },

  foodAndRestaurants: {
    title: 'Donde comer en [CIUDAD]',
    intro: 'Por que la comida suma valor real en esta escapada.',
    foodIdentity: 'Producto local y contexto gastronomico.',
    areas: [
      {
        name: 'Zona 1',
        description: 'Para que tipo de comida y momento del viaje.',
      },
    ],
    recommendedRestaurants: [
      {
        name: 'Restaurante ejemplo',
        type: 'Tipo de cocina',
        priceFeeling: 'Bajo/medio/alto',
        whyItFits: 'Por que encaja en esta escapada.',
        bestFor: 'Perfil de viajero ideal.',
        caution: 'Advertencia de reserva, horarios o expectativas.',
      },
    ],
    budgetAdvice: 'Como repartir gasto de comida segun noches.',
    editorialTip: 'Claves para presentar este bloque con sentido.',
  },

  seasonalPlans: {
    title: 'Planes de temporada en [CIUDAD]',
    intro: 'Como cambia el destino segun epoca.',
    plans: [
      {
        name: 'Plan de temporada',
        when: 'Cuando suele estar disponible',
        whyItFits: 'Por que mejora el viaje',
        idealFor: 'A quien le encaja mejor',
        caution: 'Disponibilidad y limites del plan',
      },
    ],
  },

  hotelDecisionGuide: {
    title: 'Donde dormir segun el tipo de viaje',
    intro: 'Que pesa mas: centro, descanso, servicios o precio.',
    options: [
      {
        hotel: 'Hotel ejemplo',
        bestFor: 'Perfil y duracion recomendada',
        realWhy: 'Motivo real por el que encaja',
        caution: 'Limite principal del hotel',
      },
    ],
    verdict: 'Regla simple para la mayoria de usuarios.',
  },

  honestWarnings: {
    title: 'Lo que conviene saber antes de ir',
    items: [
      {
        title: 'Advertencia clave',
        text: 'Impacto real en la experiencia del viajero.',
      },
    ],
  },

  seoBlocks: {
    whatToSee: {
      title: 'Que ver en [CIUDAD] en una escapada corta',
      text: 'Version corta orientada a intencion informacional.',
    },
    howToArrive: {
      title: 'Como llegar a [CIUDAD] sin coche',
      text: 'Version corta orientada a intencion transaccional.',
    },
    whereToEat: {
      title: 'Donde comer en [CIUDAD]',
      text: 'Version corta orientada a intencion gastronomica.',
    },
    isItWorthSleeping: {
      title: 'Merece la pena dormir en [CIUDAD]?',
      text: 'Version corta orientada a decision de noches.',
    },
  },
}
