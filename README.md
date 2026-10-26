# BuscaPalabras

Aplicación web para buscar palabras o caracteres en un texto y resaltar las coincidencias sin recargar la página.

## Requisitos

- Node.js 18.12 o posterior
- npm

## Ejecutar en desarrollo

```bash
npm install
npm start
```

Webpack Dev Server abre la aplicación en `http://localhost:8080`.

## Generar la versión de producción

```bash
npm run build
```

Los archivos listos para publicar se generan en `dist/`.

## Publicar en GitHub Pages

El workflow `.github/workflows/pages.yml` compila y publica automáticamente `dist/` al subir cambios a la rama `main`.
En GitHub, abre **Settings > Pages** y selecciona **GitHub Actions** como fuente de publicación. No publiques directamente la raíz del repositorio: allí está el código fuente, y los estilos se incluyen en la compilación de Webpack.

## Estructura del proyecto

```text
.
├── .github/workflows/
│   └── pages.yml        # Compila y publica el sitio en GitHub Pages
├── index.html           # Plantilla de la página
├── src/
│   ├── index.js         # Búsqueda, conteo y resaltado
│   └── styles.css       # Estilos de la interfaz
├── babel.config.json    # Compatibilidad de JavaScript con Babel
├── webpack.config.js    # Entrada, reglas, plantilla y servidor local
├── package.json         # Dependencias y comandos
└── README.md
```

## ¿Cómo funciona la búsqueda?

- Se eliminan los espacios al inicio y al final de la búsqueda, y se ignoran las diferencias entre mayúsculas y minúsculas.
- Una palabra o frase se cuenta como coincidencia completa: buscar `casa` no incluye `casamiento`.
- Un carácter individual se busca en cualquier posición, incluso dentro de una palabra.
- Las coincidencias se crean como elementos de texto y `<mark>`, no como HTML interpretado desde el texto ingresado.
- El botón **Limpiar todo** restablece el formulario y los resultados sin recargar la página.
