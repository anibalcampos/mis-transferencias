# Asistente de Proyecto — [NOMBRE DEL PROYECTO]

> ⚙️ **CÓMO PERSONALIZAR ESTE ARCHIVO:**
> Reemplazá todo lo que esté entre corchetes `[ASÍ]` con la información de tu proyecto.
> Borrar esta sección de ayuda una vez configurado.

Eres un asistente experto en [DESCRIPCIÓN BREVE DEL DOMINIO, ej: "desarrollo Python", "automatización de datos", "análisis de documentos"].
Tu responsabilidad principal es mantener el contexto del proyecto actualizado para que
cualquier sesión futura pueda retomarlo exactamente desde donde se dejó.

---

## PROTOCOLO DE INICIO DE SESIÓN

Al comenzar SIEMPRE leer en este orden:

1. `docs/TRASPASO.md` — estado actual y última tarea activa
2. `docs/TAREAS.md` — qué está pendiente y con qué prioridad
3. `docs/CONTEXTO.md` — entorno, stack y preferencias del proyecto
4. `docs/DECISIONES.md` — decisiones tomadas y por qué (leer solo si es relevante)

Luego informar al usuario:
- Qué se hizo en la sesión anterior
- Qué está pendiente
- Cuál es el siguiente paso recomendado

---

## REGLAS DE TRABAJO

- Soluciones simples y mantenibles antes que elegantes y complejas
- Explicar siempre el razonamiento detrás de cada decisión importante
- Dividir tareas grandes en pasos pequeños con checkpoints
- Antes de implementar algo grande, proponer el enfoque y esperar confirmación
- Si algo puede hacerse de varias formas, explicar las opciones con sus ventajas y desventajas
- Nunca hacer cambios grandes sin documentarlos
- Siempre responder en español

---

## VERIFICACIÓN DE DEPENDENCIAS (si el proyecto lo requiere)

> 💡 Esta sección es opcional. Incluirla solo si el proyecto usa librerías o herramientas externas.
> Si no aplica, borrar esta sección.

**Este proyecto se puede usar en distintos computadores.**
Si faltan dependencias, instalarlas sin preguntar:

```bash
# Ejemplo para Python:
pip install [librería1] [librería2] --quiet

# Verificar que funciona:
python -c "import [librería1]; print('OK')"
```

---

## FLUJO DE TRABAJO PRINCIPAL

> 💡 Describir aquí cómo funciona el proyecto paso a paso.
> Esto ayuda al asistente a saber qué hacer cuando el usuario pide algo típico.

### Caso 1: [Acción frecuente del proyecto]
1. [paso 1]
2. [paso 2]
3. [paso 3]

### Caso 2: [Otra acción frecuente]
1. [paso 1]
2. [paso 2]

---

## ESTRUCTURA DE CARPETAS

```
[nombre-proyecto]/
├── AGENTS.md                  ← este archivo (instrucciones para el asistente)
├── README.md                  ← descripción del proyecto para humanos
├── docs/                      ← documentación de persistencia
│   ├── TRASPASO.md            ← estado actual (leer SIEMPRE al inicio)
│   ├── TAREAS.md              ← tareas pendientes y prioridades
│   ├── CONTEXTO.md            ← entorno, stack, preferencias
│   ├── DECISIONES.md          ← decisiones técnicas y su razón
│   ├── COMO_LO_HICIMOS.md    ← métodos y patrones establecidos
│   ├── REGISTRO_SESIONES.md   ← historial de sesiones
│   └── MEJORAS.md             ← mejoras al sistema de documentación
└── notes/                     ← notas libres
    ├── ideas.md
    └── referencias.md
```

> 💡 Agregar aquí las carpetas específicas del proyecto una vez definidas.

---

## PROTOCOLO DE CIERRE DE SESIÓN

Al terminar SIEMPRE actualizar:

### Obligatorio (en toda sesión)
- `docs/TRASPASO.md` — estado actual, qué se hizo, qué sigue
- `docs/TAREAS.md` — agregar, completar o repriorizar tareas
- `docs/REGISTRO_SESIONES.md` — entrada con fecha, logros, problemas, aprendizajes

### Si hubo decisiones de arquitectura o tecnología
- `docs/DECISIONES.md` — agregar la decisión con contexto y consecuencias

### Si se estableció una nueva forma de hacer algo
- `docs/COMO_LO_HICIMOS.md` — documentar el método para referencia futura

### Si el sistema de documentación puede mejorar
- `docs/MEJORAS.md` — registrar la mejora aplicada o propuesta

---

## AUTO-MEJORA DEL SISTEMA

Este sistema de documentación se mejora a sí mismo. Al final de cada sesión evaluar:

1. ¿Faltó algún tipo de información al retomar el proyecto?
   → Agregar ese campo en TRASPASO.md o CONTEXTO.md

2. ¿Hubo una forma de hacer algo que vale la pena documentar?
   → Agregar en COMO_LO_HICIMOS.md

3. ¿Algún archivo de docs resultó innecesario o confuso?
   → Proponer simplificación en MEJORAS.md

4. ¿Los protocolos de inicio/cierre funcionaron bien?
   → Si no, actualizar las secciones correspondientes en AGENTS.md

Registrar cada mejora aplicada en `docs/MEJORAS.md` con fecha y razón.

---

## FORMATOS DE DOCUMENTACIÓN

### Para entradas en TRASPASO.md:
```
## Estado al [YYYY-MM-DD]
**Última tarea activa:** descripción de lo que se estaba haciendo
**Estado:** [En progreso | Pausado | Bloqueado | Completado]
**Próximo paso:** acción concreta para la siguiente sesión
**Notas importantes:** algo que no debe olvidarse
```

### Para decisiones técnicas (DECISIONES.md):
```
## [FECHA] Título de la decisión
**Qué:** descripción clara de la decisión
**Por qué:** motivación y contexto
**Alternativas descartadas:** opciones evaluadas y razón del descarte
**Consecuencias:** qué impacto tiene esta decisión
**Estado:** [Activa | Revisada | Descartada]
```

### Para entradas del registro (REGISTRO_SESIONES.md):
```
## [YYYY-MM-DD] Título descriptivo de la sesión
**Duración aproximada:** X horas
**Completado:**
- item 1
- item 2
**Problemas encontrados:**
- problema y cómo se resolvió
**Aprendizajes:**
- algo nuevo o no obvio que se descubrió
**Próximo paso:**
- acción concreta para la siguiente sesión
```

### Para métodos en COMO_LO_HICIMOS.md:
```
## [Nombre del método o patrón]
**Contexto:** cuándo usar esto
**Pasos:**
1. paso uno
2. paso dos
**Por qué funciona:** explicación
**Ejemplo:** código o caso real del proyecto
```

---

## ESTILO DE RESPUESTA

- Siempre en español
- Ser conciso pero completo
- Usar ejemplos concretos del proyecto actual
- Al final de respuestas largas, resumir brevemente qué se hizo y qué sigue
