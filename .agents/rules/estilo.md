---
trigger: always_on
---

# Reglas de Diseño — Estilo Y2K / Retro

## Estética y Diseño Visual

- Aplicar estrictamente paletas altamente saturadas, tonos neón
  (magenta, cian, verde lima, violeta) y esquemas de alto contraste.
- Evitar paletas minimalistas modernas, corporativas o tonos pastel apagados.
- Priorizar interfaces inspiradas en software y sitios web de finales
  de los 90s y principios de los 2000s.
- Utilizar ventanas clásicas, bordes biselados, texturas metálicas,
  efectos cromados y botones con relieve cuando sean apropiados.
- Utilizar sombras con efecto glow y resplandores de colores.
- Priorizar fondos con grids retro-futuristas, patrones de estrellas,
  temática espacial o estética cyber.
- Los encabezados pueden utilizar tipografías pixel art, monospace,
  de consola o tipografías gruesas/distorsionadas características de la época.

## Componentes UI

- Todo nuevo componente visual debe mantener coherencia con la estética Y2K.
- Priorizar elementos con profundidad visual frente a superficies completamente planas.
- Utilizar bordes, gradientes, highlights, sombras y efectos de relieve.
- Evitar componentes que parezcan exclusivamente Material Design,
  Apple-style o interfaces corporativas modernas.

## Frontend

- Las clases CSS o utilidades deben utilizarse para construir
  efectos visuales retro cuando corresponda.
- Se permiten gradientes iridiscentes, múltiples sombras,
  bordes gruesos y efectos cromados.
- Las animaciones deben utilizarse con moderación y mantener coherencia
  con la estética retro.

## Animaciones

- Se pueden utilizar efectos como:
  - Texto parpadeante.
  - Elementos deslizantes.
  - Glows animados.
  - Cursores personalizados.
  - Elementos flotantes.
- No utilizar animaciones únicamente como decoración si perjudican
  la usabilidad o legibilidad.
- Evitar animaciones excesivas que dificulten la navegación.

## Coherencia Visual

- Todo nuevo componente debe sentirse parte del mismo universo visual.
- No introducir tendencias modernas de diseño plano si contradicen
  la estética definida por este documento.
- Antes de crear un componente visual importante, analizar los componentes
  existentes y reutilizar estilos, tokens y patrones cuando sea posible.

## Comportamiento del Agente

- Antes de generar código complejo para una nueva página o componente,
  describir brevemente la propuesta visual.
- La propuesta debe indicar:
  - Paleta principal.
  - Estilo de componentes.
  - Tipo de fondos y efectos.
  - Estilo de animaciones, si corresponde.
- Si el proyecto utiliza el concepto "Antigravity" como parte de su identidad,
  incorporar elementos visuales relacionados con ingravidez, espacio,
  elementos flotantes y estética retro-futurista.

## Rediseño de proyectos existentes

- Antes de modificar la interfaz existente, analizar los componentes y patrones visuales actuales.
- No reemplazar componentes existentes sin evaluar primero si pueden reutilizarse o adaptarse.
- El rediseño debe preservar la funcionalidad existente.
- Priorizar la creación de un sistema de diseño coherente antes de aplicar estilos individualmente.
- Evitar rediseñar cada página de forma independiente.
- Los cambios visuales deben derivarse de tokens, componentes y patrones reutilizables.