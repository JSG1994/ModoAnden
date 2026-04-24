# Migracion de bloques extendidos por escapada

Este documento define como ampliar una escapada al nuevo formato sin romper el resto.

## Objetivo

- Migrar ciudad por ciudad.
- Mantener compatibilidad con escapadas que aun no tengan bloques extendidos.
- Evitar secciones vacias en el render.

## Orden recomendado por ciudad

1. Datos minimos primero:
- realExperience
- detailedItinerary

2. Valor editorial despues:
- foodAndRestaurants
- seasonalPlans

3. Cierre de decision:
- hotelDecisionGuide
- honestWarnings

4. Refuerzo SEO al final:
- seoBlocks

## Criterio de completitud

Una ciudad se considera "migrada" cuando tiene al menos:
- realExperience
- detailedItinerary
- seoBlocks

Los demas bloques pueden entrar despues sin bloquear publicacion.

## Checklist operativo

1. Copiar el starter de EXTENDED_BLOCKS_STARTER.ts.
2. Pegar el bloque en data/escapes/<ciudad>.ts dentro del objeto principal.
3. Rellenar primero titulos e intros de cada bloque.
4. Rellenar listas (areas, planes, warnings, opciones de hotel).
5. Revisar que no haya strings vacios ni arrays vacios innecesarios.
6. Ejecutar validacion de errores de TypeScript.
7. Revisar visualmente la pagina de detalle en desktop y movil.

## Reglas de contenido

- Evitar promesas absolutas: usar tono editorial honesto.
- Priorizar utilidad de decision sobre volumen de texto.
- Si no hay dato fiable, dejar el bloque fuera en vez de forzarlo.
- Mantener coherencia entre durationVariants y detailedItinerary.

## Riesgos comunes

- Duplicar ideas entre overview y realExperience.
- Contradecir recomendaciones de noches entre bloques.
- Cargar restaurantes sin matiz de precio/encaje.
- Anadir planes de temporada sin advertencia de disponibilidad.

## QA rapido

- La escapada renderiza sin errores.
- No se muestran tarjetas vacias.
- El orden de lectura se mantiene: overview -> noches -> contenido extendido -> editorial -> FAQ.
- El JSON de datos mantiene estructura valida de Escape.
