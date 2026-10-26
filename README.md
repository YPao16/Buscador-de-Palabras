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

## Estructura del proyecto

```text
.
├── src/
│   ├── index.html       # Estructura y contenido de la página
│   ├── index.js         # Búsqueda, conteo, resaltado y alertas
│   └── styles.css       # Estilos adaptables
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
