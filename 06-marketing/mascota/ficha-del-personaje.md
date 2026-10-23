# Mascota solar: ficha del personaje, prompts y primer reel

Estado: **propuesta** (24/10/2026). El personaje salió de la herramienta de IA de Meta (imagen original en `personaje-original-meta.png`). **Claude no puede operar APIMart**: los prompts de abajo los corre el dueño a mano y se pegan los resultados en la carpeta `06-marketing/mascota/`.

## 1. Cómo encaja esto en la estrategia (en crudo)
- **Sirve para:** videos educativos (mitos y verdades, "qué pasa en un corte", "cómo leer tu boleta"). No necesitás mostrar la cara, es barato y repetible, y un personaje se recuerda más que un texto.
- **No sirve para:** generar confianza en alguien que va a pagar $3 o 4 millones. Una mascota transmite simpatía, no solidez técnica. Para ese público lo que cierra ventas es **tu cara, tu voz y obras reales**.
- **Recomendación: mezclar.** Mascota para educar y captar atención; vos en cámara para el cierre y la confianza ("0 de 5 obras", obras reales, reseñas). **No abandones el reel "0 instalaciones"**: es lo que te diferencia.
- **Probalo antes de apostar:** 3 reels con la mascota y 3 con vos, mismos temas, y comparás retención, comentarios "BOLETA" y mensajes.
- **Regla de honestidad:** la mascota es claramente un dibujo. **Nunca se la muestra "instalando" una obra de verdad ni parada frente a una casa real** como si fuera una obra tuya.

## 2. Qué está bien y qué cambiaría del personaje
| Tema | Lo que veo | Cambio |
|---|---|---|
| **Silueta y simpatía** | Se lee al instante: un sol amigable con anteojos. Buen estilo de juguete 3D suave | Mantener |
| **Los anteojos tapan los ojos** | En animación, los ojos son la herramienta principal para actuar. Con anteojos oscuros no hay emoción | Hacer **dos versiones**: anteojos puestos (momento "canchero", cierre) y **anteojos levantados en la frente con ojos grandes y expresivos** (explicar, sorprenderse, dudar) |
| **El panel casi no se ve** | La mochila-panel queda escondida detrás del cuerpo. Es lo único que dice "solar" | Hacerlo **más grande y visible**: un panel pequeño atrás que se vea a ambos lados, o que lo lleve bajo el brazo. Un panel en la mano permite actuar (apuntarlo al sol) |
| **Parece una flor** | Los pétalos redondeados leen como girasol | Rayos **redondeados en punta**, más parecidos a rayos de sol, 10 a 12, parejos |
| **Colores** | Amarillo + verde lima. Sobre fondo blanco el amarillo se funde con el amarillo y pierde contraste. Además no hace juego con el logo (azul marino y amarillo) | **Ropa azul marino**, cuerpo amarillo ámbar, detalles blancos. Lima solo como acento mínimo o nada. Mirá `comparacion-paleta.png`: el mockup a la derecha se separa mucho mejor del fondo claro |
| **Todo el cuerpo amarillo** | Cara, brazos, piernas y remera se mezclan | Remera marino (con el logo chico) o blanca, y piel en un ámbar un poco más claro |
| **Nivel de "cheto"** | Mejillas rosadas y proporciones de bebé: muy infantil para un público de countries | Probá una versión un poco más pulida: proporciones algo más largas, sin tanto sonrojo. Si no te convence, dejalo como está |
| **Texto en el personaje** | La IA escribe mal en español | Nada de texto escrito sobre el personaje. El logo se agrega después en edición |

**El mockup de colores** (`referencia-paleta-marca.png`) lo hice recoloreando la imagen original. Sirve para ver la idea de paleta, **no es arte final**: el arte final se genera con APIMart con los prompts de abajo.

## 3. Ficha del personaje
| | |
|---|---|
| **Nombre** | Por definir. Opciones: **Soli**, **Lumo**, **Rayito** (más infantil). Verificá que no choque con otras mascotas ni marcas del rubro |
| **Quién es** | Un sol joven, curioso y canchero, experto en energía solar que explica todo fácil. Es el "amigo que sabe" |
| **Personalidad** | Cálido, directo, con humor liviano. Nunca arrogante ni agresivo. Dice la verdad aunque no convenga ("sin batería, no tenés luz en un corte") |
| **Cómo se mueve** | Gestos grandes con los brazos, se pone y se saca los anteojos, apunta al sol, saltitos al terminar |
| **Voz** | **Tu voz real**, grabada con el celular, como narración. El personaje **no habla con la boca** (no hay lip-sync confirmado en APIMart). Se expresa con el cuerpo, la cara y los subtítulos |
| **Paleta** | Cuerpo y rayos ámbar `#F5B700`. Ropa azul marino `#0B2545`. Detalles blancos `#FFFFFF`. Contorno marino fino. Acento mínimo lima `#8BD400` (opcional) |
| **Accesorio fijo** | Panel solar chico, visible, con marco blanco y celdas azul oscuro |
| **Prohibido** | Ropa o gestos de "obrero instalando" en obras reales; texto escrito sobre el personaje; armas o violencia; mostrarlo con alcohol; copiar personajes ajenos |

## 4. Prompts para APIMart (copiar y pegar)
**Para todos:** escribí los prompts **en inglés** (los modelos responden mejor) y **no menciones "Disney" ni "Pixar"**. Puede confundir, trae problemas de marca y a veces el modelo lo rechaza. Usá "3D animated feature-film style".
**Modelos:** para imágenes, uno que acepte **imagen de referencia** (fijate en la web de APIMart cuál lo permite; si no, usá el prompt A solo con texto). Para video, **Kling V3** o Seedance 2.0 en modo **imagen a video** (no texto a video).

### A. Personaje versión de marca (con la imagen de Meta como referencia)
```
Use the attached character as reference. Keep the same character: a friendly young sun with a round face, small smile and soft 3D animated feature-film style, soft clay-like materials, gentle subsurface scattering. Make these changes: (1) rays: 11 evenly spaced rounded-tip triangular sun rays in warm amber yellow (#F5B700), not flower petals; (2) outfit: navy blue (#0B2545) t-shirt, navy shorts and navy sneakers with white soles and small white details; (3) a small solar panel carried on the back like a backpack, large enough to be clearly visible on both sides of the body, white frame and dark blue cells; (4) sunglasses pushed up on the forehead, large expressive friendly eyes visible; (5) slightly more refined proportions, subtle cheeks, no heavy blush. Full body, front view, neutral confident pose waving one hand, on a plain light grey background. No text, no logos, no watermark.
```
Generá 4 versiones, elegí la mejor y guardala como **imagen madre**.

### B. Hoja de personaje (para mantenerlo igual en todos los clips)
```
Character model sheet of the same character from the reference image: front view, three-quarter view, side view and back view in one row, identical design and colors in every view. Below, a second row with 8 head expressions: happy, surprised, thinking, worried, proud, winking, laughing, and cool with sunglasses on. Plain light grey background, even studio lighting, soft 3D animated feature-film style. No text, no logos.
```
Generá la hoja con la imagen madre como referencia. **Esa hoja es el documento de verdad del personaje.**

### C. Si querés cambiar algo del personaje después
Subí la imagen madre y escribí: `Keep exactly the same character, colors and style. Change only: [lo que quieras cambiar].` Un cambio por vez.

### D. Imágenes de escena (una por cada clip del reel)
Con la imagen madre como referencia, generá un cuadro inicial por cada escena (ver el guion de abajo). Fórmula:
```
Same character as the reference image, [pose y emoción]. Setting: [escena]. Soft 3D animated feature-film style, warm cinematic lighting, vertical 9:16, character in the center of the frame, leave the top 14% and bottom 35% of the frame visually empty. No text, no logos.
```

### E. De imagen a video (por cada cuadro aprobado)
Subí el cuadro como imagen inicial. Prompt de movimiento, **corto y de una sola acción**:
```
The character [una acción simple: waves at the camera / lifts the sunglasses and shakes his head / puts down a battery cube and the house windows light up]. Slow gentle camera push-in. Keep the character's design, colors and proportions exactly the same. 4 seconds.
```
Clips de 3 a 5 segundos. Generá 3 versiones de cada uno y elegí.

### Para que no cambie de un clip a otro
1. **Siempre imagen a video**, no texto a video.
2. Siempre con **el mismo cuadro madre** como referencia.
3. **Una acción por clip.** Los movimientos largos o complejos deforman al personaje.
4. Escenas simples: pocos objetos y fondos limpios.
5. Revisá en cada clip: **manos (5 dedos), anteojos, el panel, los colores, los rayos.** Si cambió, se descarta.
6. Nada de texto dentro del video de IA. Los textos van en CapCut.

## 5. Primer reel con la mascota (~28 s): "¿Tus paneles te dan luz en un corte?"
Es un mito real, y la respuesta honesta ("no, sin batería") es tu diferencial.

| Seg. | Escena (cuadro + movimiento) | Texto en pantalla | Narración (tu voz) |
|---|---|---|---|
| 0 a 3 | Noche, una casa moderna con paneles. Las luces se apagan de golpe. La mascota con anteojos puestos mira la casa a oscuras | "Se cortó la luz. ¿Tus paneles te dan luz?" | "Se cortó la luz. ¿Tus paneles solares te la dan?" |
| 3 a 8 | Primer plano: la mascota se levanta los anteojos, ojos grandes, niega con la cabeza | "No (sin batería)" | "No. Sin batería, se apagan solos." |
| 8 a 14 | Escena simple: un técnico con casco arreglando un poste, la mascota lo señala | "Es una protección de seguridad" | "Es para no electrocutar al técnico que está arreglando la red." |
| 14 a 21 | La mascota apoya un cubo "batería" junto al panel. Las ventanas de la casa se iluminan | "Con batería: heladera, luces y WiFi siguen" | "Con batería, la heladera, las luces y el WiFi siguen funcionando." |
| 21 a 28 | La mascota a cámara, saludando, anteojos puestos. Logo | "Comentá BOLETA" | "Si querés saber cuál te conviene, comentá BOLETA y te calculo cuánto ahorrás." |

**Reglas de este reel:**
- El técnico del poste es **un dibujo claramente animado** (no una persona realista).
- Texto en la zona segura (nada en el 14 % de arriba ni en el 35 % de abajo).
- Subtítulos en CapCut, subidos al centro.
- Música baja, sin letra. Efecto de sonido de apagón en el segundo 0.
- Cierre con el logo cuando esté el nombre decidido.

## 6. Costos y tiempos (orientativos)
- Video en APIMart: ~USD 0,07 por segundo en Kling V3 (precio de la planilla de compras de 11/10; verificá el actual). Un reel de ~28 s con 6 clips y 3 versiones de cada uno son unos **USD 6 a 10**.
- Imágenes: centavos cada una.
- **Tiempo:** el primer reel lleva más que los siguientes, porque hay que fijar el personaje (imagen madre y hoja). Contá una tarde.
- **El costo oculto es descartar tomas** donde el personaje cambia. Planificá repetir.

## 7. Riesgos y qué cuidar
- **Propiedad del personaje:** un personaje generado por IA puede no estar protegido por derechos de autor (hoy es una zona gris en muchos países; consultalo con un abogado en Argentina). Lo que sí se puede es **registrar la marca figurativa en el INPI**. Antes, **buscá parecidos** (Google Lens con la imagen) con otras mascotas de sol. Si la mascota funciona, hacerla redibujar por un ilustrador te da un original que sí es tuyo.
- **Términos de Meta AI:** la imagen salió de la IA de Meta. Verificá en sus términos si podés usar lo generado con fines comerciales.
- **Etiqueta de IA:** una caricatura no pretende pasar por real. Igual, si Meta ofrece marcar el contenido como hecho con IA, hacelo (confirmalo en la app).
- **No nombres "Pixar" ni "Disney"** en la marca, la descripción ni los prompts.
- **Credibilidad:** si los comentarios dicen "esto es para chicos", ajustá el estilo o bajá la frecuencia.

## 8. Qué hacer ahora
1. Correr los prompts A y B en APIMart y elegir la imagen madre y la hoja.
2. Subirlas a esta carpeta (`06-marketing/mascota/`).
3. Generar los cuadros y clips del reel de la sección 5.
4. Grabar tu voz con el guion, editar en CapCut, y publicar **cuando estén el nombre y las cuentas**.
5. Medir el reel de mascota contra el de "0 instalaciones" y decidir el reparto.

**Cuando tengas las imágenes**, pasámelas (o subilas al repositorio) y reviso consistencia, errores y colores antes de animar.
