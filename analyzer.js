const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().split(" ").length;
    return palabras;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.trim().split("").length;
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
    const palabras = text.trim().split(" ");
    let sumaLongitudes = 0;
    for (let i = 0; i < palabras.length; i++) {
      sumaLongitudes = sumaLongitudes + palabras[i].length;
    }
    const media = sumaLongitudes / palabras.length;
    return Number(media.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // paso 1: Separamos text en un array de caracteres
    const palabras = text.trim().split(" ");
    // Paso 2: Declaramos una variable que usaremos como contador, mientras vamos iterando con un for, validamos
    //  si es verdadera incrementamos en 1 nuestro contador.
    let cantidadNumeros = 0;
    for (const palabra of palabras) {
      if (!isNaN(palabra)) {
        cantidadNumeros++;
      }
    }
    return cantidadNumeros;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().split(" ");
    // Variable para guardar la suma total de los numeros
    let sumaNumeros = 0;
    for (const palabra of palabras) {
      if (!isNaN(Number(palabra))) {
        sumaNumeros = sumaNumeros + Number(palabra);
      }
    }
    return sumaNumeros;
  },
};

export default analyzer;
