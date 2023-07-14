import analyzer from "./analyzer.js";

// Declaramos uns variable boton que hace referencia al boton para limpiar la textarea
const boton = document.querySelector("resetButton");
// Declaramos una variable haciendo referencia a la caja textarea,
const textarea = document.getElementsByName("text")[0];

// Dclaramos una variable que hace referencia al li de cantidad de caracteres, accdediendo a el
// por medio de su attibuto data-tesid=chacarcter-count
const caracteres = document.querySelector('[data-testid="character-count"]');
const caracteresSinEspacio = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const palabras = document.querySelector('[data-testid="word-count"]');
const numeros = document.querySelector('[data-testid="number-count"]');
const sumaTotalDeNumeros = document.querySelector('[data-testid="number-sum"]');
const promedioLongitud = document.querySelector(
  '[data-testid="word-length-average"]'
);
//Listeners
resetButton.addEventListener("click", (e) => {
  console.log(textarea.value);
  e.preventDefault();
  textarea.value = "";
});
// Listener de textarea, usamos Keyup cuando el usuario escriba y levanta el dedo
textarea.addEventListener("keyup", (e) => {
  console.log(textarea.value);

 
});
