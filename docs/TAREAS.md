# TAREAS

> Lista de tareas del proyecto ordenadas por prioridad.
> Actualizar al inicio y al final de cada sesión.

---

## 🔴 Alta prioridad (hacer ahora)

- [ ] Definir próximas features con el usuario

## 🟡 Media prioridad (próxima sesión)

- [ ] Confirmar antes de eliminar con modal en vez de confirm()

## 🟢 Baja prioridad (cuando haya tiempo)

- [ ] Refactor: separar JS en funciones más pequeñas
- [ ] Agregar tests
- [ ] PWA: manifest.json + service worker para uso offline

## ✅ Completadas (historial)

- [x] Token de seguridad para proteger planilla *(2026-05-26)*
- [x] Editar gastos existentes desde modal *(2026-05-26)*
- [x] Campo "Programado" con toggle en tabla + columna en Sheets *(2026-05-26)*
- [x] Meses pasados colapsables en tabla *(2026-05-26)*
- [x] Filtro "Pendientes" y métrica "Por programar" *(2026-05-26)*
- [x] Carga desde Google Sheets (lectura vía JSONP + botón Cargar + auto-sync) *(2026-05-26)*
- [x] Google Sheets: guardar gastos automáticamente al agregar *(2026-05-26)*
- [x] Apps Script: crear planilla "GastosCMR" automáticamente en Drive *(2026-05-26)*
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

**[Lectura desde Google Sheets]:**
Se implementó vía JSONP porque `mode: 'no-cors'` en fetch no permite leer respuestas.
La URL del script debe tener la implementación más reciente que incluye `action=read`.
