# Fondos generados con APIMart

Cómo se usa (la clave la inyecta el entorno; no hay que ponerla en ningún archivo):
- Crear: `POST https://api.apimart.ai/v1/images/generations` con `{"model","prompt","size","n"}`. Devuelve un `task_id`.
- Consultar: `GET https://api.apimart.ai/v1/tasks/<task_id>` hasta `status: completed`; la URL de la imagen está en `result.images[0].url[0]` (vence a las 24 h: bajarla enseguida).
- `size` acepta relaciones 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9, 9:21 (no 4:5; para feed usar 3:4 y recortar a 1080×1350).
- Prueba 27/10: `flux-2-pro`, 3:4, ~17 s, costo informado 0,036 (créditos 0,36) por imagen.

Reglas: fondos sin texto ni personas; las imágenes con IA se marcan como tales en Meta.

| Archivo | Modelo | Prompt |
|---|---|---|

## Voz y audio (probado 3/11)
- **Voz (TTS):** `POST https://api.apimart.ai/v1/audio/speech` con `{"model":"gpt-4o-mini-tts","input":"...","voice":"ash","instructions":"Habla en español rioplatense..."}`. Devuelve el mp3 directo (síncrono). Hasta 4096 caracteres. Modelos: gpt-4o-mini-tts (acepta instrucciones de tono), tts-1 y tts-1-hd. La prueba salió bien en español; el acento no es rioplatense garantizado. Archivo: `06-marketing/audio/voz-prueba-soli.mp3`.
- **Transcripción:** whisper-1. **Música:** Suno y Flow Music/Lyria.
- Los modelos de video generan audio propio (sonidos ambiente), pero **no está confirmado el movimiento de labios con voz propia**: Soli se usa con voz en off.
- La IA debe marcarse como tal; no clonar la voz de personas reales sin permiso.
