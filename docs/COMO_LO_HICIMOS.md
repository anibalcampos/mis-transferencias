# CÓMO LO HICIMOS

> Recetario de métodos, patrones y técnicas establecidas en este proyecto.
> Cuando se encuentra una buena forma de hacer algo, documentarla aquí.
> Así no se reinventa la rueda en cada sesión.

---

## Cómo usar este archivo

Cuando resuelvas algo que no era obvio, o que costó tiempo descubrir, documentarlo aquí.
El objetivo es que la próxima sesión (o el próximo computador) llegue y lo haga directo.

---

## [Nombre del primer método o patrón]

**Contexto:** [Cuándo usar esto — en qué situación aplica]

**Pasos:**
1. [paso uno]
2. [paso dos]
3. [paso tres]

**Por qué funciona:** [Breve explicación de la lógica detrás]

**Ejemplo:**
```python
# código o comando real del proyecto
```

**Notas:** [Algo a tener en cuenta, edge cases, limitaciones]

---

## Ejemplo real de cómo debería verse:

```
## Agregar soporte para un nuevo formato de archivo

**Contexto:** Cuando se quiere que el proyecto procese un tipo de archivo
que actualmente no está soportado.

**Pasos:**
1. Verificar si markitdown ya lo soporta: `python -c "from markitdown import MarkItDown; help(MarkItDown.convert)"`
2. Si lo soporta, simplemente probarlo: `python convertir.py recursos/prueba.nuevo_formato`
3. Si no lo soporta, buscar si hay un plugin: `pip search markitdown-[formato]`
4. Si no hay plugin, implementar un parser custom en convertir.py
5. Agregar el formato a la tabla de FORMATOS SOPORTADOS en AGENTS.md
6. Documentar la decisión en DECISIONES.md

**Por qué funciona:** markitdown es extensible y soporta muchos formatos out-of-the-box.
Siempre conviene probar primero antes de implementar nada custom.

**Ejemplo:**
```python
from markitdown import MarkItDown
md = MarkItDown()
resultado = md.convert("recursos/prueba.epub")
print(resultado.text_content[:500])  # ver primeras 500 chars
```

---

## Cómo probar que todo funciona en un nuevo computador

**Contexto:** Al llevar el proyecto a un nuevo equipo por primera vez.

**Pasos:**
1. Copiar la carpeta del proyecto completa
2. Abrir terminal en la carpeta del proyecto
3. Instalar dependencias: `pip install [dependencias] --quiet`
4. Probar con un archivo simple: `python [script_principal].py [archivo_de_prueba]`
5. Verificar que el resultado esté en la carpeta de salida

**Por qué funciona:** El proyecto está diseñado para ser portable —
todas las dependencias se instalan con pip y no requieren configuración del sistema.
```
