import fs from 'fs';
import path from 'path';

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

async function getWikiImage(query) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query + ' tourism')}&gsrlimit=1&prop=pageimages&pithumbsize=800&format=json`;
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
  return `https://picsum.photos/seed/${query}/800/600`; // fallback
}

const downloadImage = async (url, filepath) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(filepath, Buffer.from(arrayBuffer));
};

async function main() {
  const dir = path.join(process.cwd(), 'public', 'destinations');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const c of countries) {
    const filename = `${c.name.replace(/ /g, '_').toLowerCase()}.jpg`;
    const filepath = path.join(dir, filename);
    
    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 1000) {
      continue;
    }
    
    console.log(`Fetching wiki image for ${c.name}...`);
    const imgUrl = await getWikiImage(c.name);
    console.log(`Downloading ${imgUrl} for ${c.name}...`);
    
    try {
      await downloadImage(imgUrl, filepath);
      console.log(`Saved ${filename}`);
    } catch (err) {
      console.error(`Failed ${c.name}:`, err.message);
    }
  }
}
main();
