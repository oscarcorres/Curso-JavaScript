function posicion(evento) {
  var pantalla = tamanoVentanaNavegador();
  var respuesta = "";
  if (evento.clientX < pantalla[0]/2) {
    respuesta = "izquierda"
  }
  else {
    respuesta = "derecha"
  }
  if (evento.clientY < pantalla[1]/2) {
    respuesta = "Arriba " + respuesta;
  }
  else {
    respuesta = "Abajo " + respuesta;
  }
  mostrarPosicion.innerText = respuesta;
  return respuesta;
}

function init() {
  mostrarPosicion = document.getElementsByClassName('posicion')[0]
  window.addEventListener("click",posicion);
}

window.addEventListener("DOMContentLoaded",init);
