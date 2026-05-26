# TAREAS

> Lista de tareas del proyecto ordenadas por prioridad.
> Actualizar al inicio y al final de cada sesión.

---

## 🔴 Alta prioridad (hacer ahora)

- [ ] Definir próximas features con el usuario

## 🟡 Media prioridad (próxima sesión)

- [ ] Sincronización con Google Sheets (ver README)
- [ ] Agregar edición de gastos existentes
- [ ] Confirmar antes de eliminar con modal en vez de confirm()

## 🟢 Baja prioridad (cuando haya tiempo)

- [ ] Refactor: separar JS en funciones más pequeñas
- [ ] AgregarTests
- [ ] PWA: manifest.json + service worker para uso offline

## ✅ Completadas (historial)

- [x] Traer index.html del repositorio GitHub *(2026-05-26)*
- [x] Agregar pestañas: Tabla / Gráficos / Línea de tiempo *(2026-05-26)*
- [x] Gráfico de barras por mes *(2026-05-26)*
- [x] Gráfico de torta por categoría *(2026-05-26)*
- [x] Gráfico de línea de evolución acumulada *(2026-05-26)*
- [x] Línea de tiempo de cuotas *(2026-05-26)*
- [x] Modal: cambiar "Monto total" por "Monto por cuota" *(2026-05-26)*
- [x] Categorías dinámicas: agregar nuevas desde el modal *(2026-05-26)*

---

## Notas sobre las tareas

> Usar esta sección para aclarar contexto de tareas complejas o que tienen dependencias.

**[Sincronización con Google Sheets]:**
Requiere crear un Google Apps Script desde un Google Sheet, implementarlo como aplicación web, y pegar la URL en la app. El código JS de ejemplo está documentado como `codigo_google_apps_script.js` en el README pero el archivo no está en el repo local.

```
## 🔴 Alta prioridad
- [ ] Completar función parse_epub() en convertir.py (línea 87)
- [ ] Probar conversión con archivo recursos/prueba.epub

## 🟡 Media prioridad
- [ ] Agregar soporte para archivos .msg (Outlook)
- [ ] Mejorar manejo de errores cuando el archivo no existe

## 🟢 Baja prioridad
- [ ] Agregar barra de progreso al procesar archivos grandes
- [ ] Crear modo batch para convertir carpeta entera

## ✅ Completadas
- [x] Implementar OCR local con easyocr *(2026-05-21)*
- [x] Crear estructura base de carpetas *(2026-05-19)*
```
