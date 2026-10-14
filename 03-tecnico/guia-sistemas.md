# Guía de sistemas (resumen de lo aprendido)

## Tipos de sistema
| Sistema | Ahorra | Luz en cortes | Trámite con la distribuidora |
|---|---|---|---|
| On-grid con inyección cero | Sí, de día | **No** (se apaga por seguridad, protección anti-isla) | No |
| Híbrido sin batería | Sí, de día | **No en la práctica** (no recomendado para heladera) | No |
| Híbrido con batería, sin inyección | Sí, de día y de noche | **Sí**, en las cargas críticas | No |
| Con inyección a red | Sí | Depende de la batería | **Sí** (usuario-generador, Ley 27.424) |

**Si el cliente piensa poner batería más adelante:** inversor híbrido desde el principio (confirmar que funcione sin batería y con inyección cero).

## Qué mirar en un panel
- Marca Tier 1 con distribuidor oficial en Argentina (Trina, JA, Jinko, LONGi, Canadian)
- 550 a 600 W, monocristalino; TOPCon/tipo N mejor que PERC; bifacial no suma en techo pegado
- Garantía de producto de 12 años o más; rendimiento de 25 a 30 años
- Certificaciones IEC 61215 e IEC 61730
- Coeficiente de temperatura de Pmax: cuanto más cerca de cero, mejor (−0,30 %/°C es bueno)
- Tolerancia positiva (0/+5 W)
- Medidas y peso: ~2,3 × 1,1 m y ~28 kg. ¿Entra en el vehículo?

## Compatibilidad panel–inversor
1. **Voc × cantidad de paneles × 1,1 < voltaje máximo del inversor** (con frío el voltaje sube)
2. **Vmp × cantidad de paneles** dentro del rango MPPT
3. **Isc del panel ≤ corriente de cortocircuito máxima del inversor.** Ojo: paneles grandes tienen 14 a 18,5 A
4. Todos los paneles de un string: mismo modelo

## Materiales de una instalación
Paneles, inversor, sensor de inyección cero (algunos inversores lo traen), estructura de aluminio con anclajes sellados, cable solar 6 mm², MC4 de la misma marca, protecciones CC (seccionador, DPS), protecciones CA (térmica, diferencial, DPS), gabinetes, caño resistente al sol, cable de tierra, WiFi para monitoreo.

## Baterías de litio (LiFePO4)
- Unos 6.000 ciclos (verificar en la ficha): usándola todas las noches dura unos 15 años
- Envejece igual aunque no se use. Lo que más la desgasta: **calor**, estar siempre al 100 %, descargarla a 0 %
- Modos del inversor: solo respaldo / mixto con reserva (recomendado, ej. 40 %) / uso total
- Para heladera + luces + router (~200 W): 5 kWh alcanza para un corte de casi un día

## Cortes de luz: cargas críticas
El inversor híbrido tiene una salida de respaldo (EPS/backup) que alimenta un **tablero de cargas críticas**. La heladera y las luces elegidas tienen que estar en circuitos propios conectados a ese tablero.
