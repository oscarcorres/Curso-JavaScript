// /Ejercicio 5 - Repaso
//
// 1. Crea un nuevo html con código JS dentro
//
// 2. Crea un array de 10 posiciones
//
// 3. Recorre ese array con todos los tipos de bucle
//
// 4. Haz lo mismo con un array de 20 posiciones
//
// 5. haz un algoritmo que sea capaz de saber por una edad dada, si puedes conducir o no, votar o beber alcohol
//
// 6. dependiendo del número de errores que es una variable numérica, decir que
//    si es uno, diga que no lo ha hecho mal. si es dos, que puede pasar, si es
//    "Black" que diga el número de consejeros de bankia,
//     y si no es ninguno de los anteriores suspéndelo!
//
// 7. crea un bucle que de 10 vueltas y se salga a la tercera
//
// 8, crea un bucle que de 10 vueltas pero que tenga alzehimer y se olvide de la mitad de ellas

// 2. Crea un array de 10 posiciones
var conjunto = [1,2,3,4,5,6,7,8,9,10];

// 3. Recorre ese array con todos los tipos de bucle
var i = 0
while (i < 10) {
  console.log("Elemento " + i + " de conjunto es: " + conjunto[i]);
  ++i;
}
console.log("ahora al verres, digo revés");
for (i = 9; i >= 0; --i) {
  console.log("Elemento " + i + " de conjunto es: " + conjunto[i]);
}
console.log("ahora con el for in...");
for (var i in conjunto) {
  console.log("Elemento " + i + " de conjunto es: " + conjunto[i]);
}
console.log("ahora con el for of...");
i = 0;
for (var v of conjunto) {
  console.log("Elemento " + i + " de conjunto es: " + v);
  ++i;
}

// 5. haz un algoritmo que sea capaz de saber por una edad dada, si puedes conducir o no, votar o beber alcohol
var edad = 51
if (edad>=18) {
  console.log("Ya puedes conducir, votar y beber... ¡Pero no lo hagas todo a la vez!!!!!")
}

// 6. dependiendo del número de errores que es una variable numérica, decir que
//    si es uno, diga que no lo ha hecho mal. si es dos, que puede pasar, si es
//    "Black" que diga el número de consejeros de bankia,
//     y si no es ninguno de los anteriores suspéndelo!

numero_errores = "Black"
numero_consejeros = 56
switch (numero_errores) {
  case 1:
    console.log("No lo ha hecho mal...");
    break;
  case 2:
    console.log("Peude pasar...");
    break;
  case 'Black':
    console.log("Número de consejeros de bankia:" + numero_consejeros);
    break;
  default:
    console.log("Suspendido");
    break;
}

// 7. crea un bucle que de 10 vueltas y se salga a la tercera
console.log("crea un bucle que de 10 vueltas y se salga a la tercera")
for (i = 9; i > 0; --i) {
  console.log("Elemento " + i + " de conjunto es: " + conjunto[i]);
  if (i==7) {
    break;
  }
}
// 8, crea un bucle que de 10 vueltas pero que tenga alzehimer y se olvide de la mitad de ellas
console.log("10 vueltas pero que tenga alzehimer y se olvide de la mitad de ellas")
for (i = 0; i > 10; i += 2) {
  console.log("Elemento " + i + " de conjunto es: " + conjunto[i]);
}
