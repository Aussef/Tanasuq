import https from 'node:https';
import fs from 'node:fs';

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => resolve(''));
  });
}

async function scrapeProjects() {
  const projectSlugs = [
    'about',
    'alaa-youssef-phd-planning-and-urban-design',
    'cv',
    'integrated-tourism-complexes-itc',
    'marrasi-sidi-abd-el-rahman',
    'king-abdel-aziz-university',
    'dream-land-theme-park',
    'dhofar-tourism-development-master-plan',
    'muscat-tourism-development-masterplan',
    'dream-land-residential',
    'mudon-of-arabia-city-centre-of-marrakech'
  ];

  const results = {};

  for (const slug of projectSlugs) {
    const url = `https://alaayoussef.myportfolio.com/${slug}`;
    console.log('Fetching', url);
    const html = await fetchUrl(url);

    // Title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1].replace('Alaa Youssef - ', '').trim() : slug;

    // Text content
    const textMatches = html.match(/<div class="rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/gi) || [];
    const text = textMatches
      .map(t => t.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim())
      .filter(t => t.length > 0 && !t.includes('Powered by Adobe Portfolio'));

    // Images
    const imgMatches = [...html.matchAll(/src="([^"]*(?:myportfolio|adobe|cdn)[^"]*)"/g)].map(m => m[1]);
    const cleanImgs = [...new Set(imgMatches.filter(src => src.includes('.jpg') || src.includes('.png') || src.includes('.webp')))];

    results[slug] = {
      title,
      text,
      images: cleanImgs
    };
  }

  fs.writeFileSync('scripts/portfolio-data.json', JSON.stringify(results, null, 2));
  console.log('Finished scraping portfolio data!');
}

scrapeProjects();
