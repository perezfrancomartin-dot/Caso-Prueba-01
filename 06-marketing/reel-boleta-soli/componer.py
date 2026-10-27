"""Arma el reel: fondo de color por escena + Soli (clip con croma magenta) + gráficos (overlay) -> frames -> mp4.
Uso: python3 componer.py <carpeta_overlay> <carpeta_clips> <salida.mp4> [--preview]
"""
import sys, os, glob, subprocess, numpy as np
from PIL import Image
ov_dir, clips_dir, out = sys.argv[1], sys.argv[2], sys.argv[3]
PREVIEW = '--preview' in sys.argv
FPS, W, H = 30, 1080, 1920
BG = {'h': (62, 90, 51), '1': (91, 63, 42), '2': (62, 90, 51), '3': (91, 63, 42), '4': (62, 90, 51), 'c': (91, 63, 42)}
# escena: (inicio, fin, clave de fondo, clip, escala de Soli, x centro, base y, espejar)
S = [(0, 3, 'h', 'corte', 1.0, 700, 1420, False), (3, 7, '1', 'explica', 1.0, 720, 1420, False), (7, 11, '2', 'explica', 1.0, 700, 1420, True),
     (11, 15, '3', 'explica', 1.0, 720, 1420, False), (15, 19, '4', 'explica', 1.0, 700, 1420, True), (19, 24, 'c', 'cierre', 0.85, 720, 1420, False)]

def key(img):
    from PIL import ImageFilter
    a = np.asarray(img.convert('RGB')).astype(np.float32)
    edge = np.concatenate([a[:20].reshape(-1, 3), a[-20:].reshape(-1, 3), a[:, :20].reshape(-1, 3), a[:, -20:].reshape(-1, 3)])
    bg = np.median(edge, axis=0)
    d = np.sqrt(((a - bg) ** 2).sum(-1))
    al = np.clip((d - 55) / 55, 0, 1)
    im = Image.fromarray((al * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(7)).filter(ImageFilter.GaussianBlur(1.2))
    al = np.asarray(im).astype(np.float32) / 255
    # sacar el tinte del fondo en los bordes
    tint = np.clip(bg - 128, 0, None) / 128
    edgew = (al < 0.98)[..., None] * 0.5
    rgb = a - edgew * (a - np.array([150, 120, 60])) * 0.0
    m = np.minimum(a[..., 0], a[..., 2]) - a[..., 1]
    sp = np.clip(m, 0, None) * (al < 0.98) * 0.9
    rgb = np.dstack([np.clip(a[..., 0] - sp * (a[..., 0] > a[..., 1]), 0, 255), a[..., 1], np.clip(a[..., 2] - sp * (a[..., 2] > a[..., 1]), 0, 255)])
    return rgb, al

def load_clip(name):
    d = f'/tmp/frames_{name}'; os.makedirs(d, exist_ok=True)
    if not glob.glob(d + '/*.png'):
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f'{clips_dir}/clip-{name}.mp4', '-vf', f'scale={W}:{H}:flags=lanczos', d + '/f%04d.png'], check=True)
    fr = sorted(glob.glob(d + '/*.png')); return fr

clips = {n: load_clip(n) for n in set(s[3] for s in S)}
os.makedirs('/tmp/final', exist_ok=True)
for f in glob.glob('/tmp/final/*.png'): os.remove(f)
N = FPS * 24
frames_idx = [int(x) for x in os.environ['PREVIEW_T'].split(',')] if PREVIEW else range(N)
cache_bbox = {}
for i in frames_idx:
    t = i / FPS
    s = next(x for x in S if x[0] <= t < x[1]) if t < 24 else S[-1]
    st, en, bgk, cn, sc, cx, by, mir = s
    lt = t - st; fr = clips[cn]; n = len(fr)
    k = int(lt * FPS); k = k % (2 * n - 2); k = k if k < n else 2 * n - 2 - k   # ida y vuelta
    rgb, al = key(Image.open(fr[k]))
    if cn not in cache_bbox:
        ys, xs = np.where(al > 0.5); cache_bbox[cn] = (xs.min(), ys.min(), xs.max(), ys.max())
    x0, y0, x1, y1 = cache_bbox[cn]
    rgba = np.dstack([rgb, al * 255]).astype(np.uint8)[y0:y1, x0:x1]
    soli = Image.fromarray(rgba, 'RGBA')
    if mir: soli = soli.transpose(Image.FLIP_LEFT_RIGHT)
    th = int(820 * sc); tw = int(soli.width * th / soli.height); soli = soli.resize((tw, th), Image.LANCZOS)
    # entrada con rebote
    p = min(1, lt / 0.35); pop = 1 + 0.12 * np.sin(p * np.pi) if p < 1 else 1
    if pop != 1: soli = soli.resize((int(tw * pop), int(th * pop)), Image.LANCZOS)
    base = Image.new('RGBA', (W, H), BG[bgk] + (255,))
    base.alpha_composite(soli, (int(cx - soli.width / 2), int(by - soli.height)))
    o = Image.open(f'{ov_dir}/o{min(i, N-1):04d}.png').convert('RGBA'); base.alpha_composite(o)
    base.convert('RGB').save(f'/tmp/final/c{i:04d}.png' if not PREVIEW else f'/tmp/final/prev_{i}.png')
if not PREVIEW:
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-framerate', str(FPS), '-i', '/tmp/final/c%04d.png', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo', '-shortest',
                    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', '-preset', 'medium', '-c:a', 'aac', '-b:a', '128k', out], check=True)
    print('listo', out)
