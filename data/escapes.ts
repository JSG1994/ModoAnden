import type { Escape } from '@/types'

export const escapes: Escape[] = [
  {
    id: '1',
    slug: 'toledo',
    title: 'Toledo',
    subtitle: 'Escapada fÃ¡cil, bonita y muy agradecida para hacer sin coche',
    location: 'Toledo',
    departureCity: 'Madrid',
    heroImage: 'https://picsum.photos/seed/toledo-panoramica/1200/600',
    category: 'cultura',
    tags: ['patrimonio', 'sin coche', 'tren', 'fin de semana', 'pareja', 'desde Madrid'],
    featured: true,
    shortDescription:
      'Toledo es de esas escapadas que encajan casi solas. Llegas rÃ¡pido, no necesitas coche y en poco espacio tienes una ciudad con bastante personalidad, buenas vistas, mucha historia y un centro que se disfruta mejor caminando.',

    overview: {
      summary:
        'Toledo es de esas escapadas que encajan casi solas. Llegas rÃ¡pido, no necesitas coche y en poco espacio tienes una ciudad con bastante personalidad, buenas vistas, mucha historia y un centro que se disfruta mejor caminando que intentando "hacer checklist". No la venderÃ­a como una ciudad para correr de un monumento a otro, sino como un sitio para callejear, entrar en dos o tres lugares bien elegidos y rematar el dÃ­a cenando con calma.\n\nLo mejor de Toledo es que funciona en varios formatos. Si solo tienes una noche, te da una escapada muy completa. Si te quedas dos, ya la disfrutas bien. Y si reservas tres, solo la recomendarÃ­a si quieres bajar ritmo o meter un plan adicional como Puy du Fou o una versiÃ³n mÃ¡s tranquila del viaje.',
      bestFor: [
        'Parejas',
        'Escapada corta desde Madrid',
        'Primer viaje sin coche',
        'Gente que valora pasear, comer bien y ver una ciudad con ambiente',
        'Viajes de 1 o 2 noches',
      ],
      lessRecommendedFor: [
        'Quien busque mucho ocio nocturno',
        'Quien quiera una ciudad plana y cÃ³moda para caminar sin cuestas',
        'Quien prefiera un viaje muy orientado a compras o a hacer muchas cosas seguidas',
      ],
      bestSeason:
        'Primavera y otoÃ±o son las mejores estaciones para Toledo. Es cuando mÃ¡s se disfruta paseando sin ir pendiente del calor. En verano sigue siendo una escapada viable, pero conviene ir mentalizado: aprieta bastante el sol y se nota mÃ¡s de lo que parece por las cuestas, el empedrado y las horas de paseo.',
      generalAdvice:
        'No intentarÃ­a ver todo. Toledo sale mejor cuando eliges bien. La Catedral sÃ­ merece la pena. Luego ya depende del tiempo: con una noche hay que seleccionar, con dos noches ya compensa entrar en varios monumentos, y con tres la clave estÃ¡ mÃ¡s en el ritmo que en sumar visitas.',
    },

    quickSummary: {
      text: 'Toledo es una de las escapadas sin coche mÃ¡s fÃ¡ciles de hacer desde Madrid. Se llega rÃ¡pido, el centro histÃ³rico tiene muchÃ­sima personalidad y en una sola noche ya deja sensaciÃ³n de viaje bien aprovechado. Ahora bien: no es una ciudad para intentar verlo todo. Tiene cuestas, se anda bastante y sale mejor cuando eliges bien quÃ© hacer.',
      keys: [
        'Muy buena escapada para 1 o 2 noches',
        'Funciona especialmente bien sin coche',
        'Mejor en primavera y otoÃ±o',
        'Dos noches es el formato mÃ¡s equilibrado',
      ],
    },

    durationVariants: [
      {
        nights: 1,
        title: 'Toledo en 1 noche: la escapada que sÃ­ merece la pena aunque vayas justo de tiempo',
        summary:
          'SÃ­, Toledo funciona muy bien en 1 noche. De hecho, para mucha gente es la duraciÃ³n perfecta: te escapas, ves lo importante, duermes dentro o muy cerca del casco y al dÃ­a siguiente todavÃ­a te da para un paseo mÃ¡s antes de volver. No intentarÃ­a abarcar demasiado. AquÃ­ lo que compensa es hacer una versiÃ³n muy bien elegida de la ciudad, no intentar exprimirla.',
        forWhom: [
          'Si sales desde Madrid y quieres algo fÃ¡cil',
          'Si quieres una escapada corta sin mucha logÃ­stica',
          'Si te apetece una ciudad con ambiente y centro histÃ³rico potente',
          'Si no quieres pedir demasiados dÃ­as',
        ],
        whatToDo:
          'Llegar pronto, subir al casco sin perder tiempo, entrar en la Catedral y dedicar la tarde a caminar por la JuderÃ­a y la zona de San Juan de los Reyes. Toledo gana mucho al caer la tarde, asÃ­ que reservarÃ­a la noche para callejear sin prisas y cenar bien. Si duermes dentro del casco, la ciudad cambia bastante cuando baja el turismo de dÃ­a y ahÃ­ estÃ¡ parte de la gracia.',
        whatNotToDo:
          'No meterÃ­a demasiados monumentos. No me obsesionarÃ­a con la pulsera turÃ­stica si vas tan justo. Y no mezclarÃ­a en este formato ningÃºn plan extra tipo espectÃ¡culo o parque, porque te rompe lo mejor de la escapada: la sensaciÃ³n de ciudad compacta y fÃ¡cil.',
        verdict:
          'Una noche en Toledo sale muy bien si aceptas que no vas a verlo todo. Es una escapada corta, muy agradecida y fÃ¡cil de defender para un finde apretado.',
        accommodations: [
          {
            name: 'Hotel Carlos V',
            description: 'Buena opciÃ³n si quieres estar muy bien situado y no complicarte.',
            whyItFits: 'UbicaciÃ³n cÃ©ntrica, prÃ¡ctico para una noche sin logÃ­stica.',
            affiliateUrl: '#',
          },
          {
            name: 'Hotel Santa Isabel',
            description: 'Muy buena base si te gusta un sitio sencillo pero con encanto.',
            whyItFits: 'RelaciÃ³n calidad-precio excelente para una escapada corta.',
            affiliateUrl: '#',
          },
          {
            name: 'Hotel San Juan de los Reyes',
            description: 'Ideal si prefieres la zona de la JuderÃ­a y algo mÃ¡s tranquilo.',
            whyItFits: 'Zona con mÃ¡s carÃ¡cter, bien ubicado para pasear sin repetir caminos.',
            affiliateUrl: '#',
          },
        ],
        tip: 'Si solo vas una noche, cÃ©ntrate en ubicaciÃ³n. AquÃ­ dormir bien colocado vale mÃ¡s que buscar el hotel mÃ¡s completo.',
        ctaText: 'Ver alojamientos para 1 noche en Toledo',
      },
      {
        nights: 2,
        title: 'Toledo en 2 noches: la mejor versiÃ³n de la escapada',
        summary:
          'Si me preguntas cuÃ¡ntas noches reservarÃ­a sin pensarlo demasiado, te dirÃ­a dos. Es el punto justo. Ya no vas corriendo, puedes entrar en varios sitios con calma, comer bien sin sentir que pierdes tiempo y disfrutar de la ciudad de noche y de dÃ­a. Toledo en dos noches ya deja de sentirse como excursiÃ³n larga y empieza a sentirse como viaje corto de verdad.',
        forWhom: [
          'Primera vez en Toledo',
          'Quien quiere ver lo principal sin prisa',
          'Parejas o amigos que quieren una escapada completa',
          'Quien quiere combinar ciudad, paseo y algo de descanso',
        ],
        whatToDo:
          'Primer dÃ­a: llegada, Catedral y paseo largo por el centro. Segundo dÃ­a: JuderÃ­a, San Juan de los Reyes, Santo TomÃ© o Santa MarÃ­a la Blanca segÃºn gustos, rato de terrazas, miradores y cena tranquila. Tercer medio dÃ­a: desayuno sin prisas y Ãºltimo paseo antes de volver.\n\nAquÃ­ sÃ­ tiene sentido entrar en varios monumentos y plantearlo como una escapada cultural ligera, no pesada. Dos noches permiten bastante margen para improvisar y eso en Toledo se agradece.',
        whatNotToDo:
          'No meterÃ­a demasiadas reservas cerradas ni horarios excesivos. Toledo funciona mejor cuando dejas algo de hueco para perderte un poco. Tampoco intentarÃ­a convertirla en un viaje intenso. No hace falta.',
        verdict:
          'Esta es la duraciÃ³n mÃ¡s redonda. Si quieres una recomendaciÃ³n clara y sin matices, esta es la buena.',
        accommodations: [
          {
            name: 'Hotel San Juan de los Reyes',
            description: 'Muy buena opciÃ³n para moverte bien y dormir en una zona agradable.',
            whyItFits: 'Equilibrio entre zona bonita y acceso a todo el casco.',
            affiliateUrl: '#',
          },
          {
            name: 'Hacienda del Cardenal',
            description: 'Buena elecciÃ³n si valoras entorno, muralla y un punto mÃ¡s relajado.',
            whyItFits: 'JardÃ­n propio, ambiente tranquilo y a un paso del casco.',
            affiliateUrl: '#',
          },
          {
            name: 'Hotel Carlos V',
            description: 'Sigue siendo una apuesta segura por practicidad.',
            whyItFits: 'CÃ©ntrico y sin sorpresas. Funciona para cualquier formato.',
            affiliateUrl: '#',
          },
        ],
        tip: 'Dos noches es el formato en el que mÃ¡s sentido tiene hacer una Toledo mÃ¡s completa, con varios monumentos y tiempo real para disfrutarla.',
        ctaText: 'Ver escapadas de 2 noches en Toledo',
      },
      {
        nights: 3,
        title: 'Toledo en 3 noches: solo si quieres hacerlo con calma o aÃ±adir un plan mÃ¡s',
        summary:
          'AquÃ­ viene la parte sincera: tres noches en Toledo no son para todo el mundo. La ciudad no es enorme y, si solo buscas ver el casco histÃ³rico, probablemente dos noches te dejen mejor equilibrio. Tres solo lo recomendarÃ­a si quieres una escapada mucho mÃ¡s tranquila, con ratos de terraza, miradores, comidas largas y cero prisa, o si tienes pensado meter un plan extra como Puy du Fou.',
        forWhom: [
          'Quien quiere viajar sin correr nada',
          'Quien prefiere menos cambios y mÃ¡s calma',
          'Quien quiere combinar Toledo ciudad con un plan adicional',
          'Quien valora mÃ¡s la experiencia completa que aprovechar al mÃ¡ximo',
        ],
        whatToDo:
          'DÃ­a 1: llegada y contacto con la ciudad. DÃ­a 2: casco histÃ³rico con monumentos. DÃ­a 3: dÃ­a mÃ¡s relajado, miradores, paseo largo, compras tranquilas o plan complementario. DÃ­a 4: vuelta sin prisas.\n\nSi vas con este formato, yo intentarÃ­a que el alojamiento tambiÃ©n juegue a favor del viaje. AquÃ­ ya puedes permitirte elegir un hotel por vistas o por experiencia, no solo por ubicaciÃ³n.',
        whatNotToDo:
          'No reservarÃ­a tres noches pensando en que mÃ¡s es mejor. Si no vas a bajar el ritmo o a aÃ±adir algo mÃ¡s, probablemente te sobre una noche.',
        verdict:
          'Tres noches solo tienen sentido si quieres convertir Toledo en una escapada tranquila de verdad o si la mezclas con otro plan. Si no, mejor dos.',
        accommodations: [
          {
            name: 'Parador de Toledo',
            description: 'Si quieres vistas y un punto mÃ¡s especial, el Parador es la referencia.',
            whyItFits: 'Vistas panorÃ¡micas de Toledo desde la otra orilla del Tajo.',
            affiliateUrl: '#',
          },
          {
            name: 'Hacienda del Cardenal',
            description: 'Muy buena opciÃ³n para una escapada con mÃ¡s calma.',
            whyItFits: 'Ambiente relajado con jardÃ­n propio. Ideal para bajar el ritmo.',
            affiliateUrl: '#',
          },
          {
            name: 'Eugenia de Montijo',
            description: 'Si buscas una estancia mÃ¡s cuidada y cÃ©ntrica.',
            whyItFits: 'Buen punto intermedio entre ubicaciÃ³n y experiencia de hotel.',
            affiliateUrl: '#',
          },
        ],
        tip: 'Tres noches no son la recomendaciÃ³n estÃ¡ndar. Son la recomendaciÃ³n buena cuando quieres ir mÃ¡s despacio o darle otra capa al viaje.',
        ctaText: 'Ver alojamientos para 3 noches en Toledo',
      },
    ],

    practical: {
      intro:
        'Toledo encaja muy bien como escapada corta porque la logÃ­stica es sencilla. Desde Madrid el tren es lo mÃ¡s cÃ³modo y lo mÃ¡s rÃ¡pido. El bus puede servir, pero ya no da la misma sensaciÃ³n de viaje fÃ¡cil y redondo.',
      items: [
        { label: 'Mejor salida habitual', value: 'Madrid' },
        { label: 'Transporte recomendado', value: 'Tren (Avant)' },
        { label: 'DuraciÃ³n ideal', value: '1 o 2 noches' },
        { label: 'Tipo de viaje', value: 'Cultural, urbano, paseo y buena comida' },
        { label: 'Nivel de esfuerzo', value: 'Medio â€” hay cuestas' },
        { label: 'Coche', value: 'No hace falta' },
      ],
      howToGetThere:
        'La forma mÃ¡s cÃ³moda de llegar es el Avant desde Madrid. Es rÃ¡pido y te deja muy bien para una escapada de ida y vuelta o para un finde corto. El bus existe y puede encajar si buscas una opciÃ³n alternativa, pero para este viaje el tren es claramente la opciÃ³n mÃ¡s limpia.',
      howToGetThereExtra:
        'Una vez llegas, lo importante es asumir que Toledo se hace andando. Hay transporte urbano, pero el casco se disfruta sobre todo caminando, y conviene ir con calzado cÃ³modo. No es una ciudad grande, pero sÃ­ tiene cuestas y calles en las que vas mÃ¡s lento de lo que parece en el mapa.',
      budgetIntro:
        'Toledo puede ser una escapada razonable si controlas bien dos cosas: el alojamiento y las entradas. El gran error suele ser reservar deprisa y pagar de mÃ¡s por dormir una sola noche muy cÃ©ntrica. El segundo error es comprar entradas sin pensar si de verdad te da tiempo a aprovecharlas.',
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
          summary: 'AquÃ­ ya merece la pena plantearlo como viaje corto bien hecho.',
        },
        {
          nights: 3,
          label: '3 noches',
          items: [
            { concept: 'Transporte', level: 'Igual de sencillo' },
            { concept: 'Hotel', level: 'Sube segÃºn capricho' },
            { concept: 'Comidas y extras', level: 'Medio o medio-alto' },
            { concept: 'Entradas', level: 'Depende de Puy du Fou' },
          ],
          summary: 'El presupuesto varÃ­a mucho segÃºn si aÃ±ades extras como Puy du Fou.',
        },
      ],
      ticketsText:
        'La Catedral es de las visitas que sÃ­ recomendarÃ­a casi siempre. Es de lo mÃ¡s potente de Toledo y ademÃ¡s va por libre, asÃ­ que no hay mucho debate. Lo que sÃ­ conviene pensar bien es la pulsera turÃ­stica. Si vas una noche y llevas el tiempo justo, puede no compensar. Si vas dos noches y te apetece una Toledo mÃ¡s completa, ahÃ­ sÃ­ gana bastante sentido.',
      ticketsTip:
        'No compres por impulso. En Toledo compensa mÃ¡s ver menos cosas bien que acumular entradas. La Catedral marca 12 â‚¬ la entrada general y la pulsera oficial cuesta 14 â‚¬ para 7 monumentos.',
    },

    editorial: {
      accommodationIntro:
        'En Toledo la ubicaciÃ³n manda bastante. Dormir bien colocado cambia mucho la experiencia, sobre todo si solo vas una noche.',
      commonMistakes: [
        'Pensar que es una ciudad plana y rÃ¡pida de recorrer',
        'Meter demasiados monumentos en un solo dÃ­a',
        'Reservar una noche y querer hacerla como si fueran dos',
        'No dejar tiempo para pasear sin plan cerrado',
        'Infravalorar el calor en meses fuertes',
        'No priorizar bien la ubicaciÃ³n del hotel',
        'Comprar la pulsera turÃ­stica sin saber si realmente la vas a aprovechar',
      ],
      weatherIntro:
        'Con calor fuerte, Toledo se vuelve mÃ¡s exigente de lo que parece. AhÃ­ conviene madrugar, entrar antes en interiores y dejar las horas peores para comer tranquilo o descansar. Con lluvia, la ciudad sigue teniendo gracia, pero hay que asumir otra versiÃ³n del viaje: mÃ¡s monumentos, menos paseo largo y algo menos de mirador.',
      weatherHot: [
        'Madrugar',
        'Catedral y visitas interiores antes',
        'Menos miradores al mediodÃ­a',
        'Cena y paseo al final del dÃ­a',
      ],
      weatherRainy: [
        'MÃ¡s peso de monumentos',
        'Menos callejeo sin rumbo',
        'Reservar mejor los tiempos',
        'Buscar alojamiento muy bien ubicado',
      ],
      firstTimeAdvice: {
        title: 'Mi recomendaciÃ³n si nunca has estado',
        text: 'Si es tu primera vez en Toledo, no me complicarÃ­a demasiado: reservarÃ­a dos noches, dormirÃ­a cÃ©ntrico, harÃ­a Catedral sÃ­ o sÃ­ y luego elegirÃ­a dos o tres visitas mÃ¡s como mucho. La gracia del viaje no estÃ¡ en exprimirlo. EstÃ¡ en que la ciudad te dÃ© sensaciÃ³n de escapada fÃ¡cil, bonita y con bastante personalidad.',
      },
      quickWeekendAdvice: {
        title: 'Si solo quieres un finde fÃ¡cil, esta serÃ­a mi jugada',
        text: 'Tren, hotel cÃ©ntrico, una noche si vas justo o dos si quieres hacerlo bien, Catedral, paseo por la JuderÃ­a, cena sin prisa y una maÃ±ana final tranquila. Sin mÃ¡s. Toledo sale mejor cuando no intentas convertirla en un viaje complicado.',
      },
      closing: {
        title: 'La forma buena de hacer Toledo',
        text: 'Toledo no necesita demasiados adornos. Necesita una buena decisiÃ³n de tiempo, un hotel bien elegido y no querer abarcar mÃ¡s de la cuenta. Una noche funciona sorprendentemente bien. Dos noches es la opciÃ³n mÃ¡s redonda. Tres solo compensa si buscas una versiÃ³n mÃ¡s tranquila o con plan aÃ±adido. Si vas con esa idea clara, es de las escapadas sin coche mÃ¡s fÃ¡ciles y resultonas que puedes hacer.',
      },
    },

    faq: [
      {
        question: 'Â¿Merece la pena Toledo para una sola noche?',
        answer: 'SÃ­. De hecho, es una de las escapadas de una noche mÃ¡s agradecidas desde Madrid.',
      },
      {
        question: 'Â¿Hace falta coche?',
        answer: 'No. Para este viaje, no hace falta.',
      },
      {
        question: 'Â¿Dos noches o tres?',
        answer: 'Dos. Tres solo si quieres hacerlo con mucha calma o aÃ±adir un plan extra.',
      },
      {
        question: 'Â¿Compensa la pulsera turÃ­stica?',
        answer: 'Solo si vas a entrar en varios monumentos y tienes tiempo real para aprovecharla.',
      },
      {
        question: 'Â¿Es una escapada para ir con prisas?',
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
