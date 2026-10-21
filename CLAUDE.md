# Contexto para Claude

Este repositorio es el "cerebro" de **Norte Solar**, una empresa nueva de **instalación de paneles solares** (servicio principal) y **soluciones eléctricas en general** (servicio secundario), en Buenos Aires, Argentina.

## Cómo trabajar acá
- Idioma: **español rioplatense (voseo)**, simple y claro. El dueño está aprendiendo el rubro desde cero.
- Al empezar una sesión, leé `00-empresa/bitacora.md` (dónde quedamos). Antes de proponer algo, leé `00-empresa/decisiones.md` (lo ya decidido) y `00-empresa/hoja-de-ruta.md` (en qué etapa estamos).
- Cada decisión nueva se registra en `00-empresa/decisiones.md` con fecha.
- Precios: siempre con fecha y fuente. En Argentina cambian rápido.
- Nunca inventar obras, clientes ni testimonios para publicidad (decisión del equipo).
- Commits en español, descriptivos.

## Equipo
- **Dueño** (técnico electromecánico): no instala. Busca trabajos, maneja redes, presupuestos y compras. Solo disponible los sábados (puede ir a obra como ayudante). Tramita la matrícula.
- **Pablito** (amigo de Gustavo): instalador líder de cuadrilla. Tiene experiencia instalando paneles. Monotributista. Disponibilidad a coordinar.
- **Gustavo**: electricista de buen nivel, sin experiencia en paneles. Ayudante en formación con camino a instalador. Monotributista. Disponible en la semana.
- **Olivia** (atención al cliente, redes y administración): no técnica, ~4 h por día. Cobra comisión por venta cerrada (3 %).
- Propuesta de acuerdo con los instaladores: `01-legal-admin/propuesta-instaladores/` (análisis interno: `01-legal-admin/propuesta-analisis-interno.md`).

## Datos clave
- Zona: Zona Norte del GBA, countries y barrios cerrados (Nordelta y similares), hasta La Plata. Viajes (por ejemplo, Costa Atlántica) se presupuestan aparte.
- Público: nivel socioeconómico medio-alto y alto.
- Capital inicial: $1.000.000 ARS, de los cuales $200.000 son para publicidad (Meta Ads).
- Capacidad estimada: 3 o 4 instalaciones por mes al principio.
- Herramientas: Claude Pro + Claude Code, APIMart (API de modelos de IA de imagen, video y audio), conectores de Gmail, Google Calendar, Drive, Docs y Canva.
- Sistema de gestión publicado: https://claude.ai/artifact/5EheuufRYVNZ6UfrEkMJwQ (fuente en `08-sistema/`). Su base de datos tiene `clientes/*` y `config/precios`.
- APIMart no se conecta con Claude: se usa a mano. Claude entrega prompts listos para copiar.
- Al terminar algo importante, actualizá `00-empresa/bitacora.md`.
