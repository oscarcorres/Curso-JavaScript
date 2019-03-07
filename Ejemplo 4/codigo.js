// Ejercicio 4

// A partir del siguiente array que se proporciona:
//          var valores = [true, 5, false, "hola", "adios", 2]
//
//    Determinar cual de los dos números es mayor
//    Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
//    necesarios para obtener un resultado true y otro resultado false
//    Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
//    elementos numéricos


// array que se proporciona
var valores = [true, 5, false, "hola", "adios", 2];
//    Determinar cual de los dos números es mayor
var maximo = 0;
for (var valor of valores) {
   if (typeof valor == 'number') {
     if (maximo < valor) {maximo = valor}
     }
   }
console.log("El número mayor en el array es: " + maximo)
//    Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
//    necesarios para obtener un resultado true y otro resultado false
for (var valor of valores) {
   switch (valor) {
      case true:
      case false: console.log(valor&&true);
		   break;
      default:
      }
   }
//    Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
//    elementos numéricos
console.log(valores[1] + "+" + valores[5] + "=" + (valores[1] + valores[5]))
console.log(valores[1] + "-" + valores[5] + "=" + (valores[1] - valores[5]))
console.log(valores[1] + "*" + valores[5] + "=" + (valores[1] * valores[5]))
console.log(valores[1] + "/" + valores[5] + "=" + (valores[1] / valores[5]))
console.log(valores[1] + "%" + valores[5] + "=" + (valores[1] % valores[5]))
