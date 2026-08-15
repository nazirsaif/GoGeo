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
  "Luxembourg": "Luxembourg City",
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

async function getCityImage(city) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(city)}&pithumbsize=800&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.query && data.query.pages) {
      const pages = Object.values(data.query.pages);
      if (pages.length > 0 && pages[0].thumbnail) {
        return pages[0].thumbnail.source;
      }
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

async function main() {
  const dir = path.join(process.cwd(), 'public', 'destinations');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const [country, city] of Object.entries(countryCapitals)) {
    const filename = `${country.replace(/ /g, '_').toLowerCase()}.jpg`;
    const filepath = path.join(dir, filename);
    
    console.log(`Fetching wiki image for ${city}...`);
    const imgUrl = await getCityImage(city);
    
    if (imgUrl) {
        console.log(`Downloading ${imgUrl} for ${country}...`);
        try {
          const response = await fetch(imgUrl);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const arrayBuffer = await response.arrayBuffer();
          fs.writeFileSync(filepath, Buffer.from(arrayBuffer));
          console.log(`Saved ${filename}`);
        } catch (err) {
          console.error(`Failed ${country}:`, err.message);
        }
    } else {
        console.log(`NO IMAGE FOUND FOR ${city}`);
    }
  }
}

main();
