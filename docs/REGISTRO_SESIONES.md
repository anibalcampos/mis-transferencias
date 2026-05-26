# REGISTRO DE SESIONES

> Historial cronológico de todas las sesiones de trabajo en este proyecto.
> El más reciente va primero.

---

## Cómo agregar una entrada

Al cerrar cada sesión, agregar una entrada arriba del todo con el formato de abajo.
Ser honesto con los problemas — ayuda a evitar repetirlos.

---

## 2026-05-26 Cuarta parte — Programado, editar, colapsar meses

**Duración aproximada:** 30 min

**Completado:**
- Campo "Programado": checkbox en tabla para marcar si ya se programó en el banco
- Apps Script: columna "Programado" (Sí/No) en la planilla Google Sheets
- Botón Editar (✎) en cada fila: abre el modal con datos precargados
- Modal cambia título según sea "Nueva transferencia" o "Editar transferencia"
- Meses pasados colapsados por defecto en la tabla (▶ click para expandir)
- Filtro "Pendientes" en toolbar para ver solo lo no programado
- Métrica "Por programar" con contador de items pendientes
- Seguridad: token secreto para proteger planilla

**Problemas encontrados:**
- `no-cors` no permite leer respuestas → se usó JSONP para lectura
- Hubo que actualizar colspans al agregar columnas nuevas en la tabla

**Aprendizajes:**
- Un simple token en el payload es suficiente para proteger un Apps Script
- JSONP con script tags permite comunicación cross-origin sin CORS
- Los meses pasados se pueden colapsar con onclick en el header + toggle de display

**Próximo paso:**
- Preguntar al usuario qué desea hacer a continuación

---

**Duración aproximada:** 15 min

**Completado:**
- Apps Script: se agregó `doGet` con `action=read` que devuelve los gastos desde la planilla "GastosCMR"
- Apps Script: soporte JSONP (`callback` parameter) para lectura cross-origin sin CORS
- App: función `cargarDesdeSheets()` que usa JSONP (script tag injection) para leer datos
- App: botón "Cargar" tanto en el toolbar como en la sección de configuración
- App: auto-carga al inicio si la URL de Sheets está configurada
- Se limpió `codigo_google_apps_script.js`: se eliminó el endpoint `auth` y la función `testAuth()`
- Se actualizó TRASPASO.md, se commit y push a GitHub

**Problemas encontrados:**
- `no-cors` mode no permite leer la respuesta del fetch → se usó JSONP con `<script>` tag

**Aprendizajes:**
- Google Apps Script soporta JSONP nativamente con `callback` parameter
- JSONP permite comunicación cross-origin sin CORS porque los script tags no tienen restricciones
- Para proteger el script basta con un token comparado en doGet/doPost

**Completado adicional (en la misma sesión):**
- Token de seguridad: Apps Script verifica `TOKEN` en cada request
- App: campo `sheetsToken` en config, se envía en POST y JSONP
- La app no envía datos si no hay token configurado

**Próximo paso:**
- El usuario debe actualizar el código del Apps Script en script.google.com
- Luego preguntar qué más desea hacer

---

**Duración aproximada:** 30 min

**Completado:**
- Se creó `codigo_google_apps_script.js` con el código para sincronizar con Google Sheets
- Se inicializó git, commit y push al repositorio anibalcampos/mis-transferencias
- Se renombró rama master → main y se forzó push
- GitHub Pages actualizado con los cambios (gráficos, pestañas, categorías dinámicas)
- Se creó implementación en Google Apps Script
- Se conectó la app con la URL del script (conexión exitosa)
- Se corrigió el script para crear planilla "GastosCMR" automáticamente (DriveApp.create en vez de getActiveSpreadsheet)

**Problemas encontrados:**
- Token fine-grained no tenía acceso al repo → se usó autenticación via browser
- Rama master vs main → se renombró y forzó push
- getActiveSpreadsheet() no funciona sin hoja vinculada → se reemplazó por DriveApp.getFilesByName + SpreadsheetApp.create
- El asistente entró en modo plan al proponer pasos → se resolvió al cerrar/reabrir sesión

**Próximo paso:**
- En script.google.com: reemplazar el código viejo por el nuevo que crea la planilla "GastosCMR"
- Re-implementar (Implementar → Gestionar implementaciones → Editar → Implementar)
- En la app: Probar conexión → Autorizar permisos → Agregar un gasto de prueba

---

## 2026-05-26 Sesión inicial — Gráficos, pestañas y categorías dinámicas

**Duración aproximada:** 1 hora

**Completado:**
- Se trajo `index.html` desde `github.com/anibalcampos/mis-transferencias`
- Se agregó Chart.js 4.4.1 desde CDN
- Se implementaron 3 pestañas: Tabla, Gráficos, Línea de tiempo
- Gráfico de barras: gasto mensual con colores por estado (pasado/actual/futuro)
- Gráfico de torta: distribución por categoría con paleta de colores dinámica
- Gráfico de línea: evolución acumulada mes a mes
- Línea de tiempo visual: cada columna = mes, cada celda = valor de cuota
- Modal modificado: ahora "Monto por cuota" en vez de "Monto total" (se calcula total = cuota × N)
- Categorías dinámicas: botón + en el modal para agregar categorías nuevas, se persisten en localStorage
- Paleta de 10 colores para categorías dinámicas (se asignan automáticamente por índice)
- Se poblaron los archivos de documentación (CONTEXTO.md, TRASPASO.md, TAREAS.md)

**Problemas encontrados:**
- PowerShell 5.1 no soporta operador ternario `? :` → se usó if/else
- Los caracteres con tilde (ó) se mostraban como `�` en la consola pero están correctamente codificados como UTF-8 en el archivo
- Chart.js requiere que el canvas esté visible al inicializar → se agregó setTimeout al cambiar de pestaña

**Aprendizajes:**
- requestAnimationFrame posterga la renderización de charts hasta que el DOM esté listo
- Para categorías dinámicas conviene usar inline styles en vez de clases CSS predefinidas

**Próximo paso:**
- Preguntar al usuario qué desea hacer a continuación

---

## [YYYY-MM-DD] [Título descriptivo de la sesión]

**Duración aproximada:** [X horas]

**Completado:**
- [cosa 1 que se hizo]
- [cosa 2 que se hizo]

**Problemas encontrados:**
- [problema] → [cómo se resolvió]

**Aprendizajes:**
- [algo nuevo o no obvio que se descubrió]

**Próximo paso:**
- [acción concreta para la siguiente sesión]

---

## Ejemplo real de cómo debería verse:

```
## 2026-05-21 Implementación de OCR local para imágenes

**Duración aproximada:** 2 horas

**Completado:**
- Se reemplazó pytesseract por easyocr para OCR de imágenes
- Se probó con 4 imágenes distintas (screenshots, fotos de documentos)
- Se actualizó AGENTS.md con instrucciones de instalación de easyocr
- Se procesaron archivos reales: Circular14.pdf, Carta funcionarios.docx

**Problemas encontrados:**
- easyocr descarga modelos la primera vez y tarda ~5 minutos → se documentó en CONTEXTO.md
- Una imagen en formato TIFF no fue reconocida → convertirla a PNG primero resuelve el problema

**Aprendizajes:**
- easyocr es mucho más fácil de instalar que pytesseract en Windows
- Las imágenes con texto muy pequeño (< 8pt) tienen baja precisión con easyocr
- markitdown puede procesar URLs de YouTube directamente sin descargar el video

**Próximo paso:**
- Probar soporte para archivos .epub
- Implementar función parse_epub() en convertir.py línea 87

---

## 2026-05-19 Sesión inicial — Estructura base

**Duración aproximada:** 1.5 horas

**Completado:**
- Se creó estructura de carpetas del proyecto
- Se instaló markitdown y se probó con un PDF simple
- Se crearon scripts convertir.py y monitor.py

**Próximo paso:**
- Agregar soporte para imágenes con OCR
```
