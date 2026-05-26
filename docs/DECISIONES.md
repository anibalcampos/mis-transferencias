# DECISIONES TÉCNICAS

> Registro de decisiones importantes tomadas en el proyecto y su razonamiento.
> Documentar aquí evita repetir discusiones y ayuda a entender por qué las cosas están como están.

---

## Cómo usar este archivo

Cada vez que se tome una decisión importante (tecnología, arquitectura, enfoque), agregarla aquí.
"Importante" significa: si alguien se preguntara "¿por qué lo hicieron así?", debería encontrar la respuesta acá.

---

## 2026-05-26 Categorías dinámicas con inline styles en vez de clases CSS

**Qué:** Las categorías de gastos ya no están limitadas a 5 fijas (Hogar, Ropa, etc.). El usuario puede crear categorías nuevas desde el modal. Los colores se asignan con inline styles desde una paleta JS de 10 colores.

**Por qué:** El usuario pidió poder agregar categorías nuevas. Con clases CSS habría que generar CSS dinámico o tener clases predefinidas para todas las categorías posibles, lo cual no escala.

**Alternativas descartadas:**
- Clases CSS predefinidas (`.cat-hogar`, `.cat-ropa`, etc.) — no escalan a categorías dinámicas
- Generar `<style>` tags con JS — más complejo y menos limpio que inline styles

**Consecuencias:**
- No hay límite de categorías
- Cada categoría obtiene color por índice en el array (cíclico con la paleta de 10)
- Las categorías se persisten en localStorage independientemente de los gastos

**Estado:** Activa

---

## 2026-05-26 "Monto por cuota" en vez de "Monto total"

**Qué:** En el modal de agregar gasto, el usuario ingresa el valor de cada cuota individual y el número de cuotas. El total se calcula como cuota × N.

**Por qué:** El usuario pidió explícitamente ingresar el monto de la cuota y las veces que la paga, en vez de calcularlo al revés.

**Alternativas descartadas:**
- Mantener monto total y calcular cuota — el usuario prefiere el flujo inverso

**Consecuencias:**
- Los datos existentes son compatibles (monto total = cuota × cuotas)
- El campo en el formulario cambió de `fMonto` a `fCuotaMonto`

**Estado:** Activa

---

## 2026-05-26 App en un solo archivo HTML sin frameworks

**Qué:** Toda la aplicación vive en un solo `index.html` (HTML + CSS + JS). Sin build steps, sin npm, sin frameworks.

**Por qué:** Es una app simple de una sola página. No necesita la complejidad de un framework ni herramientas de build. Cualquier persona puede abrir el archivo en el navegador y funciona.

**Alternativas descartadas:**
- React/Vue/Svelte — overkill para una app que cabe en un solo archivo
- TypeScript — requiere compilación, beneficios marginales para este tamaño

**Consecuencias:**
- Sin dependencias que instalar (salvo Chart.js desde CDN)
- Fácil de publicar en GitHub Pages (subir 1 archivo)
- El código puede volverse difícil de mantener si crece mucho sin modularizar

**Estado:** Activa

```
## 2026-05-21 Usar easyocr en lugar de pytesseract para OCR

**Qué:** Para extraer texto de imágenes se usa easyocr en vez de pytesseract.

**Por qué:** pytesseract requiere instalar Tesseract como programa separado
en Windows, lo cual complica la portabilidad entre computadores.
easyocr es 100% Python, se instala con pip y descarga los modelos automáticamente.

**Alternativas descartadas:**
- pytesseract — requiere instalación manual de Tesseract en cada PC
- API de OpenAI para OCR — tiene costo y requiere API key

**Consecuencias:** 
- Primera ejecución descarga ~100MB de modelos de easyocr
- Solo soporta español e inglés (suficiente para nuestro uso)
- No requiere configuración especial en nuevos computadores

**Estado:** Activa

---

## 2026-05-19 Estructura de carpetas recursos/ y resultado/

**Qué:** Los archivos de entrada van en recursos/ y los .md generados en resultado/.

**Por qué:** Separar entrada de salida evita confusión y facilita limpiar resultados
sin afectar los originales. También permite procesar el mismo archivo varias veces.

**Estado:** Activa
```
