// Ejercicio 6
//
// El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
//
// El array de letras es:
//
// var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//
// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:
//
//     Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
//     En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
//     Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
//     Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dniVale = false;

function cambiaDni(dni) {
//  var dni = document.getElementById('dni').value

  if (dni.value == "") {
    dni.style.backgroundcolor = "default";
    document.getElementById('Mensaje').innerText = "";
    console.log("DNI nulo");
    dniVale = false;
  }
  else if ( isNaN(dni.value) ) {
      dni.style.backgroundcolor = "lightred";
      document.getElementById('Mensaje').innerText = "El campo debe ser numérico";
      console.log("DNI no es número");
      dniVale = false;
    }
  else if (dni.value<0 || dni.value>99999999) {
        dni.style.backgroundcolor = "lightred";
        document.getElementById('Mensaje').innerText = "El valor debe estar entre 0 y 99999999";
        dniVale = false;
      }
  else {
        dni.style.backgroundcolor = "lime";
        document.getElementById('Mensaje').innerText = "";
        console.log("DNI va bien");
        dniVale = true;
        if (document.getElementById('letra').value != "") {checkLetra()};
      }
}

function checkLetra() {
  if ( dniVale ) {
    if ( document.getElementById('letra').value.toUpperCase() == letras[(document.getElementById('dni').value % 23)] ) {
      document.getElementById('Mensaje').innerText = ""
    }
    else {
      document.getElementById('Mensaje').innerText = "La letra no corresponde con el dni"
    }
  }
}
