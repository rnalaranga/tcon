const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadScreenshot = (url, dest) => {
  return new Promise((resolve, reject) => {
    // Thum.io free screenshot API
    const thumUrl = `https://image.thum.io/get/width/1200/crop/900/${url}`;
    
    https.get(thumUrl, (res) => {
      // Follow redirect if any
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadScreenshot(res.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${thumUrl}' (${res.statusCode})`));
        return;
      }
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded screenshot for ${url}`);
        resolve();
      });
    }).on('error', err => reject(err));
  });
};

async function run() {
  const imagesDir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

  const tasks = [
    { name: 'erp_next.jpg', url: 'https://erpnext.com/' },
    { name: 'hikvision_face.jpg', url: 'https://www.hikvision.com/en/products/Access-Control-Products/Face-Recognition-Terminals/Pro-Series/' },
    { name: 'iot_fleet.jpg', url: 'https://www.traccar.org/' },
    { name: 'greenhouse_dashboard.jpg', url: 'https://www.libelium.com/iot-solutions/smart-agriculture/' },
    { name: 'printer_dashboard.jpg', url: 'https://www.papercut.com/' },
    { name: 'khkautoparts.jpg', url: 'https://khkautoparts.com/' }
  ];

  for (const task of tasks) {
    try {
      await downloadScreenshot(task.url, path.join(imagesDir, task.name));
    } catch (e) {
      console.error(`Error downloading ${task.url}:`, e.message);
    }
  }
}

run();
