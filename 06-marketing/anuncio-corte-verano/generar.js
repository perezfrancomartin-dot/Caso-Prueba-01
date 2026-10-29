// Anuncio feed 1080x1350: fondo B + texto. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const ganchos = {
  'paso3-a-lista-derecha': { k: 'VERANO · 20:00 HS', h: 'Se corta<br>la luz.', extra: '<div class=lg></div><ul class=ls><li>La bomba de la pileta</li><li>El freezer</li><li>El wifi</li><li>La alarma</li></ul>' },
  'paso4-v2-mejorada': { k: 'VERANO · 20:00 HS', h: 'Se corta<br>la luz.', v2: true, extra: '<div class=lb></div><p class="fr f2">La bomba de la pileta, el freezer,<br>el wifi, la alarma… <b>todo sin luz.</b></p><img class=logo src="' + U('../logo/albor/alta-resolucion/logo-horizontal-blanco.png') + '">' },
  'paso3-b-frase-abajo': { k: 'VERANO · 20:00 HS', h: 'Se corta<br>la luz.', extra: '<div class=lb></div><p class=fr>La bomba de la pileta, el freezer,<br>el wifi, la alarma… <b>todo sin luz.</b></p>' },
};
const css = `
@font-face{font-family:Fr;src:url(${U('../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}.bgi{position:absolute;inset:0;background:url(${U('fondo-b-interior-sin-texto.jpg')}) center/cover}.v2 .bgi,.v2body .bgi{filter:brightness(1.22) contrast(1.06) saturate(1.05)}.f2{font-size:54px!important;bottom:70px!important}.logo{position:absolute;right:70px;top:100px;height:84px}body{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:DM;color:#F3E9D8}
.g{position:absolute;left:0;right:0;top:0;height:720px;background:linear-gradient(#06101a 0%,rgba(6,16,26,.86) 45%,transparent 100%)}
.k{position:absolute;left:80px;top:110px;font-weight:800;font-size:34px;letter-spacing:.2em;color:#D9A441}
.lg{position:absolute;right:0;top:760px;width:600px;bottom:0;background:linear-gradient(90deg,transparent,rgba(5,10,16,.78) 45%)}
.ls{position:absolute;right:70px;top:880px;list-style:none;text-align:left;width:420px}
.ls li{font:700 44px/1.2 DM;margin-bottom:26px;padding-left:34px;position:relative;text-shadow:0 2px 14px rgba(0,0,0,.7)}
.ls li:before{content:'';position:absolute;left:0;top:18px;width:16px;height:16px;border-radius:50%;background:#D9A441}
.lb{position:absolute;left:0;right:0;bottom:0;height:330px;background:linear-gradient(transparent,rgba(5,10,16,.88) 55%)}
.fr{position:absolute;left:80px;right:80px;bottom:80px;font:700 46px/1.3 DM;text-shadow:0 2px 14px rgba(0,0,0,.7)}.fr b{color:#D9A441}
h1{position:absolute;left:80px;right:80px;font:800 150px/1.0 Fr;text-shadow:0 4px 24px rgba(0,0,0,.5)}`;
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [n, g] of Object.entries(ganchos)) {
    const f = path.join(__dirname, '_t.html');
    fs.writeFileSync(f, `<meta charset=utf-8><style>${css}h1{top:${g.k ? 190 : 120}px}</style><div class=bgi style="${g.v2 ? 'filter:brightness(1.22) contrast(1.06) saturate(1.05)' : ''}"></div><div class=g></div>${g.k ? `<div class=k>${g.k}</div>` : ''}<h1>${g.h}</h1>${g.extra || ''}`);
    await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, n + '.png') }); fs.unlinkSync(f);
  }
  await b.close();
})();
