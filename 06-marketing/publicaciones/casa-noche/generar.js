// Texto en castellano sobre la imagen sin texto. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const versiones = {
  'a-se-corta-la-luz': { h: 'Se corta la luz.<br><em>Tu casa, no.</em>', s: 'Paneles solares con batería' },
  'b-una-decision': { h: 'Una decisión<br><em>lo cambió todo.</em>', s: 'Energía solar para tu casa' },
};
const css = `
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;position:relative;overflow:hidden;background:url(${U('casa-noche-sin-texto-1080x1350.jpg')});color:#F3E9D8}
.g{position:absolute;left:0;right:0;top:0;height:440px;background:linear-gradient(#050b10 0%,rgba(5,11,16,.85) 55%,transparent 100%)}
h1{font-family:Fr;font-weight:800;font-size:92px;line-height:1.04;text-align:center;position:absolute;left:0;right:0;top:74px;text-shadow:0 3px 18px rgba(0,0,0,.6)}
em{font-style:normal;color:#9BE15D}
.s{position:absolute;left:0;right:0;top:290px;text-align:center;font-family:DM;font-weight:700;font-size:34px;letter-spacing:.06em;color:#F3E9D8;text-shadow:0 2px 10px rgba(0,0,0,.7)}`;
(async () => { const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [k, v] of Object.entries(versiones)) {
    const f = path.join(__dirname, '_t.html'); fs.writeFileSync(f, `<meta charset=utf-8><style>${css}</style><div class=g></div><h1>${v.h}</h1><div class=s>${v.s}</div>`);
    await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, `casa-noche-${k}-1080x1350.png`) }); fs.unlinkSync(f); }
  await b.close(); })();
