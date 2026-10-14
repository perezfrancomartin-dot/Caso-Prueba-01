# Prueba 1: 6 anuncios para Meta Ads

Para producir a mano en APIMart (video), CapCut (edición) y Meta Ads Manager (publicación).
Oferta de todos los anuncios: **"Mandanos una foto de tu factura y en 24 h te decimos cuánto podés ahorrar. Gratis."**

---

## Parte 1: cómo se retiene a la gente (aplica a los 6)

### Los primeros 3 segundos: el gancho
Cada anuncio usa un **tipo de gancho distinto**, para descubrir cuál funciona mejor con este público:

| Tipo de gancho | Cómo funciona | Anuncio |
|---|---|---|
| **Pregunta que duele** | Toca un problema que la persona ya tiene | A1 |
| **Contraste visual** | Dos situaciones opuestas en la misma imagen: el cerebro frena para comparar | A2 |
| **Objeto + reacción** | Algo que todos reconocen (la factura) con una emoción | B1 |
| **Dato concreto** | Un número específico genera curiosidad | B2 |
| **Lista prometida** | "3 cosas…": la gente se queda a ver las 3 | C1 |
| **Error caro** | Miedo a perder plata: el gancho más fuerte para decisiones caras | C2 |

### Técnicas para que se queden hasta el final
1. **Movimiento en el primer segundo.** Nada de logo ni presentación al principio.
2. **Un corte cada 1,5 a 2,5 segundos.** Toma nueva, zoom o texto nuevo.
3. **Subtítulos grandes siempre.** El 80 % mira sin sonido. Que aparezcan palabra por palabra.
4. **Bucle abierto.** Prometer algo que se resuelve al final ("al final te digo cómo saber cuánto ahorrás").
5. **Hablarle a una persona**, de vos: "tu heladera", "tu techo".
6. **Final con la oferta repetida** en texto y en voz, más el botón de WhatsApp.
7. **Duración:** 15 a 25 segundos. Lo que no suma, se corta.

### Zona segura para textos (Reels y Stories)
En video vertical 9:16, dejá **sin texto el 14 % de arriba y el 35 % de abajo**. Ahí Instagram pone el nombre, la descripción y los botones.

---

## Parte 2: estilo visual (para que los 6 parezcan de la misma marca)

**Bloque de estilo: pegalo al final de CADA prompt de video:**
```
Style: photorealistic, cinematic, natural soft light, shot on a full-frame camera, shallow depth of field, warm and clean color grade, modern upscale single-family house in a gated community in the northern suburbs of Buenos Aires, Argentina (white walls, wood and glass details, green lawn, trees), vertical 9:16 framing. No text, no logos, no watermarks, no brand names, realistic hands and faces.
```

**Paneles en cualquier escena:** agregá
```
black monocrystalline solar panels neatly installed flush on the roof, aligned rows, tidy cable management, professional installation
```

**Reglas:**
- Las escenas son **dramatizaciones genéricas**. No muestran ni dicen que es una obra o un cliente real.
- Los textos en pantalla se agregan en **CapCut**, no en la IA (la IA escribe mal en español).
- Si una toma muestra algo técnicamente mal (cables colgando, paneles a la sombra, gente en el techo sin arnés), **se descarta**.

**Modelos en APIMart:**
- **Tomas sin diálogo (b-roll):** Kling V3 (mejor calidad) o Seedance 2.0 (más barato, para probar).
- **Persona hablando a cámara (C1):** Veo 3.1, que genera voz y movimiento de labios. Si no convence, grabalo vos con el celular, que funciona igual de bien o mejor.

**Voz en off:** tu voz grabada con el celular en un lugar silencioso (genera más confianza), o una voz con IA con acento rioplatense.

**Música (Suno), prompt:**
```
Modern, warm, optimistic instrumental background track, light electronic beat with soft piano, 100 bpm, no vocals, suitable for a home solar energy ad, 30 seconds
```
Volumen de la música: bajo (−18 a −22 dB), debajo de la voz.

---

## Parte 3: los 6 anuncios

### A1 · Cortes · Gancho "pregunta que duele" (20 s)

| Seg. | Imagen | Texto en pantalla | Voz en off |
|---|---|---|---|
| 0–2 | Cocina de noche, se apagan todas las luces de golpe | **Se cortó la luz.** | "Se cortó la luz…" |
| 2–4 | Primer plano de la heladera, oscuridad | **¿Tu heladera sigue andando?** | "¿Tu heladera sigue andando?" |
| 4–8 | Misma cocina: luces cálidas encendidas, heladera prendida | **En esta casa, sí.** | "En una casa con paneles solares y batería, sí." |
| 8–12 | Toma aérea de la casa de día con paneles en el techo | **Paneles + batería** | "De día ahorrás en la factura y cargás la batería." |
| 12–16 | Inversor y batería en un garage prolijo, luz verde encendida | **Cuando se corta, sigue funcionando** | "Cuando se corta, tu casa sigue andando." |
| 16–20 | Placa final: logo + WhatsApp | **Mandanos tu factura → ahorro estimado GRATIS en 24 h** | "Mandanos una foto de tu factura y te decimos cuánto ahorrás. Gratis." |

**Prompts de APIMart (una escena por prompt, 5 a 8 s cada una):**
1. `A modern kitchen at night in an upscale home, family dinner atmosphere, suddenly all the lights go out and the room goes dark, only moonlight from the window, dramatic moment, camera slowly pushing in.` + bloque de estilo
2. `Close-up of a stainless steel refrigerator in a dark kitchen during a power outage, the fridge display is off, tension, slow dolly in.` + bloque de estilo
3. `The same modern kitchen at night with warm lights on during a neighborhood blackout, the refrigerator display glowing, a woman calmly takes a drink from the fridge and smiles, cozy safe feeling.` + bloque de estilo
4. `Aerial drone shot slowly orbiting a modern single-family house on a sunny day,` + paneles + bloque de estilo
5. `Clean modern garage wall with a white hybrid solar inverter and a sleek lithium battery cabinet mounted neatly, small green status light glowing, organized conduit and cables, slow camera slide.` + bloque de estilo
6. Placa final: se arma en Canva/CapCut (no IA).

---

### A2 · Cortes · Gancho "contraste visual" (18 s)

| Seg. | Imagen | Texto en pantalla | Voz en off |
|---|---|---|---|
| 0–3 | Toma de noche de dos casas vecinas: una a oscuras, la otra con luces | **Misma cuadra. Mismo corte.** | (solo música + sonido de corte) |
| 3–5 | Zoom a la casa iluminada | **¿Por qué una tiene luz?** | "¿Por qué una tiene luz y la otra no?" |
| 5–10 | De día, la misma casa con paneles en el techo | **Paneles solares + batería** | "Paneles solares con batería: guardan energía para cuando se corta." |
| 10–14 | Interior: living con luces, router encendido, alguien trabajando en notebook | **Heladera, luces y WiFi siguen** | "La heladera, las luces y el WiFi siguen funcionando." |
| 14–18 | Placa final | **Mandanos tu factura → ahorro estimado GRATIS** | "Mandanos tu factura y te calculamos cuánto ahorrás." |

**Prompts:**
1. `Night street in an upscale gated community during a blackout, two neighboring modern houses side by side: the house on the left is completely dark, the house on the right has warm lights on inside, static wide shot, quiet atmosphere, street lights off.` + bloque de estilo
2. `Slow push-in towards the lit modern house at night during a neighborhood blackout, warm windows glowing, dark houses around it.` + bloque de estilo
3. `The same modern house in bright daylight, camera rising slowly to reveal the roof,` + paneles + bloque de estilo
4. `Cozy modern living room at night with warm lights on, a person working on a laptop, wifi router lights blinking on a shelf, calm atmosphere.` + bloque de estilo

---

### B1 · Factura · Gancho "objeto + reacción" (20 s)

| Seg. | Imagen | Texto en pantalla | Voz en off |
|---|---|---|---|
| 0–2 | Manos abriendo un sobre o mirando una factura en el celular, cara de sorpresa | **¿Cuánto pagaste de luz este mes?** | "¿Cuánto pagaste de luz este mes?" |
| 2–5 | Sol sobre el techo de la casa | **Tu techo recibe sol todos los días** | "Tu techo recibe sol todos los días…" |
| 5–9 | Paneles en el techo, toma lateral con reflejo del sol | **Y lo podés convertir en ahorro** | "…y lo podés convertir en electricidad para tu casa." |
| 9–14 | Celular mostrando una app con gráfico de energía generada (pantalla desenfocada o sin números legibles) | **Mirá cuánto generás, desde el celular** | "Ves cuánto generás en tiempo real, desde el celular." |
| 14–20 | Placa final | **Mandanos tu factura → te decimos cuánto ahorrás. Gratis.** | "Mandanos una foto de tu factura y en 24 horas te decimos cuánto podés ahorrar." |

**Prompts:**
1. `Close-up of a man's hands holding a paper electricity bill at a kitchen table, he raises his eyebrows in surprise, morning light, shallow depth of field, the bill text is blurred and unreadable.` + bloque de estilo
2. `Bright sun rays over the roof of a modern house, lens flare, slow tilt down from the sky to the roof.` + bloque de estilo
3. `Side angle close-up of solar panels on a roof reflecting the sun, slow parallax camera movement,` + paneles + bloque de estilo
4. `Close-up of a hand holding a smartphone showing a clean energy monitoring app with a yellow solar production curve graph, screen slightly blurred, home terrace background.` + bloque de estilo

---

### B2 · Factura · Gancho "dato concreto" (18 s)

| Seg. | Imagen | Texto en pantalla | Voz en off |
|---|---|---|---|
| 0–3 | Timelapse del sol cruzando el cielo sobre una casa | **Tu techo recibe 8 horas de sol por día** | "Tu techo recibe unas 8 horas de sol por día." |
| 3–5 | Mismo techo vacío | **¿Cuántas estás aprovechando?** | "¿Cuántas estás aprovechando?" |
| 5–10 | Transición: el techo vacío ahora tiene paneles | **Cada panel genera energía para tu casa** | "Con paneles solares, esa energía va directo a tu casa y baja tu factura." |
| 10–13 | Familia en el jardín, la casa de fondo con paneles | **Instalación en 1 o 2 días** | "Se instala en uno o dos días." |
| 13–18 | Placa final | **Mandanos tu factura → ahorro estimado GRATIS** | "Mandanos tu factura y te decimos cuánto ahorrás." |

**Prompts:**
1. `Timelapse of the sun moving across a clear blue sky over a modern house roof, shadows moving, from morning to afternoon.` + bloque de estilo
2. `Static shot of an empty dark metal roof of a modern house in full sunlight.` + bloque de estilo
3. `The same roof now with solar panels, smooth morph transition, sunny day,` + paneles + bloque de estilo
4. `A family relaxing in the garden of a modern house on a sunny afternoon, the house with solar panels on the roof in the background, happy natural moment.` + paneles + bloque de estilo

**Ojo:** "unas 8 horas de sol" es la duración del día con sol, no las horas de sol pico (HSP), que en Buenos Aires son unas 4,5. El texto dice "horas de sol", que es correcto. No lo cambies por "8 horas de generación".

---

### C1 · Duda · Gancho "lista prometida" (25 s, persona hablando)

Formato: una persona hablando a cámara (vos, o un avatar con Veo 3.1), con tomas de apoyo entre medio.

| Seg. | Imagen | Texto en pantalla | Lo que dice |
|---|---|---|---|
| 0–3 | Persona frente a una casa con paneles | **3 cosas que nadie te dice antes de poner paneles solares** | "Tres cosas que nadie te dice antes de poner paneles solares." |
| 3–9 | Toma de apoyo: casa a oscuras | **1. Sin batería, en un corte se apagan** | "Uno: sin batería, cuando se corta la luz, los paneles se apagan. Es por seguridad." |
| 9–15 | Persona señalando el sol | **2. Importa lo que consumís DE DÍA** | "Dos: lo que más importa es cuánto consumís de día, no el total de la factura." |
| 15–20 | Toma de apoyo: inversor | **3. Panel + inversor tienen que ser compatibles** | "Tres: un panel con un inversor que no es compatible es plata tirada." |
| 20–25 | Persona a cámara + placa final | **Te lo calculamos bien. Mandanos tu factura.** | "Nosotros te lo calculamos bien desde el principio. Mandanos tu factura y te decimos cuánto ahorrás." |

**Prompt para Veo 3.1 (persona hablando):**
```
A friendly, professional Argentine man in his early 30s wearing a navy blue polo shirt, standing in front of a modern house with solar panels on the roof on a sunny day, looking at the camera and speaking naturally in Rioplatense Spanish (Argentine accent): "Tres cosas que nadie te dice antes de poner paneles solares." Medium shot, vertical 9:16, natural light, realistic.
```
Generá una toma por frase (Veo hace clips cortos). Para las tomas de apoyo usá los prompts de A1 (escena 2) y A1 (escena 5).

**Importante:** si usás un avatar de IA, **no lo presentes como un técnico o empleado real** de la empresa ("soy Juan, técnico de Norte Solar"). Que hable de la empresa en plural ("nosotros te lo calculamos"), sin nombre ni cargo. Si lo grabás vos, mejor todavía.

---

### C2 · Duda · Gancho "error caro" (20 s)

| Seg. | Imagen | Texto en pantalla | Voz en off |
|---|---|---|---|
| 0–3 | Primer plano de un inversor con una luz roja de error parpadeando | **El error más caro al poner paneles solares** | "Este es el error más caro al poner paneles solares." |
| 3–7 | Manos sosteniendo una ficha técnica, con números desenfocados | **Comprar paneles e inversor que no son compatibles** | "Comprar paneles y un inversor que no son compatibles." |
| 7–12 | Técnico midiendo con un multímetro en un tablero prolijo | **Un buen instalador lo calcula ANTES** | "Un buen instalador calcula voltajes y corrientes antes de comprar nada." |
| 12–15 | Inversor funcionando con luz verde | **Así tu sistema dura 25 años** | "Así tu sistema funciona bien por 25 años." |
| 15–20 | Placa final | **Mandanos tu factura → te armamos el sistema justo** | "Mandanos tu factura y te calculamos el sistema justo para tu casa." |

**Prompts:**
1. `Extreme close-up of a white solar inverter mounted on a wall, a small red error LED blinking, dim garage light, tension, slow push in.` + bloque de estilo
2. `Close-up of hands holding a printed technical datasheet of a solar panel with tables and numbers, the text is blurred and unreadable, a pen pointing at a column.` + bloque de estilo
3. `A professional electrician wearing safety gloves measures voltage with a digital multimeter in a clean, well-organized electrical panel, focused, close-up shot.` + bloque de estilo
4. `A white solar inverter on a clean garage wall with a steady green status light, organized conduits, calm and reliable feeling, slow slide.` + bloque de estilo

---

## Parte 4: textos de cada anuncio en Meta

En todos: **botón "Enviar mensaje de WhatsApp"** y **mensaje precargado** (el que aparece escrito cuando la persona abre el chat):
> Hola! Quiero saber cuánto puedo ahorrar con paneles solares ☀️

| Anuncio | Texto principal | Título |
|---|---|---|
| A1 | ¿Se corta la luz y te quedás sin heladera ni WiFi? Con paneles solares y batería tu casa sigue funcionando, y además ahorrás en la factura todos los días. 📩 Mandanos una foto de tu factura y en 24 h te decimos cuánto podés ahorrar. Gratis y sin compromiso. Zona Norte, countries y barrios cerrados. | Luz en los cortes + ahorro |
| A2 | Misma cuadra, mismo corte… y una casa sigue con luz. La diferencia: paneles solares con batería. Calculamos tu sistema según tu consumo real. 📩 Mandanos tu factura y te decimos cuánto ahorrás. Gratis. | ¿Por qué esa casa tiene luz? |
| B1 | Tu techo recibe sol todos los días. Con paneles solares, esa energía va directo a tu casa y baja tu factura de luz. Ves cuánto generás desde el celular. 📩 Mandanos una foto de tu factura: en 24 h te decimos cuánto podés ahorrar. Gratis. | Calculá tu ahorro gratis |
| B2 | ¿Cuánto del sol que recibe tu techo estás aprovechando? Instalamos paneles solares en 1 o 2 días, con materiales de primera marca y garantía por escrito. 📩 Mandanos tu factura y te decimos cuánto ahorrás. | Tu techo puede pagar tu luz |
| C1 | 3 cosas que nadie te dice antes de poner paneles solares (la 3 es la que más plata hace perder). Te calculamos el sistema justo para tu casa, sin venderte de más. 📩 Mandanos tu factura y te decimos cuánto ahorrás. Gratis. | Antes de poner paneles, mirá esto |
| C2 | El error más caro con paneles solares: comprar equipos que no son compatibles. Nosotros calculamos todo antes de comprar, para que tu sistema dure 25 años. 📩 Mandanos tu factura y te armamos el sistema justo. | El error más caro |

**Reglas de los textos:**
- No prometer porcentajes de ahorro ni "luz gratis". El ahorro depende de cada casa.
- "Primera marca" y "garantía por escrito" solo si es verdad en cada obra.

---

## Parte 5: estructura de la campaña en Meta (nivel profesional)

### Antes de lanzar
- [ ] Página de Facebook e Instagram de Norte Solar creadas y conectadas en Meta Business Suite
- [ ] WhatsApp Business con el número de la empresa, **conectado a la página**
- [ ] Mensaje de bienvenida y respuestas rápidas de Olivia cargadas (ver `07-atencion-cliente/guion-whatsapp.md`)
- [ ] Método de pago cargado en Ads Manager
- [ ] Al menos 6 a 9 publicaciones en el perfil de Instagram (la gente entra a mirar antes de escribir)

### La estructura

```
CAMPAÑA   NS | Mensajes WA | Prueba 1 | 2026-11
│  Objetivo: Interacción → Mensajes → WhatsApp
│  Presupuesto de campaña (Advantage+): $7.000 por día
│
└─ CONJUNTO   ZN | 30-65 | Advantage+
   │  Ubicación: Vicente López, San Isidro, San Fernando, Tigre, Escobar, Pilar
   │  Edad: 30 a 65 · Público Advantage+ (sin intereses)
   │  Ubicaciones: Advantage+ (automáticas)
   │  Objetivo de rendimiento: maximizar conversaciones
   │
   ├─ A1 | Cortes | Pregunta | v1
   ├─ A2 | Cortes | Contraste | v1
   ├─ B1 | Factura | Objeto | v1
   ├─ B2 | Factura | Dato | v1
   ├─ C1 | Duda | Lista | v1
   └─ C2 | Duda | Error | v1
```

**Por qué así:**
- **Un solo conjunto con los 6 anuncios.** Con $7.000 por día, dividir en varios conjuntos deja cada uno con muy poco presupuesto y Meta no aprende. Juntos, Meta reparte la plata hacia los que mejor funcionan.
- **Público abierto (Advantage+).** Hoy Meta encuentra mejor al público que la segmentación por intereses. El anuncio (el gancho) es lo que filtra a la persona correcta.
- **Nombres ordenados.** Así en los reportes se ve de un vistazo qué ángulo y qué gancho funciona.

**Formatos:** subí cada video en **9:16** (Reels y Stories) y también en **4:5** (feed). En CapCut, exportá las dos versiones del mismo proyecto.

### Qué mirar (en Ads Manager, columnas personalizadas)

| Métrica | Qué te dice | Cómo calcularla |
|---|---|---|
| **Tasa de gancho** | ¿Los primeros 3 segundos frenan a la gente? | Reproducciones de 3 s ÷ impresiones |
| **Retención** | ¿Se quedan a ver el video? | ThruPlays ÷ reproducciones de 3 s |
| **CTR** | ¿Les interesa la oferta? | Clics ÷ impresiones |
| **Costo por conversación** | ¿Cuánto sale cada persona que escribe? | Gasto ÷ conversaciones iniciadas |
| **Costo por factura recibida** | ¿Escriben personas con interés real? | Gasto ÷ facturas recibidas (sale del sistema de gestión) |

Como referencia general se suele buscar una tasa de gancho de **25 % o más**. Son valores orientativos: **lo que importa es comparar tus 6 anuncios entre sí.**

### Cómo leer los resultados
- **Gancho bajo, pero los que se quedan escriben** → el mensaje sirve, el principio no. Hacé 3 ganchos nuevos con el mismo cuerpo.
- **Gancho alto, pero nadie escribe** → llama la atención pero no convence. Cambiá la oferta o el final.
- **Escriben, pero no mandan la factura** → problema de atención: revisar velocidad y guion de Olivia.

### Calendario
| Cuándo | Qué hacer |
|---|---|
| Día 1 | Lanzar. No tocar nada. |
| Días 1 a 5 | Solo mirar. Olivia responde en menos de 5 minutos y carga cada consulta en el sistema, anotando de qué anuncio vino. |
| Día 6 o 7 | Apagar los anuncios que gastaron $20.000 sin conversaciones útiles, o con el peor costo por conversación. |
| Semana 2 | Del mejor anuncio, hacer **3 variantes de gancho** (mismo video, distintos primeros 3 segundos) y sumarlas al conjunto. |
| Semana 3 | Dejar los 3 o 4 mejores. |
| Semana 4 | Medir el costo por obra cerrada y decidir el presupuesto del mes 2. |

**No toques el presupuesto ni el público durante los primeros 5 días.** Cada cambio grande hace que Meta vuelva a aprender desde cero.

---

## Parte 6: edición en CapCut (checklist por video)
- [ ] Proyecto en 9:16, 1080 × 1920
- [ ] Unir las escenas en orden, con un corte cada 1,5 a 2,5 s
- [ ] Voz en off grabada o generada
- [ ] Subtítulos automáticos en español, revisados a mano. Letra gruesa, blanca con borde oscuro, palabra resaltada en amarillo #F5B700
- [ ] Textos del gancho en el centro de la pantalla (zona segura)
- [ ] Música de Suno debajo de la voz
- [ ] Placa final de 3 a 4 s: logo de Norte Solar + "Mandanos tu factura" + ícono de WhatsApp
- [ ] Exportar en 9:16 y en 4:5
- [ ] Mirarlo una vez sin sonido: ¿se entiende igual?
