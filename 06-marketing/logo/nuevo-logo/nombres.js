// Muestra el logo A con cada nombre candidato. Correr: NODE_PATH=$(npm root -g) node nombres.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const sym = fs.readFileSync(path.join(__dirname, 'simbolo-A-sol-naciente.svg'), 'utf8').replace('<svg ', '<svg width="120" height="120" ');
const nombres = [['Albor', 'ENERGÍA SOLAR'], ['Alborada', 'ENERGÍA SOLAR'], ['Rumbo Solar', 'ENERGÍA PARA TU CASA'], ['Siembra Solar', 'ENERGÍA PARA TU CASA'], ['Heliotropo', 'ENERGÍA SOLAR'], ['Rayén', 'ENERGÍA SOLAR']];
const html = `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1500px;background:#EFE5D2;padding:50px;font-family:DM;color:#5B3F2A}
h1{font:800 50px Fr;margin-bottom:28px}.g{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.c{background:#F7F0E2;border-radius:26px;padding:34px 40px;display:flex;align-items:center;gap:26px}
.w{font:800 64px/1 Fr;color:#3E5A33}.t{font-size:19px;letter-spacing:.3em;color:#B0532A;margin-top:8px}</style>
<h1>Logo A con cada nombre candidato</h1><div class=g>${nombres.map(([n, d]) => `<div class=c>${sym}<div><div class=w>${n}</div><div class=t>${d}</div></div></div>`).join('')}</div>`;
(async () => { const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1500, height: 900 } });
  const f = path.join(__dirname, '_n.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(__dirname, 'nombres-con-logo-A.png'), fullPage: true }); fs.unlinkSync(f); await b.close(); })();
