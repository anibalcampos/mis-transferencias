# Mis Transferencias 💳

> Planificador personal de gastos programados y cuotas mensuales, publicado como página web estática.

## ¿Qué es este proyecto?

Aplicación web de una sola página (`index.html`) para registrar transferencias y compras en cuotas. Muestra cuánto se gasta por mes, permite filtrar por categoría y visualiza la información en gráficos y una línea de tiempo interactiva.

**Publicado en:** https://anibalcampos.github.io/mis-transferencias

---

## ¿Para qué sirve?

- Registrar gastos en cuotas (cama, ropa, entradas, etc.) con fecha de inicio y duración
- Ver el total que se descuenta cada mes y cuánto queda pendiente
- Visualizar los gastos en gráficos de barras, torta y línea de tiempo
- Exportar e importar los datos como archivo `.json` de respaldo

---

## ¿Cómo se usa?

### Requisitos
- Cualquier navegador moderno (Chrome, Edge, Firefox)
- No requiere instalación ni servidor

### Uso básico

```bash
# Opción 1 — abrir directo en el navegador
Doble click en index.html

# Opción 2 — usar la URL publicada
https://anibalcampos.github.io/mis-transferencias
```

### Actualizar en GitHub Pages

```bash
# 1. Editar index.html con OpenCode
# 2. Ir al repositorio en github.com
# 3. Subir el archivo: Add file → Upload files
# 4. GitHub publica los cambios en 1-2 minutos
```

---

## Estructura del proyecto

```
mis-transferencias/
├── README.md                      ← este archivo
├── index.html                     ← toda la app (HTML + CSS + JS en un solo archivo)
└── codigo_google_apps_script.js   ← script para sincronizar con Google Sheets (pendiente)
```

---

## Notas técnicas para OpenCode

- **Sin frameworks** — todo en un solo `index.html`, sin dependencias que instalar
- **Chart.js 4.4.1** — cargado via CDN para los gráficos
- **localStorage** — clave `mis_transferencias_v1` guarda los datos en el navegador
- **Tres pestañas**: Tabla / Gráficos / Línea de tiempo (`switchTab(tab)`)
- **Categorías**: Hogar, Ropa, Entretención, Salud, Otro
- **Formato de fecha**: `'YYYY-MM'` (ej: `'2025-06'`)
- **Formato de dato**:
```json
{ "id": 1, "desc": "Cama sommier", "cat": "Hogar", "monto": 300000, "cuotas": 3, "inicio": "2025-06" }
```

### Funciones principales

| Función | Qué hace |
|---|---|
| `render()` | Redibuja tabla y métricas |
| `renderCharts()` | Redibuja los 3 gráficos |
| `renderTimeline()` | Redibuja la línea de tiempo |
| `guardar()` | Agrega gasto desde el modal |
| `eliminar(id)` | Elimina un gasto por ID |
| `guardarLocal()` | Persiste en localStorage |
| `exportarJSON()` | Descarga respaldo `.json` |
| `importarJSON()` | Carga desde archivo `.json` |

---

## Estado actual

### ✅ Funcionando
- Registro de transferencias con cuotas
- Persistencia en localStorage
- Exportar / importar JSON
- Gráfico de barras por mes
- Gráfico de torta por categoría
- Gráfico de línea de evolución mensual
- Línea de tiempo de cuotas
- Publicado en GitHub Pages

### ⚠️ Pendiente — Sincronización con Google Sheets

La sección "Sincronizar con Google Sheets" está en la app pero **no funciona aún**.

**El problema:** el Apps Script fue creado como proyecto independiente, no desde dentro de un Google Sheets, por lo que no tiene una hoja vinculada donde escribir.

**Para resolverlo:**
1. Abrir [sheets.google.com](https://sheets.google.com) y crear una hoja nueva
2. Ir a **Extensiones → Apps Script**
3. Pegar el contenido de `codigo_google_apps_script.js`
4. **Implementar → Nueva implementación → Aplicación web**
5. Acceso: **Cualquier usuario**
6. Copiar la URL generada y pegarla en la app → "Probar conexión"

---

## Prompt de inicio para OpenCode

Al abrir este proyecto en OpenCode, usá este prompt para retomar el contexto:

```
Lee el README.md para entender el proyecto.
Es una app de una sola página (index.html) para registrar transferencias en cuotas.
Usa localStorage para guardar datos, Chart.js para gráficos y tiene integración
pendiente con Google Sheets. Dime en qué puedo ayudarte.
```