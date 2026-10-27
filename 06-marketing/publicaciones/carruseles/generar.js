// Genera los carruseles de Instagram (1080x1350). Para cambiar el nombre de la marca, editar BRAND y volver a correr:
//   NODE_PATH=$(npm root -g) node generar.js
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const BRAND = 'NORTE SOLAR';
const TAG = 'ZONA NORTE';
const font = fs.readFileSync(path.join(__dirname,'archivo.woff2')).toString('base64');
const NAVY='#0B2545', AMBER='#F5B700';

const mark = s => `<svg width="${s}" height="${s}" viewBox="0 0 30 30"><circle cx="15" cy="17" r="6" fill="${AMBER}"/><g stroke="${AMBER}" stroke-width="2" stroke-linecap="round"><path d="M15 6v2.5M6 17h2.5M21.5 17H24M8.6 10.6l1.8 1.8M21.4 10.6l-1.8 1.8"/></g><path d="M15 1l3 5h-6z" fill="#fff"/></svg>`;
const markDark = s => mark(s).replace('fill="#fff"',`fill="${NAVY}"`);
const WA = `<svg width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></svg>`;

const css = `@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
*{box-sizing:border-box;margin:0;padding:0}body{width:1080px;height:1350px;font-family:A,sans-serif;overflow:hidden}
.s{position:relative;width:1080px;height:1350px;padding:84px;display:flex;flex-direction:column}
.dark{background:${NAVY};color:#fff}.light{background:#F4F6FA;color:${NAVY}}
.top{display:flex;justify-content:space-between;align-items:center;font-weight:800;letter-spacing:.14em;font-size:26px}
.top .l{display:flex;align-items:center;gap:14px}.top .n{letter-spacing:.06em;opacity:.55;font-weight:700}
.main{flex:1;display:flex;flex-direction:column;justify-content:center;gap:30px;min-height:0}
.eyebrow{font-weight:700;letter-spacing:.16em;font-size:26px;color:${AMBER};text-transform:uppercase}
.light .eyebrow{color:#B8860B}
h1{font-weight:900;line-height:1.02;letter-spacing:-.02em;font-size:88px}
h1 em{font-style:normal;color:${AMBER}}
.sub{font-size:42px;font-weight:500;line-height:1.3;opacity:.9}
.num{width:120px;height:120px;border-radius:50%;background:${NAVY};color:${AMBER};display:grid;place-items:center;font-weight:900;font-size:64px}
h2{font-weight:900;line-height:1.08;letter-spacing:-.015em;font-size:68px}
.body{font-size:42px;font-weight:500;line-height:1.38;opacity:.92}
.foot{display:flex;justify-content:space-between;align-items:center;font-size:24px;font-weight:700;letter-spacing:.08em;padding-top:26px;border-top:2px solid currentColor;opacity:.8}
.swipe{font-size:30px;font-weight:800;letter-spacing:.1em;color:${AMBER}}
.pill{display:inline-flex;align-items:center;gap:14px;background:#25D366;color:#fff;font-weight:800;font-size:36px;padding:24px 38px;border-radius:999px;align-self:flex-start}
.list li{list-style:none;font-size:46px;font-weight:700;line-height:1.25;margin:12px 0;padding-left:46px;position:relative}
.list li:before{content:"";position:absolute;left:0;top:.38em;width:22px;height:22px;border-radius:50%;background:${AMBER}}
.ring{position:absolute;right:-170px;bottom:-170px;width:560px;height:560px;border-radius:50%;border:44px solid ${AMBER};opacity:.9}
.ring2{position:absolute;right:-60px;bottom:-60px;width:340px;height:340px;border-radius:50%;background:${AMBER}}`;

const C = [
 { slug:'preguntas-instalador',
   cover:{eyebrow:'Antes de contratar', title:'7 preguntas para hacerle a cualquier instalador de paneles solares', sub:'Incluyéndonos a nosotros.'},
   items:[
    ['¿Qué equipos exactos me van a instalar?','Marca y modelo de los paneles y del inversor. Si el presupuesto dice solo “paneles” e “inversor”, no se puede comparar.'],
    ['¿Cuánto voy a ahorrar por mes, y en qué se basa?','Pedí que usen tu boleta real, no un promedio. Y que te muestren la cuenta.'],
    ['¿Qué pasa si se corta la luz?','Sin batería, el sistema se apaga por seguridad. Si te dicen otra cosa, preguntá cómo funciona.'],
    ['¿Quién firma la instalación y se hace responsable?','Tiene que haber un profesional responsable. Preguntá por su matrícula.'],
    ['¿Qué garantía tengo, y por escrito?','La de los equipos (la da el fabricante) y la de la instalación (la da quien instala). Cuántos años cada una.'],
    ['¿Qué seguros tienen?','Hay gente trabajando en tu techo: preguntá por el seguro de accidentes y el de responsabilidad civil.'],
    ['¿Cuánto pago, cuándo, y qué incluye?','Anticipo, saldo, y si incluye estructura, protecciones, mano de obra y traslado.']],
   last:{title:'Hacenos estas mismas preguntas a nosotros.', sub:'Te las respondemos por escrito.', cta:'Guardalo y mandáselo a quien esté comparando presupuestos.', pill:'Mandanos tu boleta'} },
 { slug:'leer-tu-boleta',
   cover:{eyebrow:'Boleta de luz', title:'Cómo leer tu boleta para saber cuánto podés ahorrar con paneles', sub:'6 datos que tenés que mirar.'},
   items:[
    ['El consumo, en kWh','Es el número más importante. No es el importe: es cuánta energía usaste en el período.'],
    ['El período facturado','Fijate cuántos días son (30 o 60). Para comparar, pasalo a un mes.'],
    ['El historial de consumo','Tu boleta suele mostrar los períodos anteriores. Mirá cuánto cambia entre verano e invierno.'],
    ['El precio de cada kWh','Dividí el total por los kWh: da un precio aproximado (incluye impuestos y cargos fijos). Es lo que ahorrás por cada kWh que generen los paneles.'],
    ['Tu tarifa y si tenés subsidio','Con subsidio, cada kWh cuesta menos, y el ahorro y el tiempo de recupero cambian.'],
    ['Cuánto consumís de día','Sin batería, los paneles solo ahorran lo que usás mientras hay sol. Pensá en el aire, la pileta, la bomba y quién está en casa.']],
   last:{title:'Con eso armamos tu cálculo.', sub:'Consumo × lo que usás de día × precio del kWh.', cta:'Mandanos una foto de tu boleta y te calculamos un ahorro estimado. Tapá tu nombre, dirección y número de suministro.', pill:'Mandanos tu boleta'} },
 { slug:'lo-que-no-prometemos',
   cover:{eyebrow:'Sin chamuyo', title:'Lo que NO te vamos a prometer', sub:'Y lo que sí.'},
   items:[
    ['“Ahorro garantizado”','El ahorro depende del sol, de cuánto consumís de día y del precio de la energía. Te damos un estimado y te mostramos la cuenta.'],
    ['“Luz gratis”','Vas a seguir pagando los cargos fijos, los impuestos y lo que consumas cuando no hay sol.'],
    ['“Se paga solo en X años”','Depende de tu consumo, de si tenés subsidio y del precio de los equipos. Lo calculamos con tu boleta.'],
    ['“Luz en los cortes”, sin batería','Sin batería, el sistema se apaga cuando se corta la luz. Es una protección de seguridad.'],
    ['Un precio cerrado sin ver tu casa','Para un presupuesto exacto hay que ver el techo y el tablero. Si no, el precio puede cambiar.'],
    ['“Somos los mejores”','No lo vamos a decir. Preferimos que lo digan nuestros clientes, cuando los tengamos.']],
   last:{title:'Lo que sí te prometemos', bullets:['Usar tu boleta real.','Decirte la verdad, aunque no te convenga.','Cuidar cada obra.'], pill:'Mandanos tu boleta'} },
 { slug:'como-trabajamos',
   cover:{eyebrow:'Paso a paso', title:'Cómo trabajamos, de tu boleta a la instalación', sub:'Y cómo cuidamos la seguridad.'},
   items:[
    ['Primero, tu boleta','Con tu consumo real te calculamos un ahorro estimado, sin costo.'],
    ['Relevamiento','Vemos el techo, el tablero y el medidor, en una visita o por videollamada. El presupuesto queda sujeto a verificación en obra.'],
    ['Presupuesto con 2 opciones','Con y sin batería, con marca y modelo de cada equipo y qué incluye.'],
    ['Instalación segura','Trabajo en altura con arnés, protecciones de continua y de alterna, y puesta a tierra.'],
    ['Todo registrado','Checklist y fotos de cada etapa, y mediciones al terminar.'],
    ['Entrega y garantía','Pruebas con vos presente, app para ver cuánto generás y garantía de instalación por escrito.']],
   last:{title:'Estamos empezando.', sub:'Cada una de las primeras obras la vamos a cuidar como si fuera la nuestra.', cta:'Mandanos tu boleta para empezar.', pill:'Mandanos tu boleta'} }
];

const foot = `<div class="foot"><span>${BRAND} · ${TAG}</span><span>ESCRIBINOS POR WHATSAPP</span></div>`;
function slides(c){
  const total = c.items.length+2, out=[];
  out.push(`<div class="s dark"><div class="top"><div class="l">${mark(56)}${BRAND}</div><div class="n">1 / ${total}</div></div>
    <div class="main"><div class="eyebrow">${c.cover.eyebrow}</div><h1>${c.cover.title}</h1><div class="sub">${c.cover.sub}</div></div>
    <div class="swipe">DESLIZÁ →</div><div class="ring"></div><div class="ring2"></div></div>`);
  c.items.forEach(([t,b],i)=>{
    out.push(`<div class="s light"><div class="top"><div class="l">${markDark(44)}${BRAND}</div><div class="n">${i+2} / ${total}</div></div>
      <div class="main"><div class="num">${i+1}</div><h2>${t}</h2><div class="body">${b}</div></div>${foot}</div>`);
  });
  const l=c.last;
  out.push(`<div class="s dark"><div class="top"><div class="l">${mark(56)}${BRAND}</div><div class="n">${total} / ${total}</div></div>
    <div class="main"><h1 style="font-size:78px">${l.title}</h1>${l.sub?`<div class="sub">${l.sub}</div>`:''}
    ${l.bullets?`<ul class="list">${l.bullets.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
    ${l.cta?`<div class="body" style="color:${AMBER};font-weight:700;opacity:1">${l.cta}</div>`:''}
    <span class="pill">${WA}${l.pill}</span></div>
    <div class="foot"><span>${BRAND} · ${TAG}</span><span>GUARDALO ↗</span></div></div>`);
  return out;
}
(async()=>{
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
  const p = await b.newPage({viewport:{width:1080,height:1350}});
  for(const c of C){
    const dir=path.join(__dirname,c.slug); fs.mkdirSync(dir,{recursive:true});
    const hs=slides(c);
    for(let i=0;i<hs.length;i++){
      await p.setContent(`<!doctype html><meta charset="utf-8"><style>${css}</style>${hs[i]}`);
      await p.evaluate(()=>document.fonts.ready);
      const over = await p.evaluate(()=>{const m=document.querySelector('.main');return m? m.scrollHeight>m.clientHeight+2 : false});
      if(over) console.log('DESBORDE:',c.slug,i+1);
      await p.screenshot({path:path.join(dir,String(i+1).padStart(2,'0')+'.png')});
    }
  }
  await b.close(); console.log('ok');
})();
