// Vista previa de la grilla del perfil (lo más nuevo arriba a la izquierda). Correr: NODE_PATH=$(npm root -g) node grilla.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const T = [ // orden de publicación 1..12
  { n: 1, t: 'Vamos a arrancar', img: '../publicaciones/vamos-a-arrancar/vamos-a-arrancar-terracota-1080x1350.png', ok: 1 },
  { n: 2, t: 'Se corta la luz (verano, 20 hs)', img: '../anuncio-corte-verano/paso4-v2-mejorada.png', ok: 1 },
  { n: 3, t: 'Soli: ¿y tus paneles? (carrusel)', img: '../soli/carrusel-corte/lamina-1.png', ok: 1 },
  { n: 4, t: 'Dejamos el lugar mejor (planeta con paneles)', img: '../publicaciones/tierra-solar/tierra-solar-v1-sin-texto.jpg', ok: 1, txt: 1 },
  { n: 5, t: 'Cómo leer tu boleta', bg: '#F3E9D8', fg: '#4A3322', ok: 0 },
  { n: 6, t: 'Reel: 4 trucos para bajar la boleta', img: 'reel-frame.png', ok: 1 },
  { n: 7, t: 'Cómo trabajamos, en 4 pasos', bg: '#B0532A', fg: '#F3E9D8', ok: 0 },
  { n: 8, t: '3 preguntas para cualquier instalador', bg: '#3E5A33', fg: '#F3E9D8', ok: 0 },
  { n: 9, t: 'Reducí · Reutilizá · Reciclá', img: '../publicaciones/carrusel-3r/imagen-1-reduce.png', ok: 1, cond: 1 },
  { n: 10, t: 'Qué es un kWh (explicado con tu heladera)', bg: '#F3E9D8', fg: '#4A3322', ok: 0 },
  { n: 11, t: 'Soli: quién es', bg: '#E3B55A', fg: '#4A3322', ok: 0 },
  { n: 12, t: 'Antes y después de una obra real (sin personas)', bg: '#5B3F2A', fg: '#F3E9D8', ok: 0, fut: 1 },
];
const orden = [[12, 11, 10], [9, 8, 7], [6, 5, 4], [3, 2, 1]];
const tile = x => {
  const st = x.img ? `background:url(${U(x.img)}) center/cover` : `background:${x.bg};color:${x.fg}`;
  const tag = !x.ok ? '<span class=tg>POR HACER</span>' : x.cond ? '<span class="tg w">SOLO SI YA DONAMOS/RECICLAMOS</span>' : x.txt ? '<span class="tg w">FALTA EL TEXTO</span>' : '';
  return `<div class="t ${x.ok ? '' : 'p'}" style="${st}"><span class=n>${x.n}</span>${x.ok && x.img ? '' : `<div class=lb>${x.t}</div>`}${tag}</div>`;
};
const html = `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1020px;background:#EFE5D2;padding:30px;font-family:DM;color:#5B3F2A}
h1{font:800 34px Fr;margin-bottom:4px}.s{font-size:16px;margin-bottom:18px}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.t{position:relative;aspect-ratio:3/4;overflow:hidden;border-radius:4px}.t.p{border:3px dashed rgba(0,0,0,.35)}
.n{position:absolute;left:8px;top:8px;background:#5B3F2A;color:#F3E9D8;font-weight:800;font-size:15px;width:28px;height:28px;border-radius:50%;text-align:center;line-height:28px;z-index:2}
.lb{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:30px;font:800 28px/1.1 Fr}
.tg{position:absolute;left:0;right:0;bottom:0;background:#E3B55A;color:#4A3322;text-align:center;font-weight:800;font-size:13px;padding:6px;z-index:2}.tg.w{background:#B0532A;color:#fff}
.l{font-size:14px;margin-top:12px;line-height:1.4}</style>
<h1>Cómo se vería el perfil de Albor</h1><div class=s>Lo más nuevo arriba. Número = orden de publicación (1 se sube primero).</div>
<div class=g>${orden.flat().map(n => tile(T.find(x => x.n === n))).join('')}</div>
<div class=l>Con borde punteado: piezas que faltan. Franja roja: existe pero tiene una condición.</div>`;
(async () => { const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1020, height: 1500 } });
  const f = path.join(__dirname, '_g.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(__dirname, 'grilla-perfil.png'), fullPage: true }); fs.unlinkSync(f); await b.close(); })();
