# TRASPASO — Estado actual del proyecto

> Este es el archivo más importante. El asistente lo lee SIEMPRE al inicio de cada sesión.
> Mantenerlo actualizado al final de cada sesión es obligatorio.

---

## Estado al 2026-05-26

**Última tarea activa:**
Sincronización con Google Sheets completada y funcionando.
La app guarda automáticamente los gastos en la planilla "GastosCMR"
(hoja "Transferencias") en Google Drive del usuario.

**Estado general:**
En progreso

**Próximo paso concreto:**
Preguntar al usuario qué desea hacer a continuación.

**Notas importantes (no olvidar):**
- URL actual del Apps Script: https://script.google.com/macros/s/AKfycbx0VIxBU714hlRRZ3riMtJzWpU0j3DTTqLf4OJD1AsclcW6NI_2IlpYLx3bwE7orVnH/exec
- El script busca la planilla "GastosCMR" en Drive, si no existe la crea
- Los datos viajan como text/plain (no-cors) por compatibilidad con Apps Script
- Las categorías se persisten en localStorage (clave: mis_transferencias_categorias)
- Chart.js se carga desde CDN

---

## Contexto rápido

**¿En qué parte del proyecto estamos?**
Completada la integración con Google Sheets

**¿Qué funciona bien hoy?**
- App publicada en GitHub Pages con gráficos, pestañas y timeline
- Categorías dinámicas con paleta de colores automática
- Modal con monto por cuota
- Exportar/Importar JSON
- Sincronización con Google Sheets (planilla "GastosCMR")
- Persistencia local con localStorage

**¿Qué está incompleto?**
- No hay tests automatizados
- No hay lint/typecheck configurado

---

## Historial reciente (últimas 3 sesiones)

| Fecha | Qué se hizo |
|-------|-------------|
| 2026-05-26 | Google Sheets funcionando: planilla GastosCMR creada automáticamente |
| 2026-05-26 | Gráficos, pestañas, timeline, categorías dinámicas |

> Ver `REGISTRO_SESIONES.md` para el historial completo.

```
## Estado al 2026-05-21

**Última tarea activa:**
Estaba ajustando el script convertir.py para que soporte archivos .epub.
Llegué hasta la función parse_epub(), que está incompleta.

**Estado general:** En progreso

**Próximo paso concreto:**
Completar la función parse_epub() en convertir.py línea 87.
Luego probar con el archivo recursos/prueba.epub.

**Notas importantes:**
- El modo OCR para imágenes requiere que easyocr esté instalado (descarga 100MB la 1ra vez)
- No usar markitdown-ocr todavía, da errores con PDFs escaneados

## Contexto rápido
**¿En qué parte del proyecto estamos?** Desarrollo — agregando nuevos formatos
**¿Qué funciona bien?** PDF, DOCX, PNG, URLs de YouTube
**¿Qué está incompleto?** EPUB support, audio sin API key

## Historial reciente
| Fecha | Qué se hizo |
|-------|-------------|
| 2026-05-21 | Se implementó OCR local con easyocr para imágenes |
| 2026-05-19 | Se creó la estructura base y se probó con PDFs |
```
