import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace solid bg-white with bg-gray-200
  const regex = /\bbg-white\b(?!\/)/g;
  if (regex.test(content)) {
    content = content.replace(regex, 'bg-gray-200');
    fs.writeFileSync(file, content);
    console.log(`Updated solid white in ${file}`);
  }
  
  // Specifically update the Header's bg-white/95 to bg-gray-200/95
  let content2 = fs.readFileSync(file, 'utf8');
  if (content2.includes('bg-white/95')) {
     content2 = content2.replace(/bg-white\/95/g, 'bg-gray-200/95');
     fs.writeFileSync(file, content2);
     console.log(`Updated transparent white in ${file}`);
  }
});
