// render-mockups.js
// Render all 12 portfolio mockup HTML pages to high-res PNG screenshots.

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BUILD_DIR = '/home/z/my-project/build/mockups';
const OUT_DIR   = '/home/z/my-project/download/naveen-portfolio';

// Page → height mapping (matches the .page height in each HTML)
const PAGES = [
  { file: '01-home.html',                out: '01-home.png',                h: 1024 },
  { file: '02-introduction.html',        out: '02-introduction.png',       h: 1024 },
  { file: '03-selected-work.html',       out: '03-selected-work.png',      h: 1024 },
  { file: '04-project-clindata.html',   out: '04-project-clindata.png',    h: 1280 },
  { file: '05-project-mcdonalds.html',   out: '05-project-mcdonalds.png',   h: 1024 },
  { file: '06-project-safelink.html',    out: '06-project-safelink.png',    h: 1024 },
  { file: '07-experience.html',          out: '07-experience.png',          h: 1280 },
  { file: '08-about.html',               out: '08-about.png',              h: 1280 },
  { file: '09-skills.html',              out: '09-skills.png',              h: 1280 },
  { file: '10-research.html',            out: '10-research.png',           h: 1280 },
  { file: '11-resume.html',              out: '11-resume.png',             h: 1280 },
  { file: '12-contact.html',             out: '12-contact.png',            h: 1024 },
];

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1024 },
    deviceScaleFactor: 2,   // 2x for crisp retina-quality PNGs
  });

  for (const p of PAGES) {
    const htmlPath = path.join(BUILD_DIR, p.file);
    const outPath  = path.join(OUT_DIR, p.out);

    const page = await context.newPage();
    // Set viewport to page height for full-canvas screenshot
    await page.setViewportSize({ width: 1440, height: p.h });
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle', timeout: 30000 });

    // Wait for Google Fonts to fully load
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(500);

    // Take a full-page screenshot (no clipping)
    await page.screenshot({
      path: outPath,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: p.h },
      type: 'png',
    });
    console.log(`✓ ${p.out}  (${p.h}px tall)`);

    await page.close();
  }

  await context.close();
  await browser.close();
  console.log('\n✅ All 12 mockups rendered to:', OUT_DIR);
})().catch(err => { console.error('❌', err); process.exit(1); });
