# Sistema Tipográfico - Guía de Uso

## Introducción

Este documento describe el sistema tipográfico completo implementado en el proyecto Manos Decapa. Proporciona componentes reutilizables y clases Tailwind para garantizar consistencia tipográfica en toda la aplicación.

## Componentes de Tipografía

### Display (Títulos Héroe)

Para títulos principales y secciones hero, usa los componentes `DisplayLarge` o `DisplaySmall`.

```jsx
import { DisplayLarge, DisplaySmall } from '@/components/typography';

// Display Large (H1 del héroe)
<DisplayLarge>
  Devolvemos la Vida a la Madera
</DisplayLarge>

// Display Small (títulos secundarios)
<DisplaySmall>
  Nuestros Servicios
</DisplaySmall>
```

**Tamaños responsive:**
- `DisplayLarge`: 5xl (md) → 6xl (lg) → 7xl (xl)
- `DisplaySmall`: 4xl (md) → 5xl (lg) → 6xl (xl)

---

### Headings (H1 - H5)

Usa los componentes H1-H5 para jerarquía de contenido dentro de secciones.

```jsx
import { H1, H2, H3, H4, H5 } from '@/components/typography';

<H1>Título Principal</H1>
<H2>Subtítulo de Sección</H2>
<H3>Subtítulo Menor</H3>
<H4>Título de Tarjeta</H4>
<H5>Etiqueta de Grupo</H5>
```

**Jerarquía visual:**
- `H1`: 3xl (md) → 4xl (lg) - Para títulos principales
- `H2`: 2xl (md) → 3xl (lg) - Para títulos de secciones
- `H3`: xl (md) → 2xl (lg) - Para subtítulos
- `H4`: lg (md) → xl (lg) - Para títulos de tarjetas
- `H5`: base (md) → lg (lg) - Para etiquetas

---

### Body Text (Cuerpo de Texto)

Para párrafos y contenido principal, usa `BodyLarge`, `BodyRegular` o `BodySmall`.

```jsx
import { BodyLarge, BodyRegular, BodySmall } from '@/components/typography';

// Texto destacado
<BodyLarge>
  Este es el texto más importante del párrafo
</BodyLarge>

// Texto regular
<BodyRegular>
  Este es el párrafo estándar con información general
</BodyRegular>

// Texto pequeño
<BodySmall>
  Este es un texto secundario, como notas o descripciones adicionales
</BodySmall>
```

**Tamaños:**
- `BodyLarge`: lg → xl (16px-20px)
- `BodyRegular`: base → lg (14px-18px)
- `BodySmall`: sm → base (12px-14px)

---

### Labels y Captions

Para etiquetas de formularios y texto muy pequeño.

```jsx
import { Label, Caption } from '@/components/typography';

// Etiqueta de formulario
<Label>Nombre Completo</Label>

// Texto pequeño
<Caption>Máximo 50 caracteres</Caption>
```

---

### Texto Especial

#### Accent (Destacado)
Resalta texto importante con el color de acento.

```jsx
import { Accent, AccentHighlight } from '@/components/typography';

<p>Somos los <Accent>mejores en decapado</Accent> de Valencia</p>

// Con background
<AccentHighlight>Oferta especial</AccentHighlight>
```

#### Quote (Cita)
Para testimonios y citas.

```jsx
import { Quote } from '@/components/typography';

<Quote>
  "El resultado fue increíble, la madera quedó perfecta"
  <br />
  - María González
</Quote>
```

#### Subtitle (Subtítulo Hero)
Para subtítulos en secciones hero.

```jsx
import { Subtitle } from '@/components/typography';

<Subtitle>
  Decapado profesional que recupera la belleza natural de tus muebles antiguos
</Subtitle>
```

#### Muted (Texto Atenuado)
Para texto secundario.

```jsx
import { Muted } from '@/components/typography';

<p>Creado por <Muted>Manos Decapa</Muted></p>
```

---

## Clases Tailwind de Utilidad

Además de los componentes, tienes disponibles clases Tailwind de utilidad:

### Font Size Classes

```html
<!-- Display -->
<h1 class="text-display-lg">Display Large</h1>
<h2 class="text-display-md">Display Medium</h2>

<!-- Headings -->
<h3 class="text-h1">H1 Size</h3>
<h4 class="text-h2">H2 Size</h4>

<!-- Body -->
<p class="text-body-lg">Body Large</p>
<p class="text-body-md">Body Medium</p>
<p class="text-body-sm">Body Small</p>

<!-- Utility -->
<label class="text-label">Label</label>
<p class="text-caption">Caption</p>
```

### Spacing Utilities

```html
<!-- Vertical spacing -->
<div class="space-y-tight">Tight spacing</div>
<div class="space-y-normal">Normal spacing</div>
<div class="space-y-loose">Loose spacing</div>
<div class="space-y-spacious">Spacious spacing</div>

<!-- Horizontal spacing -->
<div class="space-x-normal">Horizontal Normal</div>
<div class="space-x-loose">Horizontal Loose</div>
```

### Heading Margins

```html
<h2 class="heading-margin">Título con márgenes</h2>
```

---

## Escala de Tamaños

### Responsive Breakpoints

Todos los tamaños de tipografía son responsive:

- **Mobile**: Tamaño base (sin prefijo md:)
- **Tablet (md)**: Tamaño medio con prefijo `md:`
- **Desktop (lg)**: Tamaño grande con prefijo `lg:`

Ejemplo en un componente:

```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

---

## Colores Tipográficos

### Disponibles en componentes:

- `text-foreground`: Texto principal (máximo contraste)
- `text-foreground/90`: Texto principal más claro
- `text-foreground/80`: Texto destacado
- `text-foreground/70`: Texto secundario
- `text-muted-foreground`: Texto muy atenuado
- `text-accent`: Texto destacado en color acento
- `text-primary`: Texto en color primario

### Ejemplo:

```jsx
<BodyRegular className="text-foreground/80">
  Texto con opacidad del 80%
</BodyRegular>
```

---

## Ejemplos Completos

### Sección Hero

```jsx
import { DisplayLarge, Subtitle, BodyRegular } from '@/components/typography';

export function HeroSection() {
  return (
    <div>
      <DisplayLarge>
        Devolvemos la Vida a la Madera
      </DisplayLarge>
      <Subtitle className="mt-4">
        Decapado profesional que recupera la belleza natural
      </Subtitle>
      <BodyRegular className="mt-6 text-foreground/70">
        Servicio para particulares y profesionales
      </BodyRegular>
    </div>
  );
}
```

### Card de Servicio

```jsx
import { H3, BodySmall } from '@/components/typography';

export function ServiceCard() {
  return (
    <div className="p-6">
      <H3>Decapado de Muebles</H3>
      <BodySmall className="mt-2 text-muted-foreground">
        Eliminamos pintura, barniz y lacas respetando la madera original
      </BodySmall>
    </div>
  );
}
```

### Testimonial

```jsx
import { Quote, BodySmall } from '@/components/typography';

export function Testimonial() {
  return (
    <div>
      <Quote>
        El resultado fue increíble, la madera quedó perfecta sin ningún daño
      </Quote>
      <BodySmall className="text-muted-foreground">
        - María González
      </BodySmall>
    </div>
  );
}
```

---

## Best Practices

1. **Usa componentes siempre que sea posible** - Mantienen consistencia automáticamente
2. **Sigue la jerarquía visual** - DisplayLarge → H1 → H2 → H3, etc.
3. **Limita el nivel de headings** - No uses más de 3-4 niveles en una página
4. **Cuerpo: máximo 65 caracteres** - Para mejor legibilidad (ya configurado)
5. **Leading (line-height) adecuado** - Los componentes ya tienen los valores óptimos
6. **Contraste suficiente** - Usa `text-foreground/XX` para contraste WCAG AA mínimo
7. **Responsive primero** - Define el tamaño mobile primero, luego md: y lg:

---

## Referencia Rápida

| Elemento | Componente | Clases Tailwind | Uso |
|----------|-----------|-----------------|-----|
| Título Hero Grande | `DisplayLarge` | `text-display-lg` | Secciones hero, títulos principales |
| Título Sección | `H2` | `text-h2` | Títulos de secciones |
| Subtítulo | `H3` | `text-h3` | Subtítulos menores |
| Párrafo Principal | `BodyRegular` | `text-body-md` | Contenido principal |
| Párrafo Pequeño | `BodySmall` | `text-body-sm` | Descripciones, notas |
| Etiqueta | `Label` | `text-label` | Labels de formulario |
| Texto Muy Pequeño | `Caption` | `text-caption` | Información adicional |
| Destacado | `Accent` | `text-accent` | Palabras clave |
| Cita | `Quote` | - | Testimonios |

---

## Cambios Recientes

- ✓ Sistema tipográfico completo implementado
- ✓ Componentes de tipografía reutilizables
- ✓ Escala de tamaños responsive
- ✓ Clases Tailwind de utilidad
- ✓ Espaciado consistente
- ✓ Guía de estilos

---

**Última actualización**: 2024
**Sistema diseñado para**: Máxima consistencia y mantenibilidad
