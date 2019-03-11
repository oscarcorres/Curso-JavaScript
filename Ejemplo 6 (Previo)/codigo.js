// Ejercicio 6
// Ejercicios previos ejercicio 6
//
// /Crea un fichero html que tenga asociado un fichero externo Javascript
// Declara una función que devuelva el valor 2, la función se llamará devuelve2
function devuelve2() {
  return 2;
}
// Declara una función que sea capaz de sumar dos números y devolver el resultado, la función se llama sumaDe2
function sumaDe2(n1, n2) {
  return n1 + n2;
}
// Declara una función que sea capaz de restar dos números y devolver el resultado la función se llama restaDe2
function restaDe2(n1, n2) {
  return n1 - n2;
}
// Declara una función que sea capaz de multiplicar dos números y devolver el resultado la función se llama multiplica2
function multiplica2(n1, n2) {
  return n1 * n2;
}
// Crea una función que devuelva un array con 7 posiciones vacías, la función se llamará creaArray
function creaArray() {
  return new Array(7);
}
// Crea una función que sea capaz de inicializar a 0 (colocar el valor 0 en cada posición ) el array que acabas de
// inicializar con el nombre inicializarArray
function inicializarArray(arr) {
  return arr.fill(0);
}
// Crea una función llamada sacaBola que elija un número aleatorio entre el número 1 y 50 y lo devuelva como resultado
function sacaBola() {
  return Math.floor(Math.random() * 49 + 1 );
}
// Crea una función llamada sacaOtraBola que elija un número aleatorio entre el número 1 y 11 y lo devuelva como resultado
function sacaOtraBola() {
  return Math.floor(Math.random() * 10 + 1 );
}
// Llama a la función sacaOtraBola dos veces
// Mete los resultados de las llamadas a sacaOtraBola en un array llamado numerosEstrella

// Mostrar reultados al clickar
function mostrarResultados() {
  // Ejecuta la función devuelve2 y lo que devuelva imprimelo por pantalla
  var txtResultado = "Ejecutamos la función devuelve2: " + devuelve2();
  // Llama a a función sumaDe2 con los número 1 y 3 e imprime el resultado por pantalla
  txtResultado += "\r\nLlama a la función sumaDe2 con los número 1 y 3 : " + sumaDe2(1,3);
  // Llama a a función restaDe2 con los número 1 y 3 e imprime el resultado por pantalla
  txtResultado += "\r\nLlama a la función restaDe2 con los número 1 y 3 : " + restaDe2(1,3);
  // Llama a a función multiplica2 con los número 1 y 3 e imprime el resultado por pantalla
  txtResultado += "\r\nLlama a la función multiplica2 con los número 1 y 3 : " + multiplica2(1,3);
  // Llama a la función creaArray almacena el resultado en una variable llama miArray
  miArray = creaArray();
  // Llama a la función inicializarArray con el array que tenías creado antes
  inicializarArray(miArray);
  // Imprime por pantalla el array que has inicializado
  txtResultado += "\r\nImprime por pantalla el array que has inicializado : " + miArray;
  // Llama a la función sacaBola 5 veces
  // Mete los resultados de las llamadas a sacaBola en un array llamado numerosPrincipales
  var numerosPrincipales = [];
  for ( i = 0; i < 5; ++i ) {
    numerosPrincipales.push(sacaBola());
  };
  txtResultado += "\r\n\r\nNumeros Principales : " + numerosPrincipales;
  // Llama a la función sacaOtraBola dos veces
  // Mete los resultados de las llamadas a sacaOtraBola en un array llamado numerosEstrella
  var numerosEstrella = [sacaOtraBola(),sacaOtraBola()];
  txtResultado += "\r\nNumeros Estrella : " + numerosEstrella;

  document.getElementById("resultado").innerText = txtResultado
}
