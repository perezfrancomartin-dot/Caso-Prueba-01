"""Genera los logos como SVG vectorial real (texto convertido a curvas). Uso: python3 vectorizar.py
Requiere: pip install fonttools brotli"""
import math, os
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
HERE = os.path.dirname(os.path.abspath(__file__)); FUENTES = os.path.join(HERE, '../../soli/fuentes')
def cargar(nombre, ejes):
    f = TTFont(os.path.join(FUENTES, nombre)); return instancer.instantiateVariableFont(f, ejes)
FR = cargar('Fraunces-800.woff2', {'wght': 800})
DM = cargar('DMSans-700.woff2', {'wght': 700})
def texto(font, s, size, x, y, fill, tracking=0.0):
    gs = font.getGlyphSet(); cmap = font.getBestCmap(); upm = font['head'].unitsPerEm; k = size / upm; cx = x; out = []
    for ch in s:
        g = cmap[ord(ch)]; pen = SVGPathPen(gs); gs[g].draw(TransformPen(pen, (k, 0, 0, -k, cx, y)))
        out.append(pen.getCommands()); cx += gs[g].width * k + tracking * size
    return f'<path fill="{fill}" d="{" ".join(out)}"/>', cx - tracking * size - x
def simbolo(c, ident='k'):
    rays = ''
    for i in range(9):
        a = math.pi + (i + .5) * math.pi / 9
        x1, y1 = 100 + 52 * math.cos(a), 112 + 52 * math.sin(a); x2, y2 = 100 + 70 * math.cos(a), 112 + 70 * math.sin(a)
        rays += f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}" stroke="{c["rays"]}" stroke-width="9" stroke-linecap="round"/>'
    L1 = 'M100 178 C66 178 50 156 50 128 C84 128 100 150 100 178Z'; L2 = 'M100 178 C134 178 150 156 150 128 C116 128 100 150 100 178Z'
    mk = f'<defs><mask id="{ident}"><rect width="200" height="200" fill="#fff"/><path d="{L1}" fill="#000" stroke="#000" stroke-width="11"/><path d="{L2}" fill="#000" stroke="#000" stroke-width="11"/></mask></defs>' if c.get('knock') else ''
    return f'{mk}<circle cx="100" cy="112" r="40" fill="{c["sun"]}"{f" mask=\"url(#{ident})\"" if c.get("knock") else ""}/>{rays}<path d="{L1}" fill="{c["l1"]}"/><path d="{L2}" fill="{c["l2"]}"/>'
COLOR = dict(rays='#B5562B', sun='#D9A441', l1='#1F3A2D', l2='#4E7A52'); mono = lambda col: dict(rays=col, sun=col, l1=col, l2=col, knock=True)
def horizontal(c, w, d, ident):
    s = 150 / 180; sym = f'<g transform="scale({s}) translate(-10 -20)">{simbolo(c, ident)}</g>'
    t1, w1 = texto(FR, 'Albor', 112, 174, 88, w); t2, _ = texto(DM, 'ENERGÍA SOLAR', 26, 176, 128, d, 0.36)
    return 174 + w1 + 4, 142, sym + t1 + t2
def vertical(c, w, d, ident):
    s = 260 / 180; sym = f'<g transform="translate(0 0) scale({s}) translate(-10 -20)">{simbolo(c, ident)}</g>'
    # centrar luego en ancho total
    t1, w1 = texto(FR, 'Albor', 130, 0, 0, w); t2, w2 = texto(DM, 'ENERGÍA SOLAR', 28, 0, 0, d, 0.38)
    W = max(w1, w2, 260) + 20; cx = W / 2
    sym = f'<g transform="translate({cx - 130} 0) scale({s}) translate(-10 -20)">{simbolo(c, ident)}</g>'
    t1, _ = texto(FR, 'Albor', 130, cx - w1 / 2, 400, w); t2, _ = texto(DM, 'ENERGÍA SOLAR', 28, cx - w2 / 2, 452, d, 0.38)
    return W, 470, sym + t1 + t2
variantes = {'color': (COLOR, '#1F3A2D', '#B5562B'), 'blanco': (mono('#FFFFFF'), '#FFFFFF', '#FFFFFF'), 'negro': (mono('#1A1A1A'), '#1A1A1A', '#1A1A1A')}
os.makedirs(os.path.join(HERE, 'vectorial'), exist_ok=True)
for nom, (c, w, d) in variantes.items():
    for fn, nm in ((horizontal, 'horizontal'), (vertical, 'vertical')):
        W, H, body = fn(c, w, d, 'k' + nm[0] + nom[0]); m = 12
        open(os.path.join(HERE, 'vectorial', f'logo-{nm}-{nom}.svg'), 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{-m} {-m} {W + 2 * m:.1f} {H + 2 * m}" width="{W + 2 * m:.0f}" height="{H + 2 * m}">{body}</svg>')
    open(os.path.join(HERE, 'vectorial', f'simbolo-{nom}.svg'), 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 20 180 170">{simbolo(c, "ks" + nom[0])}</svg>')
print(sorted(os.listdir(os.path.join(HERE, 'vectorial'))))
