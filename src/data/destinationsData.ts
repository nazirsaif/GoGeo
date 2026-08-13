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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
    description: "Experience premium charter bus rentals across the UK, from the historic streets of London to the scenic highlands.",
    services: [standardServices[0], standardServices[1], standardServices[3], standardServices[4]]
  },
  {
    name: "France",
    isoA3: "FRA",
    lat: 46.2276,
    lng: 2.2137,
    flag: "🇫🇷",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    description: "Luxury travel in France and Monaco. Ideal for fashion weeks, Riviera tours, and corporate events in Paris.",
    services: [standardServices[2], standardServices[7], standardServices[1], standardServices[3]]
  },
  {
    name: "Germany",
    isoA3: "DEU",
    lat: 51.1657,
    lng: 10.4515,
    flag: "🇩🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg",
    description: "Reliable and comfortable group transport across Germany and Central Europe, perfect for trade shows and regional tours.",
    services: [standardServices[0], standardServices[2], standardServices[3], standardServices[7]]
  },
  {
    name: "Italy",
    isoA3: "ITA",
    lat: 41.8719,
    lng: 12.5674,
    flag: "🇮🇹",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg",
    description: "Explore the beauty of Italy with our top-tier coach services, covering Rome, Milan, Naples, and beyond.",
    services: [standardServices[7], standardServices[6], standardServices[3], standardServices[1]]
  },
  {
    name: "Spain",
    isoA3: "ESP",
    lat: 40.4637,
    lng: -3.7492,
    flag: "🇪🇸",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sagrada_Fam%C3%ADlia_01.jpg",
    description: "Enjoy seamless group travel in Spain. We cover major hubs like Barcelona, Madrid, and Seville.",
    services: [standardServices[2], standardServices[5], standardServices[3], standardServices[7]]
  },
  {
    name: "Netherlands",
    isoA3: "NLD",
    lat: 52.1326,
    lng: 5.2913,
    flag: "🇳🇱",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg",
    description: "Efficient and modern charter services in the Netherlands, perfect for exploring Amsterdam and the surrounding regions.",
    services: [standardServices[1], standardServices[0], standardServices[3]]
  },
  {
    name: "Switzerland",
    isoA3: "CHE",
    lat: 46.8182,
    lng: 8.2275,
    flag: "🇨🇭",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Matterhorn_from_Domh%C3%BCtte_-_2.jpg",
    description: "Premium coach travel through the Swiss Alps and major cities like Zurich and Geneva.",
    services: ["Ski Resort Transfers", standardServices[3], standardServices[7], standardServices[0]]
  },
  {
    name: "Sweden",
    isoA3: "SWE",
    lat: 60.1282,
    lng: 18.6435,
    flag: "🇸🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Stockholm_Gamla_Stan_01.jpg",
    description: "Comfortable and safe transportation across Sweden's beautiful landscapes and bustling cities.",
    services: [standardServices[0], standardServices[7], standardServices[1]]
  },
  {
    name: "Norway",
    isoA3: "NOR",
    lat: 60.4720,
    lng: 8.4689,
    flag: "🇳🇴",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Geirangerfjord_2013_01.jpg",
    description: "Explore Norway's breathtaking fjords and cities with our reliable and weather-equipped fleet.",
    services: [standardServices[7], standardServices[3], standardServices[2]]
  },
  {
    name: "United Arab Emirates",
    isoA3: "ARE",
    lat: 23.4241,
    lng: 53.8478,
    flag: "🇦🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Burj_Khalifa.jpg",
    description: "Luxury transportation services in Dubai and Abu Dhabi for exclusive events and corporate delegations.",
    services: [standardServices[0], standardServices[2], standardServices[3]]
  },
  {
    name: "Saudi Arabia",
    isoA3: "SAU",
    lat: 23.8859,
    lng: 45.0792,
    flag: "🇸🇦",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Riyadh_Skyline.jpg",
    description: "High-quality bus rentals for religious tourism, corporate travel, and events across Saudi Arabia.",
    services: [standardServices[3], standardServices[0], standardServices[1]]
  },
  {
    name: "Ireland",
    isoA3: "IRL",
    lat: 53.1424,
    lng: -7.6921,
    flag: "🇮🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cliffs_of_Moher_-_Ireland.jpg",
    description: "Discover the Emerald Isle with our comfortable coaches, providing tours around Dublin and the countryside.",
    services: [standardServices[7], standardServices[3], standardServices[1]]
  },
  {
    name: "Belgium",
    isoA3: "BEL",
    lat: 50.5039,
    lng: 4.4699,
    flag: "🇧🇪",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Grand_Place_Brussels_2016.jpg",
    description: "Centrally located in Europe, we provide top-tier travel services in Brussels and beyond.",
    services: [standardServices[0], standardServices[7], standardServices[2]]
  },
  {
    name: "Japan",
    isoA3: "JPN",
    lat: 36.2048,
    lng: 138.2529,
    flag: "🇯🇵",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/080113_Hakkai_Fuji.jpg",
    description: "Expanding our luxury services to Japan. Experience seamless travel in Tokyo, Kyoto, and Osaka.",
    services: [standardServices[7], standardServices[0], standardServices[1]]
  },
  {
    name: "United States",
    isoA3: "USA",
    lat: 37.0902,
    lng: -95.7129,
    flag: "🇺🇸",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    description: "Premium charter bus rentals now available in Miami and Las Vegas for vibrant events and tours.",
    services: [standardServices[2], standardServices[3], standardServices[0]]
  }
];
