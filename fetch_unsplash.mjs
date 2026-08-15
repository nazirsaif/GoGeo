import fs from 'fs';
import https from 'https';

const countries = [
  { name: "England", iso: "gb-eng" },
  { name: "Scotland", iso: "gb-sct" },
  { name: "Wales", iso: "gb-wls" },
  { name: "Northern Ireland", iso: "gb-nir" },
  { name: "Ireland", iso: "ie" },
  { name: "France", iso: "fr" },
  { name: "Belgium", iso: "be" },
  { name: "Netherlands", iso: "nl" },
  { name: "Luxembourg", iso: "lu" },
  { name: "Monaco", iso: "mc" },
  { name: "Germany", iso: "de" },
  { name: "Switzerland", iso: "ch" },
  { name: "Austria", iso: "at" },
  { name: "Czechia", iso: "cz" },
  { name: "Poland", iso: "pl" },
  { name: "Slovakia", iso: "sk" },
  { name: "Hungary", iso: "hu" },
  { name: "Italy", iso: "it" },
  { name: "Spain", iso: "es" },
  { name: "Portugal", iso: "pt" },
  { name: "Greece", iso: "gr" },
  { name: "Malta", iso: "mt" },
  { name: "Cyprus", iso: "cy" },
  { name: "Denmark", iso: "dk" },
  { name: "Sweden", iso: "se" },
  { name: "Norway", iso: "no" },
  { name: "Finland", iso: "fi" },
  { name: "Iceland", iso: "is" },
  { name: "Estonia", iso: "ee" },
  { name: "Latvia", iso: "lv" },
  { name: "Lithuania", iso: "lt" },
  { name: "Romania", iso: "ro" },
  { name: "Bulgaria", iso: "bg" },
  { name: "Croatia", iso: "hr" },
  { name: "Slovenia", iso: "si" },
  { name: "Japan", iso: "jp" },
  { name: "Saudi Arabia", iso: "sa" },
  { name: "United Arab Emirates", iso: "ae" },
  { name: "Australia", iso: "au" }
];

async function fetchImage(countryName) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(countryName)}-landmark`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        // Regex to find a photo ID, typically looks like images.unsplash.com/photo-1234567890-abcdef
        const match = data.match(/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?/);
        if (match && match[1]) {
          resolve(`https://images.unsplash.com/photo-${match[1]}?auto=format&fit=crop&q=80&w=800`);
        } else {
          // fallback
          resolve("https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=800");
        }
      });
    }).on('error', () => {
      resolve("https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=800");
    });
  });
}

async function main() {
  const results = [];
  for (const c of countries) {
    console.log(`Fetching image for ${c.name}...`);
    const img = await fetchImage(c.name);
    results.push({
      ...c,
      image: img
    });
    // sleep a bit to avoid rate limits
    await new Promise(r => setTimeout(r, 500));
  }
  
  fs.writeFileSync('countries_data.json', JSON.stringify(results, null, 2));
  console.log("Done!");
}

main();
