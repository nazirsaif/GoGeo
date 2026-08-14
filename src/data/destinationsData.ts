export interface DestinationInfo {
  name: string;
  isoA3: string;
  lat: number;
  lng: number;
  flag: string;
  imageUrl: string;
  description: string;
  services: string[];
}

// Services verified from the official GoGeo Buses LTD reference document
const standardServices = [
  "Corporate & Employee Transport",
  "Airport & Hotel Transfers",
  "Event & Conference Transport",
  "Private Coach & Minibus Hire",
  "School & Educational Transport",
  "Sports-Team Transport",
  "Wedding Transport",
  "Multi-day Coach Tours"
];

export const destinationsData: DestinationInfo[] = [
  {
    name: "United Kingdom",
    isoA3: "GBR",
    lat: 53.0,
    lng: -2.0,
    flag: "🇬🇧",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/330px-London_Skyline_%28125508655%29.jpeg",
    description: "Experience premium charter bus rentals across the UK, from the historic streets of London to the scenic highlands.",
    services: [standardServices[0], standardServices[1], standardServices[3], standardServices[4]]
  },
  {
    name: "France",
    isoA3: "FRA",
    lat: 46.2276,
    lng: 2.2137,
    flag: "🇫🇷",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/330px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    description: "Luxury travel in France and Monaco. Ideal for fashion weeks, Riviera tours, and corporate events in Paris.",
    services: [standardServices[2], standardServices[7], standardServices[1], standardServices[3]]
  },
  {
    name: "Germany",
    isoA3: "DEU",
    lat: 51.1657,
    lng: 10.4515,
    flag: "🇩🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/330px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg",
    description: "Reliable and comfortable group transport across Germany and Central Europe, perfect for trade shows and regional tours.",
    services: [standardServices[0], standardServices[2], standardServices[3], standardServices[7]]
  },
  {
    name: "Italy",
    isoA3: "ITA",
    lat: 41.8719,
    lng: 12.5674,
    flag: "🇮🇹",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/330px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg",
    description: "Explore the beauty of Italy with our top-tier coach services, covering Rome, Milan, Naples, and beyond.",
    services: [standardServices[7], standardServices[6], standardServices[3], standardServices[1]]
  },
  {
    name: "Spain",
    isoA3: "ESP",
    lat: 40.4637,
    lng: -3.7492,
    flag: "🇪🇸",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg/330px-Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg",
    description: "Enjoy seamless group travel in Spain. We cover major hubs like Barcelona, Madrid, and Seville.",
    services: [standardServices[2], standardServices[5], standardServices[3], standardServices[7]]
  },
  {
    name: "Netherlands",
    isoA3: "NLD",
    lat: 52.1326,
    lng: 5.2913,
    flag: "🇳🇱",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Imagen_de_los_canales_conc%C3%A9ntricos_en_%C3%81msterdam.png/330px-Imagen_de_los_canales_conc%C3%A9ntricos_en_%C3%81msterdam.png",
    description: "Efficient and modern charter services in the Netherlands, perfect for exploring Amsterdam and the surrounding regions.",
    services: [standardServices[1], standardServices[0], standardServices[3]]
  },
  {
    name: "Switzerland",
    isoA3: "CHE",
    lat: 46.8182,
    lng: 8.2275,
    flag: "🇨🇭",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/330px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg",
    description: "Premium coach travel through the Swiss Alps and major cities like Zurich and Geneva.",
    services: ["Ski Resort Transfers", standardServices[3], standardServices[7], standardServices[0]]
  },
  {
    name: "Sweden",
    isoA3: "SWE",
    lat: 60.1282,
    lng: 18.6435,
    flag: "🇸🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Royal_Dramatic_Theatre_Stockholm.jpg/330px-Royal_Dramatic_Theatre_Stockholm.jpg",
    description: "Comfortable and safe transportation across Sweden's beautiful landscapes and bustling cities.",
    services: [standardServices[0], standardServices[7], standardServices[1]]
  },
  {
    name: "Norway",
    isoA3: "NOR",
    lat: 60.4720,
    lng: 8.4689,
    flag: "🇳🇴",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nationaltheatret_evening.jpg/330px-Nationaltheatret_evening.jpg",
    description: "Explore Norway's breathtaking fjords and cities with our reliable and weather-equipped fleet.",
    services: [standardServices[7], standardServices[3], standardServices[2]]
  },
  {
    name: "United Arab Emirates",
    isoA3: "ARE",
    lat: 23.4241,
    lng: 53.8478,
    flag: "🇦🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Burj_Khalifa_2021.jpg/330px-Burj_Khalifa_2021.jpg",
    description: "Luxury transportation services in Dubai and Abu Dhabi for exclusive events and corporate delegations.",
    services: [standardServices[0], standardServices[2], standardServices[3]]
  },
  {
    name: "Saudi Arabia",
    isoA3: "SAU",
    lat: 23.8859,
    lng: 45.0792,
    flag: "🇸🇦",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Riyadh_Skyline.jpg/330px-Riyadh_Skyline.jpg",
    description: "High-quality bus rentals for religious tourism, corporate travel, and events across Saudi Arabia.",
    services: [standardServices[3], standardServices[0], standardServices[1]]
  },
  {
    name: "Ireland",
    isoA3: "IRL",
    lat: 53.1424,
    lng: -7.6921,
    flag: "🇮🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Dublin_-_aerial_-_2025-07-07_01.jpg/330px-Dublin_-_aerial_-_2025-07-07_01.jpg",
    description: "Discover the Emerald Isle with our comfortable coaches, providing tours around Dublin and the countryside.",
    services: [standardServices[7], standardServices[3], standardServices[1]]
  },
  {
    name: "Belgium",
    isoA3: "BEL",
    lat: 50.5039,
    lng: 4.4699,
    flag: "🇧🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Grand_Place_Bruselas_2.jpg/330px-Grand_Place_Bruselas_2.jpg",
    description: "Centrally located in Europe, we provide top-tier travel services in Brussels and beyond.",
    services: [standardServices[0], standardServices[7], standardServices[2]]
  },
  {
    name: "Japan",
    isoA3: "JPN",
    lat: 36.2048,
    lng: 138.2529,
    flag: "🇯🇵",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/330px-Skyscrapers_of_Shinjuku_2009_January.jpg",
    description: "Expanding our luxury services to Japan. Experience seamless travel in Tokyo, Kyoto, and Osaka.",
    services: [standardServices[7], standardServices[0], standardServices[1]]
  },
  {
    name: "United States",
    isoA3: "USA",
    lat: 37.0902,
    lng: -95.7129,
    flag: "🇺🇸",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/330px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
    description: "Premium charter bus rentals now available in Miami and Las Vegas for vibrant events and tours.",
    services: [standardServices[2], standardServices[3], standardServices[0]]
  }
];
