import type { Escape } from '@/types'

export const escapes: Escape[] = [
  {
    id: '1',
    slug: 'toledo-ciudad-tres-culturas',
    title: 'Toledo: Ciudad de las Tres Culturas',
    location: 'Toledo',
    departureCity: 'Madrid',
    durationNights: 1,
    budgetLevel: 'bajo',
    budgetEstimate: '90–140 € por persona',
    category: 'cultura',
    tags: ['patrimonio', 'historia', 'sin coche', 'romántico', 'fin de semana corto'],
    shortDescription:
      'Una noche en el corazón del Toledo medieval. Casco histórico Patrimonio de la Humanidad a solo 33 minutos de Madrid en AVE.',
    fullDescription:
      'Toledo es una ciudad que lo tiene todo concentrado en pocos kilómetros cuadrados: catedral gótica, sinagoga medieval, mezquita árabe, murallas y un río que la rodea casi por completo. Fue capital del reino visigodo y durante siglos convivieron aquí tres culturas que dejaron una huella arquitectónica única en Europa. Una noche es suficiente para captar su esencia si llegas pronto y caminas despacio. Sin necesidad de coche: el AVE desde Atocha te deja en el centro en media hora, y desde la estación hay autobús directo al casco histórico.',
    idealFor: ['parejas', 'amigos', 'solo'],
    bestSeason: ['primavera', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '33 min en AVE desde Madrid Atocha',
    heroImage: 'https://picsum.photos/seed/toledo-rio/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/toledo-catedral/800/500',
      'https://picsum.photos/seed/toledo-barrio/800/500',
      'https://picsum.photos/seed/toledo-noche/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Llegada y casco histórico',
        description:
          'Llega por la mañana. Sube al casco histórico en autobús desde la estación y empieza por la Catedral Primada. Come en algún restaurante del centro y dedica la tarde al Museo del Greco y al barrio judío con sus dos sinagogas. Al caer el sol, baja hasta el mirador del Valle para ver Toledo iluminado antes de cenar.',
        highlights: ['Catedral Primada', 'Museo del Greco', 'Barrio judío', 'Mirador del Valle'],
      },
      {
        day: 2,
        title: 'Alcázar y regreso con calma',
        description:
          'Desayuna sin prisa. Visita el Alcázar o el Monasterio de San Juan de los Reyes según tus intereses. Compra marzapán artesanal en alguna confitería cerca de la Catedral antes de tomar el tren de vuelta.',
        highlights: ['Alcázar de Toledo', 'San Juan de los Reyes', 'Marzapán artesanal'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en el casco histórico',
        description:
          'Hay una buena oferta de hoteles boutique dentro de las murallas, muchos instalados en casonas rehabilitadas con patio interior.',
        whyItFits:
          'Estar dentro del casco te permite ver la ciudad al amanecer y por la noche, cuando los grupos turísticos no están. Eso solo ya vale la noche.',
        affiliateUrl: '#',
      },
      {
        name: 'Posada con vistas al Tajo',
        description:
          'Algunas pequeñas posadas se ubican en las laderas del río con vistas directas a la ciudad desde la habitación.',
        whyItFits: 'Más tranquilo y con encanto propio. Implica algo más de caminata hasta el centro.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita guiada nocturna por el Toledo medieval',
        description:
          'Un guía local convierte dos horas en algo realmente distinto: contexto histórico real, historias de las tres culturas y acceso a rincones que no encontrarías solo.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Paseo por la ribera del Tajo',
        description:
          'Ruta tranquila por el río hasta el Puente de San Martín. Sin esfuerzo, con vistas espectaculares de la ciudad desde abajo.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Taller de cuchillería toledana',
        description:
          'Toledo tiene una tradición centenaria en la fabricación de espadas y cuchillos. Algunas tiendas artesanas muestran el proceso de cerca.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: true,
  },
  {
    id: '2',
    slug: 'segovia-acueducto-y-sierra',
    title: 'Segovia: Acueducto y Sierra',
    location: 'Segovia',
    departureCity: 'Madrid',
    durationNights: 1,
    budgetLevel: 'bajo',
    budgetEstimate: '85–135 € por persona',
    category: 'cultura',
    tags: ['patrimonio', 'gastronomía', 'sin coche', 'cochinillo', 'historia'],
    shortDescription:
      'El acueducto romano más impresionante de España, un castillo de cuento y el mejor cochinillo del país. A 30 minutos de Madrid en AVE.',
    fullDescription:
      'Segovia combina dos cosas difíciles de encontrar juntas: un patrimonio histórico sobresaliente y una gastronomía que merece el viaje por sí sola. El acueducto romano del siglo I sigue en pie en el centro de la ciudad, sin una sola gota de argamasa. El Alcázar parece salido de un cuento. Y entre medias, la ciudad tiene una vida real, no solo turística. El cochinillo asado segoviano es uno de esos platos que hay que comer en su lugar de origen al menos una vez.',
    idealFor: ['parejas', 'familia', 'amigos'],
    bestSeason: ['primavera', 'otoño', 'invierno'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '30 min en AVE desde Madrid Chamartín',
    heroImage: 'https://picsum.photos/seed/segovia-acueducto/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/segovia-alcazar/800/500',
      'https://picsum.photos/seed/segovia-ciudad/800/500',
      'https://picsum.photos/seed/segovia-gastronomia/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Acueducto, Catedral y cochinillo',
        description:
          'Llega a media mañana, deja el equipaje en el hotel y empieza por el Acueducto. Sube por la calle Real hacia la Plaza Mayor, visita la Catedral y reserva mesa para comer en alguno de los restaurantes clásicos de cochinillo. Por la tarde, visita el Alcázar y disfruta de las vistas a la sierra desde sus torres.',
        highlights: ['Acueducto romano', 'Catedral de Segovia', 'Cochinillo asado', 'Alcázar'],
      },
      {
        day: 2,
        title: 'Barrio de San Millán y regreso',
        description:
          'Desayuna en alguna cafetería de la Plaza Mayor. Visita la Iglesia de San Millán o da un paseo tranquilo por los barrios menos transitados antes de volver a Madrid.',
        highlights: ['Iglesia de San Millán', 'Paseo por los barrios históricos'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en la Plaza Mayor o cerca',
        description:
          'La Plaza Mayor de Segovia es uno de los centros históricos más bonitos de Castilla. Hay hoteles de gama media muy bien situados.',
        whyItFits:
          'Cenas y desayunos a pie de calle, con el ambiente más genuino de la ciudad a tu puerta.',
        affiliateUrl: '#',
      },
      {
        name: 'Hostal sencillo en el casco',
        description:
          'Para viajes con presupuesto ajustado, Segovia tiene varios hostales bien mantenidos dentro del casco histórico a buen precio.',
        whyItFits: 'Opción práctica si el objetivo es ver la ciudad y no el hotel.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita al Alcázar de Segovia',
        description:
          'El castillo más fotografiado de España. La torre del homenaje ofrece vistas de 360° sobre la ciudad y la sierra de Guadarrama.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Senderismo por el Parque Natural de Guadarrama',
        description:
          'Si tienes energía al segundo día, La Granja de San Ildefonso está a pocos kilómetros. Sus jardines y el palacio real son una extensión natural de la visita.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Visita a los acueductos subterráneos',
        description: 'Menos conocido que el acueducto principal, el sistema de galerías subterráneas también se puede visitar con guía.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: true,
  },
  {
    id: '3',
    slug: 'cuenca-casas-colgadas-hoces',
    title: 'Cuenca: Casas Colgadas y Hoces',
    location: 'Cuenca',
    departureCity: 'Madrid',
    durationNights: 2,
    budgetLevel: 'medio',
    budgetEstimate: '150–220 € por persona',
    category: 'naturaleza',
    tags: ['naturaleza', 'patrimonio', 'sin coche', 'senderismo', 'fotografía'],
    shortDescription:
      'Casas medievales suspendidas sobre el vacío, cañones de roca caliza y arte contemporáneo en el lugar más inesperado. A menos de una hora de Madrid.',
    fullDescription:
      'Cuenca es una de esas ciudades que no terminas de creer hasta que la tienes delante. Las casas colgadas sobre las hoces del Júcar y el Huécar son una imagen que no abandona fácilmente. El casco histórico es Patrimonio de la Humanidad, pero lo que hace a Cuenca especial es la combinación entre ese pasado medieval y la presencia del Museo de Arte Abstracto Español, instalado precisamente en las casas colgadas. Dos noches permiten disfrutar tanto de la ciudad histórica como de las rutas naturales por las hoces sin prisas.',
    idealFor: ['parejas', 'amigos', 'aficionados a la fotografía'],
    bestSeason: ['primavera', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '55 min en AVE desde Madrid Atocha',
    heroImage: 'https://picsum.photos/seed/cuenca-casas/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/cuenca-hoces/800/500',
      'https://picsum.photos/seed/cuenca-museo/800/500',
      'https://picsum.photos/seed/cuenca-puente/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Casco histórico y casas colgadas',
        description:
          'Llega por la mañana y sube al casco antiguo en taxi o a pie desde la estación. Visita las casas colgadas y el Museo de Arte Abstracto. Come en el restaurante del propio museo con vistas a las hoces. Por la tarde, recorre la catedral y los callejones del casco histórico hasta que anochezca.',
        highlights: ['Casas Colgadas', 'Museo de Arte Abstracto Español', 'Catedral de Cuenca'],
      },
      {
        day: 2,
        title: 'Hoz del Júcar y miradores',
        description:
          'Dedica la mañana a la ruta por la Hoz del Júcar. El sendero es accesible y los miradores ofrecen perspectivas únicas de la ciudad desde abajo. Por la tarde, descansa o visita el Museo de las Ciencias de Castilla-La Mancha.',
        highlights: ['Ruta Hoz del Júcar', 'Mirador del Castillo', 'Puente de San Pablo'],
      },
      {
        day: 3,
        title: 'Ciudad de Encantada y regreso',
        description:
          'Si tienes coche o contratas una excursión, la Ciudad Encantada está a 35 km. Si no, dedica la mañana a explorar los barrios bajos de Cuenca antes de coger el tren de vuelta.',
        highlights: ['Ciudad Encantada (opcional con transporte)', 'Barrio de San Martín'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Parador de Cuenca',
        description:
          'Instalado en un convento del siglo XVI frente al puente de San Pablo. La terraza con vistas a las casas colgadas es uno de los mejores desayunos de España.',
        whyItFits: 'La ubicación es insuperable. Si el presupuesto lo permite, es difícil de justificar no quedarse aquí.',
        affiliateUrl: '#',
      },
      {
        name: 'Hotel en el casco histórico',
        description:
          'Hay alternativas más económicas bien situadas en el casco antiguo, con habitaciones sencillas pero funcionales.',
        whyItFits: 'Buena relación calidad-precio para los que prefieren invertir el presupuesto en actividades.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Ruta senderista por las Hoces del Júcar',
        description:
          'El sendero circular desde el casco histórico hasta el mirador del castillo y de vuelta por el río es la actividad más completa de la visita.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Visita guiada al Museo de Arte Abstracto',
        description:
          'Uno de los mejores museos de arte contemporáneo de España, ubicado en el lugar más inesperado. Merece al menos dos horas.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Excursión a la Ciudad Encantada',
        description:
          'Formaciones rocosas kársticas a 35 km. Requiere transporte, pero se puede contratar excursión organizada desde Cuenca.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: true,
  },
  {
    id: '4',
    slug: 'granada-alhambra-albaicin',
    title: 'Granada: Alhambra y Albaicín',
    location: 'Granada',
    departureCity: 'Madrid',
    durationNights: 2,
    budgetLevel: 'medio',
    budgetEstimate: '160–240 € por persona',
    category: 'cultura',
    tags: ['patrimonio', 'árabe', 'tapas', 'sin coche', 'romántico'],
    shortDescription:
      'La Alhambra es uno de los monumentos más impresionantes del mundo. El Albaicín, las tapas gratuitas y el ambiente de Granada hacen el resto.',
    fullDescription:
      'Granada es una escapada completa por sí sola. La Alhambra requiere reserva con mucha antelación pero merece cada gestión: el palacio nazarí es un ejercicio de arquitectura y belleza que no tiene equivalente en España. Más allá de la Alhambra, el barrio del Albaicín tiene el carácter de un pueblo árabe con vistas al palacio desde el mirador de San Nicolás. Y las tapas de Granada tienen una peculiaridad que no existe en casi ningún otro sitio: son gratuitas con cada consumición.',
    idealFor: ['parejas', 'amigos', 'cultura'],
    bestSeason: ['primavera', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '3h en AVE desde Madrid Atocha',
    heroImage: 'https://picsum.photos/seed/granada-alhambra/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/granada-albaicin/800/500',
      'https://picsum.photos/seed/granada-tapas/800/500',
      'https://picsum.photos/seed/granada-sierra/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Llegada y Albaicín',
        description:
          'Llega a mediodía. Deja el equipaje y sube al Albaicín a pie o en taxi. Come cerca de la Plaza Larga y recorre el barrio despacio. Al atardecer, quédate en el mirador de San Nicolás para ver la Alhambra con la sierra de fondo. Cena en el centro con tapas gratuitas.',
        highlights: ['Barrio del Albaicín', 'Mirador de San Nicolás', 'Tapas del centro'],
      },
      {
        day: 2,
        title: 'Alhambra (reserva obligatoria)',
        description:
          'Dedica el día entero a la Alhambra. Entra a primera hora. El recorrido completo con el palacio nazarí, el Generalife y la Alcazaba necesita al menos 4 horas tranquilas. Por la tarde, visita la Capilla Real con los sepulcros de los Reyes Católicos y pasea por las calles del centro.',
        highlights: ['Palacio Nazarí', 'Generalife', 'Alcazaba', 'Capilla Real'],
      },
      {
        day: 3,
        title: 'Sacromonte y regreso',
        description:
          'Mañana tranquila por el barrio del Sacromonte, con sus cuevas y su historia flamenca. Busca algún pequeño mercado de artesanía antes de coger el tren de vuelta.',
        highlights: ['Barrio del Sacromonte', 'Cuevas', 'Mercado artesanal'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en el centro histórico',
        description:
          'La zona entre la Catedral y la Alhambra concentra la mayor oferta hotelera. Busca algo cerca de la Plaza Nueva para moverse a pie a todas partes.',
        whyItFits:
          'Posición central para Albaicín, Alhambra y zona de tapas sin necesitar transporte.',
        affiliateUrl: '#',
      },
      {
        name: 'Casa rural en el Albaicín',
        description:
          'Hay pequeñas casas con patio interior y vistas a la Alhambra en el propio barrio árabe. Más especial pero con callejuelas empinadas.',
        whyItFits: 'La experiencia de quedarse en el Albaicín compensa el esfuerzo logístico.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita a la Alhambra (reserva con antelación)',
        description:
          'Imprescindible. Las entradas se agotan semanas antes. Reserva online en la web oficial en cuanto tengas fechas confirmadas.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Espectáculo flamenco en el Sacromonte',
        description:
          'El flamenco en las cuevas del Sacromonte tiene un ambiente que no se reproduce en ningún tablao de ciudad grande.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Tour de tapas por el centro',
        description:
          'Las tapas de Granada son gratuitas, pero un guía local te lleva a los bares menos obvios con las mejores raciones.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: true,
  },
  {
    id: '5',
    slug: 'bilbao-guggenheim-pintxos',
    title: 'Bilbao: Guggenheim y Pintxos',
    location: 'Bilbao',
    departureCity: 'Madrid',
    durationNights: 2,
    budgetLevel: 'medio',
    budgetEstimate: '180–260 € por persona',
    category: 'gastronomia',
    tags: ['arte', 'gastronomía', 'pintxos', 'sin coche', 'moderno'],
    shortDescription:
      'El museo que transformó una ciudad industrial en referente cultural europeo, rodeado de la mejor cultura del pintxo del mundo.',
    fullDescription:
      'Bilbao es uno de los casos más estudiados de regeneración urbana del siglo XX. En los años 90 era una ciudad industrial en declive; hoy es un destino cultural de primera línea gracias, en gran parte, al Museo Guggenheim de Frank Gehry. Pero más allá del museo, Bilbao tiene un casco viejo con siete calles llenas de pintxos a precios razonables, el Mercado de la Ribera, el Museo de Bellas Artes y una vida urbana real y acogedora. Dos noches permiten ver el museo con calma y explorar el casco viejo sin agobios.',
    idealFor: ['parejas', 'amigos', 'amantes del arte y la gastronomía'],
    bestSeason: ['primavera', 'verano', 'otoño'],
    transportType: 'avion',
    carRequired: false,
    travelTime: '1h en vuelo desde Madrid o 5h en tren',
    heroImage: 'https://picsum.photos/seed/bilbao-guggenheim/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/bilbao-pintxos/800/500',
      'https://picsum.photos/seed/bilbao-casco/800/500',
      'https://picsum.photos/seed/bilbao-rio/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Casco Viejo y primera ronda de pintxos',
        description:
          'Llega por la mañana. Instálate y recorre el casco viejo: las Siete Calles, la Plaza Nueva y el Mercado de la Ribera. Come algo en el mercado. Por la tarde pasea por la ría y acércate al Guggenheim por fuera para tener una primera impresión. Por la noche, ronda de pintxos por el casco viejo.',
        highlights: ['Siete Calles', 'Mercado de la Ribera', 'Plaza Nueva', 'Pintxos nocturnos'],
      },
      {
        day: 2,
        title: 'Guggenheim y Museo de Bellas Artes',
        description:
          'Entra al Guggenheim a primera hora. El museo necesita al menos 3 horas si quieres verlo bien. Come cerca del museo y dedica la tarde al Museo de Bellas Artes, que tiene una colección notable y está infravisitado. Cena en algún restaurante del Ensanche.',
        highlights: ['Museo Guggenheim', 'Museo de Bellas Artes', 'Ensanche bilbaíno'],
      },
      {
        day: 3,
        title: 'Getxo o regreso tranquilo',
        description:
          'Si tienes tiempo antes del vuelo, el metro te lleva en 20 minutos a Getxo, un pueblo costero con paseo marítimo y casas señoriales del siglo XIX.',
        highlights: ['Getxo', 'Puente Colgante de Bizkaia'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en el Ensanche',
        description:
          'El Ensanche de Bilbao, junto a la Gran Vía, es el barrio más cómodo para moverse: cerca del Guggenheim, bien conectado con el metro y con buena oferta gastronómica.',
        whyItFits: 'Equilibrio perfecto entre precio, ubicación y acceso al transporte público.',
        affiliateUrl: '#',
      },
      {
        name: 'Hotel en el Casco Viejo',
        description:
          'Quedarse en el casco viejo te pone en el centro de la vida nocturna y los pintxos, aunque suele ser más ruidoso.',
        whyItFits: 'Ideal si el plan es cenar tarde y recorrer los bares a pie.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita al Museo Guggenheim Bilbao',
        description:
          'La colección permanente y las exposiciones temporales justifican el viaje. Compra entrada online con antelación para evitar colas.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Ruta de pintxos guiada por el casco viejo',
        description:
          'Un guía gastronómico te lleva por bares menos conocidos donde los pintxos son mejores y los turistas escasean.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Excursión al Puente Colgante de Bizkaia',
        description:
          'A 20 minutos en metro, el puente colgante más antiguo del mundo es Patrimonio de la Humanidad y merece una mañana.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: true,
  },
  {
    id: '6',
    slug: 'san-sebastian-gastronomia-playa',
    title: 'San Sebastián: Gastronomía y Playa',
    location: 'San Sebastián',
    departureCity: 'Madrid',
    durationNights: 2,
    budgetLevel: 'alto',
    budgetEstimate: '250–380 € por persona',
    category: 'gastronomia',
    tags: ['gastronomía', 'playa', 'pintxos', 'lujo asequible', 'romántico'],
    shortDescription:
      'La ciudad con más estrellas Michelin por metro cuadrado del mundo. Parte Vieja, pintxos, La Concha y el mejor ambiente gastronómico de España.',
    fullDescription:
      'San Sebastián tiene algo que pocas ciudades del mundo pueden ofrecer: playas urbanas de primera categoría a diez minutos caminando de los mejores restaurantes del continente. La Parte Vieja concentra una densidad de bares de pintxos sin equivalente. La bahía de La Concha, con su paseo marítimo y su isla Santa Clara al fondo, es considerada una de las playas más bonitas del mundo. Y si el presupuesto lo permite, una cena en alguno de los restaurantes con estrella Michelin de los alrededores es una experiencia que no olvidarás.',
    idealFor: ['parejas', 'grupos de amigos', 'amantes de la gastronomía'],
    bestSeason: ['primavera', 'verano', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '5h en tren desde Madrid o 1h en vuelo',
    heroImage: 'https://picsum.photos/seed/sansebastian-concha/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/sansebastian-pintxos/800/500',
      'https://picsum.photos/seed/sansebastian-parte-vieja/800/500',
      'https://picsum.photos/seed/sansebastian-monte/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Llegada, La Concha y Parte Vieja',
        description:
          'Llega al mediodía. Deja el equipaje y camina hasta La Concha. Paseo por el malecón y, si es verano, baño en la playa. Por la tarde, recorre la Parte Vieja despacio. Al anochecer, comienza la ruta de pintxos: Ganbara, Bar Txepetxa, La Viña. Cena sin prisa.',
        highlights: ['Playa de La Concha', 'Parte Vieja', 'Ruta de pintxos'],
      },
      {
        day: 2,
        title: 'Monte Igueldo y gastronomía',
        description:
          'Sube en funicular al Monte Igueldo para tener las mejores vistas de la bahía. Come en algún restaurante de la Parte Vieja o, si tienes reserva, en alguno con reconocimiento gastronómico. Por la tarde, visita el Museo San Telmo o simplemente pasea por el Ensanche.',
        highlights: ['Monte Igueldo', 'Museo San Telmo', 'Ensanche donostiarra'],
      },
      {
        day: 3,
        title: 'Mercado de La Bretxa y regreso',
        description:
          'Desayuno en alguna pastelería de la Parte Vieja. Visita el Mercado de La Bretxa antes de salir hacia la estación.',
        highlights: ['Mercado de La Bretxa', 'Pastelería vasca'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel frente a La Concha',
        description:
          'Los hoteles con vistas directas a la bahía son los más solicitados. La relación calidad-precio es justa teniendo en cuenta la ubicación.',
        whyItFits:
          'Despertarse con vistas a La Concha es parte de la experiencia. No hay muchos sitios donde esto sea posible en una ciudad de este nivel.',
        affiliateUrl: '#',
      },
      {
        name: 'Hotel en la Parte Vieja',
        description:
          'Más económico que el frente de playa pero con la ventaja de estar en el corazón gastronómico de la ciudad.',
        whyItFits: 'Si el objetivo son los pintxos y el ambiente nocturno, es la mejor opción.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Ruta de pintxos por la Parte Vieja',
        description:
          'La Parte Vieja es el lugar del mundo con más bares por metro cuadrado. No necesitas guía, pero sí criterio: busca los que tienen los mostradores más cargados.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Excursión gastronómica a Getaria o Hondarribia',
        description:
          'A 20 minutos en autobús, estos dos pueblos costeros tienen una escena gastronómica extraordinaria con precios más razonables que Donostia.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Cena en restaurante con reconocimiento Michelin',
        description:
          'Los alrededores de San Sebastián concentran más estrellas Michelin por kilómetro cuadrado que ningún otro lugar del mundo. Merece la reserva.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: true,
  },
  {
    id: '7',
    slug: 'cadiz-atlantico-historia',
    title: 'Cádiz: Atlántico e Historia',
    location: 'Cádiz',
    departureCity: 'Sevilla',
    durationNights: 2,
    budgetLevel: 'medio',
    budgetEstimate: '140–200 € por persona',
    category: 'playa',
    tags: ['playa', 'historia', 'atlántico', 'carnaval', 'gastronomía'],
    shortDescription:
      'La ciudad más antigua de Occidente, rodeada de océano Atlántico por tres de sus cuatro lados. Pescado frito, playas urbanas y un ambiente único.',
    fullDescription:
      'Cádiz tiene algo que pocas ciudades en Europa pueden decir: está casi completamente rodeada de mar. Construida sobre una península que se adentra en el Atlántico, tiene playas en el casco histórico y un ambiente que mezcla historia milenaria con una vida callejera desenfadada. El pescado frito gaditano es una de las grandes cocinas de España, y el carnaval de Cádiz, aunque muy puntual en el tiempo, es el más especial del país. Desde Sevilla, el tren o el bus llegan en poco más de una hora.',
    idealFor: ['parejas', 'amigos', 'familia'],
    bestSeason: ['primavera', 'verano', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '1h 40 min en tren desde Sevilla Santa Justa',
    heroImage: 'https://picsum.photos/seed/cadiz-oceano/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/cadiz-caleta/800/500',
      'https://picsum.photos/seed/cadiz-catedral/800/500',
      'https://picsum.photos/seed/cadiz-mercado/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Llegada y casco histórico',
        description:
          'Llega a mediodía. Recorre el casco histórico a pie: la Plaza de San Juan de Dios, la Catedral y su cripta, el barrio del Pópulo. Come en la Freiduría Las Flores o en el Mercado Central. Por la tarde, pasea hasta la Playa de La Caleta si hace buen tiempo.',
        highlights: ['Catedral de Cádiz', 'Barrio del Pópulo', 'Mercado Central', 'Playa de La Caleta'],
      },
      {
        day: 2,
        title: 'Torre Tavira y atardecer atlántico',
        description:
          'Visita la Torre Tavira, el mirador más alto de la ciudad, para tener una perspectiva aérea de Cádiz y el mar. Por la tarde, según la época del año, date un baño en la Playa de La Victoria o simplemente disfruta del paseo marítimo al atardecer.',
        highlights: ['Torre Tavira', 'Playa de La Victoria', 'Paseo Marítimo'],
      },
      {
        day: 3,
        title: 'El Puerto de Santa María y regreso',
        description:
          'El catamarán cruza la bahía hasta El Puerto de Santa María en 45 minutos. Bodegas, buen marisco y una luz distinta. Regresa a Sevilla por la tarde.',
        highlights: ['El Puerto de Santa María', 'Bodegas de Jerez', 'Catamarán por la bahía'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en el casco histórico',
        description:
          'El casco histórico de Cádiz es pequeño y manejable a pie. Los hoteles dentro de las murallas son los más convenientes.',
        whyItFits: 'Sin coche y con todo a distancia caminable, quedarse en el centro es la opción más práctica.',
        affiliateUrl: '#',
      },
      {
        name: 'Apartamento cerca de La Caleta',
        description:
          'Alquilar un apartamento cerca de la Playa de La Caleta tiene mucho sentido si vas en temporada alta y quieres cocinar algo por tu cuenta.',
        whyItFits: 'Más espacio y flexibilidad, especialmente útil para grupos.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita a la Catedral y su cripta',
        description:
          'La Catedral de Cádiz domina el skyline de la ciudad desde el mar. La cripta alberga los restos de Manuel de Falla. La terraza ofrece vistas panorámicas.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Catamarán a El Puerto de Santa María',
        description:
          'Cruzar la bahía en barco es una experiencia en sí misma. El Puerto tiene su propia personalidad gastronómica y bodeguera.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Excursión a Vejer de la Frontera',
        description:
          'Uno de los pueblos más bonitos de España está a 50 km. Blanco, con encanto árabe y vistas a los campos. Necesita transporte o autobús.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: false,
  },
  {
    id: '8',
    slug: 'cordoba-mezquita-patios',
    title: 'Córdoba: Mezquita y Patios',
    location: 'Córdoba',
    departureCity: 'Madrid',
    durationNights: 1,
    budgetLevel: 'bajo',
    budgetEstimate: '80–130 € por persona',
    category: 'cultura',
    tags: ['patrimonio', 'árabe', 'patios', 'sin coche', 'historia'],
    shortDescription:
      'La Mezquita-Catedral es uno de los monumentos más impresionantes del mundo islámico. Los patios floridos y la judería completan una escapada perfecta.',
    fullDescription:
      'Córdoba fue en el siglo X la ciudad más grande y sofisticada de Europa occidental. La Mezquita-Catedral resume esa historia de forma física: un bosque de columnas y arcos bicolores que hace más de diez siglos era la segunda mezquita más grande del mundo. El barrio de la Judería, el puente romano sobre el Guadalquivir y los patios floridos de la ciudad antigua complementan un día o noche que difícilmente desilusiona. El AVE desde Madrid llega en menos de dos horas.',
    idealFor: ['parejas', 'amigos', 'solo', 'cultura'],
    bestSeason: ['primavera', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '1h 45 min en AVE desde Madrid Atocha',
    heroImage: 'https://picsum.photos/seed/cordoba-mezquita/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/cordoba-patios/800/500',
      'https://picsum.photos/seed/cordoba-juderia/800/500',
      'https://picsum.photos/seed/cordoba-puente/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mezquita, Judería y Alcázar',
        description:
          'Llega a primera hora de la mañana. Entra a la Mezquita antes de las 10 para evitar grupos grandes. Dedica la mañana al interior y al Patio de los Naranjos. Come en algún restaurante de la Judería. Por la tarde, visita el Alcázar de los Reyes Cristianos y sus jardines. Al caer el sol, cruza el puente romano para ver la Mezquita desde el otro lado del río.',
        highlights: ['Mezquita-Catedral', 'Judería histórica', 'Alcázar de los Reyes Cristianos', 'Puente Romano'],
      },
      {
        day: 2,
        title: 'Patios y regreso',
        description:
          'Córdoba es famosa por sus patios floridos, especialmente en mayo durante el Festival de los Patios. Pero incluso fuera de esa época, muchos patios del barrio de San Basilio están abiertos al público. Explóralos antes de coger el tren de vuelta.',
        highlights: ['Barrio de San Basilio', 'Patios floridos', 'Plaza de la Corredera'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en la Judería',
        description:
          'Quedarse dentro de la Judería o a pocos metros de la Mezquita sitúa todos los puntos de interés a distancia caminable.',
        whyItFits: 'Comodidad máxima para una estancia corta. Sin necesidad de ningún transporte local.',
        affiliateUrl: '#',
      },
      {
        name: 'Hostal con patio interior',
        description:
          'Córdoba tiene una tradición de casas con patio. Algunos hostales conservan ese elemento arquitectónico y lo convierten en la zona común más bonita del alojamiento.',
        whyItFits: 'Experiencia local auténtica a precio contenido.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita matinal a la Mezquita-Catedral',
        description:
          'Entrar a primera hora, antes de las 10, marca la diferencia. La luz es distinta y los grupos turísticos aún no han llegado.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Excursión a Medina Azahara',
        description:
          'A 8 km, las ruinas del palacio califal del siglo X son uno de los yacimientos arqueológicos más importantes de España. Requiere transporte.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Ruta por los patios del barrio de San Basilio',
        description:
          'Los patios floridos de Córdoba son un elemento arquitectónico y cultural único. Vale la pena dedicarles una mañana tranquila.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: true,
  },
  {
    id: '9',
    slug: 'salamanca-piedra-dorada',
    title: 'Salamanca: La Piedra Dorada',
    location: 'Salamanca',
    departureCity: 'Madrid',
    durationNights: 1,
    budgetLevel: 'bajo',
    budgetEstimate: '75–120 € por persona',
    category: 'cultura',
    tags: ['universidad', 'arquitectura', 'plateresco', 'joven', 'patrimonio'],
    shortDescription:
      'La ciudad universitaria más antigua de España. Arquitectura plateresca, la Plaza Mayor más elegante del país y un ambiente vivo gracias a los estudiantes.',
    fullDescription:
      'Salamanca tiene dos cosas que la distinguen de cualquier otra ciudad castellana: la piedra arenisca dorada que cubre todos sus edificios históricos y la energía que le dan sus 30.000 estudiantes universitarios. La Plaza Mayor, considerada por muchos la más bonita de España, es el centro de todo. La universidad, fundada en 1218, tiene una fachada plateresca que merece observarse con calma buscando la rana escondida. Una noche es suficiente para captar todo esto.',
    idealFor: ['parejas', 'amigos', 'solo', 'jóvenes'],
    bestSeason: ['primavera', 'otoño'],
    transportType: 'bus',
    carRequired: false,
    travelTime: '2h 30 min en autobús desde Madrid Estación Sur',
    heroImage: 'https://picsum.photos/seed/salamanca-plaza/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/salamanca-catedral/800/500',
      'https://picsum.photos/seed/salamanca-universidad/800/500',
      'https://picsum.photos/seed/salamanca-noche/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Plaza Mayor, Universidad y Catedrales',
        description:
          'Llega a mediodía. Instálate y ve directamente a la Plaza Mayor para tomar algo y orientarte. Visita la fachada de la Universidad buscando la rana. Recorre las dos catedrales (la vieja y la nueva comparten edificio). Por la tarde, pasea hasta la Clerecía y la Casa de las Conchas. Cena en algún restaurante de la Plaza Mayor.',
        highlights: ['Plaza Mayor', 'Fachada de la Universidad', 'Catedral Vieja y Nueva', 'Casa de las Conchas'],
      },
      {
        day: 2,
        title: 'Huerto de Calixto y Melibea y regreso',
        description:
          'Desayuna en alguna de las cafeterías de la Plaza Mayor. Visita el Huerto de Calixto y Melibea para tener las mejores vistas de las catedrales desde fuera. Toma el autobús de vuelta a Madrid por la tarde.',
        highlights: ['Huerto de Calixto y Melibea', 'Río Tormes', 'Barrio del Oeste'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel cerca de la Plaza Mayor',
        description:
          'Hay hoteles de gama media bien mantenidos en el entorno de la Plaza Mayor. La oferta es amplia y los precios razonables para una ciudad universitaria.',
        whyItFits: 'Posición perfecta para moverse a pie a todo el casco histórico.',
        affiliateUrl: '#',
      },
      {
        name: 'Pensión o hostal estudiantil',
        description:
          'Salamanca tiene una tradición de alojamientos para estudiantes: limpios, económicos y bien situados en el centro.',
        whyItFits: 'La opción más económica sin renunciar a una buena ubicación.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita guiada a la Universidad de Salamanca',
        description:
          'La universidad más antigua de España tiene un interior que no se ve desde la calle. Una visita guiada de 45 minutos abre puertas literalmente.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Subida a la torre de la Clerecía',
        description:
          'Desde las torres barrocas de la Clerecía, las vistas del tejado de Salamanca y las catedrales son únicas.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Ruta nocturna por el casco histórico',
        description:
          'La piedra dorada de Salamanca, bien iluminada por la noche, da a la ciudad una atmósfera diferente. Vale la pena salir después de cenar.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: false,
  },
  {
    id: '10',
    slug: 'girona-barrio-medieval-costa-brava',
    title: 'Girona: Medieval y Costa Brava',
    location: 'Girona',
    departureCity: 'Barcelona',
    durationNights: 2,
    budgetLevel: 'medio',
    budgetEstimate: '145–210 € por persona',
    category: 'ciudad',
    tags: ['medieval', 'Juego de Tronos', 'costa brava', 'gastronomía', 'sin coche'],
    shortDescription:
      'Casco medieval perfectamente conservado, judería histórica y a 40 minutos de Barcelona en AVE. Base perfecta para explorar la Costa Brava.',
    fullDescription:
      'Girona es una ciudad que funciona muy bien como destino por sí sola o como base para explorar la Costa Brava. Su casco medieval, rodeado de murallas por las que se puede caminar, es uno de los mejor conservados de la península. La judería, la Catedral con la nave gótica más ancha del mundo y las casas de colores reflejadas en el río Onyar son los iconos de una ciudad que cada año gana más visitantes, pero que sabe mantener su propia vida.',
    idealFor: ['parejas', 'amigos', 'amantes de la historia'],
    bestSeason: ['primavera', 'verano', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '38 min en AVE desde Barcelona Sants',
    heroImage: 'https://picsum.photos/seed/girona-casas-color/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/girona-catedral/800/500',
      'https://picsum.photos/seed/girona-juderia/800/500',
      'https://picsum.photos/seed/girona-muralla/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Barri Vell y judería',
        description:
          'Llega a mediodía desde Barcelona. Recorre el Barri Vell a pie: la judería (Call Jueu), la Catedral y el Museo de Historia de la Ciudad. Come en alguno de los restaurantes del centro histórico. Por la tarde, camina por las murallas medievales para ver la ciudad desde arriba. Cena en la zona nueva junto al río.',
        highlights: ['Barri Vell', 'Call Jueu', 'Catedral de Girona', 'Paseo por las murallas'],
      },
      {
        day: 2,
        title: 'Costa Brava o Dalí en Figueres',
        description:
          'Con el tren puedes llegar a Figueres en 30 minutos para visitar el Teatro-Museo Dalí, el museo más visitado de Cataluña después del Sagrada Família. O, si prefieres playa, un bus te deja en alguna cala de la Costa Brava en verano.',
        highlights: ['Teatro-Museo Dalí en Figueres', 'Calas de la Costa Brava (verano)'],
      },
      {
        day: 3,
        title: 'Mercado del Lleó y regreso',
        description:
          'Desayuna bien. Visita el Mercado del Lleó, el mercado municipal de Girona con productos locales excelentes. Coge el AVE de vuelta a Barcelona tranquilamente.',
        highlights: ['Mercado del Lleó', 'Paseo por las casas del Onyar'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en el Barri Vell',
        description:
          'Quedarse dentro del casco histórico permite disfrutar de Girona por la mañana temprano y por la noche, cuando los visitantes del día ya no están.',
        whyItFits: 'La experiencia de Girona es mucho mejor si te quedas dentro de las murallas.',
        affiliateUrl: '#',
      },
      {
        name: 'Hotel en la zona nueva junto al Onyar',
        description:
          'La zona nueva de Girona, junto al río, tiene buenos hoteles de gama media a mejor precio que el casco histórico.',
        whyItFits: 'Cinco minutos a pie del casco medieval, con más oferta gastronómica y mejor precio.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Paseo por las murallas medievales',
        description:
          'El camino de ronda por las murallas da la vuelta al casco histórico y ofrece vistas sobre los tejados medievales. Gratuito y accesible.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Visita al Teatro-Museo Dalí en Figueres',
        description:
          'A 30 minutos en tren, el museo más surrealista del mundo diseñado por el propio Salvador Dalí. Compra entrada online.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Ruta en kayak por la Costa Brava',
        description:
          'En verano hay empresas que organizan rutas en kayak por las calas más bonitas de la Costa Brava desde varios puntos de acceso en bus.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: false,
  },
  {
    id: '11',
    slug: 'valencia-ciudad-luz-artes',
    title: 'Valencia: Ciudad de la Luz',
    location: 'Valencia',
    departureCity: 'Madrid',
    durationNights: 2,
    budgetLevel: 'medio',
    budgetEstimate: '150–230 € por persona',
    category: 'ciudad',
    tags: ['paella', 'arquitectura', 'playa', 'sin coche', 'gastronomía', 'tren'],
    shortDescription:
      'Paella auténtica, Ciudad de las Artes y las Ciencias, playa urbana y el barrio del Carmen. Valencia combina ciudad y costa sin esfuerzo.',
    fullDescription:
      'Valencia tiene una escala humana que la hace muy cómoda para una escapada corta. La Ciudad de las Artes y las Ciencias es una de las obras arquitectónicas más espectaculares de Europa contemporánea. El barrio del Carmen concentra la vida más auténtica de la ciudad. La playa está a 20 minutos en metro. Y la paella, que aquí no se parece en nada a la que comes fuera de la Comunidad Valenciana, merece una comida larga en algún restaurante de la Albufera o junto al mar.',
    idealFor: ['parejas', 'familia', 'amigos', 'gastronomía'],
    bestSeason: ['primavera', 'verano', 'otoño'],
    transportType: 'tren',
    carRequired: false,
    travelTime: '1h 40 min en AVE desde Madrid Atocha',
    heroImage: 'https://picsum.photos/seed/valencia-artes/1200/600',
    galleryImages: [
      'https://picsum.photos/seed/valencia-playa/800/500',
      'https://picsum.photos/seed/valencia-carmen/800/500',
      'https://picsum.photos/seed/valencia-paella/800/500',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ciudad de las Artes, Ciudad Vieja y Carmen',
        description:
          'Llega por la mañana. Ve directo a la Ciudad de las Artes y las Ciencias para verla con buena luz. Come cerca y luego recorre el jardín del Turia hasta la Ciudad Vieja. Dedica la tarde al barrio del Carmen: callejuelas, arte urbano y vida real. Cena en El Carmen.',
        highlights: ['Ciudad de las Artes y las Ciencias', 'Jardín del Turia', 'Barrio del Carmen'],
      },
      {
        day: 2,
        title: 'Mercado Central, Catedral y playa',
        description:
          'Desayuna en el Mercado Central, uno de los mercados de hierro más bonitos de Europa. Visita la Catedral y sube al Micalet para ver la ciudad desde arriba. Come paella auténtica. Por la tarde, coge el metro hasta la playa de La Malvarrosa.',
        highlights: ['Mercado Central', 'Catedral y el Micalet', 'Paella valenciana', 'Playa de La Malvarrosa'],
      },
      {
        day: 3,
        title: 'La Albufera y regreso',
        description:
          'Si tienes tiempo antes del tren, un autobús te lleva en 30 minutos a La Albufera. El lago, los arrozales y un paseo en barca son la antítesis perfecta del ritmo urbano.',
        highlights: ['Parque Natural de La Albufera', 'Paseo en barca'],
      },
    ],
    accommodationRecommendations: [
      {
        name: 'Hotel en el barrio del Carmen o Ciudad Vieja',
        description:
          'El centro histórico de Valencia es la mejor base para moverse a pie a la mayoría de puntos de interés.',
        whyItFits: 'Sin coche y con metro eficiente, estar en el centro hace la escapada muy sencilla.',
        affiliateUrl: '#',
      },
      {
        name: 'Apartamento en la zona de la playa',
        description:
          'Si el objetivo principal es el mar y la gastronomía de la Malvarrosa, quedarse en la zona de playa tiene más sentido.',
        whyItFits: 'Más espacio y cocina propia. Buena opción para familias o grupos de amigos.',
        affiliateUrl: '#',
      },
    ],
    activityRecommendations: [
      {
        name: 'Visita a la Ciudad de las Artes y las Ciencias',
        description:
          'El complejo arquitectónico de Calatrava es impresionante tanto por fuera como por dentro. El Oceanogràfic, L\'Hemisfèric y el Museu de les Ciències justifican el día entero.',
        type: 'principal',
        affiliateUrl: '#',
      },
      {
        name: 'Comida de paella en La Albufera',
        description:
          'La paella auténtica valenciana se hace con arroz de la Albufera. Algunos restaurantes del lago te dan la experiencia completa: barca + paella.',
        type: 'alternativa',
        affiliateUrl: '#',
      },
      {
        name: 'Tour de street art por el Carmen',
        description:
          'El barrio del Carmen tiene una de las concentraciones de arte urbano más densas de España. Un guía especializado lo convierte en algo realmente interesante.',
        type: 'opcional',
        affiliateUrl: '#',
      },
    ],
    affiliateLinks: { hotelUrl: '#', activityUrl: '#', transportUrl: '#' },
    featured: false,
  },
]

export const departureCities = Array.from(new Set(escapes.map(e => e.departureCity))).sort()
