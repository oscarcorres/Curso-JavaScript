function toggleMostrar(evento) {
  evento.preventDefault();
  var parrafos = evento.currentTarget.parentNode.getElementsByTagName('p');
  if (evento.currentTarget.innerText == "Ocultar contenidos") {
    evento.currentTarget.innerText = "Mostrar contenidos";
    for (var i=0; i<parrafos.length; ++i) {
      // parrafos[i].visibility = "hidden";
      parrafos[i].hidden = true;
    }
  }
  else {
    evento.currentTarget.innerText = "Ocultar contenidos"
    for (var i=0; i<parrafos.length; ++i) {
      // parrafos[i].visibility = "visible";
      parrafos[i].hidden = false;
    }
  }
}

function init() {
  console.log("Inicializando");
  var enlaces = document.getElementsByTagName('a')
  for (var i=0;i<enlaces.length;i++) {
    console.log(enlaces[i]);
    enlaces[i].addEventListener("click",toggleMostrar,false);
  }
}

window.addEventListener("DOMContentLoaded",init);
