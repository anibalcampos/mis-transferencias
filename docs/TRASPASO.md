# TRASPASO — Estado actual del proyecto

> Este es el archivo más importante. El asistente lo lee SIEMPRE al inicio de cada sesión.
> Mantenerlo actualizado al final de cada sesión es obligatorio.

---

## Estado al 2026-05-26

**Última tarea activa:**
Se implementaron las categorías dinámicas en el modal de agregar gasto (campo "Monto por cuota" en vez de monto total, y botón + para crear categorías nuevas). La sesión se cerró mientras se decidía qué hacer a continuación.

**Estado general:**
En progreso

**Próximo paso concreto:**
Preguntar al usuario qué desea hacer a continuación con la app.

**Notas importantes (no olvidar):**
- El index.html se trajo desde github.com/anibalcampos/mis-transferencias (rama main)
- Las categorías se persisten en localStorage bajo la clave `mis_transferencias_categorias`
- Los datos de ejemplo presumen que monto = cuotaMonto * cuotas (consistente con el nuevo esquema)
- Chart.js se carga desde CDN, no hay dependencias locales

---

## Contexto rápido

**¿En qué parte del proyecto estamos?**
Desarrollo — implementación de features post-estructura base

**¿Qué funciona bien hoy?**
- Tabla de gastos con filtros por mes y categoría
- Gráficos: barras por mes, torta por categoría, línea de evolución acumulada
- Línea de tiempo de cuotas por mes
- Exportar/Importar JSON
- Modal con monto por cuota, número de cuotas, mes de inicio
- Categorías dinámicas con paleta de colores automática

**¿Qué está incompleto?**
- Sincronización con Google Sheets (pendiente desde README)
- No hay tests automatizados
- No hay lint/typecheck configurado

---

## Historial reciente (últimas 3 sesiones)

| Fecha | Qué se hizo |
|-------|-------------|
| 2026-05-26 | Sesión inicial: se trajo index.html del repo, se agregaron gráficos (Chart.js), pestañas, línea de tiempo, y categorías dinámicas |

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
