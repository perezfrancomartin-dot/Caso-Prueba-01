// Prueba de estilo "objeto 3D + palabra gigante" en paleta Bosque y Sol. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const C = { pino: '#1F3A2D', sol: '#D9A441', terra: '#B5562B', arena: '#E4DCC8', crema: '#F7F2E7' };
const base = (bg, inner, dark) => `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:DM;${bg}}
h1{position:absolute;left:60px;right:60px;top:110px;text-align:center;font:800 100px/1.04 Fr}
.logo{position:absolute;left:50%;transform:translateX(-50%);bottom:60px;height:70px}${inner.css || ''}</style>${inner.html}<img class=logo src="${U(dark ? '../../logo/albor/vectorial/logo-horizontal-blanco.svg' : '../../logo/albor/vectorial/logo-horizontal-color.svg')}">`;
const P = {
 'prueba-1-casa-palabra-gigante': base(`background:url(${U('fondo-b-casa-con-sol.jpg')}) center/cover`, { css: `h1{top:1000px;color:${C.pino};font-size:96px}h1 em{font-style:normal;color:${C.terra}}`, html: `<h1>Tu casa, con<br>energía <em>del sol.</em></h1>` }),
 'prueba-2-brote-y-panel': base(`background:url(${U('fondo-a-boleta.jpg')}) center/cover`, { css: `h1{color:${C.pino};font-size:88px}h1 em{font-style:normal;color:${C.terra}}`, html: `<h1>Que tu casa <em>produzca</em><br>su propia energía.</h1>` }),
 'prueba-3-heladera-corte': base(`background:url(${U('fondo-c-heladera.jpg')}) center/cover`, { css: `h1{color:${C.crema}}h1 em{font-style:normal;color:${C.sol}}.s{position:absolute;left:0;right:0;top:340px;text-align:center;font-weight:700;font-size:34px;letter-spacing:.16em;color:${C.crema};opacity:.85}`, html: `<h1>Se corta la luz.<br><em>Tu heladera, no.</em></h1><div class=s>CON BATERÍA DE RESPALDO</div>` }, true),
};
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [n, html] of Object.entries(P)) {
    const f = path.join(__dirname, '_t.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, n + '.png') }); fs.unlinkSync(f);
  }
  await b.close();
})();
