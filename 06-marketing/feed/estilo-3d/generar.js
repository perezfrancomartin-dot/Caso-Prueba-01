// Piezas del estilo "objeto 3D + palabra gigante" (paleta Bosque y Sol). Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const C = { pino: '#1F3A2D', sol: '#D9A441', terra: '#B5562B', arena: '#E4DCC8', crema: '#F7F2E7' };
const base = (bg, inner, logoLeft) => `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:DM;${bg}}
h1{position:absolute;left:60px;right:60px;text-align:center;font:800 92px/1.04 Fr;color:${C.pino}}h1 em{font-style:normal;color:${C.terra}}
.logo{position:absolute;bottom:56px;height:68px;${logoLeft ? 'left:60px' : 'left:50%;transform:translateX(-50%)'}}${inner.css || ''}</style>${inner.html}<img class=logo src="${U('../../logo/albor/vectorial/logo-horizontal-color.svg')}">`;
const img = f => `background:url(${U(f)}) center/cover`;
const P = {
 'boleta-como-leer': base(img('fondo-boleta.jpg'), { css: 'h1{top:80px}', html: '<h1>Cómo leer tu<br><em>boleta de luz</em></h1>' }),
 'kwh-que-es': base(img('fondo-kwh.jpg'), { css: 'h1{top:48px;font-size:58px;line-height:1.1}', html: '<h1>¿Qué es un kWh?<br><em>Explicado con tu heladera</em></h1>' }, true),
 'tres-preguntas': base(img('fondo-tres.jpg'), { css: 'h1{top:1015px;font-size:70px}', html: '<h1>preguntas para hacerle a<br><em>cualquier instalador</em></h1>' }),
 'soli-presentacion': base(`background:${C.crema}`, { css: `.w{position:absolute;left:-30px;right:-30px;top:250px;text-align:center;font:800 520px/1 DM;color:${C.arena};letter-spacing:-.04em}.s{position:absolute;left:50%;transform:translateX(-50%);bottom:150px;height:900px}h1{top:80px;font-size:84px}`, html: `<div class=w>SOLI</div><img class=s src="${U('../../soli/soli-explica.png')}"><h1>Hola, soy Soli.<br><em>Te explico sin vueltas.</em></h1>` }),
};
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [n, html] of Object.entries(P)) {
    const f = path.join(__dirname, '_t.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, n + '.png') }); fs.unlinkSync(f);
  }
  await b.close();
})();
