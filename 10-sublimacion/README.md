# Sublimación: diseño de camisetas en pleno

Flujo aprobado por el dueño el 6/11/2026 (caso "El Sur nos une", C.A.S.T. + C.S.D.S.).
**Cuando el dueño mande la foto, render o mockup de una camiseta, se entrega exactamente esto, sin preguntar de más.**

## Qué se entrega
Tres PNG en **pleno** (rectángulo con el diseño de borde a borde, sin silueta de prenda, sin cuello ni costuras), para aplicar sobre la moldería en CorelDRAW:
1. `pleno-frente-<nombre>.png`: 3:4, 4K (3584 × 4800 px).
2. `pleno-espalda-<nombre>.png`: 3:4, 4K.
3. `pleno-mangas-<nombre>.png`: 3:2, 4K, las dos mangas lado a lado con sus puños.

4. `lamina-<nombre>.png`: **la entrega final**, todo en una sola lámina sobre fondo gris oscuro, como el ejemplo de referencia del dueño (6/11/2026): tira de cuello (color liso con sus vivos) | frente | espalda | las dos mangas apiladas, cada manga con el puño (vivo + banda lisa) en el borde de abajo. Se arma sin costo con `armar_lamina.py` a partir de las tres piezas.

Las mangas conviene generarlas **apaisadas** (más anchas que altas) con el puño a lo largo del borde inferior, como en el ejemplo. El color de fondo tiene que ser **el mismo en todas las piezas**: revisarlo antes de armar la lámina.
No agregar el logo del taller ni nada que no esté en la referencia (el taller lo pone).

Se guardan con 300 dpi en los metadatos. 3584 × 4800 a 300 dpi cubre unos 30 × 40 cm; a 150 dpi (suficiente para sublimar) cubre unos 60 × 80 cm.

## Reglas del diseño
- Fidelidad total a la referencia: colores, textos, tipografía, posición y tamaño. No inventar ni "mejorar".
- Si falta una vista (espalda, manga), avisar y pedirla antes de generar.
- Si piden sacar un elemento (escudo, sponsor, número), dejar el espacio vacío con el fondo continuo: lo ponen después como PNG.
- Estilo de mapas/ilustraciones aprobado: objetos realistas, en **dorado metalizado brillante tipo foil**, con **líneas limpias, sólidas y continuas** (nada de textura gastada o "comida").

## Cómo se genera
- Recortar de la captura solo la lámina (sin la interfaz del celular) y agrandarla 2× → `ref.png`.
- Modelo: `gemini-3-pro-image-preview` (Nano Banana Pro) con `resolution: 4K`. Unos 40 s y USD 0,03 por imagen (6/11/2026).
- Las tres piezas se generan en paralelo con `generar.py`, pasando `ref.png` como referencia.
- El prompt de cada pieza arranca con: pleno rectangular, sin silueta, sin cuello, sin costuras, fondo continuo hasta los cuatro bordes. Después describe cada elemento con su posición. Cierra con el bloque de **calidad de línea** (líneas limpias, sólidas, sin textura gastada; grúas y puentes con estructura reticulada precisa; calles continuas).
- Para corregir una pieza, generarla de cero con el prompt ajustado: si se le pasa la imagen defectuosa como referencia, el modelo copia el defecto.

## Antes de la versión final (aprobación)
Mostrar al dueño una vista previa y revisar juntos:
- [ ] Textos letra por letra (nombres, frases, coordenadas, números).
- [ ] Escudos y logos iguales a los oficiales (el modelo a veces los cambia o inventa: ej. el parche Panchievo del frente).
- [ ] Colores contra la referencia.
- [ ] Zoom al 100 % en mapas y detalles finos.
- [ ] Que no quede silueta de prenda en los bordes.
- [ ] Que el tamaño alcance para el talle más grande.
Recién con el OK se entrega la versión final. Escudos, números y textos conviene reemplazarlos por vectores en CorelDRAW.

## Límites a avisar siempre
- La IA no da trazos 100 % vectoriales: con mucho zoom puede haber imperfecciones.
- Puede alterar tipografías y logos chicos.
