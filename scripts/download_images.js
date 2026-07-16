const fs = require('fs');
const https = require('https');
const path = require('path');

const queries = [
  { name: 'real_erp.jpg', query: 'modern-construction-office' },
  { name: 'real_hr.jpg', query: 'biometric-scanner-face' },
  { name: 'real_daraz.jpg', query: 'logistics-warehouse-boxes' },
  { name: 'real_agri.jpg', query: 'modern-greenhouse-farming' },
  { name: 'real_printer.jpg', query: 'office-printer-photocopier' },
  { name: 'real_web.jpg', query: 'laptop-desk-website' }
];

async function fetchUnsplashImage(query, filename) {
  return new Promise((resolve, reject) => {
    // We use a public search endpoint or just scrape the HTML to find an image
    const searchUrl = `https://unsplash.com/s/photos/${query}`;
    
    https.get(searchUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Regex to find the first high-quality image URL
        const match = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"']+/);
        if (match) {
          let imageUrl = match[0];
          // Ensure it has width/height params for good quality but not massive
          imageUrl = imageUrl.split('?')[0] + '?auto=format&fit=crop&w=800&q=80';
          
          const filePath = path.join(__dirname, '../public/images', filename);
          const file = fs.createWriteStream(filePath);
          
          https.get(imageUrl, (imgRes) => {
            imgRes.pipe(file);
            file.on('finish', () => {
              file.close();
              console.log(`Downloaded ${filename} successfully!`);
              resolve();
            });
          }).on('error', err => reject(err));
        } else {
          console.error(`Could not find image for ${query}`);
          resolve(); // Resolve anyway so others can run
        }
      });
    }).on('error', err => reject(err));
  });
}

async function run() {
  if (!fs.existsSync(path.join(__dirname, '../public/images'))) {
    fs.mkdirSync(path.join(__dirname, '../public/images'), { recursive: true });
  }
  for (const q of queries) {
    await fetchUnsplashImage(q.query, q.name);
  }
}

run();
