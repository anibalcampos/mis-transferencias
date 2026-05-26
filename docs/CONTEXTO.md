# CONTEXTO DEL PROYECTO

> Información sobre el entorno, el stack tecnológico y las preferencias de trabajo.
> Este archivo cambia poco. Actualizarlo cuando cambie el entorno o se agreguen tecnologías.

---

## El proyecto

**Nombre:** Mis Transferencias
**Propósito:** App web single-page para registrar gastos en cuotas con gráficos y línea de tiempo
**Estado:** En desarrollo
**Inicio:** 2026-05-26

---

## Entorno técnico

**Sistema operativo:** Windows 11
**Lenguaje principal:** JavaScript (vanilla, sin frameworks)
**Herramientas principales:**
- Chart.js 4.4.1 — gráficos de barras, torta y línea
- localStorage — persistencia en navegador
- GitHub Pages — hosting

**Dependencias clave:**
```
Chart.js (CDN: cdn.jsdelivr.net/npm/chart.js@4.4.1)
Google Fonts: DM Sans, Playfair Display
```

**Cómo instalar dependencias:**
```bash
No requiere instalación. Solo abrir index.html en el navegador.
```

---

## Entorno de uso

> Este proyecto se usa en distintos computadores.

**Computadores donde se usa:**
- PC local — Windows 11, cualquier navegador moderno

**Consideraciones al cambiar de computador:**
- Los datos se guardan en localStorage del navegador (no viajan entre PCs)
- Usar Exportar/Importar JSON para migrar datos entre equipos
- Sin servidor, sin API keys, sin dependencias que instalar

---

## Preferencias de trabajo

**Estilo de código:**
- Todo en un solo archivo (HTML + CSS + JS)
- Funciones simples y específicas sobre clases complejas
- nombres en camelCase para variables y funciones

**Qué evitar:**
- No usar frameworks (React, Vue, etc.) — la app es intencionalmente simple
- No agregar dependencias que requieran build steps

**Convenciones de nombres:**
- Archivos: kebab-case
- Variables: camelCase
- IDs en HTML: camelCase (prefijo f_ para campos de formulario)

```
## El proyecto
**Nombre:** markitdown-converter
**Propósito:** Convertir documentos (PDF, Word, imágenes) a Markdown automáticamente
**Estado:** En desarrollo
**Inicio:** 2026-05-19

## Entorno técnico
**Sistema operativo:** Windows 11
**Lenguaje principal:** Python 3.10+
**Herramientas principales:**
- markitdown (Microsoft) — conversión de documentos
- easyocr — OCR local para imágenes sin API
- watchdog — modo monitor para procesar carpeta automáticamente

## Entorno de uso
**Computadores:** PC trabajo (Win11) y laptop casa (Win11)
**Consideraciones:** easyocr descarga modelos ~100MB la primera vez

## Preferencias
**Estilo:** Scripts simples, sin clases complejas, todo en español
**Evitar:** markitdown-ocr (da errores con PDFs escaneados)
```
