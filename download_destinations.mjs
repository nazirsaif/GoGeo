import fs from 'fs';
import https from 'https';
import path from 'path';

const countries = [
  { name: "England", iso: "gb-eng", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600" },
  { name: "Scotland", iso: "gb-sct", image: "https://images.unsplash.com/photo-1509930776510-73f1d82dbfbe?auto=format&fit=crop&q=80&w=600" },
  { name: "Wales", iso: "gb-wls", image: "https://images.unsplash.com/photo-1598285521946-f94d93701830?auto=format&fit=crop&q=80&w=600" },
  { name: "Northern Ireland", iso: "gb-nir", image: "https://images.unsplash.com/photo-1590487057778-9e5c5318fb42?auto=format&fit=crop&q=80&w=600" },
  { name: "Ireland", iso: "ie", image: "https://images.unsplash.com/photo-1550503023-eb1e8f2f2eec?auto=format&fit=crop&q=80&w=600" },
  { name: "France", iso: "fr", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=600" },
  { name: "Belgium", iso: "be", image: "https://images.unsplash.com/photo-1588612140656-7ee69b7646ba?auto=format&fit=crop&q=80&w=600" },
  { name: "Netherlands", iso: "nl", image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=600" },
  { name: "Luxembourg", iso: "lu", image: "https://images.unsplash.com/photo-1592652174312-d8d172e259e8?auto=format&fit=crop&q=80&w=600" },
  { name: "Monaco", iso: "mc", image: "https://images.unsplash.com/photo-1549422079-5098ffbba60d?auto=format&fit=crop&q=80&w=600" },
  { name: "Germany", iso: "de", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600" },
  { name: "Switzerland", iso: "ch", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=600" },
  { name: "Austria", iso: "at", image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=600" },
  { name: "Czechia", iso: "cz", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&q=80&w=600" },
  { name: "Poland", iso: "pl", image: "https://images.unsplash.com/photo-1511216113906-8f57bb83b705?auto=format&fit=crop&q=80&w=600" },
  { name: "Slovakia", iso: "sk", image: "https://images.unsplash.com/photo-1596706915243-705c192bcff6?auto=format&fit=crop&q=80&w=600" },
  { name: "Hungary", iso: "hu", image: "https://images.unsplash.com/photo-1514339943265-27a92fb981f3?auto=format&fit=crop&q=80&w=600" },
  { name: "Italy", iso: "it", image: "https://images.unsplash.com/photo-1516483638261-f40af5eb6275?auto=format&fit=crop&q=80&w=600" },
  { name: "Spain", iso: "es", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=600" },
  { name: "Portugal", iso: "pt", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=600" },
  { name: "Greece", iso: "gr", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600" },
  { name: "Malta", iso: "mt", image: "https://images.unsplash.com/photo-1532095945865-985f401ff5c9?auto=format&fit=crop&q=80&w=600" },
  { name: "Cyprus", iso: "cy", image: "https://images.unsplash.com/photo-1574087968516-e5c46b5d9bc3?auto=format&fit=crop&q=80&w=600" },
  { name: "Denmark", iso: "dk", image: "https://images.unsplash.com/photo-1513622470522-26c310467a14?auto=format&fit=crop&q=80&w=600" },
  { name: "Sweden", iso: "se", image: "https://images.unsplash.com/photo-1509356843151-3e7d96a415fd?auto=format&fit=crop&q=80&w=600" },
  { name: "Norway", iso: "no", image: "https://images.unsplash.com/photo-1520696954201-1e30a57e3f4e?auto=format&fit=crop&q=80&w=600" },
  { name: "Finland", iso: "fi", image: "https://images.unsplash.com/photo-1522204642289-54881954f9a0?auto=format&fit=crop&q=80&w=600" },
  { name: "Iceland", iso: "is", image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600" },
  { name: "Estonia", iso: "ee", image: "https://images.unsplash.com/photo-1601323380486-b413df425fcd?auto=format&fit=crop&q=80&w=600" },
  { name: "Latvia", iso: "lv", image: "https://images.unsplash.com/photo-1563200720-6d0eb00473db?auto=format&fit=crop&q=80&w=600" },
  { name: "Lithuania", iso: "lt", image: "https://images.unsplash.com/photo-1582236592237-7756f6c91a0c?auto=format&fit=crop&q=80&w=600" },
  { name: "Romania", iso: "ro", image: "https://images.unsplash.com/photo-1582654318721-e37dc0a1b6c0?auto=format&fit=crop&q=80&w=600" },
  { name: "Bulgaria", iso: "bg", image: "https://images.unsplash.com/photo-1549487739-e93d9ce459bd?auto=format&fit=crop&q=80&w=600" },
  { name: "Croatia", iso: "hr", image: "https://images.unsplash.com/photo-1555990204-627c276329fc?auto=format&fit=crop&q=80&w=600" },
  { name: "Slovenia", iso: "si", image: "https://images.unsplash.com/photo-1537233267792-540134bc2e8d?auto=format&fit=crop&q=80&w=600" },
  { name: "Japan", iso: "jp", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600" },
  { name: "Saudi Arabia", iso: "sa", image: "https://images.unsplash.com/photo-1580211181515-54e4c2be3c09?auto=format&fit=crop&q=80&w=600" },
  { name: "United Arab Emirates", iso: "ae", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600" },
  { name: "Australia", iso: "au", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600" }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status: ${res.statusCode}`));
      }
      const writeStream = fs.createWriteStream(filepath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        resolve();
      });
    }).on('error', reject);
  });
};

async function main() {
  const dir = path.join(process.cwd(), 'public', 'destinations');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const c of countries) {
    const filename = `${c.name.replace(/ /g, '_').toLowerCase()}.jpg`;
    const filepath = path.join(dir, filename);
    if (!fs.existsSync(filepath)) {
      console.log(`Downloading ${c.name}...`);
      try {
        await downloadImage(c.image, filepath);
        console.log(`Saved ${filename}`);
      } catch (err) {
        console.error(`Failed ${c.name}:`, err.message);
      }
    }
  }
}
main();
