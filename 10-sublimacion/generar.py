# Genera una imagen con APIMart a partir de imagenes de referencia.
# Uso: python3 generar.py <modelo> <relacion> <resolucion|-> <prompt.txt> <salida.png> <ref1.png> [ref2.png ...]
# Ej.: python3 generar.py gemini-3-pro-image-preview 3:4 4K prompt-frente.txt frente.png ref.png
# La clave la inyecta el entorno (proxy); "Bearer x" es un valor de relleno.
import base64,json,sys,time,urllib.request
model,size,res,promptf,out=sys.argv[1:6]; refs=sys.argv[6:]
imgs=["data:image/png;base64,"+base64.b64encode(open(r,'rb').read()).decode() for r in refs]
body={"model":model,"prompt":open(promptf).read(),"size":size,"n":1,"image_urls":imgs}
if res!="-": body["resolution"]=res
H={"Content-Type":"application/json","Authorization":"Bearer x"}
try:
  r=json.load(urllib.request.urlopen(urllib.request.Request("https://api.apimart.ai/v1/images/generations",json.dumps(body).encode(),H),timeout=180))
except urllib.error.HTTPError as e: print(e.read().decode()); sys.exit(1)
print(r); tid=r["data"][0]["task_id"]
for i in range(120):
    time.sleep(5)
    t=json.load(urllib.request.urlopen(urllib.request.Request("https://api.apimart.ai/v1/tasks/"+tid,headers=H),timeout=60))
    if t["data"]["status"] in("completed","failed"): break
d=t["data"]; print(d["status"],d.get("cost"),d.get("actual_time"),str(d)[:400] if d["status"]!="completed" else "")
url=d["result"]["images"][0]["url"][0]
open(out,"wb").write(urllib.request.urlopen(url,timeout=180).read())
from PIL import Image; print(Image.open(out).size)
