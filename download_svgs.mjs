import fs from 'fs';
import https from 'https';

const urls = {
  'uefa.svg': 'https://upload.wikimedia.org/wikipedia/commons/2/23/UEFA_logo.svg',
  'uefa_champions_league.svg': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/UEFA_Champions_League_logo.svg',
  'uefa_euro_2028.svg': 'https://upload.wikimedia.org/wikipedia/en/8/87/UEFA_Euro_2028_Logo.svg'
};

const download = (filename, url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode !== 200) {
         if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
             download(filename, res.headers.location.startsWith('http') ? res.headers.location : `https://upload.wikimedia.org${res.headers.location}`).then(resolve).catch(reject);
             return;
         }
         reject(new Error(`${filename} Failed with status: ${res.statusCode}`));
         return;
      }
      const file = fs.createWriteStream(`public/logos/${filename}`);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
};

Promise.all(Object.entries(urls).map(([k, v]) => download(k, v)))
  .then(() => console.log('All SVGs downloaded successfully!'))
  .catch(console.error);
