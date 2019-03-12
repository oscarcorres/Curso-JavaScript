function toggleMostrar(evento) {
  evento.preventDefault();
  console.log(evento.currentTarget.nextSibling);
  if (evento.currentTarget.value = "Ocultar contenidos") {
      evento.currentTarget.value = "Mostrar contenidos";
      evento.currentTarget.parentNode.firstChild.visibility="hidden"
  }
  else {
    evento.currentTarget.value = "Ocultar contenidos"
    evento.currentTarget.parentNode.firstChild.visibility="visible"
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
