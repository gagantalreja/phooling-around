const flowers = [
  {
    img: "images/canna-lily-orange.jpg",
    name: "Canna Lily",
    hindi: "केली",
    latin: "Canna indica",
    location: "Hyderabad, IN",
    season: "Summer & Monsoon (Jun–Oct)",
    desc: "The Canna Lily is a bold tropical flower with large, paddle-shaped leaves and vibrant blooms in shades of orange, yellow, and red. Native to the Americas, it thrives in warm, humid climates and is a favourite in Indian gardens and parks."
  },
  {
    img: "images/canna-lily-red.jpg",
    name: "Red Canna Lily",
    hindi: "लाल केली",
    latin: "Canna x generalis",
    location: "Hyderabad, IN",
    season: "Summer & Monsoon (Jun–Oct)",
    desc: "This striking red variety of the Canna Lily produces deep crimson flowers that stand tall above lush green foliage. It loves full sun and moist soil, blooming prolifically through the warm months."
  },
  {
    img: "images/pseuderanthemum.jpg",
    name: "Carruthers Falseface",
    hindi: "गुलशाम",
    latin: "Pseuderanthemum carruthersii",
    location: "Hyderabad, IN",
    season: "Year-round in tropics (peak: Spring–Summer)",
    desc: "Also known as False Face or Shooting Star, this tropical shrub produces elegant spikes of white flowers with purple speckled markings. Native to Polynesia, it's widely used as an ornamental in landscaping across tropical regions."
  },
  {
    img: "images/oleander.jpg",
    name: "Oleander",
    hindi: "कनेर",
    latin: "Nerium oleander",
    location: "Hyderabad, IN",
    season: "Spring & Summer (Mar–Sep)",
    desc: "Oleander is a hardy evergreen shrub that produces clusters of funnel-shaped flowers in shades of pink, red, and white. Extremely drought-tolerant, it's one of the most widely planted ornamental shrubs in warm climates. All parts of the plant are toxic."
  },
  {
    img: "images/plumeria.jpg",
    name: "Plumeria",
    hindi: "चम्पा",
    latin: "Plumeria rubra",
    location: "Hyderabad, IN",
    season: "Summer (Apr–Sep)",
    desc: "Also known as Frangipani or Champa, this tropical tree produces clusters of intensely fragrant, waxy flowers. Sacred in many cultures, its blooms are used in garlands and temple offerings across South and Southeast Asia."
  },
  {
    img: "images/periwinkle.jpg",
    name: "Periwinkle",
    hindi: "सदाबहार",
    latin: "Catharanthus roseus",
    location: "Lucknow, IN",
    season: "Year-round (peak: Summer–Monsoon)",
    desc: "Known as Sadabahar ('ever-blooming') in Hindi, the Periwinkle is a low-maintenance flower that blooms continuously in tropical climates. Its five-petalled pink or white flowers brighten gardens year-round and it has important medicinal properties."
  },
  {
    img: "images/canna-lily-striata.jpg",
    name: "Striped Canna Lily",
    hindi: "धारीदार केली",
    latin: "Canna 'Striata'",
    location: "Hyderabad, IN",
    season: "Summer & Monsoon (Jun–Oct)",
    desc: "A striking cultivar of the Canna Lily prized for its vivid orange blooms and distinctive variegated leaves with bold green and yellow stripes. A favourite for adding both colour and texture to tropical gardens."
  },
  {
    img: "images/oleander-pink.jpg",
    name: "Pink Oleander",
    hindi: "गुलाबी कनेर",
    latin: "Nerium oleander",
    location: "Hyderabad, IN",
    season: "Spring & Summer (Mar–Sep)",
    desc: "A soft pink variety of the Oleander, producing delicate clusters of peach-pink funnel-shaped flowers. Like all oleanders, it is extremely hardy and drought-tolerant but highly toxic in all parts."
  },
  {
    img: "images/portulaca-pink.jpg",
    name: "Moss Rose",
    hindi: "नौ बजिया",
    latin: "Portulaca grandiflora",
    location: "Hyderabad, IN",
    season: "Summer & Monsoon (May–Oct)",
    desc: "The Moss Rose is a low-growing succulent that produces vibrant, rose-like flowers in hot pink and magenta. Its blooms open with the morning sun and close by afternoon. Thrives in poor, sandy soil and intense heat."
  },
  {
    img: "images/portulaca-yellow.jpg",
    name: "Yellow Moss Rose",
    hindi: "पीली नौ बजिया",
    latin: "Portulaca grandiflora",
    location: "Hyderabad, IN",
    season: "Summer & Monsoon (May–Oct)",
    desc: "The yellow variety of Moss Rose produces cheerful golden blooms with bright orange centres. A sun-loving ground cover that's virtually indestructible, it's a common sight in Indian gardens and roadside plantings."
  },
  {
    img: "images/oleander-white.jpg",
    name: "White Oleander",
    hindi: "सफ़ेद कनेर",
    latin: "Nerium oleander",
    location: "Hyderabad, IN",
    season: "Spring & Summer (Mar–Sep)",
    desc: "The white-flowering variety of Oleander produces clusters of pure white, fragrant blooms. Often planted along highways and in public parks for its resilience and year-round greenery. All parts are poisonous."
  },
  {
    img: "images/lantana.jpg",
    name: "Lantana",
    hindi: "राईमुनिया",
    latin: "Lantana camara",
    location: "Hyderabad, IN",
    season: "Year-round (peak: Monsoon)",
    desc: "Lantana produces dense clusters of tiny flowers that shift colour as they age, from pink to purple and lilac. Though beautiful, it's considered invasive in many regions. Its rough, aromatic leaves are a distinguishing feature."
  },
  {
    img: "images/ixora.jpg",
    name: "Ixora",
    hindi: "रुक्मिणी",
    latin: "Ixora coccinea",
    location: "Hyderabad, IN",
    season: "Year-round (peak: Summer–Monsoon)",
    desc: "Also known as Jungle Geranium or Flame of the Woods, Ixora produces dense dome-shaped clusters of vibrant star-shaped flowers. A popular hedge and garden plant across tropical India, it attracts butterflies and is used in traditional medicine."
  },
  {
    img: "images/cordia.jpg",
    name: "Scarlet Cordia",
    hindi: "लाल लसोड़ा",
    latin: "Cordia sebestena",
    location: "Hyderabad, IN",
    season: "Year-round (peak: Summer–Monsoon)",
    desc: "The Scarlet Cordia, also known as Geiger Tree, produces clusters of crinkled orange-red flowers against large, rough sandpaper-textured leaves. Native to the Americas, it thrives in tropical heat and is widely planted as an ornamental street tree."
  },
  {
    img: "images/ixora-pink.jpg",
    name: "Pink Ixora",
    hindi: "गुलाबी रुक्मिणी",
    latin: "Ixora coccinea",
    location: "Hyderabad, IN",
    season: "Year-round (peak: Summer–Monsoon)",
    desc: "The pink variety of Ixora produces soft pastel dome-shaped clusters of delicate star-shaped flowers. Like its red cousin, it's a popular hedge plant across tropical India, attracting butterflies and adding gentle colour to gardens."
  },
  {
    img: "images/tecoma.jpg",
    name: "Yellow Bells",
    hindi: "गोरी-चोरी",
    latin: "Tecoma stans",
    location: "Hyderabad, IN",
    season: "Year-round (peak: Summer–Monsoon)",
    desc: "Yellow Bells, also known as Yellow Elder or Trumpet Bush, produces bright golden trumpet-shaped flowers with orange-red streaks in the throat. An extremely hardy shrub that blooms profusely, it's one of the most common ornamental plants in Indian cities."
  },
  {
    img: "images/cape-honeysuckle.jpg",
    name: "Cape Honeysuckle",
    hindi: "टिकोमा",
    latin: "Tecomaria capensis",
    location: "Hyderabad, IN",
    season: "Year-round (peak: Monsoon)",
    desc: "Cape Honeysuckle is a scrambling shrub that produces clusters of bright orange tubular flowers with protruding stamens. Native to southern Africa, it's widely used as a hedge and ground cover in Indian gardens, attracting sunbirds and butterflies."
  },
  {
    img: "images/trumpet-vine.jpg",
    name: "Trumpet Vine",
    hindi: "तिलोत्तमा",
    latin: "Campsis grandiflora",
    location: "Hyderabad, IN",
    season: "Summer & Monsoon (Jun–Oct)",
    desc: "The Trumpet Vine produces striking red-orange funnel-shaped flowers with long, gracefully protruding yellow stamens. A vigorous climber, it drapes over walls and fences, adding a burst of fiery colour to monsoon gardens."
  },
  {
    img: "images/lantana-yellow.jpg",
    name: "Yellow Lantana",
    hindi: "पीली राईमुनिया",
    latin: "Lantana camara",
    location: "Hyderabad, IN",
    season: "Year-round (peak: Monsoon)",
    desc: "The golden-yellow variety of Lantana produces dense clusters of sunny, warm-toned flowers that cascade over walls and planters. Like all lantanas, it's extremely hardy and drought-tolerant, blooming year-round in tropical climates."
  },
  {
    img: "images/costus.jpg",
    name: "Red Button Ginger",
    hindi: "लाल अदरक फूल",
    latin: "Costus woodsonii",
    location: "Hyderabad, IN",
    season: "Summer & Monsoon (Jun–Oct)",
    desc: "Red Button Ginger produces striking waxy red cone-shaped inflorescences with orange-tipped bracts, emerging from a spiral arrangement of broad, glossy green leaves. A tropical ornamental from Central America, it thrives in shaded, humid garden beds."
  }
];
