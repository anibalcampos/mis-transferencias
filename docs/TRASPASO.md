# TRASPASO — Estado actual del proyecto

> Este es el archivo más importante. El asistente lo lee SIEMPRE al inicio de cada sesión.
> Mantenerlo actualizado al final de cada sesión es obligatorio.

---

## Estado al 2026-05-26

**Última tarea activa:**
Se agregó campo "Programado" con toggle en tabla, botón Editar (✎) con modal,
meses pasados colapsables, filtro "Pendientes", y token de seguridad.

**Estado general:**
En progreso

**Próximo paso concreto:**
Preguntar al usuario qué desea hacer a continuación.

**Notas importantes (no olvidar):**
- URL actual del Apps Script: https://script.google.com/macros/s/AKfycbx0VIxBU714hlRRZ3riMtJzWpU0j3DTTqLf4OJD1AsclcW6NI_2IlpYLx3bwE7orVnH/exec
- Token de seguridad: cambiar `mi_token_secreto` en Apps Script + pegar el mismo en la app
- Sin token no se puede leer ni escribir en la planilla
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
- Editar gastos existentes (✎)
- Campo "Programado" con toggle en tabla
- Meses pasados colapsables en tabla
- Filtro "Pendientes" y métrica "Por programar"
- Exportar/Importar JSON
- Sincronización con Google Sheets (guardar y cargar)
- Carga automática desde Sheets al abrir la página
- Token de seguridad para proteger la planilla
- Persistencia local con localStorage

**¿Qué está incompleto?**
- No hay tests automatizados
- No hay lint/typecheck configurado

---

## Historial reciente (últimas 3 sesiones)

| Fecha | Qué se hizo |
|-------|-------------|
| 2026-05-26 | Programado, Editar, Meses colapsables, Token seguridad |
| 2026-05-26 | Carga desde Sheets (JSONP + botón + auto-sync) |
| 2026-05-26 | Google Sheets funcionando: planilla GastosCMR creada automáticamente |

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
