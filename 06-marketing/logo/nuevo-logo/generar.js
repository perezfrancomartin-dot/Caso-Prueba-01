// Propuestas de logo en paleta terracota / verde / ocre. Correr: NODE_PATH=$(npm root -g) node generar.js
// Cambiar NOMBRE para probar otro nombre de marca.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const NOMBRE = process.env.NOMBRE || 'Norte Solar', DESC = 'ENERGÍA SOLAR';
const C = { terra: '#B0532A', verde: '#3E5A33', ocre: '#E3B55A', crema: '#F3E9D8', marron: '#5B3F2A' };
const U = p => 'file://' + path.resolve(__dirname, p);
const polar = (cx, cy, r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
// A: sol naciente con brote (dos hojas)
const symA = () => {
  let rays = ''; for (let i = 0; i < 9; i++) { const a = Math.PI + (i + 0.5) * Math.PI / 9, [x1, y1] = polar(100, 112, 52, a), [x2, y2] = polar(100, 112, 70, a); rays += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.terra}" stroke-width="9" stroke-linecap="round"/>`; }
  return `<circle cx="100" cy="112" r="40" fill="${C.ocre}"/>${rays}<path d="M100 178 C66 178 50 156 50 128 C84 128 100 150 100 178Z" fill="${C.verde}"/><path d="M100 178 C134 178 150 156 150 128 C116 128 100 150 100 178Z" fill="#567A45"/>`;
};
// B: hoja-panel solar
const symB = () => `<defs><clipPath id="lf"><path d="M24 176 C24 84 84 26 178 26 C178 118 118 176 24 176Z"/></clipPath></defs><path d="M24 176 C24 84 84 26 178 26 C178 118 118 176 24 176Z" fill="${C.verde}"/><g clip-path="url(#lf)" stroke="${C.crema}" stroke-width="5" opacity=".9"><path d="M72 0V200M120 0V200M0 78H200M0 126H200"/></g><path d="M30 170 L172 32" stroke="${C.ocre}" stroke-width="7" stroke-linecap="round"/><circle cx="62" cy="62" r="20" fill="${C.ocre}"/>`;
// C: sol-brújula (rosa de los vientos)
const symC = () => {
  let t = ''; for (let i = 0; i < 16; i++) { const a = -Math.PI / 2 + i * Math.PI / 8, len = i % 4 === 0 ? 84 : i % 2 === 0 ? 70 : 58, w = 0.17;
    const [x0, y0] = polar(100, 100, len, a), [x1, y1] = polar(100, 100, 30, a - w), [x2, y2] = polar(100, 100, 30, a + w);
    t += `<polygon points="${x0},${y0} ${x1},${y1} ${x2},${y2}" fill="${i === 0 ? C.verde : C.terra}"/>`; }
  return `${t}<circle cx="100" cy="100" r="38" fill="${C.ocre}"/><circle cx="100" cy="100" r="38" fill="none" stroke="${C.marron}" stroke-width="5"/>`;
};
// D: cara de Soli simplificada
const symD = () => {
  let r = ''; for (let i = 0; i < 11; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / 11, [x0, y0] = polar(100, 104, 86, a), [x1, y1] = polar(100, 104, 58, a - 0.2), [x2, y2] = polar(100, 104, 58, a + 0.2); r += `<polygon points="${x0},${y0} ${x1},${y1} ${x2},${y2}" fill="${C.terra}" stroke="${C.terra}" stroke-width="8" stroke-linejoin="round"/>`; }
  return `${r}<circle cx="100" cy="104" r="52" fill="${C.ocre}"/><circle cx="82" cy="98" r="6" fill="${C.marron}"/><circle cx="118" cy="98" r="6" fill="${C.marron}"/><path d="M80 118 Q100 138 120 118" fill="none" stroke="${C.marron}" stroke-width="6" stroke-linecap="round"/>`;
};
const items = [
  { k: 'A', n: 'Sol naciente', d: 'Un sol que sale detrás de un brote. Energía + cuidado del ambiente. Simple y cálido.', s: symA },
  { k: 'B', n: 'Hoja solar', d: 'Una hoja hecha con celdas de panel. Dice "solar" y "natural" en un solo dibujo.', s: symB },
  { k: 'C', n: 'Brújula-sol', d: 'Rosa de los vientos con el norte en verde. Mantiene la idea de "Norte". Más detallado.', s: symC },
  { k: 'D', n: 'Soli', d: 'La cara de la mascota como logo. Simpático y propio; menos "serio" para alguien que paga millones.', s: symD },
];
const svg = (s, size = 200) => `<svg viewBox="0 0 200 200" width="${size}" height="${size}">${s()}</svg>`;
const css = `
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1700px;background:#EFE5D2;font-family:DM;color:${C.marron};padding:50px}
h1{font:800 54px Fr;margin-bottom:6px}.sub{font-size:24px;margin-bottom:34px;opacity:.8}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.card{background:#F7F0E2;border-radius:28px;padding:30px;display:grid;grid-template-columns:230px 1fr;gap:26px}
.k{font:800 30px Fr;color:${C.terra}}.nm{font-weight:800;font-size:30px;margin:2px 0 8px}.ds{font-size:21px;line-height:1.35}
.lock{display:flex;align-items:center;gap:18px;margin-top:20px}.lock .w{font:800 52px/1 Fr;color:${C.verde}}.lock .t{font-size:17px;letter-spacing:.3em;color:${C.terra};margin-top:6px}
.av{display:flex;gap:18px;align-items:center;margin-top:20px}
.c{border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}
.c svg{width:78%;height:78%}`;
const html = `<meta charset=utf-8><style>${css}</style><h1>Propuestas de logo — ${NOMBRE}</h1><div class=sub>Paleta terracota, verde y ocre. Cada una se ve completa, con el nombre, y en los tamaños donde más se va a ver: foto de perfil (110 px) y feed (32 px).</div><div class=grid>${items.map(it => `
<div class=card><div>${svg(it.s, 230)}</div><div><div class=k>${it.k}</div><div class=nm>${it.n}</div><div class=ds>${it.d}</div>
<div class=lock>${svg(it.s, 84)}<div><div class=w>${NOMBRE}</div><div class=t>${DESC}</div></div></div>
<div class=av><div class=c style="width:110px;height:110px;background:${C.crema}">${svg(it.s)}</div><div class=c style="width:110px;height:110px;background:${C.verde}">${svg(it.s)}</div><div class=c style="width:32px;height:32px;background:${C.crema}">${svg(it.s)}</div><div class=c style="width:32px;height:32px;background:${C.terra}">${svg(it.s)}</div></div></div></div>`).join('')}</div>`;
(async () => {
  for (const it of items) fs.writeFileSync(path.join(__dirname, `simbolo-${it.k}-${it.n.toLowerCase().replace(/[^a-z]+/g, '-')}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">${it.s()}</svg>`);
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1700, height: 1200 } });
  const f = path.join(__dirname, '_l.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(__dirname, 'propuestas-logo-nuevo.png'), fullPage: true }); fs.unlinkSync(f); await b.close();
})();
