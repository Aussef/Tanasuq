import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const rootDir = process.cwd();
const tanasuqSiteDir = path.join(rootDir, 'public', 'tanasuq-site');
const portfolioImagesDir = path.join(rootDir, 'public', 'portfolio-images');
const zipOutputPath = path.join(rootDir, 'public', 'tanasuq-website.zip');
const sourceCodeTsPath = path.join(rootDir, 'src', 'data', 'sourceCode.ts');

async function main() {
  console.log('Building tanasuq-website.zip and updating sourceCode.ts...');
  
  const htmlContent = fs.readFileSync(path.join(tanasuqSiteDir, 'index.html'), 'utf-8');
  const cssContent = fs.readFileSync(path.join(tanasuqSiteDir, 'style.css'), 'utf-8');
  const jsContent = fs.readFileSync(path.join(tanasuqSiteDir, 'app.js'), 'utf-8');

  // 1. Update sourceCode.ts
  const sourceCodeContent = `export const HTML_CODE = ${JSON.stringify(htmlContent)};\nexport const CSS_CODE = ${JSON.stringify(cssContent)};\nexport const JS_CODE = ${JSON.stringify(jsContent)};\n`;
  fs.writeFileSync(sourceCodeTsPath, sourceCodeContent, 'utf-8');
  console.log('Updated src/data/sourceCode.ts successfully.');

  // 2. Create JSZip
  const zip = new JSZip();
  zip.file('index.html', htmlContent);
  zip.file('style.css', cssContent);
  zip.file('app.js', jsContent);
  zip.file('README.md', `# Tanasuq — Dr. Alaa Youssef Urban Design & Planning

Official static standalone web package for Dr. Alaaeldin Youssef (PhD in Planning and Urban Design).

## Structure
- index.html — Semantic HTML5 markup
- style.css — Pure CSS3 styling (zero frameworks, responsive)
- app.js — Pure Vanilla JavaScript ES6+ engine
- portfolio-images/ — High-resolution master plan drawings and site photos

## Running Locally
Simply open \`index.html\` in any modern browser, or run a local web server:
\`\`\`bash
npx serve .
\`\`\`
`);

  // Add portfolio images folder
  const imgFolder = zip.folder('portfolio-images');
  if (fs.existsSync(portfolioImagesDir)) {
    const files = fs.readdirSync(portfolioImagesDir);
    for (const file of files) {
      const filePath = path.join(portfolioImagesDir, file);
      if (fs.statSync(filePath).isFile()) {
        const fileData = fs.readFileSync(filePath);
        imgFolder.file(file, fileData);
      }
    }
  }

  const content = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  fs.writeFileSync(zipOutputPath, content);
  console.log('Generated public/tanasuq-website.zip (' + (content.length / 1024).toFixed(1) + ' KB)');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
