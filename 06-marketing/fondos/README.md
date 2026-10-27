# Fondos generados con APIMart

Cómo se usa (la clave la inyecta el entorno; no hay que ponerla en ningún archivo):
- Crear: `POST https://api.apimart.ai/v1/images/generations` con `{"model","prompt","size","n"}`. Devuelve un `task_id`.
- Consultar: `GET https://api.apimart.ai/v1/tasks/<task_id>` hasta `status: completed`; la URL de la imagen está en `result.images[0].url[0]` (vence a las 24 h: bajarla enseguida).
- `size` acepta relaciones 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9, 9:21 (no 4:5; para feed usar 3:4 y recortar a 1080×1350).
- Prueba 27/10: `flux-2-pro`, 3:4, ~17 s, costo informado 0,036 (créditos 0,36) por imagen.

Reglas: fondos sin texto ni personas; las imágenes con IA se marcan como tales en Meta.

| Archivo | Modelo | Prompt |
|---|---|---|
