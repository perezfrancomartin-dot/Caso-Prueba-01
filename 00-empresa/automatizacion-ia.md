# Qué se puede automatizar con IA en Albor (3/11/2026)

Principio: **la IA prepara, el humano aprueba y ejecuta lo que sale al exterior** (publicaciones, mensajes a clientes, pagos, firmas). Nada sale sin OK del dueño.

## SÍ: lo hace Claude hoy, con lo que ya tenemos
| Qué | Cómo |
|---|---|
| Piezas de contenido (imágenes, carruseles, reels, voz), captions y calendario | APIMart + código; paquete semanal listo para cargar |
| Documentos: propuestas, presupuestos, actas, checklists, acuerdos (borrador), guiones | Plantillas en el repo, PDF/Docs/Sheets |
| Análisis de boleta y orientación de tamaño de sistema | Plantilla de cálculo (a verificar por el matriculado antes de presupuestar) |
| Cálculo de márgenes, reparto de mano de obra, flujo de caja de una obra | Planilla con los precios con fecha y fuente |
| Investigación: precios de proveedores, normativa, competencia | Búsqueda web, siempre con fuente y fecha |
| Borradores de respuestas a clientes, aliados y proveedores | Texto listo para copiar; o borrador en Gmail |
| Agenda: relevamientos y obras en Google Calendar; recordatorios | Conector de Calendar y tareas programadas |
| Memoria y orden de la empresa: bitácora, decisiones, procesos | El repo de GitHub |
| Reportes semanales de resultados (si pasás los números) | Tarea programada + análisis |
| Sistema de gestión (clientes, lectura de boletas con IA, resumen del día) | Artefacto ya publicado (`08-sistema/`) |

## CON CONDICIONES: se puede, pero con límites
| Qué | Condición |
|---|---|
| Publicar en Instagram/Facebook | Programar desde Meta Business Suite con el paquete que arma Claude. Automatizar la API de Meta es posible pero arriesgado para una cuenta nueva |
| Responder WhatsApp | Respuestas rápidas y mensaje de bienvenida (gratis). Un bot que conteste todo requiere la API de WhatsApp Business (aprobación y costo por conversación) y **no conviene** para una venta de varios millones |
| Anuncios en Meta | Claude prepara creatividades, textos, público y reglas de corte; los cargás vos; revisión semanal con recomendaciones |
| Facturación e impuestos | Claude prepara datos y planillas; la presentación se hace con tu Clave Fiscal y un contador |
| Cobros y seguimiento | Claude lleva la planilla y redacta recordatorios; el dinero lo mueve una persona |
| Compras a proveedores | Claude compara y arma el pedido; la compra la hacés vos |
| Leer correos y documentos | Con los conectores y solo con tu permiso |

## NO: no se debe o no se puede
- **Instalar, medir, subir al techo, relevar** una casa.
- **Firmar proyectos o asumir responsabilidad técnica.** La firma es del matriculado. La IA puede equivocarse en cálculos eléctricos: todo dimensionamiento lo verifica un profesional.
- **Manejar claves, banco, Clave Fiscal, TAD o las contraseñas de Meta.** Nunca compartirlas por chat.
- **Mover plata, firmar contratos o aceptar condiciones** en tu nombre.
- **Cerrar ventas grandes y sostener relaciones** (clientes, aliados, Pablito, Gustavo, Olivia, el instalador). La confianza es humana.
- **Inventar obras, clientes o testimonios**, ni mostrar personas generadas como del equipo.
- **Decisiones finales legales o impositivas.** Orientación sí; decisión con contador o abogado.
- **Funcionar "solo, siempre prendida":** no recuerdo conversaciones anteriores (la memoria es el repo) y solo actúo cuando me llaman o cuando hay una tarea programada.

## Cómo se explica un proceso para automatizarlo
Usar `procesos/_plantilla.md`: cuándo se dispara, qué datos entran, pasos, criterios de decisión, qué sale, quién aprueba y qué puede salir mal. Con eso Claude lo convierte en plantilla, tarea programada o guion.

## Orden recomendado (con 3 a 4 obras por mes, lo simple alcanza)
1. **Boleta → análisis → respuesta y borrador de presupuesto** (ahorra más tiempo).
2. **Paquete semanal de contenido** (lunes) con captions y calendario.
3. **Seguimiento de leads y recordatorios** (planilla + tareas programadas).
4. **Reporte semanal** (viernes): números, qué funcionó, qué ajustar.
5. **Documentos de obra** (checklist, acta de entrega, garantía).
No hace falta todavía n8n ni bots (ver `08-sistema/automatizacion-futura.md`): se justifican con más de 30 o 40 consultas por mes.
