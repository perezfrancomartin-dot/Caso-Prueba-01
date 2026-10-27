// 3 imágenes (Reducí / Reutilizá / Reciclá) sobre bosque. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
function arrow(x1, y1, x2, y2, w = 9, h = 24) {
  const a = Math.atan2(y2 - y1, x2 - x1), ex = x2 - Math.cos(a) * h * 0.5, ey = y2 - Math.sin(a) * h * 0.5;
  const p = (r, t) => [x2 - Math.cos(a) * r + Math.cos(a + Math.PI / 2) * t, y2 - Math.sin(a) * r + Math.sin(a + Math.PI / 2) * t].join(',');
  return `<line x1="${x1}" y1="${y1}" x2="${ex}" y2="${ey}" stroke="#fff" stroke-width="${w}" stroke-linecap="round"/><polygon points="${x2},${y2} ${p(h, 14)} ${p(h, -14)}" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>`;
}
function tri() { const P = [[100, 24], [176, 156], [24, 156]], L = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]; return [0, 1, 2].map(i => { const p = P[i], q = P[(i + 1) % 3], a = L(p, q, 0.16), b = L(p, q, 0.84); return arrow(a[0], a[1], b[0], b[1]); }).join(''); }
const arc = (d, end) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/>${end}`;
const icons = {
  reduce: arrow(100, 14, 100, 66) + arrow(186, 100, 134, 100) + arrow(100, 186, 100, 134) + arrow(14, 100, 66, 100) + '<circle cx="100" cy="100" r="13" fill="#fff"/>',
  reuse: arc('M100 28 A72 72 0 0 1 172 100', '<polygon points="172,122 156,98 188,98" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>') + arc('M100 172 A72 72 0 0 1 28 100', '<polygon points="28,78 44,102 12,102" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>'),
  recycle: tri(),
};
const items = [
  { k: 'reduce', w: 'Reducí', s: 'Compramos solo lo que hace falta.' },
  { k: 'reuse', w: 'Reutilizá', s: 'Lo que todavía sirve, se vuelve a usar.' },
  { k: 'recycle', w: 'Reciclá', s: 'Lo que sobra, se recicla o se dona.' },
];
const css = `
@font-face{font-family:Fr;src:url(${U('../../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;position:relative;overflow:hidden;color:#fff;text-align:center;font-family:DM}
.bg{position:absolute;inset:0;background-size:cover}
.sh{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(10,30,10,.55),rgba(10,30,10,.15) 70%)}
svg{position:absolute;left:340px;top:360px;width:400px;height:400px;filter:drop-shadow(0 4px 14px rgba(0,0,0,.45))}
.w{position:absolute;left:0;right:0;top:800px;font:800 150px/1 Fr;text-shadow:0 4px 22px rgba(0,0,0,.55)}
.s{position:absolute;left:110px;right:110px;top:975px;font-weight:700;font-size:46px;line-height:1.3;text-shadow:0 3px 16px rgba(0,0,0,.6)}`;
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [i, it] of items.entries()) {
    const f = path.join(__dirname, '_t.html');
    fs.writeFileSync(f, `<meta charset=utf-8><style>${css}</style><div class=bg style="background-image:url(${U(`fondo-${i + 1}-sin-texto.jpg`)})"></div><div class=sh></div><svg viewBox="0 0 200 200">${icons[it.k]}</svg><div class=w>${it.w}</div><div class=s>${it.s}</div>`);
    await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, `imagen-${i + 1}-${it.k}.png`) }); fs.unlinkSync(f);
  }
  await b.close();
})();
