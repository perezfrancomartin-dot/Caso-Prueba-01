# Sistema de gestión: seguimiento y presupuestos

**Link:** https://claude.ai/artifact/5EheuufRYVNZ6UfrEkMJwQ
Archivo fuente: `norte-solar-gestion.html` (para cambios, pedírselo a Claude y se republica en el mismo link).

## Qué hace
1. **Seguimiento:** cada consulta es una ficha con su etapa (consulta nueva → factura → estimación → visita → relevado → presupuesto para aprobar → enviado → ganado/perdido) y una fecha de próximo contacto. La pantalla principal muestra **a quién hay que contactar hoy** y los atrasados.
2. **Mensaje sugerido por etapa:** listo para copiar o abrir en WhatsApp.
3. **Presupuesto automático:** al guardar el relevamiento, arma 2 opciones (sin batería y con batería) con materiales, mano de obra, margen, viaje, ahorro estimado, recupero y comisiones.
4. **Aprobación:** el dueño revisa, ajusta el precio final si quiere y aprueba. Recién ahí aparece el mensaje para el cliente. Al marcarlo como enviado, el seguimiento queda para el día siguiente.
5. **Carga con IA:** botón para leer la **foto de la factura** (consumo, distribuidora, precio del kWh) y para leer la **conversación de WhatsApp** (nombre, barrio, qué busca). Siempre se revisa antes de guardar.
6. **Resumen del día:** Claude resume a quién contactar, qué falta aprobar y qué está por cerrarse.
7. **Precios:** pestaña con todos los valores (paneles, inversores, baterías, materiales, %). Solo el dueño o un editor los cambia.

## Guía paso a paso para Olivia
Ver `07-atencion-cliente/guia-olivia-sistema.md`.

## Para que Olivia y Gustavo lo usen
Desde el menú **Compartir** de la página, invitalos con su mail como **Colaborador (Contributor)**. Así pueden cargar y editar clientes, pero no cambiar precios. Necesitan una cuenta de claude.ai.

## Valores cargados (14/10/2026)
Precios de la planilla de compras del 11/10/2026. **Son estimados y hay que cotizarlos:** inversor on-grid 5 kW, híbrido 8 kW, estructura por panel, cable y protecciones, tablero de cargas críticas y varios.

## Datos que Claude puede leer
Claude puede leer y escribir la base de datos de la página (por ejemplo, para hacer un resumen semanal de consultas o cargar clientes en bloque).

## Importante sobre la IA de la página
Las funciones de IA usan la cuenta de Claude de quien las toca (su propio plan). La primera vez piden permiso.

## Correcciones
Cualquier error que aparezca con datos reales se corrige pidiéndoselo a Claude: se edita `norte-solar-gestion.html` y se republica en el mismo link, sin perder los clientes cargados.
