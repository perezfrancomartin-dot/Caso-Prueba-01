# Lección 1: el panel por dentro y su "DNI"

## Qué hay adentro
Celdas en serie (cada una da poco más de medio volt). Los paneles modernos tienen celdas cortadas a la mitad (half-cell): si se sombrea una parte, pierden menos. Una sola celda a la sombra baja el rendimiento de toda su fila.

## La ficha técnica (Trina Vertex 550 W, TSM-DE19; valores aproximados, verificar con la ficha oficial)
| Dato | Valor | Para qué |
|---|---|---|
| Pmax | 550 W | Potencia en laboratorio |
| Vmp / Imp | ~31,6 V / ~17,4 A | El panel trabajando: para calcular generación |
| Voc / Isc | ~38,1 V / ~18,5 A | El panel en el extremo: para que nada se rompa |
| Coef. temp. Pmax | ~−0,34 %/°C | Pérdida por calor |
| Coef. temp. Voc | ~−0,25 %/°C | Suba de voltaje con frío |

## Calor y frío
- Laboratorio (STC): 1.000 W/m² y celda a 25 °C.
- Verano (celda a 60 °C): 550 × (1 − 0,0034 × 35) ≈ **485 W**.
- Invierno (−5 °C): Voc 38,1 × (1 + 0,0025 × 30) ≈ **41 V por panel**. Con este valor se calcula cuántos paneles van en serie.

## La trampa
Isc de 18,5 A: muchos inversores aceptan 13 a 16 A por entrada. Sin mirar la ficha, pueden no ser compatibles.

## Desafío
Inversor X: máximo 500 V, MPPT 125 a 425 V, corriente máxima 13 A, Isc máxima 16 A.
1. ¿Cuántos paneles como máximo en serie (Voc con frío 41 V)?
2. ¿Cuántos como mínimo para entrar en el MPPT (Vmp 31,6 V)?
3. ¿Es compatible por corriente? ¿Por qué?
4. ¿Cuánta potencia dan 4 paneles en un mediodía de verano?

Respuestas del alumno y corrección: (pendiente)
