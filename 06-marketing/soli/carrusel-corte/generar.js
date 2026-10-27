// Carrusel "Se corta la luz. ¿Y tus paneles?" — Soli explica. 4 láminas 1080x1350.
// Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const BRAND = 'NORTE SOLAR', TAG = 'ZONA NORTE';
const U = p => 'file://' + path.resolve(__dirname, '..', p);
const css = `
@font-face{font-family:Fr;src:url(${U('fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('fuentes/DMSans-700.woff2')});font-weight:100 900}
*{box-sizing:border-box;margin:0}
body{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:DM}
h1{font-family:Fr;font-weight:800;line-height:1.05;position:absolute;left:80px;right:80px;top:110px;font-size:96px}
.kick{position:absolute;left:80px;top:64px;font-size:26px;font-weight:800;letter-spacing:.14em}
.body{position:absolute;left:80px;top:470px;width:410px;font-size:38px;line-height:1.35}
.body b{font-weight:800}
.soli{position:absolute;right:10px;bottom:110px;height:880px}
.brand{position:absolute;left:80px;bottom:62px;font-weight:800;letter-spacing:.18em;font-size:26px}
.tag{position:absolute;right:80px;bottom:62px;font-size:26px;font-weight:700}
.dots{position:absolute;left:50%;bottom:66px;transform:translateX(-50%);display:flex;gap:12px}
.dots i{width:14px;height:14px;border-radius:50%;background:currentColor;opacity:.3}.dots i.on{opacity:1}
.sun{position:absolute;right:-10px;bottom:200px;width:600px;height:600px;border-radius:50%;background:#F3E9D8}
`;
const dark = '#5B3F2A', green = '#3E5A33', cream = '#F3E9D8', amber = '#E3B55A', ink = '#4A3322';
const themes = {
  brown: `body{background:${dark};color:${cream}} em{font-style:normal;color:${amber}} .kick,.tag{color:${amber}}`,
  cream: `body{background:${cream};color:${ink}} em{font-style:normal;color:#B5651D} .kick,.tag{color:${green}}`,
  green: `body{background:${green};color:${cream}} em{font-style:normal;color:${amber}} .kick,.tag{color:${amber}}`,
};
const slides = [
  { t: 'brown', soli: 'explica', kick: 'SOLI TE EXPLICA', h: 'Se corta la luz. <em>¿Y tus paneles?</em>', body: 'La respuesta corta: depende. Deslizá y te cuento por qué.' },
  { t: 'cream', soli: 'corte', kick: 'SIN BATERÍA', h: 'Se apagan <em>junto con la luz.</em>', body: 'Los paneles conectados a la red se desconectan solos cuando hay un corte. Es una protección: <b>evita que pase corriente a la red mientras los técnicos reparan.</b>' },
  { t: 'green', soli: 'bateria', circle: true, kick: 'CON BATERÍA', h: 'Tenés luz para <em>lo importante.</em>', body: 'La batería guarda la energía del sol y alimenta, por ejemplo, la heladera y las luces. <b>Cuántas horas dura depende de la batería y de lo que conectes.</b>' },
  { t: 'brown', soli: 'cierre', kick: 'ANTES DE COMPRAR', h: 'Preguntale <em>a quien te cotice.</em>', body: '¿Mi instalación funciona en un corte? ¿Con qué batería y cuántas horas? <b>Mandanos tu boleta por WhatsApp.</b> Si no te conviene, te lo decimos.' },
];
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const out = __dirname; let n = 1;
  for (const s of slides) {
    const dots = slides.map((_, i) => `<i class="${i === n - 1 ? 'on' : ''}"></i>`).join('');
    const html = `<meta charset=utf-8><style>${css}${themes[s.t]}</style>${s.circle ? '<div class=sun></div>' : ''}<div class=kick>${s.kick}</div><h1>${s.h}</h1><div class=body>${s.body}</div><img class=soli src="${U('soli-' + s.soli + '.png')}"><div class=brand>${BRAND}</div><div class=dots>${dots}</div>`;
    const f = path.join(out, `_s${n}.html`); fs.writeFileSync(f, html);
    await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    const over = await pg.evaluate(() => { const h = document.querySelector('h1').getBoundingClientRect(), bd = document.querySelector('.body').getBoundingClientRect(); return { hBottom: h.bottom, bodyTop: bd.top, bodyBottom: bd.bottom }; });
    if (over.hBottom > over.bodyTop || over.bodyBottom > 1250) console.log('REVISAR lámina', n, over);
    await pg.screenshot({ path: path.join(out, `lamina-${n}.png`) }); fs.unlinkSync(f); n++;
  }
  await b.close();
})();
