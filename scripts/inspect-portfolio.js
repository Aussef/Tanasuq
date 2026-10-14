import https from 'node:https';

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => resolve(''));
  });
}

async function run() {
  const pages = [
    'https://alaayoussef.myportfolio.com/alaa-youssef-phd-planning-and-urban-design',
    'https://alaayoussef.myportfolio.com/cv',
    'https://alaayoussef.myportfolio.com/work',
    'https://alaayoussef.myportfolio.com/contact'
  ];

  for (const page of pages) {
    console.log('\n========================================');
    console.log('PAGE:', page);
    console.log('========================================');
    const html = await fetchUrl(page);

    // Extract title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');

    // Extract all text paragraphs / headings
    const textMatches = html.match(/<(p|h1|h2|h3|h4|span|div)[^>]*class="[^"]*(text|rich-text|title)[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi) || [];
    const cleanTexts = textMatches
      .map(s => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim())
      .filter(s => s.length > 5);

    // deduplicate
    const uniqueTexts = [...new Set(cleanTexts)];
    console.log('Key text snippets (up to 15):');
    uniqueTexts.slice(0, 15).forEach(t => console.log(' - ', t.substring(0, 120)));

    // Extract links
    const linkMatches = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
    const internalLinks = [...new Set(linkMatches.filter(l => l.startsWith('/') && !l.includes('.css') && !l.includes('.js')))];
    console.log('Internal links:', internalLinks);

    // Extract images
    const imgMatches = [...html.matchAll(/src="([^"]*(?:myportfolio|adobe|cdn)[^"]*)"/g)].map(m => m[1]);
    console.log('Images (first 8):', [...new Set(imgMatches)].slice(0, 8));
  }
}

run();
