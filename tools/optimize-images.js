/* Image optimization script using Sharp
 - Generates AVIF and WebP at target display sizes
 - Skips non-existing files gracefully
 - Writes outputs alongside originals with naming convention: filename.<width>x<height>.(avif|webp)
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const img = p => path.join(root, 'assets', 'img', p);

// Define targets: source file -> array of { width, height, formats }
// Only include files present in repo; project thumbnails appear missing locally and will be skipped automatically.
const targets = {
  'logo.png': [ { width: 36, height: 36, formats: ['avif','webp','png'] } ],
  'medal.png': [ { width: 70, height: 70, formats: ['avif','webp','png'] } ],
  'illustration/illustration-15.webp': [ { width: 546, height: 364, formats: ['avif','webp'] }, { width: 1092, height: 728, formats: ['avif','webp'] } ],
  'about/about-8.webp': [ { width: 546, height: 364, formats: ['avif','webp'] }, { width: 1092, height: 728, formats: ['avif','webp'] } ],
  'about/about-5.webp': [ { width: 265, height: 177, formats: ['avif','webp'] }, { width: 530, height: 354, formats: ['avif','webp'] } ],
  'about/about-11.webp': [ { width: 265, height: 177, formats: ['avif','webp'] }, { width: 530, height: 354, formats: ['avif','webp'] } ],
  'services/services-1.webp': [ { width: 546, height: 364, formats: ['avif','webp'] }, { width: 1092, height: 728, formats: ['avif','webp'] } ],
  'clients/beverlynn.png': [ { width: 200, height: 80, formats: ['avif','webp','png'] } ],
  'clients/creative.png': [ { width: 200, height: 80, formats: ['avif','webp','png'] } ],
  // Project thumbnails (if added locally later)
  'projects/beverlynn.png': [ { width: 354, height: 199, formats: ['avif','webp','png'] }, { width: 708, height: 398, formats: ['avif','webp'] } ],
  'projects/epharmacy.png': [ { width: 354, height: 199, formats: ['avif','webp','png'] }, { width: 708, height: 398, formats: ['avif','webp'] } ],
  'projects/creative.png': [ { width: 354, height: 199, formats: ['avif','webp','png'] }, { width: 708, height: 398, formats: ['avif','webp'] } ]
};

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function processOne(srcRel, variants) {
  const srcPath = img(srcRel);
  if (!fs.existsSync(srcPath)) {
    console.log(`[skip] not found: ${srcRel}`);
    return;
  }
  const outDir = path.dirname(srcPath);
  await ensureDir(outDir);

  const input = sharp(srcPath, { failOn: 'none' });
  const meta = await input.metadata().catch(() => ({}));

  for (const v of variants) {
    const { width, height, formats } = v;
    for (const fmt of formats) {
      const ext = fmt.toLowerCase();
      const outName = `${path.basename(srcPath, path.extname(srcPath))}.${width}x${height}.${ext}`;
      const outPath = path.join(outDir, outName);
      try {
        let pipeline = sharp(srcPath).resize({ width, height, fit: 'cover' });
        if (fmt === 'avif') pipeline = pipeline.avif({ quality: 50 });
        else if (fmt === 'webp') pipeline = pipeline.webp({ quality: 60 });
        else if (fmt === 'png') pipeline = pipeline.png({ compressionLevel: 9 });
        await pipeline.toFile(outPath);
        console.log(`[ok] ${srcRel} -> ${path.relative(root, outPath)}`);
      } catch (e) {
        console.warn(`[err] ${srcRel} -> ${outName}:`, e.message);
      }
    }
  }
}

(async () => {
  for (const [srcRel, variants] of Object.entries(targets)) {
    await processOne(srcRel, variants);
  }
  console.log('Done image optimization.');
})();
