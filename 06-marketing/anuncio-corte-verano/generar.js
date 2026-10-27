// Anuncio feed 1080x1350: fondo B + texto. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const ganchos = {
  'gancho-1-escena': { k: 'VERANO · 20:00 HS', h: 'Se corta<br>la luz.' },
  'gancho-2-otra-vez': { k: '', h: 'Otra vez<br>sin luz.' },
  'gancho-3-tuyo': { k: '', h: 'Se corta la luz<br>y te quedás<br>sin nada.' },
};
const css = `
@font-face{font-family:Fr;src:url(${U('../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;position:relative;overflow:hidden;background:url(${U('fondo-b-interior-sin-texto.jpg')}) center/cover;font-family:DM;color:#F3E9D8}
.g{position:absolute;left:0;right:0;top:0;height:720px;background:linear-gradient(#06101a 0%,rgba(6,16,26,.86) 45%,transparent 100%)}
.k{position:absolute;left:80px;top:110px;font-weight:800;font-size:34px;letter-spacing:.2em;color:#E3B55A}
h1{position:absolute;left:80px;right:80px;font:800 150px/1.0 Fr;text-shadow:0 4px 24px rgba(0,0,0,.5)}`;
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [n, g] of Object.entries(ganchos)) {
    const f = path.join(__dirname, '_t.html');
    fs.writeFileSync(f, `<meta charset=utf-8><style>${css}h1{top:${g.k ? 190 : 120}px}</style><div class=g></div>${g.k ? `<div class=k>${g.k}</div>` : ''}<h1>${g.h}</h1>`);
    await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, n + '.png') }); fs.unlinkSync(f);
  }
  await b.close();
})();
