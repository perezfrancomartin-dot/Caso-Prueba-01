// "Vamos a arrancar" con Soli en paleta terracota y verde. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const temas = {
  terracota: { card: '#B5562B', t: '#F7F2E7', s: '#E3EFC4', lab: '#F7F2E7' },
  verde: { card: '#1F3A2D', t: '#F7F2E7', s: '#D9A441', lab: '#F7F2E7' },
};
const css = c => `
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;background:#F7F2E7;position:relative;font-family:DM}
.card{position:absolute;left:70px;top:70px;right:70px;bottom:70px;border-radius:56px;background:${c.card};text-align:center;overflow:hidden}
h1{font:800 124px/1.02 Fr;color:${c.t};margin-top:120px;letter-spacing:.01em}
.s{font-weight:700;font-size:56px;line-height:1.25;color:${c.s};margin-top:48px}
img{position:absolute;left:50%;bottom:120px;height:520px;transform:translateX(-50%)}
.l{position:absolute;left:0;right:0;bottom:60px;font-weight:700;font-size:38px;color:${c.lab}}`;
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [k, c] of Object.entries(temas)) {
    const f = path.join(__dirname, '_t.html');
    fs.writeFileSync(f, `<meta charset=utf-8><style>${css(c)}</style><div class=card><h1>VAMOS A<br>ARRANCAR</h1><div class=s>Empezá a generar<br>tu propia energía</div><img src="${U('../../soli/soli-cierre.png')}"><div class=l>Soli</div></div>`);
    await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, `vamos-a-arrancar-${k}-1080x1350.png`) }); fs.unlinkSync(f);
  }
  await b.close();
})();
