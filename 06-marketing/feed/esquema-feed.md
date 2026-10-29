# Esquema del feed de Albor (paleta Bosque y Sol) — la guía a seguir

Imagen: `grilla-perfil.png` (generada con `grilla.js`). Portadas-plantilla: `portadas/` (generadas con `esquema.js`). Paleta oficial: pino `#1F3A2D`, sol `#D9A441`, terracota `#B5562B`, hoja `#4E7A52`, arena `#E4DCC8`, crema `#F7F2E7`, tinta `#26302A`. Tipografías: Fraunces (títulos) y DM Sans (texto).

## Ritmo de colores de la grilla
Nunca dos publicaciones del mismo color una al lado de la otra (ni arriba ni abajo). Secuencia base: **terracota → oscuro (foto) → pino → claro (naturaleza) → crema → terracota/pino → pino → arena → bosque → crema → terracota → sol**. Las fotos de IA (corte de luz, planeta, bosque) hacen de "respiro" entre las piezas de color plano.

## Plantillas (una por tipo de publicación)
| Tipo | Fondo | Titular | Elementos fijos |
|---|---|---|---|
| **Educación** (boleta, kWh) | crema | pino, con la palabra clave en terracota | Rótulo "EDUCACIÓN" arriba, un dibujo simple, logo abajo a la izquierda |
| **Cómo trabajamos** | pino | crema, con la palabra clave en dorado | Pasos numerados con círculos dorados, logo en blanco |
| **Preguntas / guías** | arena | pino, número gigante en terracota | "Guardala…" abajo, logo |
| **Dolor** (corte de luz) | foto oscura | crema, rótulo dorado arriba | Escena sin personas, frase abajo, logo blanco chico arriba a la derecha |
| **Valor ambiental** | foto natural | pino | Frase corta arriba, logo; **solo con promesas que se cumplen** |
| **Soli** | terracota (a veces pino) | crema | Soli grande, rótulo arriba; aparece en 1 de cada 3 publicaciones |
| **Prueba (obra real)** | sol | pino | Foto real sin personas, con permiso del cliente |

## Reglas fijas
- **Márgenes:** 80 px a cada lado en 1080×1350 (Instagram recorta la grilla en 3:4).
- **Logo** chico abajo a la izquierda (en blanco sobre oscuros), nunca más grande que el titular.
- **El dorado** solo sobre fondos oscuros (sobre crema no se lee). **La terracota** solo en títulos grandes sobre crema.
- **Titular:** máximo 3 líneas y 8 palabras. **Una idea por pieza.**
- **Etiquetas:** "Hecho con IA" en todo lo generado. Sin personas, sin la cara del dueño.
- **Sin cifras de ahorro, sin "ecológico/sustentable"** sin respaldo.
- Orden de carga: de la 1 a la 12, pero **programar** (Meta Business Suite) para que el perfil se vea completo antes de difundir.

## Cómo se hace cada una
1. Cambiar el contenido en `portadas/` (o pedirle a Claude el contenido real: boleta, preguntas, kWh).
2. Para las que faltan: la 5 necesita una boleta real; la 12 necesita una obra real; la 9 necesita las donaciones/reciclaje definidos.

## Estilo nuevo elegido por el dueño (29/10): "objeto 3D + palabra gigante"
- Fondo crema liso, **una palabra enorme en arena** detrás (SOL, BOLETA, kWh, el número 3, SOLI), **un objeto 3D realista** delante (casa con paneles, boleta con lupa, heladera terracota, carpeta con lista) y un **titular corto en pino y terracota**. Logo centrado abajo.
- Piezas hechas (en `estilo-3d/` y `prueba-estilo-3d/`): casa "Tu casa, con energía del sol" (publicación 4), cómo leer tu boleta (5), 3 preguntas (8), qué es un kWh (10), Soli (11). Mismo estilo, para reemplazar o sumar a las plantillas planas.
- Los fondos se generan con APIMart (~0,02 c/u) pidiendo la palabra gigante en la imagen; **hay que revisar que la palabra se lea bien** (a veces la IA deforma letras). El texto del titular lo pone el código.
- Alternar este estilo (claro) con las fotos oscuras del dolor y las piezas de color plano.
