// Creamos una variable para contener el mensaje a mostrar
var mensajote = "Hola Mundo!";
// añadimos varias lineas al mensaje utilizando el salto de linea
// de forma que podamos incluirlas en una única ventana de mensaje
mensajote = mensajote.concat("\n","Que facil es incluir 'comillas simples'");
mensajote = mensajote.concat("\n",'y "comillas dobles"');
//lanzamos el mensaje de alerta con el mesaje solicitado
window.alert(mensajote);
