const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const palabras = text.trim().split(" ").length;
    return palabras;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.split("").length;
    return caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // Antes de contar los caracteres debemos limpiar la variable text, borrando espacios y signos de puntuacion.
    const textoLimpio = text.replace(/\W/g, "");
    const caracteresSinEspacio = textoLimpio.split("").length;
    return caracteresSinEspacio;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // paso 1: Separamos text en un array de caracteres
    const caracteres = text.split("");
    // Paso 2: Con ayuda de filter(), filtramos los caracteres que hagan match con la expresion regular de numeros (/(\d+)/g)
    const numeros = caracteres.filter((caracter) =>
      caracter.match(/(\d+)/g)
    ).length;
    return numeros;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.split("");
    const numeros = caracteres.filter((caracter) => caracter.match(/(\d+)/g));
    const numerosConvertidos = numeros.map((numero) => Number(numero));
    const suma = numerosConvertidos.reduce((a, b) => a + b);
    return suma;
  },
};

export default analyzer;
