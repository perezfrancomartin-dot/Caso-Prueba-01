# Arma la lámina final: tira de cuello | frente | espalda | mangas apiladas, sobre fondo gris.
# Uso: python3 armar_lamina.py frente.png espalda.png mangas.png salida.png R,G,B(cuello) [R,G,B vivo1] [R,G,B vivo2]
import sys
from PIL import Image, ImageDraw
import numpy as np
front=Image.open(sys.argv[1]).convert('RGB'); back=Image.open(sys.argv[2]).convert('RGB')
sl=Image.open(sys.argv[3]).convert('RGB'); out=sys.argv[4]
base=tuple(int(x) for x in sys.argv[5].split(','))           # color del cuello
stripes=[tuple(int(x) for x in c.split(',')) for c in sys.argv[6:]]  # vivos del cuello
# separar mangas (rectángulos sobre fondo blanco)
a=np.asarray(sl.convert('L'))<200
cols=np.where(a.mean(0)>0.5)[0]; runs=[]; s=p=cols[0]
for c in cols[1:]:
    if c!=p+1: runs.append((s,p)); s=c
    p=c
runs.append((s,p)); mangas=[]
for x0,x1 in runs:
    r=np.where(a[:,x0:x1].mean(1)>0.5)[0]
    mangas.append(sl.crop((x0+8,r.min()+8,x1-8,r.max()-8)))
H=front.height; G=140; strip_w=front.width//3
sh=(H-G)//2; mangas=[m.resize((int(m.width*sh/m.height),sh),Image.LANCZOS) for m in mangas]
mw=max(m.width for m in mangas)
W=G+strip_w+G+front.width+G+back.width+G+mw+G
sheet=Image.new('RGB',(W,H+2*G),(71,71,71))
strip=Image.new('RGB',(strip_w,H),base); d=ImageDraw.Draw(strip)
sw=strip_w//14
for i,c in enumerate(stripes): d.rectangle((strip_w-(i+1)*sw*1.6, 0, strip_w-(i+1)*sw*1.6+sw, H), fill=c)
x=G; sheet.paste(strip,(x,G)); x+=strip_w+G
sheet.paste(front,(x,G)); x+=front.width+G
sheet.paste(back,(x,G)); x+=back.width+G
sheet.paste(mangas[0],(x,G)); sheet.paste(mangas[1],(x,G+sh+G))
sheet.save(out,dpi=(300,300)); print(sheet.size)
