const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/images');
const outputDir = inputDir; // Save resized images in the same folder

const sizes = [
  { suffix: 'small', width: 600 },
  { suffix: 'medium', width: 1200 },
  { suffix: 'large', width: 2000 }
];

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
    sizes.forEach(size => {
      sharp(path.join(inputDir, file))
        .resize(size.width)
        .webp({ quality: 75 }) // Compress WebP images to quality 75
        .toFile(path.join(outputDir, `${path.parse(file).name}-${size.suffix}.webp`))
        .then(() => console.log(`Created ${file} (${size.suffix})`))
        .catch(err => console.error(err));
    });
  }
});