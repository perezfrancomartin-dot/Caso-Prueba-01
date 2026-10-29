// Tres sistemas de color para escalar la marca. Correr: NODE_PATH=$(npm root -g) node paletas-escalar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const svg0 = fs.readFileSync(path.join(__dirname, 'vectorial/logo-horizontal-color.svg'), 'utf8');
const S = [
 { n: '1 · Bosque y Sol', rec: 'RECOMENDADA', d: 'Evolución de la actual. Verde pino, dorado de sol, terracota de acento. Natural y seria.',
   c: [['Pino', '#1F3A2D', 'principal'], ['Sol', '#D9A441', 'secundario'], ['Terracota', '#B5562B', 'acento'], ['Hoja', '#4E7A52', 'apoyo'], ['Arena', '#E4DCC8', 'fondo 2'], ['Crema', '#F7F2E7', 'fondo 1'], ['Tinta', '#26302A', 'texto']],
   ui: ['#3F7D4E', '#D9A441', '#B3392E', '#3E6E8C'], logo: { g: '#1F3A2D', g2: '#4E7A52', acc: '#B5562B', gold: '#D9A441', accD: '#E58A5C' }, light: '#F7F2E7', dark: '#1F3A2D', tx: '#26302A', cr: 'Texto sobre crema 12,2 · crema sobre pino 11,1 · dorado sobre pino 5,5 · terracota sobre crema 4,3 (solo títulos grandes) · dorado sobre crema 2,0 (no usar como texto)' },
 { n: '2 · Pino y Cielo', rec: '', d: 'Verde azulado profundo + azul cielo + dorado. Natural pero con un toque técnico: buena para propuestas e informes.',
   c: [['Pino azulado', '#134E4A', 'principal'], ['Sol', '#E9B949', 'secundario'], ['Cielo', '#3A7CA5', 'acento'], ['Salvia', '#7FA38F', 'apoyo'], ['Arena', '#DCD3C0', 'fondo 2'], ['Hueso', '#F4F1EA', 'fondo 1'], ['Tinta', '#14201F', 'texto']],
   ui: ['#2F8F5B', '#E9B949', '#C0392B', '#3A7CA5'], logo: { g: '#134E4A', g2: '#7FA38F', acc: '#3A7CA5', gold: '#E9B949', accD: '#8EC3E0' }, light: '#F4F1EA', dark: '#134E4A', tx: '#14201F', cr: 'Texto sobre hueso 14,8 · hueso sobre pino 8,4 · dorado sobre pino 5,2 · cielo sobre hueso 4,0 (solo títulos) · dorado sobre hueso 1,6 (no como texto)' },
 { n: '3 · Amanecer (Albor)', rec: '', d: 'Del nombre: azul índigo que se abre en durazno y dorado, como el primer rayo. La más distintiva; cambia mucho el look actual.',
   c: [['Índigo', '#1E2A4A', 'principal'], ['Dorado', '#F4C95D', 'secundario'], ['Durazno', '#F2A06B', 'acento'], ['Salvia', '#8FA98B', 'apoyo'], ['Arena', '#E8DCC6', 'fondo 2'], ['Marfil', '#FBF4EA', 'fondo 1'], ['Tinta', '#121A2E', 'texto']],
   ui: ['#3F8F6B', '#F4C95D', '#C2453A', '#4B6FA5'], logo: { g: '#1E2A4A', g2: '#8FA98B', acc: '#F2A06B', gold: '#F4C95D', accD: '#F2A06B' }, light: '#FBF4EA', dark: '#1E2A4A', tx: '#121A2E', cr: 'Texto sobre marfil 15,9 · marfil sobre índigo 12,9 · dorado sobre índigo 9,0 · durazno sobre índigo 6,7 · durazno/dorado sobre marfil 1,9 / 1,4 (solo sobre oscuro)' },
];
const logo = (p, bg) => svg0.replace(/#3E5A33/g, bg ? '#FFFFFF' : p.g).replace(/#567A45/g, p.g2).replace(/#B0532A/g, bg ? (p.accD || p.acc) : p.acc).replace(/#E3B55A/g, p.gold).replace('<svg ', '<svg style="width:300px;height:auto" ');
const col = s => `<div class=c><div class=hd><h2>${s.n}</h2>${s.rec ? `<span class=rc>${s.rec}</span>` : ''}</div><p>${s.d}</p>
<div class=sw>${s.c.map(([n, h, r]) => `<div class=s><i style="background:${h}"></i><b>${n}</b><small>${h}<br>${r}</small></div>`).join('')}</div>
<div class=ui><small>Estados (sistema, alertas):</small>${s.ui.map(h => `<i style="background:${h}"></i>`).join('')}</div>
<div class=lg style="background:${s.light}">${logo(s.logo)}</div>
<div class=lg style="background:${s.dark}">${logo(s.logo, true).replace(new RegExp(s.logo.g.replace('#', '#'), 'g'), '#FFFFFF')}</div>
<div class=ex><div class=a style="background:${s.dark};color:${s.light}"><b style="color:${s.logo.gold}">Camioneta · remera</b><br>pino/índigo + dorado</div><div class=a style="background:${s.light};color:${s.tx}"><b style="color:${s.logo.acc}">Propuesta · web</b><br>fondo claro + texto</div></div>
<div class=cr>${s.cr}</div></div>`;
const html = `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1560px;background:#E9E4DA;padding:28px;font-family:DM;color:#333;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.hd{display:flex;align-items:center;gap:10px}h2{font:800 25px Fr}.rc{background:#1F3A2D;color:#fff;font-size:11px;padding:4px 8px;border-radius:10px;letter-spacing:.08em}
p{font-size:14px;height:56px;line-height:1.35;margin:4px 0 8px}
.sw{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}.s i{display:block;height:54px;border-radius:6px;border:1px solid rgba(0,0,0,.12)}.s b{font-size:11px;display:block;margin-top:3px}.s small{font-size:9px;line-height:1.25;color:#666;display:block}
.ui{display:flex;align-items:center;gap:6px;margin:10px 0}.ui small{font-size:11px;margin-right:4px}.ui i{width:30px;height:18px;border-radius:5px}
.lg{padding:18px 20px;border-radius:10px;margin-top:8px;display:flex;justify-content:center}
.ex{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}.a{border-radius:10px;padding:14px;font-size:12px;line-height:1.5;border:1px solid rgba(0,0,0,.1)}.a b{font:800 15px Fr}
.cr{font-size:11px;line-height:1.4;margin-top:8px;color:#555}</style>${S.map(col).join('')}`;
(async () => { const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1560, height: 900 } });
  const f = path.join(__dirname, '_e.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(__dirname, 'paletas-para-escalar.png'), fullPage: true }); fs.unlinkSync(f); await b.close(); })();
