# Image Gallery — Angular

Ejercicio **S4.03** de la especialización frontend: una galería de imágenes construida con Angular usando **standalone components**, **Signals** y el nuevo control de flujo de plantillas (`@for`).

## Descripción

La aplicación muestra una galería de imágenes (datos estáticos de [picsum.photos](https://picsum.photos/)) donde la primera imagen del listado aparece destacada visualmente respecto al resto.

## Arquitectura de componentes

- **`App`** (raíz): integra `Gallery` mediante su selector `<app-gallery>`.
- **`Gallery`** (contenedor): mantiene el array de imágenes (`Image[]`) y lo recorre con un bloque `@for`, pasando cada imagen al componente hijo mediante property binding y marcando la primera con `isFeatured = true`.
- **`ImageItem`** (presentacional): recibe cada imagen a través de un input signal obligatorio (`input.required<Image>()`) y un input opcional `isFeatured` (`input(false)`). Usa `ChangeDetectionStrategy.OnPush` para optimizar la detección de cambios, y aplica un class binding condicional (`[class.featured]`) que resalta visualmente la imagen destacada (tamaño aumentado y esquinas redondeadas).

## Modelo de datos

La interfaz `Image` (`src/app/interfaces/image-interface.ts`) tipa cada imagen con tres propiedades, todas de tipo `string`:

- `id`
- `src`
- `alt`

## Cómo ejecutar el proyecto

```bash
npm install
npm start
```

Abre el navegador en `http://localhost:4200`. La aplicación se recarga automáticamente al guardar cambios en los ficheros fuente.

## Flujo de Git

El desarrollo se realizó en la rama `feature/basic-gallery` y posteriormente se integró en `main` mediante `git merge`.

## Tecnologías

- Angular (standalone components, Signals, control de flujo nativo `@for`)
- TypeScript en modo estricto
