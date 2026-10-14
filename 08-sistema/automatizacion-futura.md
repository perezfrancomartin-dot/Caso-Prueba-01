# Automatización futura (n8n + Telegram + Claude)

## Idea
Olivia le escribe a un bot de Telegram, n8n procesa el mensaje con la API de Claude y carga los datos solo. También manda un resumen diario.

## Por qué no ahora
- El sistema actual guarda los datos dentro de claude.ai. **n8n no puede escribir ahí directamente**, así que habría que mudar todo a otra base (Google Sheets, Airtable o Supabase) y mantener dos sistemas, o reemplazar el actual.
- Necesita la **API de Claude** (se paga aparte de Claude Pro), un servidor o plan de n8n, y alguien que lo mantenga cuando algo se rompa.
- Con 3 a 4 obras por mes, la página actual ya resuelve lo mismo: lectura de factura y conversación con IA, seguimiento y resumen del día.

## Cuándo conviene
Cuando haya **más de 30 o 40 consultas por mes**, o cuando se quiera que el bot responda a los clientes automáticamente fuera de horario.

## Cómo sería
1. Base de datos en Google Sheets o Airtable (clientes, presupuestos, precios).
2. Bot de Telegram para el equipo: "nueva consulta", foto de factura, "resumen".
3. n8n: recibe el mensaje → llama a la API de Claude para extraer datos → escribe en la base → responde.
4. Resumen diario automático a las 9 h por Telegram.
5. Más adelante: WhatsApp Business API para responder a clientes (requiere aprobación de Meta y tiene costo por conversación).
