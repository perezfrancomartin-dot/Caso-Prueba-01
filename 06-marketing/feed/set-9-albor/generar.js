// Set de 9 publicaciones de Albor (1080x1080) con el brief del dueño del 30/10. Correr: NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const U = p => 'file://' + path.resolve(__dirname, p);
const K = { navy: '#0F172A', verde: '#00C950', lima: '#8FE000', beige: '#F5F1EB', blanco: '#FFFFFF', naranja: '#E85D26', vscuro: '#1A2E1A', naranjaClaro: '#FFD7BF', rojo: '#FF5A4F' };
const ic = {
  heladera: c => `<svg viewBox="0 0 100 130"><rect x="14" y="4" width="72" height="122" rx="12" fill="none" stroke="${c}" stroke-width="7"/><path d="M14 48H86" stroke="${c}" stroke-width="6"/><path d="M70 22v14M70 62v24" stroke="${c}" stroke-width="7" stroke-linecap="round"/></svg>`,
  bomba: c => `<svg viewBox="0 0 130 100"><path d="M10 80h60V50H40V30h30" fill="none" stroke="${c}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/><circle cx="92" cy="58" r="26" fill="none" stroke="${c}" stroke-width="7"/><path d="M92 40c8 10 12 16 12 22a12 12 0 0 1-24 0c0-6 4-12 12-22z" fill="${c}"/></svg>`,
  wifi: c => `<svg viewBox="0 0 120 100"><g fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round"><path d="M10 38a72 72 0 0 1 100 0"/><path d="M28 58a46 46 0 0 1 64 0"/><path d="M46 78a20 20 0 0 1 28 0"/></g><circle cx="60" cy="92" r="6" fill="${c}"/></svg>`,
  alarma: c => `<svg viewBox="0 0 110 120"><path d="M55 10c-22 0-34 16-34 38v22l-10 16h88L89 70V48C89 26 77 10 55 10z" fill="none" stroke="${c}" stroke-width="7" stroke-linejoin="round"/><path d="M42 98a14 14 0 0 0 26 0" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/></svg>`,
  boleta: c => `<svg viewBox="0 0 100 120"><rect x="14" y="6" width="72" height="108" rx="10" fill="none" stroke="${c}" stroke-width="7"/><path d="M30 34h40M30 54h40M30 74h24" stroke="${c}" stroke-width="7" stroke-linecap="round"/></svg>`,
  techo: c => `<svg viewBox="0 0 130 100"><path d="M10 52L65 10l55 42M24 44v46h82V44" fill="none" stroke="${c}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/><path d="M40 34l34-26" stroke="${c}" stroke-width="0"/><rect x="48" y="52" width="34" height="38" fill="none" stroke="${c}" stroke-width="6"/></svg>`,
  cuenta: c => `<svg viewBox="0 0 110 120"><rect x="14" y="6" width="82" height="108" rx="10" fill="none" stroke="${c}" stroke-width="7"/><rect x="28" y="20" width="54" height="22" rx="4" fill="${c}"/><g fill="${c}"><circle cx="36" cy="64" r="5"/><circle cx="55" cy="64" r="5"/><circle cx="74" cy="64" r="5"/><circle cx="36" cy="84" r="5"/><circle cx="55" cy="84" r="5"/><circle cx="74" cy="84" r="5"/></g></svg>`,
  instalar: c => `<svg viewBox="0 0 130 100"><path d="M14 80L40 14h82L96 80z" fill="none" stroke="${c}" stroke-width="7" stroke-linejoin="round"/><path d="M33 47h82M24 64h82M60 14l-18 66M92 14L74 80" stroke="${c}" stroke-width="4"/></svg>`,
  ac: c => `<svg viewBox="0 0 260 110"><rect x="6" y="8" width="248" height="68" rx="16" fill="${c}"/><rect x="26" y="52" width="208" height="8" rx="4" fill="rgba(0,0,0,.18)"/><circle cx="222" cy="28" r="6" fill="${K.verde}"/><g fill="none" stroke="#7CC8F2" stroke-width="7" stroke-linecap="round"><path d="M50 92q8 8 0 16"/><path d="M110 92q8 8 0 16"/><path d="M170 92q8 8 0 16"/><path d="M220 92q8 8 0 16"/></g></svg>`,
  termo: () => `<svg viewBox="0 0 90 260"><rect x="26" y="6" width="38" height="190" rx="19" fill="#fff"/><circle cx="45" cy="208" r="40" fill="#fff"/><rect x="36" y="100" width="18" height="96" rx="9" fill="${K.verde}"/><circle cx="45" cy="208" r="28" fill="${K.verde}"/><g stroke="${K.navy}" stroke-width="5"><path d="M64 40h18M64 74h18M64 108h18"/></g></svg>`,
  lupa: c => `<svg viewBox="0 0 160 170"><circle cx="64" cy="64" r="48" fill="rgba(255,255,255,.35)" stroke="${c}" stroke-width="10"/><path d="M100 100l50 54" stroke="${c}" stroke-width="16" stroke-linecap="round"/></svg>`,
};
const cross = `<svg viewBox="0 0 100 100" style="position:absolute;inset:-6%;width:112%;height:112%"><path d="M8 92L92 8" stroke="${K.rojo}" stroke-width="9" stroke-linecap="round"/></svg>`;
const head = (bg, fg) => `<meta charset=utf-8><style>
@font-face{font-family:Mo;src:url(${U('fuentes/Montserrat.woff2')});font-weight:100 900}
@font-face{font-family:In;src:url(${U('fuentes/Inter.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1080px;position:relative;overflow:hidden;font-family:In;color:${fg};${bg}}
.t{position:absolute;font:800 96px/1.02 Mo;letter-spacing:-.01em}.s{position:absolute;font:600 44px/1.25 In}
.ico svg{width:100%;height:100%}.logo{position:absolute;right:150px;bottom:44px;height:54px}.ab{position:absolute}</style>`;
const logo = dark => `<img class=logo src="${U(dark ? 'fotos/logo-blanco.svg' : 'fotos/logo-navy.svg')}">`;
const solo = f => `url(${U('fotos/' + f)}) center/cover`;
const P = {
 '1-vamos-a-arrancar': head(`background:${K.naranja}`, '#fff') + `<img class=ab src="${U('fotos/soli-saluda.png')}" style="left:50%;transform:translateX(-50%);top:30px;height:640px">
  <div class=t style="left:150px;right:150px;top:690px;text-align:center;font-size:92px">VAMOS A<br>ARRANCAR</div>
  <div class=s style="left:150px;right:150px;top:900px;text-align:center;font-size:40px">Empezá a generar <b style="color:${K.navy}">TU</b> propia energía</div>` + logo(true),
 '2-se-corta-la-luz': head(`background:${K.vscuro}`, '#fff') + `<img class=ab src="${U('fotos/soli-triste.png')}" style="left:130px;top:130px;height:540px">
  <div class=ab style="left:430px;top:290px;width:520px;height:6px;border-radius:3px;background:linear-gradient(90deg,rgba(255,226,140,.95),transparent);transform:rotate(-2deg);transform-origin:left"></div>
  <div class=t style="left:150px;right:150px;top:50px;font-size:76px">Se corta la luz.</div>
  <div class=ab style="left:560px;top:310px;width:300px;display:grid;grid-template-columns:1fr 1fr;gap:34px 40px;opacity:.95">
   ${['heladera', 'bomba', 'wifi', 'alarma'].map(n => `<div style="position:relative;height:110px;display:flex;align-items:center;justify-content:center"><div style="width:96px">${ic[n]('#fff')}</div>${cross}</div>`).join('')}</div>
  <div class=s style="left:150px;right:150px;top:765px;text-align:center;font-size:42px">La bomba, el freezer, el wifi, la alarma… <b style="color:${K.lima}">todo sin luz.</b></div>` + logo(true),
 '3-y-tus-paneles': head(`background:${K.navy}`, '#fff') + `
  <div class=t style="left:150px;right:150px;top:46px;text-align:center;font-size:58px;line-height:1.05">Se corta la luz, <span style="color:${K.lima}">¿y tus paneles?</span></div>
  <div class=ab style="left:0;top:230px;width:540px;height:430px;background:url(${U('fotos/casa-oscura.jpg')}) 50% 60%/165% auto no-repeat"></div>
  <div class=ab style="left:540px;top:230px;width:540px;height:430px;background:url(${U('fotos/casa-luz.jpg')}) 50% 60%/165% auto no-repeat"></div>
  <div class=ab style="left:538px;top:230px;width:4px;height:430px;background:${K.verde}"></div>
  <div class=ab style="left:150px;top:610px;font:800 24px Mo;letter-spacing:.14em;color:#fff;background:rgba(15,23,42,.85);padding:8px 14px;border-radius:8px">SIN BATERÍA</div>
  <div class=ab style="left:690px;top:610px;font:800 24px Mo;letter-spacing:.14em;color:${K.navy};background:${K.lima};padding:8px 14px;border-radius:8px">CON BATERÍA</div>
  <img class=ab src="${U('fotos/soli-bateria.png')}" style="right:330px;top:660px;height:350px">
  <div class=s style="left:150px;top:760px;font-size:54px;line-height:1.1;color:${K.lima};font-weight:800;font-family:Mo">Con batería,<br>seguís.</div>` + logo(true),
 '4-tu-casa': head(`background:${solo('casa-atardecer.jpg')}`, '#fff') + `<div class=ab style="left:0;right:0;top:0;height:420px;background:linear-gradient(rgba(15,23,42,.62),transparent)"></div>
  <div class=t style="left:150px;right:150px;top:60px;text-align:center;font-size:74px;text-shadow:0 3px 20px rgba(0,0,0,.35)">Tu casa, con energía del sol.</div>` + logo(true).replace('class=logo', 'class=logo style="filter:drop-shadow(0 2px 8px rgba(0,0,0,.5))"'),
 '5-como-leer-tu-boleta': head(`background:${K.beige}`, K.navy) + `
  <div class=t style="left:150px;right:150px;top:48px;text-align:center;font-size:66px;color:${K.navy}">Cómo leer tu <span style="color:${K.verde}">boleta de luz</span></div>
  <div class=s style="left:150px;right:150px;top:215px;text-align:center;font-size:36px;font-weight:600">Por qué nunca baja</div>
  <div class=ab style="left:330px;top:290px;width:380px;height:500px;background:#fff;border-radius:20px;box-shadow:0 14px 40px rgba(15,23,42,.18);padding:30px">
    <div style="height:18px;width:60%;background:${K.navy};border-radius:9px;margin-bottom:26px"></div>
    <div style="height:70px;background:#E7F9EE;border-radius:10px;margin-bottom:18px;border-left:10px solid ${K.verde}"></div>
    <div style="height:70px;background:#F1F5E1;border-radius:10px;margin-bottom:18px;border-left:10px solid ${K.lima}"></div>
    <div style="height:70px;background:#E8EAF0;border-radius:10px;margin-bottom:26px;border-left:10px solid ${K.navy}"></div>
    <div style="height:12px;width:80%;background:#E2E5EC;border-radius:6px;margin-bottom:14px"></div><div style="height:12px;width:55%;background:#E2E5EC;border-radius:6px"></div></div>
  <div class=ab style="left:560px;top:500px;width:170px">${ic.lupa(K.navy)}</div>
  <div class=ab style="left:20px;width:225px;text-align:right;top:392px;font:800 28px Mo;color:${K.navy}">Energía</div><div class=ab style="left:252px;top:410px;width:70px;height:6px;background:${K.verde};border-radius:3px"></div>
  <div class=ab style="left:20px;width:225px;text-align:right;top:488px;font:800 28px Mo;color:${K.navy}">Impuestos</div><div class=ab style="left:252px;top:506px;width:70px;height:6px;background:${K.lima};border-radius:3px"></div>
  <div class=ab style="left:20px;width:225px;text-align:right;top:584px;font:800 28px Mo;color:${K.navy}">Cargo fijo</div><div class=ab style="left:252px;top:602px;width:70px;height:6px;background:${K.navy};border-radius:3px"></div>
  <img class=ab src="${U('fotos/soli-explica.png')}" style="right:150px;top:600px;height:300px">
  <div class=s style="left:150px;right:150px;top:900px;text-align:center;font-size:32px;font-weight:600">Mandanos tu boleta y te explicamos cada línea.</div>` + logo(false),
 '6-aire-en-24': head(`background:${K.naranjaClaro}`, K.navy) + `
  <div class=t style="left:150px;right:150px;top:60px;text-align:center;font-size:104px;color:${K.navy}">Aire en 24°</div>
  <div class=s style="left:150px;right:150px;top:200px;text-align:center;font-size:44px;font-weight:700">Más frío, más consumo.</div>
  <div class=ab style="left:150px;top:300px;width:470px">${ic.ac(K.navy)}</div>
  <div class=ab style="left:150px;top:470px;font:800 190px/1 Mo;color:${K.navy}">24°</div>
  <div class=ab style="left:140px;top:640px;width:90px;height:260px;filter:drop-shadow(0 4px 10px rgba(0,0,0,.2))"><div style="background:${K.navy};border-radius:30px;padding:4px">${ic.termo()}</div></div>
  <img class=ab src="${U('fotos/soli-fresco.png')}" style="right:120px;top:300px;height:640px">` + logo(false),
 '7-pasos': head(`background:${K.blanco}`, K.navy) + `
  <div class=ab style="left:-30px;right:-30px;top:200px;text-align:center;font:800 760px/1 Mo;color:#F1EFEA">4</div>
  <div class=t style="left:150px;right:150px;top:50px;text-align:center;font-size:56px;line-height:1.08">De tu boleta a tu techo, <span style="color:${K.verde}">en 4 pasos</span></div>
  <div class=ab style="left:150px;right:150px;top:240px;display:grid;grid-template-columns:1fr 1fr;gap:34px 30px">
   ${[['boleta', '1', 'Mandás tu boleta'], ['techo', '2', 'Miramos tu techo'], ['cuenta', '3', 'Te mostramos la cuenta'], ['instalar', '4', 'Instalamos y acompañamos']].map(([i, n, t]) => `<div style="position:relative;background:#fff;border:3px solid ${K.navy};border-radius:24px;padding:26px 22px;height:300px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;box-shadow:0 8px 24px rgba(15,23,42,.08)"><div style="position:absolute;left:16px;top:16px;width:54px;height:54px;border-radius:50%;background:${K.lima};color:${K.navy};font:800 30px/54px Mo;text-align:center">${n}</div><div class=ico style="width:96px;height:84px;margin-top:22px">${ic[i](K.navy)}</div><div style="font:800 28px/1.15 Mo;text-align:center">${t}</div></div>`).join('')}</div>` + logo(false),
 '8-reduci': head(`background:${solo('bosque.jpg')}`, '#fff') + `<div class=ab style="inset:0;background:rgba(10,30,20,.38)"></div>
  <svg class=ab viewBox="0 0 200 200" style="left:390px;top:230px;width:300px;height:300px;filter:drop-shadow(0 4px 12px rgba(0,0,0,.4))"><g fill="#fff" stroke="#fff" stroke-width="9" stroke-linecap="round"><path d="M100 10v60M190 100h-60M100 190v-60M10 100h60" fill="none"/></g><g fill="#fff"><polygon points="100,88 84,62 116,62"/><polygon points="112,100 138,84 138,116"/><polygon points="100,112 116,138 84,138"/><polygon points="88,100 62,116 62,84"/></g></svg>
  <div class=t style="left:150px;right:150px;top:560px;text-align:center;font-size:130px;text-shadow:0 4px 24px rgba(0,0,0,.5)">Reducí</div>
  <div class=s style="left:170px;right:170px;top:735px;text-align:center;font-size:46px;text-shadow:0 3px 18px rgba(0,0,0,.6)">Compramos solo lo que hace falta.</div>` + logo(true),
 '9-hola-soy-soli': head(`background:${K.beige}`, K.navy) + `
  <div class=ab style="left:-30px;right:-30px;top:160px;text-align:center;font:800 520px/1 Mo;color:#EAE4D8;letter-spacing:-.04em">SOLI</div>
  <div class=t style="left:150px;right:150px;top:46px;text-align:center;font-size:58px;line-height:1.08">Hola, soy Soli.<br><span style="color:${K.verde}">Te explico sin vueltas.</span></div>
  <img class=ab src="${U('fotos/soli-saluda.png')}" style="left:50%;transform:translateX(-50%);top:250px;height:600px">
  <div class=ab style="left:150px;top:880px;background:${K.navy};color:#fff;border-radius:40px;padding:14px 26px;font:700 26px/1.2 In">¿Qué es un kWh? <b style="color:${K.lima}">Te lo explico con tu heladera</b></div>` + `<img class=logo style="bottom:40px;right:150px" src="${U('fotos/logo-navy.svg')}">`,
};
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  fs.mkdirSync(path.join(__dirname, 'png'), { recursive: true });
  for (const [n, html] of Object.entries(P)) {
    const f = path.join(__dirname, '_t.html'); fs.writeFileSync(f, html); await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(__dirname, 'png', 'post-' + n + '.png') }); fs.unlinkSync(f);
  }
  await b.close();
})();
