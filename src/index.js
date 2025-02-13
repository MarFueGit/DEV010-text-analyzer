import analyzer from "./analyzer.js";

// Declaramos uns variable boton que hace referencia al boton para limpiar la textarea
const resetButton = document.getElementById("reset-button");

// Declaramos una variable haciendo referencia a la caja textarea,
const textarea = document.getElementsByName("user-input")[0];

// Dclaramos una variable que hace referencia al li de cantidad de caracteres, accdediendo a el
// por medio de su attibuto data-tesid=chacarcter-count
const caracteres = document.querySelector('li[data-testid="character-count"]');
const caracteresSinEspacio = document.querySelector(
  'li[data-testid="character-no-spaces-count"]'
);
const palabras = document.querySelector('li[data-testid="word-count"]');
const numeros = document.querySelector('li[data-testid="number-count"]');
const sumaTotalDeNumeros = document.querySelector(
  'li[data-testid="number-sum"]'
);
const promedioLongitud = document.querySelector(
  'li[data-testid="word-length-average"]'
);
//Listeners
resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = "";
  palabras.textContent = "Palabras: 0";
  caracteres.textContent = "Caracteres: 0";
  caracteresSinEspacio.textContent = "Caracteres sin espacio: 0";
  numeros.textContent = "Numeros: 0";
  sumaTotalDeNumeros.textContent = "Suma total de numeros: 0";
  promedioLongitud.textContent = "Promedio longitud: 0";
});
// Listener de textarea, usamos Keyup cuando el usuario escriba y levanta el dedo de la tecla
textarea.addEventListener("keyup", () => {
  // Seteamos la cantidad de palabras
  const cantidadPalabras = analyzer.getWordCount(textarea.value);
  palabras.textContent = "Palabras: " + cantidadPalabras;

  // Seteamos la cantidad de caracteres
  const cantidadCaracteres = analyzer.getCharacterCount(textarea.value);
  caracteres.textContent = "Caracteres: " + cantidadCaracteres;

  // Seteamos la cantidad de caracteres sin espacio, ni signo de puntuacion
  const cantidadCaracteresSinEspacio =
    analyzer.getCharacterCountExcludingSpaces(textarea.value);
  caracteresSinEspacio.textContent =
    "Caracteres sin espacio: " + cantidadCaracteresSinEspacio;

  // Seteamos la longitud media de palabras encontradas en el texto
  const mediaLongitud = analyzer.getAverageWordLength(textarea.value);
  promedioLongitud.textContent = "Promedio longitud: " + mediaLongitud;

  // Seteamos la cantidad de numeros encontrados en el texto.
  const cantidadNumeros = analyzer.getNumberCount(textarea.value);
  numeros.textContent = "Numeros: " + cantidadNumeros;

  // Seteamos la suma de los numeros encontrados en el string.
  const suma = analyzer.getNumberSum(textarea.value);
  sumaTotalDeNumeros.textContent = "Suma total de numeros: " + suma;
});
