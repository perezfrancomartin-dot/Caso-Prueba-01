// Esquema del perfil de Albor (paleta Bosque y Sol). Lo más nuevo arriba a la izquierda. Correr: NODE_PATH=$(npm root -g) node grilla.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const T = [
  { n: 1, img: '../publicaciones/vamos-a-arrancar/vamos-a-arrancar-terracota-1080x1350.png', t: 'Vamos a arrancar', st: 'ok' },
  { n: 2, img: '../anuncio-corte-verano/paso4-v2-mejorada.png', t: 'Se corta la luz', st: 'ok' },
  { n: 3, img: '../soli/carrusel-corte/lamina-1.png', t: 'Soli: ¿y tus paneles? (carrusel)', st: 'ok' },
  { n: 4, img: '../feed/prueba-estilo-3d/prueba-1-casa-palabra-gigante.png', t: 'Tu casa, con energía del sol', st: 'ok' },
  { n: 5, img: 'estilo-3d/boleta-como-leer.png', t: 'Cómo leer tu boleta', st: 'tpl' },
  { n: 6, img: 'reel-portada.png', t: 'Reel: 4 trucos', st: 'ok' },
  { n: 7, img: 'portadas/07-como-trabajamos.png', t: 'Cómo trabajamos', st: 'tpl' },
  { n: 8, img: 'estilo-3d/tres-preguntas.png', t: '3 preguntas', st: 'tpl' },
  { n: 9, img: '../publicaciones/carrusel-3r/imagen-1-reduce.png', t: 'Reducí · Reutilizá · Reciclá', st: 'cond' },
  { n: 10, img: 'estilo-3d/kwh-que-es.png', t: 'Qué es un kWh', st: 'tpl' },
  { n: 11, img: 'estilo-3d/soli-presentacion.png', t: 'Soli, quién es', st: 'tpl' },
  { n: 12, img: 'portadas/12-obra-real.png', t: 'Obra real', st: 'fut' },
];
const orden = [[12, 11, 10], [9, 8, 7], [6, 5, 4], [3, 2, 1]];
const lab = { ok: '', tpl: 'DISEÑO LISTO · FALTA EL CONTENIDO', cond: 'SOLO SI YA DONAMOS / RECICLAMOS', fut: 'FUTURA: CON OBRA REAL' };
const tile = x => `<div class=t style="background:url(${U(x.img)}) center/cover"><span class=n>${x.n}</span>${lab[x.st] ? `<span class="tg ${x.st}">${lab[x.st]}</span>` : ''}</div>`;
const html = `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1020px;background:#F7F2E7;padding:30px;font-family:DM;color:#26302A}
h1{font:800 34px Fr;margin-bottom:4px;color:#1F3A2D}.s{font-size:16px;margin-bottom:18px}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.t{position:relative;aspect-ratio:3/4;overflow:hidden;border-radius:4px}
.n{position:absolute;right:8px;top:8px;background:#1F3A2D;color:#F7F2E7;font-weight:800;font-size:15px;width:28px;height:28px;border-radius:50%;text-align:center;line-height:28px;z-index:2}
.tg{position:absolute;left:0;right:0;bottom:0;text-align:center;font-weight:800;font-size:12px;padding:6px;z-index:2;background:#D9A441;color:#1F3A2D}.tg.cond{background:#B5562B;color:#fff}.tg.fut{background:#E4DCC8}
.l{font-size:14px;margin-top:12px;line-height:1.4}</style>
<h1>Esquema del perfil de Albor</h1><div class=s>Paleta Bosque y Sol. Lo más nuevo arriba. El número es el orden en que se sube (1 primero).</div>
<div class=g>${orden.flat().map(n => tile(T.find(x => x.n === n))).join('')}</div>`;
(async () => { const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1020, height: 1500 } });
  const f = path.join(__dirname, '_g.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(__dirname, 'grilla-perfil.png'), fullPage: true }); fs.unlinkSync(f); await b.close(); })();
