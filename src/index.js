import "./styles.css";

// Guardamos los campos de la página para usarlos cuando alguien busca o limpia.
const text = document.querySelector("#text");
const word = document.querySelector("#word");
const result = document.querySelector("#result");
const count = document.querySelector("#count");
const message = document.querySelector("#message");

// Buscamos sin distinguir mayúsculas y minúsculas, y validamos que ambos campos tengan contenido.
document.querySelector("#search").addEventListener("click", () => {
  if (!text.value.trim() || !word.value.trim()) {
    message.textContent = "Escribe el texto y la palabra que quieres buscar.";
    return;
  }

  // Escapamos los símbolos especiales para que también se puedan buscar como texto normal.
  const term = word.value.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const singleCharacter = Array.from(word.value.trim()).length === 1;
  // Las palabras completas no coinciden dentro de otras; un carácter sí se busca en cualquier lugar.
  const pattern = new RegExp(
    singleCharacter ? term : `(?<![\\p{L}\\p{N}_])${term}(?![\\p{L}\\p{N}_])`,
    "giu"
  );
  let matches = 0;
  let position = 0;
  result.replaceChildren();

  // Resaltamos cada coincidencia y conservamos intacto el texto que queda entre ellas.
  for (const match of text.value.matchAll(pattern)) {
    result.append(document.createTextNode(text.value.slice(position, match.index)));
    const highlight = document.createElement("mark");
    highlight.textContent = match[0];
    result.append(highlight);
    position = match.index + match[0].length;
    matches++;
  }

  result.append(document.createTextNode(text.value.slice(position)));
  count.textContent = matches;
  message.textContent = matches ? "Búsqueda terminada." : "No se encontraron coincidencias.";
});

// Dejamos la página lista para empezar otra búsqueda, sin recargarla.
document.querySelector("#clear").addEventListener("click", () => {
  text.value = "";
  word.value = "";
  result.replaceChildren();
  count.textContent = "0";
  message.textContent = "";
});
