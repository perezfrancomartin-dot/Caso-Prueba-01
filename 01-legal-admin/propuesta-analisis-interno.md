# Propuesta a instaladores: análisis interno (NO compartir)

Complementa `propuesta-instaladores/propuesta-instaladores-norte-solar.pdf` (lo que sí se comparte con Gustavo y Pablito). Fuente editable: `propuesta-instaladores/propuesta.html`. Fecha: 21/10/2026.

## Qué cambió respecto de lo anterior
| Antes (14/10) | Ahora (21/10) |
|---|---|
| Gustavo = jefe técnico, 50 % de la mano de obra | **Pablito = instalador líder (50 %)**. Gustavo = ayudante en formación (20 %) con camino a instalador (35/35 o 50/20) |
| Dueño hacía las primeras obras para aprender | El dueño **no instala**: consigue trabajos, redes, compras. Va a obra solo los sábados como ayudante |
| Referido: 5 % | **Referido: 3 %** (igual que la comisión de Olivia). 5 % se comía demasiado margen |
| Sin visita técnica paga | **Visita técnica en semana: 2 %** si la obra se concreta |

El reparto 50 / 20 / 30 (líder / ayudante / empresa) se mantiene. Por eso los valores cargados en el sistema (`config/precios`: comGustavo 50, comAyudante 20) siguen sirviendo. Solo hay que cambiar las etiquetas "Gustavo" por "Instalador líder" en la página.

## Economía de una obra tipo (4 paneles, sin batería; números de ejemplo)
| Concepto | Monto |
|---|---|
| Precio al cliente | $3.586.000 |
| Materiales | −$2.560.000 |
| Mano de obra (pool) | $770.000 |
| Margen sobre materiales (10 %) | $256.000 |
| Pablito (50 %) / ayudante (20 %) | −$385.000 / −$154.000 |
| Queda en la empresa antes de gastos | **$487.000** |
| Olivia 3 % | −$107.580 |
| Bono de calidad (5 % de la parte de la cuadrilla) | −$26.950 |
| Publicidad (supuesto: ~$90.000 por obra) | −$90.000 |
| Reserva de garantía (2 % del total) | −$71.720 |
| **Neto aproximado para la empresa** | **~$190.000 por obra** |

Con 3 a 4 obras por mes: unos $570.000 a $760.000 antes de impuestos y de lo que el dueño cobra por ir de ayudante los sábados. Si además hay referido (−$107.580) o visita técnica (−$71.720), el neto de esa obra cae a ~$10.000 a $80.000. **Los bonos son la parte más cara del acuerdo: usarlos con cuidado.**

## Cosas a decidir o corregir
1. **Anticipo del 70 %, no del 50 al 60 %.** Los materiales son ~71 % del precio. Con 50 a 60 % de anticipo no se cubren los equipos y la empresa financia la diferencia con su capital. En obras con batería el peso de los materiales es aún mayor.
2. **La mano de obra por tarifa, no por % de materiales.** El sistema hoy calcula 30 % de los materiales con un mínimo de $600.000. En obras con batería los materiales suben mucho y la mano de obra saldría desproporcionada (el trabajo no se multiplica por tres). Falta armar una **tarifa por tipo de obra** (sencilla sin batería, con batería, adicional por panel, adicional por viaje) y ponerla en el sistema.
3. **Quién firma la obra.** El dueño es técnico electromecánico y tramita la matrícula, pero no instala. Firmar algo que no podés verificar es un riesgo propio. Opciones: Pablito se matricula (o ya lo está), o el dueño firma solo con checklist, fotos y mediciones revisados por Pablito. Averiguar si Pablito está matriculado.
4. **Dependencia de Pablito.** Si Pablito no está, no hay obras. Por eso la cláusula de prioridad con 7 días y el camino de Gustavo a instalador. Más adelante, sumar un segundo instalador.
5. **Monotributo del lado de la empresa.** A ~3 o 4 obras por mes, la facturación anual puede superar el tope del monotributo (los materiales que se revenden también cuentan). Hablarlo con un contador antes de crecer, y definir cuándo pasar a Responsable Inscripto o a una sociedad (por ejemplo, una SAS).
6. **Relación de dependencia encubierta.** Para que sean independientes de verdad: factura por obra, sin horarios impuestos, sin exclusividad, herramientas propias, derecho a rechazar obras. La propuesta ya lo refleja, pero **tiene que revisarlo un contador o abogado laboral** antes de firmar.
7. **No captación de clientes.** La cláusula de 6 meses posteriores puede ser difícil de hacer cumplir. Que la revise un abogado.
8. **Seguros.** Un monotributista no está cubierto por ART. Exigir accidentes personales antes de la primera obra en altura.
9. **Cobros.** Si el cliente demora el saldo, la propuesta adelanta el 50 % a los instaladores después de 15 días. Verificar que la caja de la empresa lo aguante.

## Pendientes de la propuesta (lo marcado en amarillo en el PDF)
- Nombre del dueño y del matriculado que firma
- Cantidad de obras para pasar a Fase 2 (propuesto: 5) y tamaño de la "obra simple" que puede liderar Gustavo (propuesto: hasta 6 paneles, sin batería)
- Meses de garantía (propuesto: 12) y meses de no captación (propuesto: 6)
- **Tarifa por tipo de obra** (se define en la primera reunión)
