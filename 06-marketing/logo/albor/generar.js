// Paquete de logo Albor. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const SCALE = Number(process.env.SCALE || 1), OUT = process.env.OUT || '.';
fs.mkdirSync(path.join(__dirname, OUT), { recursive: true });
const U = p => 'file://' + path.resolve(__dirname, p);
const P = { terra: '#B0532A', verde: '#3E5A33', verde2: '#567A45', ocre: '#E3B55A', crema: '#F3E9D8', marron: '#5B3F2A' };
const polar = (cx, cy, r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
// símbolo: sol naciente con brote. c = {rays, sun, leaf1, leaf2, gap}
function symbol(c) {
  let rays = ''; for (let i = 0; i < 9; i++) { const a = Math.PI + (i + 0.5) * Math.PI / 9, [x1, y1] = polar(100, 112, 52, a), [x2, y2] = polar(100, 112, 70, a); rays += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c.rays}" stroke-width="9" stroke-linecap="round"/>`; }
  const gap = c.gap ? `stroke="${c.gap}" stroke-width="4"` : '';
  const L1 = 'M100 178 C66 178 50 156 50 128 C84 128 100 150 100 178Z', L2 = 'M100 178 C134 178 150 156 150 128 C116 128 100 150 100 178Z';
  const mk = c.knock ? `<defs><mask id="k"><rect x="0" y="0" width="200" height="200" fill="#fff"/><path d="${L1}" fill="#000" stroke="#000" stroke-width="11"/><path d="${L2}" fill="#000" stroke="#000" stroke-width="11"/></mask></defs>` : '';
  return `${mk}<circle cx="100" cy="112" r="40" fill="${c.sun}" ${c.knock ? 'mask="url(#k)"' : ''}/>${rays}<path d="M100 178 C66 178 50 156 50 128 C84 128 100 150 100 178Z" fill="${c.leaf1}" ${gap}/><path d="M100 178 C134 178 150 156 150 128 C116 128 100 150 100 178Z" fill="${c.leaf2}" ${gap}/>`;
}
const full = { rays: P.terra, sun: P.ocre, leaf1: P.verde, leaf2: P.verde2 };
const mono = col => ({ rays: col, sun: col, leaf1: col, leaf2: col, knock: true });
const svg = (c, s) => `<svg viewBox="10 20 180 170" width="${s}" height="${s * 170 / 180}" xmlns="http://www.w3.org/2000/svg">${symbol(c)}</svg>`;
const font = `
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{font-family:DM}`;
const horiz = (c, w, d, s = 1) => `<div style="display:flex;align-items:center;gap:${24 * s}px">${svg(c, 150 * s)}<div><div style="font:800 ${112 * s}px/1 Fr;color:${w}">Albor</div><div style="font-size:${26 * s}px;letter-spacing:.36em;color:${d};margin-top:${10 * s}px;font-weight:700">ENERGÍA SOLAR</div></div></div>`;
const vert = (c, w, d, s = 1) => `<div style="display:flex;flex-direction:column;align-items:center">${svg(c, 260 * s)}<div style="font:800 ${130 * s}px/1 Fr;color:${w};margin-top:${6 * s}px">Albor</div><div style="font-size:${28 * s}px;letter-spacing:.38em;color:${d};margin-top:${12 * s}px;font-weight:700;padding-left:.38em">ENERGÍA SOLAR</div></div>`;
const piezas = [
  ['logo-horizontal-color', 900, 260, 'transparent', horiz(full, P.verde, P.terra)],
  ['logo-horizontal-blanco', 900, 260, 'transparent', horiz(mono('#fff'), '#fff', '#fff')],
  ['logo-horizontal-negro', 900, 260, 'transparent', horiz(mono('#1a1a1a'), '#1a1a1a', '#1a1a1a')],
  ['logo-vertical-color', 700, 560, 'transparent', vert(full, P.verde, P.terra)],
  ['logo-vertical-blanco', 700, 560, 'transparent', vert(mono('#fff'), '#fff', '#fff')],
  ['simbolo-color', 600, 580, 'transparent', svg(full, 580)],
  ['perfil-1080-crema', 1080, 1080, P.crema, `<div style="width:1080px;height:1080px;display:flex;align-items:center;justify-content:center">${svg(full, 640)}</div>`],
  ['perfil-1080-verde', 1080, 1080, P.verde, `<div style="width:1080px;height:1080px;display:flex;align-items:center;justify-content:center">${svg({ rays: P.ocre, sun: P.ocre, leaf1: P.crema, leaf2: '#D9CDB4', gap: P.verde }, 640)}</div>`],
  ['portada-facebook-1640x624', 1640, 624, P.crema, `<div style="width:1640px;height:624px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px">${horiz(full, P.verde, P.terra, 1.05)}<div style="font:700 34px DM;color:${P.marron};margin-top:8px">Energía solar para tu casa · Zona Norte</div></div>`],
];
(async () => {
  const b = await chromium.launch();
  for (const [n, w, h, bg, body] of piezas) {
    const pg = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: SCALE });
    const f = path.join(__dirname, '_p.html'); fs.writeFileSync(f, `<meta charset=utf-8><style>${font}html,body{background:${bg};width:${w}px;height:${h}px}body{display:flex;align-items:center;justify-content:center}</style>${body}`);
    await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, OUT, n + '.png'), omitBackground: bg === 'transparent' });
    if (process.env.PDF && !n.startsWith('perfil')) await pg.pdf({ path: path.join(__dirname, OUT, n + '.pdf'), width: w + 'px', height: h + 'px', printBackground: true, pageRanges: '1' });
    await pg.close();
  }
  fs.unlinkSync(path.join(__dirname, '_p.html')); fs.writeFileSync(path.join(__dirname, 'simbolo-albor.svg'), svg(full, 580)); await b.close();
})();
