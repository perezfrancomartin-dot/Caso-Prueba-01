# Producción de contenido con IA (APIMart)

## Qué es APIMart
Una plataforma que da acceso, con **una sola clave de API**, a cientos de modelos de IA de texto, imagen, video y audio. Se paga por uso (en dólares, recarga mínima de USD 1) y sin suscripción. Según la propia plataforma, cobra un 20 % menos que el proveedor oficial (eso es publicidad de ellos, no está verificado).

Relevado el 14/10/2026 (fuentes al final). **Revisá los precios actuales en su web antes de usar.**

## Lo que nos sirve para la empresa

| Necesidad | Modelos en APIMart | Precio de referencia |
|---|---|---|
| **Videos para anuncios** (escenas de casas, techos, cortes de luz) | Kling V3, Kling V2.6, Seedance 2.0, Sora 2, Veo 3.1, Vidu, Hailuo | Kling V3 ~USD 0,067/seg (720p); Sora 2 ~USD 0,08/seg; Seedance 2.0 Mini ~USD 0,011/seg (480p). Veo 3.1 sin precio publicado. |
| **Personas hablando** (para el ángulo "3 cosas") | Veo 3.1 genera video con voz y movimiento de labios. No encontré un modelo de avatar específico en APIMart. | — |
| **Imágenes** (posteos, miniaturas, fondos para Canva) | GPT Image 2, Seedream 5.0, Z-Image | ~USD 0,006 a 0,03 por imagen |
| **Música de fondo** | Suno | Ver precio actual |
| **Voz en off** | Texto a voz (TTS) | Ver modelos disponibles |
| **Textos** | Modelos de lenguaje | Muy barato |

## Cuánto cuesta un anuncio (estimación)
- Un video de 20 a 24 segundos = 3 clips de 8 segundos.
- Con Kling V3: 24 seg × USD 0,067 ≈ **USD 1,60 por anuncio**.
- Con repeticiones hasta que salga bien, calculá **USD 3 a 5 por anuncio**.
- **6 anuncios para la prueba: unos USD 20 a 30.**

## El flujo de trabajo
1. **Guion**: sale de `ganchos-y-guiones.md`. Claude lo divide en escenas y escribe un prompt por escena.
2. **Generar clips**: a mano desde la web de APIMart, copiando los prompts que prepara Claude escena por escena.
3. **Voz y música**: TTS + Suno, o grabar la voz real del dueño con el celular (suele generar más confianza).
4. **Edición**: unir clips, subtítulos, logo y llamado a la acción. Con CapCut (gratis) o Canva.
5. **Revisión**: que nada parezca una obra o un cliente real si no lo es.

## Reglas para que el contenido se vea profesional
- Mismo estilo en todos los videos: casas modernas de Zona Norte, luz cálida, colores de la marca.
- Subtítulos siempre (la mayoría mira sin sonido).
- Los equipos que aparecen tienen que verse como equipos reales y bien instalados. Un técnico que vea el anuncio no puede encontrar errores (cables sueltos, paneles a la sombra).
- Mezclar IA con material real apenas tengamos obras: eso es lo que más convierte.

## Seguridad de la clave
La clave de API de APIMart es como una tarjeta de crédito. **Nunca la subas al repositorio.** Se guarda en una variable de entorno en tu PC (`APIMART_API_KEY`).

## Fuentes
- [APIMart – inicio](https://apimart.ai/)
- [APIMart – precios](https://apimart.ai/pricing)
- [APIMart – guía de precios de modelos](https://apimart.ai/blog/llm-pricing-guide-compare-500-plus-ai-models)
- [APIMart – Suno](https://apimart.ai/model/suno)
- [Guía de precios de video (GitHub)](https://github.com/apimartcsivz33s/video-api-pricing-guide)
