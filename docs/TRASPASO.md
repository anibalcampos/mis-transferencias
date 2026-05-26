# TRASPASO — Estado actual del proyecto

> Este es el archivo más importante. El asistente lo lee SIEMPRE al inicio de cada sesión.
> Mantenerlo actualizado al final de cada sesión es obligatorio.

---

## Estado al 2026-05-26 (cierre de sesión)

**Última tarea activa:**
Se conectó la app con Google Apps Script (URL funcional, conexión exitosa).
Quedó pendiente actualizar el código del script para que cree la planilla "GastosCMR"
automáticamente usando DriveApp.create en vez de getActiveSpreadsheet.
El código fix ya está en el repo local y en GitHub (commit b1784f9).

**Estado general:**
En progreso

**Próximo paso concreto:**
1. En script.google.com: abrir el proyecto, reemplazar código con la versión nueva
2. Implementar → Gestionar implementaciones → Editar → Implementar
3. En la app: Probar conexión → Autorizar permisos → Agregar gasto de prueba
4. Verificar que la planilla "GastosCMR" aparece en Google Drive

**Notas importantes (no olvidar):**
- URL del Apps Script: https://script.google.com/macros/s/AKfycbw9DWDyLYQXHix-1RBvzVrSg5tf2f0XGihUlgkfXA9t7UN358QsOZzXYHCa0B4G7uuI/exec
- El código fix usa DriveApp.getFilesByName('GastosCMR') y SpreadsheetApp.create('GastosCMR')
- La primera vez pedirá autorización de permisos (Drive + Sheets)
- Las categorías se persisten en localStorage (clave: mis_transferencias_categorias)
- Chart.js se carga desde CDN

---

## Contexto rápido

**¿En qué parte del proyecto estamos?**
Desarrollo — integración con Google Sheets

**¿Qué funciona bien hoy?**
- App publicada en GitHub Pages con gráficos, pestañas y timeline
- Categorías dinámicas con paleta de colores automática
- Modal con monto por cuota
- Exportar/Importar JSON
- Google Apps Script desplegado y conectado

**¿Qué está incompleto?**
- Script de Apps Script necesita actualizarse al fix (crear planilla "GastosCMR")
- No hay tests automatizados
- No hay lint/typecheck configurado

---

## Historial reciente (últimas 3 sesiones)

| Fecha | Qué se hizo |
|-------|-------------|
| 2026-05-26 | Google Sheets: se creó el script, se conectó la app, se subió todo a GitHub |
| 2026-05-26 | Sesión inicial: gráficos, pestañas, timeline, categorías dinámicas |

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
