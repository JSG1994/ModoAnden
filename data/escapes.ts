import type { Escape } from '@/types'

export const escapes: Escape[] = [
  {
    id: '1',
    slug: 'toledo',
    title: 'Toledo',
    subtitle: 'Escapada fácil, bonita y muy agradecida para hacer sin coche',
    location: 'Toledo',
    departureCity: 'Madrid',
    heroImage: 'https://picsum.photos/seed/toledo-panoramica/1200/600',
    category: 'cultura',
    tags: ['patrimonio', 'sin coche', 'tren', 'fin de semana', 'pareja', 'desde Madrid'],
    featured: true,
    shortDescription:
      'Toledo es de esas escapadas que encajan casi solas. Llegas rápido, no necesitas coche y en poco espacio tienes una ciudad con bastante personalidad, buenas vistas, mucha historia y un centro que se disfruta mejor caminando.',

    overview: {
      summary:
        'Toledo es de esas escapadas que encajan casi solas. Llegas rápido, no necesitas coche y en poco espacio tienes una ciudad con bastante personalidad, buenas vistas, mucha historia y un centro que se disfruta mejor caminando que intentando "hacer checklist". No la vendería como una ciudad para correr de un monumento a otro, sino como un sitio para callejear, entrar en dos o tres lugares bien elegidos y rematar el día cenando con calma.\n\nLo mejor de Toledo es que funciona en varios formatos. Si solo tienes una noche, te da una escapada muy completa. Si te quedas dos, ya la disfrutas bien. Y si reservas tres, solo la recomendaría si quieres bajar ritmo o meter un plan adicional como Puy du Fou o una versión más tranquila del viaje.',
      bestFor: [
        'Parejas',
        'Escapada corta desde Madrid',
        'Primer viaje sin coche',
        'Gente que valora pasear, comer bien y ver una ciudad con ambiente',
        'Viajes de 1 o 2 noches',
      ],
      lessRecommendedFor: [
        'Quien busque mucho ocio nocturno',
        'Quien quiera una ciudad plana y cómoda para caminar sin cuestas',
        'Quien prefiera un viaje muy orientado a compras o a hacer muchas cosas seguidas',
      ],
      bestSeason:
        'Primavera y otoño son las mejores estaciones para Toledo. Es cuando más se disfruta paseando sin ir pendiente del calor. En verano sigue siendo una escapada viable, pero conviene ir mentalizado: aprieta bastante el sol y se nota más de lo que parece por las cuestas, el empedrado y las horas de paseo.',
      generalAdvice:
        'No intentaría ver todo. Toledo sale mejor cuando eliges bien. La Catedral sí merece la pena. Luego ya depende del tiempo: con una noche hay que seleccionar, con dos noches ya compensa entrar en varios monumentos, y con tres la clave está más en el ritmo que en sumar visitas.',
    },

    quickSummary: {
      text: 'Toledo es una de las escapadas sin coche más fáciles de hacer desde Madrid. Se llega rápido, el centro histórico tiene muchísima personalidad y en una sola noche ya deja sensación de viaje bien aprovechado. Ahora bien: no es una ciudad para intentar verlo todo. Tiene cuestas, se anda bastante y sale mejor cuando eliges bien qué hacer.',
      keys: [
        'Muy buena escapada para 1 o 2 noches',
        'Funciona especialmente bien sin coche',
        'Mejor en primavera y otoño',
        'Dos noches es el formato más equilibrado',
      ],
    },

    durationVariants: [
      {
        nights: 1,
        title: 'Toledo en 1 noche: la escapada que sí merece la pena aunque vayas justo de tiempo',
        summary:
          'Sí, Toledo funciona muy bien en 1 noche. De hecho, para mucha gente es la duración perfecta: te escapas, ves lo importante, duermes dentro o muy cerca del casco y al día siguiente todavía te da para un paseo más antes de volver. No intentaría abarcar demasiado. Aquí lo que compensa es hacer una versión muy bien elegida de la ciudad, no intentar exprimirla.',
        forWhom: [
          'Si sales desde Madrid y quieres algo fácil',
          'Si quieres una escapada corta sin mucha logística',
          'Si te apetece una ciudad con ambiente y centro histórico potente',
          'Si no quieres pedir demasiados días',
        ],
        whatToDo:
          'Llegar pronto, subir al casco sin perder tiempo, entrar en la Catedral y dedicar la tarde a caminar por la Judería y la zona de San Juan de los Reyes. Toledo gana mucho al caer la tarde, así que reservaría la noche para callejear sin prisas y cenar bien. Si duermes dentro del casco, la ciudad cambia bastante cuando baja el turismo de día y ahí está parte de la gracia.',
        whatNotToDo:
          'No metería demasiados monumentos. No me obsesionaría con la pulsera turística si vas tan justo. Y no mezclaría en este formato ningún plan extra tipo espectáculo o parque, porque te rompe lo mejor de la escapada: la sensación de ciudad compacta y fácil.',
        verdict:
          'Una noche en Toledo sale muy bien si aceptas que no vas a verlo todo. Es una escapada corta, muy agradecida y fácil de defender para un finde apretado.',
        accommodations: [
          {
            name: 'Hotel Carlos V',
            description: 'Buena opción si quieres estar muy bien situado y no complicarte.',
            whyItFits: 'Ubicación céntrica, práctico para una noche sin logística.',
            affiliateUrl: '#',
          },
          {
            name: 'Hotel Santa Isabel',
            description: 'Muy buena base si te gusta un sitio sencillo pero con encanto.',
            whyItFits: 'Relación calidad-precio excelente para una escapada corta.',
            affiliateUrl: '#',
          },
          {
            name: 'Hotel San Juan de los Reyes',
            description: 'Ideal si prefieres la zona de la Judería y algo más tranquilo.',
            whyItFits: 'Zona con más carácter, bien ubicado para pasear sin repetir caminos.',
            affiliateUrl: '#',
          },
        ],
        tip: 'Si solo vas una noche, céntrate en ubicación. Aquí dormir bien colocado vale más que buscar el hotel más completo.',
        ctaText: 'Ver alojamientos para 1 noche en Toledo',
      },
      {
        nights: 2,
        title: 'Toledo en 2 noches: la mejor versión de la escapada',
        summary:
          'Si me preguntas cuántas noches reservaría sin pensarlo demasiado, te diría dos. Es el punto justo. Ya no vas corriendo, puedes entrar en varios sitios con calma, comer bien sin sentir que pierdes tiempo y disfrutar de la ciudad de noche y de día. Toledo en dos noches ya deja de sentirse como excursión larga y empieza a sentirse como viaje corto de verdad.',
        forWhom: [
          'Primera vez en Toledo',
          'Quien quiere ver lo principal sin prisa',
          'Parejas o amigos que quieren una escapada completa',
          'Quien quiere combinar ciudad, paseo y algo de descanso',
        ],
        whatToDo:
          'Primer día: llegada, Catedral y paseo largo por el centro. Segundo día: Judería, San Juan de los Reyes, Santo Tomé o Santa María la Blanca según gustos, rato de terrazas, miradores y cena tranquila. Tercer medio día: desayuno sin prisas y último paseo antes de volver.\n\nAquí sí tiene sentido entrar en varios monumentos y plantearlo como una escapada cultural ligera, no pesada. Dos noches permiten bastante margen para improvisar y eso en Toledo se agradece.',
        whatNotToDo:
          'No metería demasiadas reservas cerradas ni horarios excesivos. Toledo funciona mejor cuando dejas algo de hueco para perderte un poco. Tampoco intentaría convertirla en un viaje intenso. No hace falta.',
        verdict:
          'Esta es la duración más redonda. Si quieres una recomendación clara y sin matices, esta es la buena.',
        accommodations: [
          {
            name: 'Hotel San Juan de los Reyes',
            description: 'Muy buena opción para moverte bien y dormir en una zona agradable.',
            whyItFits: 'Equilibrio entre zona bonita y acceso a todo el casco.',
            affiliateUrl: '#',
          },
          {
            name: 'Hacienda del Cardenal',
            description: 'Buena elección si valoras entorno, muralla y un punto más relajado.',
            whyItFits: 'Jardín propio, ambiente tranquilo y a un paso del casco.',
            affiliateUrl: '#',
          },
          {
            name: 'Hotel Carlos V',
            description: 'Sigue siendo una apuesta segura por practicidad.',
            whyItFits: 'Céntrico y sin sorpresas. Funciona para cualquier formato.',
            affiliateUrl: '#',
          },
        ],
        tip: 'Dos noches es el formato en el que más sentido tiene hacer una Toledo más completa, con varios monumentos y tiempo real para disfrutarla.',
        ctaText: 'Ver escapadas de 2 noches en Toledo',
      },
      {
        nights: 3,
        title: 'Toledo en 3 noches: solo si quieres hacerlo con calma o añadir un plan más',
        summary:
          'Aquí viene la parte sincera: tres noches en Toledo no son para todo el mundo. La ciudad no es enorme y, si solo buscas ver el casco histórico, probablemente dos noches te dejen mejor equilibrio. Tres solo lo recomendaría si quieres una escapada mucho más tranquila, con ratos de terraza, miradores, comidas largas y cero prisa, o si tienes pensado meter un plan extra como Puy du Fou.',
        forWhom: [
          'Quien quiere viajar sin correr nada',
          'Quien prefiere menos cambios y más calma',
          'Quien quiere combinar Toledo ciudad con un plan adicional',
          'Quien valora más la experiencia completa que aprovechar al máximo',
        ],
        whatToDo:
          'Día 1: llegada y contacto con la ciudad. Día 2: casco histórico con monumentos. Día 3: día más relajado, miradores, paseo largo, compras tranquilas o plan complementario. Día 4: vuelta sin prisas.\n\nSi vas con este formato, yo intentaría que el alojamiento también juegue a favor del viaje. Aquí ya puedes permitirte elegir un hotel por vistas o por experiencia, no solo por ubicación.',
        whatNotToDo:
          'No reservaría tres noches pensando en que más es mejor. Si no vas a bajar el ritmo o a añadir algo más, probablemente te sobre una noche.',
        verdict:
          'Tres noches solo tienen sentido si quieres convertir Toledo en una escapada tranquila de verdad o si la mezclas con otro plan. Si no, mejor dos.',
        accommodations: [
          {
            name: 'Parador de Toledo',
            description: 'Si quieres vistas y un punto más especial, el Parador es la referencia.',
            whyItFits: 'Vistas panorámicas de Toledo desde la otra orilla del Tajo.',
            affiliateUrl: '#',
          },
          {
            name: 'Hacienda del Cardenal',
            description: 'Muy buena opción para una escapada con más calma.',
            whyItFits: 'Ambiente relajado con jardín propio. Ideal para bajar el ritmo.',
            affiliateUrl: '#',
          },
          {
            name: 'Eugenia de Montijo',
            description: 'Si buscas una estancia más cuidada y céntrica.',
            whyItFits: 'Buen punto intermedio entre ubicación y experiencia de hotel.',
            affiliateUrl: '#',
          },
        ],
        tip: 'Tres noches no son la recomendación estándar. Son la recomendación buena cuando quieres ir más despacio o darle otra capa al viaje.',
        ctaText: 'Ver alojamientos para 3 noches en Toledo',
      },
    ],

    practical: {
      intro:
        'Toledo encaja muy bien como escapada corta porque la logística es sencilla. Desde Madrid el tren es lo más cómodo y lo más rápido. El bus puede servir, pero ya no da la misma sensación de viaje fácil y redondo.',
      items: [
        { label: 'Mejor salida habitual', value: 'Madrid' },
        { label: 'Transporte recomendado', value: 'Tren (Avant)' },
        { label: 'Duración ideal', value: '1 o 2 noches' },
        { label: 'Tipo de viaje', value: 'Cultural, urbano, paseo y buena comida' },
        { label: 'Nivel de esfuerzo', value: 'Medio - hay cuestas' },
        { label: 'Coche', value: 'No hace falta' },
      ],
      howToGetThere:
        'La forma más cómoda de llegar es el Avant desde Madrid. Es rápido y te deja muy bien para una escapada de ida y vuelta o para un finde corto. El bus existe y puede encajar si buscas una opción alternativa, pero para este viaje el tren es claramente la opción más limpia.',
      howToGetThereExtra:
        'Una vez llegas, lo importante es asumir que Toledo se hace andando. Hay transporte urbano, pero el casco se disfruta sobre todo caminando, y conviene ir con calzado cómodo. No es una ciudad grande, pero sí tiene cuestas y calles en las que vas más lento de lo que parece en el mapa.',
      budgetIntro:
        'Toledo puede ser una escapada razonable si controlas bien dos cosas: el alojamiento y las entradas. El gran error suele ser reservar deprisa y pagar de más por dormir una sola noche muy céntrica. El segundo error es comprar entradas sin pensar si de verdad te da tiempo a aprovecharlas.',
      budgets: [
        {
          nights: 1,
          label: '1 noche',
          items: [
            { concept: 'Transporte', level: 'Bajo-medio' },
            { concept: 'Hotel', level: 'Medio' },
            { concept: 'Comidas', level: 'Medio' },
            { concept: 'Entradas', level: 'Bajo-medio' },
          ],
          summary: 'Escapada bastante asumible si reservas con algo de tiempo.',
        },
        {
          nights: 2,
          label: '2 noches',
          items: [
            { concept: 'Transporte', level: 'Bajo-medio' },
            { concept: 'Hotel', level: 'Medio' },
            { concept: 'Comidas', level: 'Medio' },
            { concept: 'Entradas', level: 'Medio' },
          ],
          summary: 'Aquí ya merece la pena plantearlo como viaje corto bien hecho.',
        },
        {
          nights: 3,
          label: '3 noches',
          items: [
            { concept: 'Transporte', level: 'Igual de sencillo' },
            { concept: 'Hotel', level: 'Sube según capricho' },
            { concept: 'Comidas y extras', level: 'Medio o medio-alto' },
            { concept: 'Entradas', level: 'Depende de Puy du Fou' },
          ],
          summary: 'El presupuesto varía mucho según si añades extras como Puy du Fou.',
        },
      ],
      ticketsText:
        'La Catedral es de las visitas que sí recomendaría casi siempre. Es de lo más potente de Toledo y además va por libre, así que no hay mucho debate. Lo que sí conviene pensar bien es la pulsera turística. Si vas una noche y llevas el tiempo justo, puede no compensar. Si vas dos noches y te apetece una Toledo más completa, ahí sí gana bastante sentido.',
      ticketsTip:
        'No compres por impulso. En Toledo compensa más ver menos cosas bien que acumular entradas. La Catedral marca 12EUR la entrada general y la pulsera oficial cuesta 14EUR para 7 monumentos.',
    },

    editorial: {
      accommodationIntro:
        'En Toledo la ubicación manda bastante. Dormir bien colocado cambia mucho la experiencia, sobre todo si solo vas una noche.',
      commonMistakes: [
        'Pensar que es una ciudad plana y rápida de recorrer',
        'Meter demasiados monumentos en un solo día',
        'Reservar una noche y querer hacerla como si fueran dos',
        'No dejar tiempo para pasear sin plan cerrado',
        'Infravalorar el calor en meses fuertes',
        'No priorizar bien la ubicación del hotel',
        'Comprar la pulsera turística sin saber si realmente la vas a aprovechar',
      ],
      weatherIntro:
        'Con calor fuerte, Toledo se vuelve más exigente de lo que parece. Ahí conviene madrugar, entrar antes en interiores y dejar las horas peores para comer tranquilo o descansar. Con lluvia, la ciudad sigue teniendo gracia, pero hay que asumir otra versión del viaje: más monumentos, menos paseo largo y algo menos de mirador.',
      weatherHot: [
        'Madrugar',
        'Catedral y visitas interiores antes',
        'Menos miradores al mediodía',
        'Cena y paseo al final del día',
      ],
      weatherRainy: [
        'Más peso de monumentos',
        'Menos callejeo sin rumbo',
        'Reservar mejor los tiempos',
        'Buscar alojamiento muy bien ubicado',
      ],
      firstTimeAdvice: {
        title: 'Mi recomendación si nunca has estado',
        text: 'Si es tu primera vez en Toledo, no me complicaría demasiado: reservaría dos noches, dormiría céntrico, haría Catedral sí o sí y luego elegiría dos o tres visitas más como mucho. La gracia del viaje no está en exprimirlo. Está en que la ciudad te dé sensación de escapada fácil, bonita y con bastante personalidad.',
      },
      quickWeekendAdvice: {
        title: 'Si solo quieres un finde fácil, esta sería mi jugada',
        text: 'Tren, hotel céntrico, una noche si vas justo o dos si quieres hacerlo bien, Catedral, paseo por la Judería, cena sin prisa y una mañana final tranquila. Sin más. Toledo sale mejor cuando no intentas convertirla en un viaje complicado.',
      },
      closing: {
        title: 'La forma buena de hacer Toledo',
        text: 'Toledo no necesita demasiados adornos. Necesita una buena decisión de tiempo, un hotel bien elegido y no querer abarcar más de la cuenta. Una noche funciona sorprendentemente bien. Dos noches es la opción más redonda. Tres solo compensa si buscas una versión más tranquila o con plan añadido. Si vas con esa idea clara, es de las escapadas sin coche más fáciles y resultonas que puedes hacer.',
      },
    },

    faq: [
      {
        question: '¿Merece la pena Toledo para una sola noche?',
        answer: 'Sí. De hecho, es una de las escapadas de una noche más agradecidas desde Madrid.',
      },
      {
        question: '¿Hace falta coche?',
        answer: 'No. Para este viaje, no hace falta.',
      },
      {
        question: '¿Dos noches o tres?',
        answer: 'Dos. Tres solo si quieres hacerlo con mucha calma o añadir un plan extra.',
      },
      {
        question: '¿Compensa la pulsera turística?',
        answer: 'Solo si vas a entrar en varios monumentos y tienes tiempo real para aprovecharla.',
      },
      {
        question: '¿Es una escapada para ir con prisas?',
        answer: 'No especialmente. Sale mejor si bajas un poco el ritmo.',
      },
    ],

    affiliateLinks: {
      hotelUrl: '#',
      activityUrl: '#',
      transportUrl: '#',
    },
  },
]

export const departureCities = Array.from(new Set(escapes.map(e => e.departureCity))).sort()
