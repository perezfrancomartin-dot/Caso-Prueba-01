// Dibuja los gráficos y textos del reel como fotogramas PNG transparentes (1080x1920, 30 fps).
// Uso: NODE_PATH=$(npm root -g) node overlay.js <carpeta_salida>
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const OUT = process.argv[2]; fs.mkdirSync(OUT, { recursive: true });
const FPS = 30, DUR = 24;
const U = p => 'file://' + path.resolve(__dirname, p);
const cream = '#F7F2E7', amber = '#D9A441', brown = '#1F3A2D', green = '#4E7A52';
const icons = {
  boleta: `<svg viewBox="0 0 200 240"><rect x="20" y="10" width="160" height="220" rx="14" fill="${cream}"/><rect x="40" y="40" width="80" height="14" rx="6" fill="${brown}"/><rect x="40" y="70" width="120" height="10" rx="5" fill="#b8a68a"/><rect x="40" y="92" width="100" height="10" rx="5" fill="#b8a68a"/><path d="M110 120 L80 170 H105 L95 215 L135 155 H110 Z" fill="${amber}" stroke="${brown}" stroke-width="5" stroke-linejoin="round"/></svg>`,
  aire: `<svg viewBox="0 0 240 200"><rect x="10" y="20" width="220" height="80" rx="18" fill="${cream}"/><rect x="30" y="72" width="180" height="12" rx="6" fill="#b8a68a"/><circle cx="198" cy="46" r="7" fill="#7cc576"/><g fill="none" stroke="#8fd3e8" stroke-width="8" stroke-linecap="round"><path d="M50 125 q10 12 0 24 t0 24"/><path d="M120 125 q10 12 0 24 t0 24"/><path d="M190 125 q10 12 0 24 t0 24"/></g></svg>`,
  enchufe: `<svg viewBox="0 0 200 240"><rect x="45" y="20" width="26" height="60" rx="8" fill="${cream}"/><rect x="129" y="20" width="26" height="60" rx="8" fill="${cream}"/><rect x="25" y="70" width="150" height="100" rx="30" fill="${cream}"/><path d="M100 170 V215" stroke="${cream}" stroke-width="22" stroke-linecap="round"/><circle cx="100" cy="120" r="14" fill="${amber}"/></svg>`,
  heladera: `<svg viewBox="0 0 160 250"><rect x="15" y="8" width="130" height="234" rx="20" fill="${cream}"/><rect x="15" y="92" width="130" height="8" fill="#b8a68a"/><rect x="118" y="40" width="9" height="40" rx="4" fill="${brown}"/><rect x="118" y="116" width="9" height="60" rx="4" fill="${brown}"/></svg>`,
  led: `<svg viewBox="0 0 200 260"><g stroke="${amber}" stroke-width="9" stroke-linecap="round"><path d="M100 6 V28"/><path d="M28 50 L44 62"/><path d="M172 50 L156 62"/><path d="M10 120 H32"/><path d="M190 120 H168"/></g><circle cx="100" cy="110" r="60" fill="${amber}"/><rect x="72" y="165" width="56" height="30" rx="8" fill="${cream}"/><rect x="78" y="198" width="44" height="16" rx="8" fill="#b8a68a"/></svg>`,
};
const scenes = [
  { s: 0, e: 3, chip: '4 TRUCOS', t: 'Bajá tu boleta<br>de luz', sub: 'sin instalar nada', icon: 'boleta', anim: 'shake' },
  { s: 3, e: 7, n: '1', t: 'Aire en 24°', sub: 'Más frío = más consumo', icon: 'aire', big: 'deg' },
  { s: 7, e: 11, n: '2', t: 'Desenchufá', sub: 'El stand-by también consume', icon: 'enchufe', anim: 'plug' },
  { s: 11, e: 15, n: '3', t: 'Heladera cerrada', sub: 'Revisá la goma de la puerta', icon: 'heladera', anim: 'door' },
  { s: 15, e: 19, n: '4', t: 'Pasate a LED', sub: 'Gastan mucho menos que las lámparas comunes', icon: 'led', anim: 'glow' },
  { s: 19, e: 24, t: '¿Y si producís<br>tu propia energía?', sub: 'Mandanos tu boleta por WhatsApp.<br>Si no te conviene, te lo decimos.', cta: true },
];
const html = `<meta charset=utf-8><style>
@font-face{font-family:Fr;src:url(${U('../soli/fuentes/Fraunces-800.woff2')});font-weight:100 900}
@font-face{font-family:DM;src:url(${U('../soli/fuentes/DMSans-700.woff2')});font-weight:100 900}
*{margin:0;box-sizing:border-box}html,body{background:transparent}body{width:1080px;height:1920px;position:relative;overflow:hidden;font-family:DM;color:${cream}}
.sc{position:absolute;inset:0;opacity:0}
.chip{position:absolute;left:80px;top:290px;background:${amber};color:${brown};font-weight:800;font-size:40px;letter-spacing:.12em;padding:14px 30px;border-radius:40px}
.num{position:absolute;left:80px;top:280px;width:120px;height:120px;border-radius:50%;background:${amber};color:${brown};font:800 78px/120px Fr;text-align:center}
.col{position:absolute;left:80px;right:80px;top:400px}.col .t{position:static;font:800 96px/1.03 Fr}.col .sub{position:static;margin-top:26px}
.t.hook{top:400px}.t em{font-style:normal;color:${amber}}
.sub{position:absolute;left:80px;right:80px;font-weight:700;font-size:44px;line-height:1.3;color:${cream};opacity:.95}
.ic{position:absolute;left:70px;top:900px;width:340px}
.ic svg{width:100%;display:block}
.big{position:absolute;left:60px;top:760px;font:800 190px/1 Fr;color:${cream}}
.glow{position:absolute;left:30px;top:850px;width:440px;height:440px;border-radius:50%;background:radial-gradient(${amber},transparent 65%);opacity:0}
.prog{position:absolute;left:0;top:0;height:10px;background:${amber};width:0}
.cta .t{font-size:92px}
.pill{position:absolute;left:80px;top:700px;background:${cream};color:${brown};font-weight:800;font-size:42px;padding:22px 34px;border-radius:50px}
</style><div class=prog id=prog></div>
${scenes.map((s, i) => `<div class="sc ${s.cta ? 'cta' : ''}" id=sc${i}>
${s.chip ? `<div class=chip id=ch${i}>${s.chip}</div>` : ''}${s.n ? `<div class=num id=nm${i}>${s.n}</div>` : ''}
<div class=col style="top:${s.cta ? 300 : s.chip ? 400 : 420}px"><div class="t" id=t${i}>${s.t}</div><div class=sub id=su${i}>${s.sub}</div></div>
${s.icon ? `<div class=glow id=gl${i}></div><div class=ic id=ic${i}>${icons[s.icon]}</div>` : ''}
${s.big ? `<div class=big id=bg${i}>30°</div>` : ''}
${s.cta ? `<div class=pill id=pl${i}>📲 WhatsApp</div>` : ''}
</div>`).join('')}`;
const fn = `
const eo = x => 1 - Math.pow(1 - x, 3), eb = x => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const cl = x => Math.max(0, Math.min(1, x));
function pop(el, lt, d, dur) { const p = cl((lt - d) / dur); el.style.opacity = p > 0 ? Math.min(1, p * 3) : 0; el.style.transform = 'scale(' + (0.3 + 0.7 * eb(p)) + ')'; el.style.transformOrigin = 'left center'; }
function slide(el, lt, d, dur) { const p = cl((lt - d) / dur); el.style.opacity = Math.min(1, p * 2.5); el.style.transform = 'translateY(' + (50 * (1 - eo(p))) + 'px)'; }
window.render = function (t, scenes) {
  document.getElementById('prog').style.width = (t / ${DUR} * 1080) + 'px';
  scenes.forEach((s, i) => {
    const el = document.getElementById('sc' + i), lt = t - s.s, d = s.e - s.s;
    if (lt < 0 || lt > d) { el.style.opacity = 0; return; }
    el.style.opacity = Math.min(1, cl((d - lt) / 0.18));
    const ch = document.getElementById('ch' + i), nm = document.getElementById('nm' + i);
    if (ch) pop(ch, lt, 0.05, 0.35); if (nm) pop(nm, lt, 0.05, 0.35);
    slide(document.getElementById('t' + i), lt, 0.15, 0.4); slide(document.getElementById('su' + i), lt, 0.55, 0.4);
    const ic = document.getElementById('ic' + i);
    if (ic) { pop(ic, lt, 0.4, 0.5); let tr = ic.style.transform;
      if (s.anim === 'shake') ic.style.transform = tr + ' rotate(' + (Math.sin(lt * 28) * 6 * cl(1 - (lt - 0.9) / 1)) + 'deg)';
      if (s.anim === 'plug') ic.style.transform = tr + ' translateX(' + (-70 * (1 - eo(cl((lt - 1.2) / 0.5)))) + 'px)';
      if (s.anim === 'door') ic.style.transform = tr + ' perspective(500px) rotateY(' + (-35 * (1 - eo(cl((lt - 1.4) / 0.6)))) + 'deg)';
      if (s.anim === 'glow') { document.getElementById('gl' + i).style.opacity = 0.35 + 0.35 * Math.sin(lt * 5) * cl(lt - 0.8); } }
    const bg = document.getElementById('bg' + i);
    if (bg) { pop(bg, lt, 0.3, 0.4); const v = Math.round(30 - 6 * eo(cl((lt - 0.9) / 1.6))); bg.textContent = v + '°'; bg.style.color = v === 24 ? '${brown}' : '${cream}'; }
    const pl = document.getElementById('pl' + i); if (pl) pop(pl, lt, 1.4, 0.4);
  });
};`;
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  const f = path.join(__dirname, '_o.html'); fs.writeFileSync(f, html + '<script>' + fn + '</script>');
  await pg.goto('file://' + f); await pg.evaluate(() => document.fonts.ready);
  const N = process.env.SOLO ? 1 : FPS * DUR;
  for (let i = 0; i < N; i++) {
    await pg.evaluate(([t, sc]) => window.render(t, sc), [i / FPS, scenes]);
    await pg.screenshot({ path: path.join(OUT, `o${String(i).padStart(4, '0')}.png`), omitBackground: true });
  }
  fs.unlinkSync(f); await b.close(); console.log('frames', N);
})();
