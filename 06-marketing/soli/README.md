# Soli — mascota de Norte Solar

Personaje: un sol joven, explicador, estilo 3D de plastilina. Look: rayos ámbar, remera verde musgo, short y botas marrones, pañuelo crema estilo scout y panel solar de mochila (ver `soli-base-v1.jpg`).

- `soli-explica.png`, `soli-corte.png`, `soli-bateria.png`, `soli-cierre.png`: poses con fondo transparente.
- `carrusel-corte/`: carrusel de 4 láminas + `caption.md`. Se regenera con `NODE_PATH=$(npm root -g) node generar.js`.
- `fuentes/`: tipografías (Fraunces y DM Sans).

## Cómo se generó (APIMart)
Modelo `gemini-3-pro-image-preview` (Nano Banana Pro), 3:4, 1K, con la imagen madre como referencia (`image_urls`, acepta data URI en base64). Poses pedidas sobre fondo magenta plano (#FF00FF) y recortadas por croma. Costo: 0,02 por imagen.
Para una pose nueva: mismo prompt de personaje + descripción de la pose + "solid flat pure magenta background".

## Reglas
- Soli es un dibujo: no se muestra en obras reales ni frente a casas reales como si fuera una instalación nuestra.
- Sin texto escrito por la IA sobre el personaje; los textos se ponen con código.
- Publicar siempre con la etiqueta de IA de Meta.
