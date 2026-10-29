// Portadas-plantilla del feed de Albor en la paleta Bosque y Sol. Correr: NODE_PATH=$(npm root -g) node esquema.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const C = { pino: '#1F3A2D', sol: '#D9A441', terra: '#B5562B', hoja: '#4E7A52', arena: '#E4DCC8', crema: '#F7F2E7', tinta: '#26302A' };
const fridge = c => `<svg viewBox="0 0 160 250" width="200"><rect x="15" y="8" width="130" height="234" rx="20" fill="${c}"/><rect x="15" y="92" width="130" height="8" fill="rgba(0,0,0,.18)"/><rect x="118" y="40" width="9" height="40" rx="4" fill="${C.pino}"/><rect x="118" y="116" width="9" height="60" rx="4" fill="${C.pino}"/></svg>`;
const base = (bg, fg, inner, dark) => `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:DM;background:${bg};color:${fg}}
.tag{position:absolute;left:80px;top:90px;font-weight:800;font-size:28px;letter-spacing:.18em}
h1{position:absolute;left:80px;right:80px;top:150px;font:800 112px/1.02 Fr}
.sub{position:absolute;left:80px;right:80px;font-weight:700;font-size:46px;line-height:1.3}
.logo{position:absolute;left:80px;bottom:70px;height:64px}
em{font-style:normal}${inner.css || ''}</style>${inner.html}<img class=logo src="${U(dark ? '../logo/albor/vectorial/logo-horizontal-blanco.svg' : '../logo/albor/vectorial/logo-horizontal-color.svg')}">`;
const P = {
 '05-como-leer-tu-boleta': base(C.crema, C.tinta, { css: `h1{color:${C.pino}}h1 em{color:${C.terra}}.card{position:absolute;left:150px;right:150px;top:560px;height:540px;background:#fff;border-radius:26px;box-shadow:0 10px 30px rgba(0,0,0,.12);padding:44px}.ln{height:16px;border-radius:8px;background:${C.arena};margin-bottom:22px}.co{position:absolute;width:76px;height:76px;border-radius:50%;background:${C.terra};color:#fff;font:800 40px/76px Fr;text-align:center}.lb{position:absolute;font-weight:800;font-size:36px;color:${C.pino}}`, html: `<div class=tag style="color:${C.hoja}">EDUCACIÓN</div><h1>Cómo leer<br>tu <em>boleta de luz</em></h1><div class=card><div class=ln style="width:55%;background:${C.pino}"></div><div class=ln></div><div class=ln style="width:80%"></div><div class=ln style="width:65%"></div><div class=ln></div></div><div class=co style="left:100px;top:640px">1</div><div class=lb style="left:690px;top:655px;display:none"></div><div class=co style="left:100px;top:790px">2</div><div class=co style="left:100px;top:940px">3</div><div class=sub style="left:80px;top:1110px;font-size:30px;opacity:.8;right:300px">(acá va la boleta real, con los datos tapados)</div>` }),
 '07-como-trabajamos': base(C.pino, C.crema, { css: `h1{color:${C.crema}}h1 em{color:${C.sol}}.st{position:absolute;left:80px;right:80px}.st div{display:flex;align-items:center;gap:30px;font:700 50px/1.2 DM;margin-bottom:46px}.st b{flex:none;width:84px;height:84px;border-radius:50%;background:${C.sol};color:${C.pino};font:800 48px/84px Fr;text-align:center}`, html: `<div class=tag style="color:${C.sol}">CÓMO TRABAJAMOS</div><h1>De tu boleta<br>a tu techo, <em>en 4 pasos</em></h1><div class=st style="top:560px"><div><b>1</b>Nos mandás tu boleta</div><div><b>2</b>Miramos tu techo</div><div><b>3</b>Te mostramos la cuenta</div><div><b>4</b>Instalamos y te acompañamos</div></div>` }, true),
 '08-tres-preguntas': base(C.arena, C.tinta, { css: `h1{color:${C.pino};top:500px;font-size:100px}h1 em{color:${C.terra}}.n{position:absolute;left:70px;top:120px;font:800 340px/1 Fr;color:${C.terra}}`, html: `<div class=tag style="color:${C.hoja}">ANTES DE ELEGIR</div><div class=n>3</div><h1>preguntas para hacerle a <em>cualquier instalador</em></h1><div class=sub style="top:1060px;font-size:38px;color:${C.pino}">Guardala para cuando pidas presupuesto</div>` }),
 '10-que-es-un-kwh': base(C.crema, C.tinta, { css: `h1{color:${C.pino};font-size:190px;top:180px;line-height:.95}h1 em{color:${C.terra}}.f{position:absolute;right:110px;top:640px}`, html: `<div class=tag style="color:${C.hoja}">EDUCACIÓN</div><h1>¿Qué<br>es un<br><em>kWh</em>?</h1><div class=f>${fridge(C.pino)}</div><div class=sub style="top:1000px;color:${C.pino}">Explicado con<br>tu heladera</div>` }),
 '11-soli-quien-es': base(C.terra, C.crema, { css: `h1{font-size:150px;top:140px}h1 em{color:${C.crema}}img.s{position:absolute;right:60px;bottom:40px;height:880px}.sub{top:520px;right:520px;font-size:44px}`, html: `<div class=tag>CONOCÉ A SOLI</div><h1>Hola,<br>soy Soli</h1><div class=sub>Te explico la energía solar sin vueltas</div><img class=s src="${U('../soli/soli-explica.png')}">` }, true),
 '12-obra-real': base(C.sol, C.pino, { css: `h1{font-size:104px;top:420px}.f{position:absolute;left:80px;right:80px;top:150px;height:240px;border:6px dashed ${C.pino};border-radius:30px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:40px}`, html: `<div class=tag>CUANDO HAYA UNA OBRA REAL</div><div class=f>FOTO REAL · SIN PERSONAS</div><h1>Antes<br>y después</h1><div class=sub style="top:900px;font-size:42px">Solo con permiso del cliente, sin mostrar caras</div>` }),
 '04-lugar-mejor': base(C.arena, C.tinta, { css: `body{background:url(${U('../publicaciones/tierra-solar/tierra-solar-v1-sin-texto.jpg')}) center/cover}h1{color:${C.pino};font-size:96px;top:110px;left:70px;right:70px;text-align:center}.sub{display:none}.logo{left:50%;transform:translateX(-50%)}`, html: `<h1>Dejamos el lugar mejor de como lo encontramos.</h1>` }),
};
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [n, html] of Object.entries(P)) {
    const f = path.join(__dirname, '_c.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, 'portadas', n + '.png') }); fs.unlinkSync(f);
  }
  await b.close();
})();
