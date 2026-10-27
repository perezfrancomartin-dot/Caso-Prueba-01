// Pone el texto en castellano sobre la isla (imagen sin texto). Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const html = `<meta charset=utf-8><style>
@font-face{font-family:DM;src:url(${U('../../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:DM;color:#fff;background:url(${U('isla-sin-texto-1080x1350.jpg')})}
.c{position:absolute;left:0;right:0;text-align:center}
.top{top:96px;font-size:30px;font-weight:700;text-shadow:0 2px 10px rgba(40,60,70,.55)}
.line{position:absolute;left:539px;width:2px;background:rgba(255,255,255,.85)}
.sub{top:560px;font-size:34px;font-weight:700;text-shadow:0 2px 12px rgba(0,0,0,.6)}
.t{top:615px;font-size:96px;font-weight:800;line-height:1.02;text-shadow:0 3px 18px rgba(0,0,0,.55)}
.rule{position:absolute;left:440px;width:200px;top:822px;height:3px;background:#E3B55A}
.fut{top:850px;font-size:34px;font-weight:700;text-shadow:0 2px 12px rgba(0,0,0,.6)}
.bot{top:1196px;font-size:28px;font-weight:700;text-shadow:0 2px 10px rgba(40,60,70,.55)}
</style>
<div class="c top">Reducí tu huella de carbono</div><div class=line style="top:150px;height:56px"></div>
<div class="c sub">Con soluciones innovadoras</div>
<div class="c t">Tecnología<br>eco-amigable</div><div class=rule></div>
<div class="c fut">Para un futuro sustentable</div>
<div class=line style="top:1130px;height:44px"></div>
<div class="c bot">Soluciones innovadoras para un futuro sustentable</div>`;
(async () => { const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const f = path.join(__dirname, '_t.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(__dirname, 'isla-eco-castellano-1080x1350.png') }); fs.unlinkSync(f); await b.close(); })();
