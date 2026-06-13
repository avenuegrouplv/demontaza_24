import sharp from "sharp";

async function run() {
  const res = await fetch("https://pub-ff8b54c4ee504990b655b0d624a4449e.r2.dev/Logo.webp");
  const buf = await res.arrayBuffer();
  
  const img = sharp(Buffer.from(buf));
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  let totalWhiteInBottom = 0;
  let totalTransparentInBottom = 0;
  let totalBlackInBottom = 0;
  let totalYellowInBottom = 0;
  
  for (let y = Math.round(info.height * 0.7); y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (x + y * info.width) * 4;
      const r = data[idx+0];
      const g = data[idx+1];
      const b = data[idx+2];
      const a = data[idx+3];
      
      if (a === 0) {
        totalTransparentInBottom++;
      } else {
        if (r > 230 && g > 230 && b > 230) {
          totalWhiteInBottom++;
        } else if (r < 50 && g < 50 && b < 50) {
          totalBlackInBottom++;
        } else if (r > 200 && g > 150 && b < 50) {
          totalYellowInBottom++;
        }
      }
    }
  }

  console.log(`Logo.webp Bottom portion stats:`);
  console.log(`- Transparent: ${totalTransparentInBottom}`);
  console.log(`- White (RGB>230): ${totalWhiteInBottom}`);
  console.log(`- Black (RGB<50): ${totalBlackInBottom}`);
  console.log(`- Yellow: ${totalYellowInBottom}`);
}

run();
