import fs from 'fs';
import path from 'path';

const countryCapitals = {
  "England": "London",
  "Scotland": "Edinburgh",
  "Wales": "Cardiff",
  "Northern Ireland": "Belfast",
  "Ireland": "Dublin",
  "France": "Paris",
  "Belgium": "Brussels",
  "Netherlands": "Amsterdam",
  "Luxembourg": "Luxembourg",
  "Monaco": "Monaco",
  "Germany": "Berlin",
  "Switzerland": "Zurich",
  "Austria": "Vienna",
  "Czechia": "Prague",
  "Poland": "Warsaw",
  "Slovakia": "Bratislava",
  "Hungary": "Budapest",
  "Italy": "Rome",
  "Spain": "Madrid",
  "Portugal": "Lisbon",
  "Greece": "Athens",
  "Malta": "Valletta",
  "Cyprus": "Nicosia",
  "Denmark": "Copenhagen",
  "Sweden": "Stockholm",
  "Norway": "Oslo",
  "Finland": "Helsinki",
  "Iceland": "Reykjavik",
  "Estonia": "Tallinn",
  "Latvia": "Riga",
  "Lithuania": "Vilnius",
  "Romania": "Bucharest",
  "Bulgaria": "Sofia",
  "Croatia": "Zagreb",
  "Slovenia": "Ljubljana",
  "Japan": "Tokyo",
  "Saudi Arabia": "Riyadh",
  "United Arab Emirates": "Dubai",
  "Australia": "Sydney"
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const dir = path.join(process.cwd(), 'public', 'destinations');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const [country, city] of Object.entries(countryCapitals)) {
    const filename = `${country.replace(/ /g, '_').toLowerCase()}.jpg`;
    const filepath = path.join(dir, filename);
    
    // URL to get a city/landscape image for this specific location
    const url = `https://loremflickr.com/800/600/${encodeURIComponent(city)},city,landscape/all`;
    console.log(`Downloading ${city} from ${url}...`);
    
    try {
      const response = await fetch(url, { redirect: 'follow' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      fs.writeFileSync(filepath, Buffer.from(arrayBuffer));
      console.log(`Saved ${filename}`);
    } catch (err) {
      console.error(`Failed ${country}:`, err.message);
    }
    
    // Add small delay to avoid rate limiting
    await delay(500);
  }
}

main();
