import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(true);
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function main() {
  const data = JSON.parse(fs.readFileSync('scripts/portfolio-data.json', 'utf8'));
  const outDir = path.resolve('public/portfolio-images');
  fs.mkdirSync(outDir, { recursive: true });

  const projectMap = {};

  for (const [slug, item] of Object.entries(data)) {
    console.log(`Processing ${slug}...`);
    projectMap[slug] = {
      title: item.title,
      text: item.text,
      images: []
    };

    let idx = 0;
    // take the best images (rw_1920 or standard jpg)
    for (const imgUrl of item.images) {
      if (idx >= 3) break; // keep top 3 images per project
      const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
      const filename = `${slug}-${idx + 1}${ext}`;
      const dest = path.join(outDir, filename);

      try {
        await downloadFile(imgUrl, dest);
        const stats = fs.statSync(dest);
        if (stats.size > 1000) {
          projectMap[slug].images.push(`/portfolio-images/${filename}`);
          idx++;
          console.log(`  Downloaded ${filename} (${Math.round(stats.size / 1024)} KB)`);
        } else {
          fs.unlinkSync(dest);
        }
      } catch (err) {
        console.error(`  Failed to download ${imgUrl}:`, err.message);
      }
    }
  }

  fs.writeFileSync('src/data/userPortfolioData.json', JSON.stringify(projectMap, null, 2));
  console.log('Finished downloading portfolio assets!');
}

main();
