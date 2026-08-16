import React from "react";
import Link from "next/link";
import CountryCarousel from "@/components/destinations/CountryCarousel";

export default function DestinationsPage() {
  const regions = [
    {
      name: "United Kingdom & Ireland",
      countries: [
        { name: "England", cities: ["London", "Manchester", "Liverpool", "Birmingham", "Bristol", "Bath", "Oxford", "Cambridge", "Brighton", "York", "Leeds", "Newcastle", "Nottingham", "Sheffield", "Chester", "Canterbury", "Windsor", "Stratford-upon-Avon", "Bournemouth", "Portsmouth", "Southampton", "Exeter", "Plymouth", "Torquay", "Blackpool"] },
        { name: "Scotland", cities: ["Edinburgh", "Glasgow", "Aberdeen", "Inverness", "Dundee", "Stirling", "St Andrews", "Fort William", "Oban"] },
        { name: "Wales", cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Conwy", "Llandudno", "Tenby", "Caernarfon", "Betws-y-Coed"] },
        { name: "Northern Ireland", cities: ["Belfast", "Derry", "Newry", "Lisburn", "Portrush", "Bangor"] },
        { name: "Ireland", cities: ["Dublin", "Cork", "Galway", "Limerick", "Killarney", "Kilkenny", "Waterford"] }
      ]
    },
    {
      name: "Western Europe",
      countries: [
        { name: "France", cities: ["Paris", "Nice", "Cannes", "Marseille", "Lyon", "Bordeaux", "Strasbourg", "Toulouse", "Lille", "Nantes", "Montpellier", "Avignon", "Versailles", "Reims", "Annecy", "Colmar"] },
        { name: "Belgium", cities: ["Brussels", "Bruges", "Ghent", "Antwerp", "Leuven", "Liège", "Namur", "Dinant"] },
        { name: "Netherlands", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Delft", "Haarlem", "Maastricht", "Leiden", "Giethoorn"] },
        { name: "Luxembourg", cities: ["Luxembourg City", "Vianden", "Echternach"] },
        { name: "Monaco", cities: ["Monaco Ville", "Monte Carlo"] }
      ]
    },
    {
      name: "Central Europe",
      countries: [
        { name: "Germany", cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Düsseldorf", "Stuttgart", "Dresden", "Nuremberg", "Leipzig", "Heidelberg", "Bremen", "Hanover", "Rothenburg"] },
        { name: "Switzerland", cities: ["Zurich", "Geneva", "Lucerne", "Interlaken", "Zermatt", "Bern", "Basel", "Lausanne", "Montreux", "St. Moritz", "Grindelwald", "Lauterbrunnen", "Lugano"] },
        { name: "Austria", cities: ["Vienna", "Salzburg", "Innsbruck", "Graz", "Hallstatt", "Linz", "Zell am See"] },
        { name: "Czechia", cities: ["Prague", "Brno", "Český Krumlov", "Karlovy Vary", "Ostrava"] },
        { name: "Poland", cities: ["Warsaw", "Kraków", "Gdańsk", "Wrocław", "Poznań", "Łódź", "Szczecin", "Zakopane", "Toruń"] },
        { name: "Slovakia", cities: ["Bratislava", "Košice", "Banská Bystrica", "Poprad", "Žilina"] },
        { name: "Hungary", cities: ["Budapest", "Debrecen", "Szentendre", "Eger", "Pécs", "Lake Balaton"] }
      ]
    },
    {
      name: "Southern Europe",
      countries: [
        { name: "Italy", cities: ["Rome", "Milan", "Venice", "Florence", "Naples", "Bologna", "Turin", "Verona", "Pisa", "Genoa", "Palermo", "Catania", "Bari", "Siena", "Como", "Sorrento", "Amalfi", "Capri"] },
        { name: "Spain", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Málaga", "Alicante", "Granada", "Córdoba", "Bilbao", "San Sebastián", "Marbella", "Palma", "Ibiza", "Tenerife", "Las Palmas", "Cádiz", "Salamanca", "Toledo", "Benidorm", "Santiago de Compostela"] },
        { name: "Portugal", cities: ["Lisbon", "Porto", "Faro", "Albufeira", "Lagos", "Sintra", "Cascais", "Coimbra", "Braga", "Funchal", "Évora", "Vilamoura"] },
        { name: "Greece", cities: ["Athens", "Thessaloniki", "Santorini", "Mykonos", "Rhodes", "Corfu", "Crete", "Chania", "Heraklion", "Zakynthos"] },
        { name: "Malta", cities: ["Valletta", "Sliema", "St Julian’s", "Mdina", "Marsaxlokk", "Mellieħa"] },
        { name: "Cyprus", cities: ["Nicosia", "Limassol", "Paphos", "Larnaca", "Ayia Napa"] }
      ]
    },
    {
      name: "Northern Europe",
      countries: [
        { name: "Denmark", cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Roskilde", "Skagen"] },
        { name: "Sweden", cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Visby", "Kiruna"] },
        { name: "Norway", cities: ["Oslo", "Bergen", "Tromsø", "Stavanger", "Ålesund", "Trondheim", "Flåm", "Geiranger"] },
        { name: "Finland", cities: ["Helsinki", "Rovaniemi", "Turku", "Tampere", "Porvoo", "Levi", "Saariselkä", "Ivalo"] },
        { name: "Iceland", cities: ["Reykjavík", "Akureyri", "Vík", "Selfoss", "Höfn", "Keflavík", "Hella"] }
      ]
    },
    {
      name: "Eastern Europe & Baltics",
      countries: [
        { name: "Estonia", cities: ["Tallinn", "Tartu", "Pärnu", "Narva"] },
        { name: "Latvia", cities: ["Riga", "Jūrmala", "Daugavpils", "Liepāja"] },
        { name: "Lithuania", cities: ["Vilnius", "Kaunas", "Klaipėda", "Trakai", "Palanga"] },
        { name: "Romania", cities: ["Bucharest", "Brașov", "Sibiu", "Cluj-Napoca", "Constanța", "Sighișoara", "Sinaia"] },
        { name: "Bulgaria", cities: ["Sofia", "Plovdiv", "Varna", "Burgas", "Nessebar", "Bansko"] }
      ]
    },
    {
      name: "Southeastern Europe",
      countries: [
        { name: "Croatia", cities: ["Zagreb", "Dubrovnik", "Split", "Zadar", "Pula", "Rijeka", "Šibenik", "Trogir"] },
        { name: "Slovenia", cities: ["Ljubljana", "Bled", "Piran", "Maribor", "Koper", "Bohinj"] }
      ]
    },
    {
      name: "Global Destinations",
      countries: [
        { name: "Japan", cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Hiroshima", "Sendai"] },
        { name: "Saudi Arabia", cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Taif", "Tabuk", "Abha", "Jubail"] },
        { name: "United Arab Emirates", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain"] },
        { name: "Australia", cities: ["Sydney", "Melbourne"] },
        { name: "United States", cities: ["Miami", "Las Vegas"] }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Page Header */}
      <section className="bg-navy py-20 text-white border-b-4 border-gold">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Destinations</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Providing premium group travel across the UK and {regions.reduce((acc, region) => acc + region.countries.length, 0)} iconic European countries.
          </p>
        </div>
      </section>

      {/* Country Marquee Slideshow */}
      <CountryCarousel />

      {/* Destinations List */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-navy mb-6 border-b-2 border-gold inline-block pb-1">
                  {region.name}
                </h3>
                <ul className="space-y-4">
                  {region.countries.map((country, i) => (
                    <li key={i} className="text-gray-700">
                      <span className="font-bold text-navy flex items-center gap-2">
                        <span className="text-gold text-sm">✦</span> {country.name}
                      </span>
                      {country.cities && (
                        <div className="flex flex-wrap text-sm text-gray-500 mt-1.5 ml-6 leading-relaxed gap-y-1">
                          {country.cities.map((city, j) => (
                            <span key={j} className="whitespace-nowrap">
                              {city}{j < country.cities.length - 1 ? <span className="mx-1.5 text-gray-300">•</span> : ""}
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy text-white rounded-xl p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-4">Planning a Cross-Border Tour?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Our professional drivers and luxury coaches are fully equipped and licensed for international cross-border travel across Europe.
              </p>
              <Link href="/contact" className="inline-block bg-gold text-white px-8 py-4 font-bold rounded hover:bg-yellow-600 transition-colors">
                Contact Our Travel Experts
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
