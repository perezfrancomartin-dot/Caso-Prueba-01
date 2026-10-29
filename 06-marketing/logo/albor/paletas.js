// Compara tres paletas con el mismo logo y la misma pieza. Correr: NODE_PATH=$(npm root -g) node paletas.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const svg0 = fs.readFileSync(path.join(__dirname, 'vectorial/logo-horizontal-color.svg'), 'utf8');
const P = [
  { n: 'A · La actual', d: 'Terracota, verde y ocre sobre crema. Cálida, natural, "hippie".', bg: '#F3E9D8', dark: '#5B3F2A', g: '#3E5A33', g2: '#567A45', acc: '#B0532A', gold: '#E3B55A', tx: '#4A3322', onDark: '#F3E9D8', sw: ['#F3E9D8', '#3E5A33', '#B0532A', '#E3B55A', '#5B3F2A'] },
  { n: 'B · La actual, más premium', d: 'Misma idea, pero verde bosque profundo, crema más clara, terracota solo de acento y casi sin marrón.', bg: '#F7F2E7', dark: '#1F3A2D', g: '#1F3A2D', g2: '#4E7A52', acc: '#B5562B', gold: '#D9A441', tx: '#26302A', onDark: '#F7F2E7', sw: ['#F7F2E7', '#1F3A2D', '#4E7A52', '#B5562B', '#D9A441'] },
  { n: 'C · Amanecer (más tecnológica)', d: 'Azul noche con dorado y coral suave. Más "confianza y tecnología", menos natural.', bg: '#F5F1E8', dark: '#12253F', g: '#12253F', g2: '#5E7F8C', acc: '#D9694A', gold: '#E8B84A', tx: '#1B2638', onDark: '#F5F1E8', sw: ['#F5F1E8', '#12253F', '#5E7F8C', '#D9694A', '#E8B84A'] },
];
const logo = p => svg0.replace(/#3E5A33/g, p.g).replace(/#567A45/g, p.g2).replace(/#B0532A/g, p.acc).replace(/#E3B55A/g, p.gold).replace('<svg ', '<svg style="width:330px;height:auto" ');
const col = p => `<div class=c><h2>${p.n}</h2><p>${p.d}</p>
<div class=post style="background:${p.bg}"><div style="padding:34px 30px 0">${logo(p)}</div>
<div class=h style="color:${p.g}">Tu casa,<br>con energía<br><span style="color:${p.acc}">del sol.</span></div>
<div class=card style="background:${p.dark};color:${p.onDark}"><b style="color:${p.gold}">Mandanos tu boleta</b><br>y te decimos si te conviene.</div></div>
<div class=sw>${p.sw.map(c => `<i style="background:${c}"></i>`).join('')}</div></div>`;
const html = `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1500px;background:#E9E4DA;padding:30px;font-family:DM;color:#333;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
h2{font:800 24px Fr;margin-bottom:4px}p{font-size:15px;height:42px;line-height:1.35}
.post{height:620px;border-radius:10px;margin-top:8px;position:relative;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.15)}
.h{font:800 62px/1.02 Fr;padding:50px 30px}.card{position:absolute;left:24px;right:24px;bottom:24px;border-radius:14px;padding:24px;font-size:22px;line-height:1.4}
.sw{display:flex;gap:6px;margin-top:10px}.sw i{flex:1;height:34px;border-radius:6px;border:1px solid rgba(0,0,0,.12)}</style>${P.map(col).join('')}`;
(async () => { const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1500, height: 900 } });
  const f = path.join(__dirname, '_p.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(__dirname, 'comparacion-paletas.png'), fullPage: true }); fs.unlinkSync(f); await b.close(); })();
