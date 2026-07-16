const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => reject(err));
  });
};

const scrapeDuckDuckGoImage = (query, dest) => {
  return new Promise((resolve, reject) => {
    const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    
    https.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // DuckDuckGo HTML puts images in <img src="//external-content.duckduckgo.com/iu/?u=..." />
        const match = data.match(/src="(\/\/external-content\.duckduckgo\.com\/iu\/\?u=[^"]+)"/);
        if (match) {
          const imgUrl = "https:" + match[1].replace(/&amp;/g, '&');
          console.log(`Found image for query "${query}": ${imgUrl}`);
          downloadFile(imgUrl, dest).then(resolve).catch(reject);
        } else {
          console.log(`No image found for "${query}"`);
          resolve(); // Resolve anyway so the script doesn't crash
        }
      });
    }).on('error', reject);
  });
};

async function run() {
  const imagesDir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

  const tasks = [
    { name: 'erp_next.jpg', query: 'ERPNext dashboard UI high quality' },
    { name: 'hikvision_face.jpg', query: 'Hikvision face recognition terminal MinMoe' },
    { name: 'iot_fleet.jpg', query: 'fleet tracking dashboard UI map' },
    { name: 'greenhouse_dashboard.jpg', query: 'smart greenhouse agriculture IoT dashboard' },
    { name: 'printer_dashboard.jpg', query: 'printer management dashboard PaperCut UI' }
  ];

  for (const task of tasks) {
    try {
      await scrapeDuckDuckGoImage(task.query, path.join(imagesDir, task.name));
    } catch (e) {
      console.error(e);
    }
  }

  // Fetch website screenshot using Thum.io
  console.log("Fetching website screenshot...");
  try {
    await downloadFile(
      'https://image.thum.io/get/width/1200/crop/900/https://khkautoparts.com/',
      path.join(imagesDir, 'khkautoparts.jpg')
    );
    console.log("Screenshot downloaded.");
  } catch(e) {
    console.error("Screenshot failed:", e);
  }
}

run();
