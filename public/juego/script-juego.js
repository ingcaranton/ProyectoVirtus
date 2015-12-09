//recibe info del socket
    var socket = io();

//pantalla completa
var elemento = document.getElementById("juego");

function setFullscreen(){
 
  if(elemento.webkitRequestFullScreen) {
    elemento.webkitRequestFullScreen();
   }
  else {
    elemento.mozRequestFullScreen();
  }            
  var color = $("body").css("background-color");
  $("#juego").css("background-color",color);
}

//grupo de respuestas
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});


//juego

//enviar nombre de jugador
$("#nombreJugador").on("keyup", function(){
  var texto=$(this).val();
  if(texto === ""){
    $("#botonJugador").attr("disabled","true");
  }else{
    $("#botonJugador").removeAttr('disabled');
  }
});

var jugador="";
//espera contrincante
$("#botonJugador").on("click",function(){
  jugador = $("#nombreJugador").val();
  socket.emit('jugador', jugador);
  $("#jugador").css("display","none");
  $("#cargando").css("display","inherit");
  $("#mensaje").text("ESPERANDO CONTRINCANTE PARA " + jugador);
});

//recibir partida - pregunta 1
var idPartida="", numPregunta=1, numPreguntaSiguiente=2;
var src="";
var rta1="", rta2="", rta3="", rta4="";

socket.on('pregunta1', function(pregunta1,jugador1,jugador2,id){
  generarPregunta(pregunta1, jugador1, jugador2, id);
});

socket.on('tiempo',function(tiempo){  
  tiempoRespuesta(tiempo, numPregunta);
});

socket.on('resultado2', function(resultado){
  if(resultado==="correcta"){
    $("#resultado #mensaje span").text("¡RESPUESTA CORRECTA!");
    $("img#reaccion").attr("src","/images/bien.gif");

  }else{
    $("#resultado #mensaje span").text("¡RESPUESTA INCORRECTA!");
    $("img#reaccion").attr("src","/images/mal.gif");
  }
});

socket.on('resultado', function(rtaCorrecta, jugador1, jugador2){
    resultadoPregunta(rtaCorrecta, jugador1, jugador2);
});

//pregunta 2

socket.on('pregunta2', function(pregunta2, jugador1, jugador2, id){
  generarPregunta(pregunta2, jugador1, jugador2, id);
});

//pregunta3
socket.on('pregunta3', function(pregunta3, jugador1, jugador2, id){
  generarPregunta(pregunta3, jugador1, jugador2, id);
});

//funciones

function extraerRespuesta(){
  if($("#opcion1 input").is(':checked')){
    return 1;
  }else if($("#opcion2 input").is(':checked')){
    return 2;
  }else if($("#opcion3 input").is(':checked')){
    return 3;
  }else if($("#opcion4 input").is(':checked')){
    return 4;
  }else{
    return 0;
  }
}

function generarPregunta(pregunta,jugador1,jugador2,id){
  $("#partida input[type=checkbox]").prop('checked', false);
  idPartida=id;
  $("#cargando").css("display","none");
  $("#partida").css("display","inherit");
  if(jugador1.nombre===jugador){
    $("#nombre1").text(jugador1.nombre);
    $("#puntaje1").text(jugador1.puntos);
    $("#nombre2").text(jugador2.nombre);
    $("#puntaje2").text(jugador2.puntos);
  }else{
    $("#nombre1").text(jugador2.nombre);
    $("#puntaje1").text(jugador2.puntos);
    $("#nombre2").text(jugador1.nombre);
    $("#puntaje2").text(jugador1.puntos);
  }
  $("#imagenPregunta").attr("src",pregunta.pregunta.imagen);
  src=pregunta.pregunta.imagen;
  $("#opcion1 span").text(pregunta.respuesta1.enunciado);
  rta1=pregunta.respuesta1.enunciado;
  $("#opcion2 span").text(pregunta.respuesta2.enunciado);
  rta2=pregunta.respuesta2.enunciado;
  $("#opcion3 span").text(pregunta.respuesta3.enunciado);
  rta3=pregunta.respuesta3.enunciado;
  $("#opcion4 span").text(pregunta.respuesta4.enunciado);
  rta4=pregunta.respuesta4.enunciado;
}

function tiempoRespuesta(tiempo, num){
  $("#tiempo span").text(tiempo);
  if(tiempo===0){
    socket.emit('respuesta', extraerRespuesta(), jugador, idPartida, num);
    numPregunta+=1;
  }
}

var p1=0;
var p2=0;
var j1="";
var j2="";

function resultadoPregunta(rtaCorrecta, jugador1, jugador2){
  $("#resultado #boton button").removeAttr("disabled");
  $("#partida").css("display","none");
  $("#resultado").css("display","inherit");
  
  $("#izquierda img").attr("src",src);
  $("#rta1 span").text(rta1);
  $("#rta2 span").text(rta2);
  $("#rta3 span").text(rta3);
  $("#rta4 span").text(rta4);
  if(rtaCorrecta === 1){
    $("#rta1 label span").css("border", "2px solid white");
  }else if(rtaCorrecta === 2){
    $("#rta2 label span").css("border", "2px solid white");
  }else if(rtaCorrecta === 3){
    $("#rta3 label span").css("border", "2px solid white");
  }else if(rtaCorrecta === 4){
    $("#rta4 label span").css("border", "2px solid white");
  }
  $("#derecha #jugador1 span#nombre1").text(jugador1.nombre);
  $("#derecha #jugador1 span#puntaje1").text(jugador1.puntos);
  $("#derecha #jugador2 span#nombre2").text(jugador2.nombre);
  $("#derecha #jugador2 span#puntaje2").text(jugador2.puntos);
  $("#resultado #boton button").attr("numero", numPregunta);
  if(numPregunta>3){
    j1 = $("#derecha #jugador1 span#nombre1").text();
    p1 = $("#derecha #jugador1 span#puntaje1").text();
    j2 = $("#derecha #jugador2 span#nombre2").text();
    p2 = $("#derecha #jugador2 span#puntaje2").text();
  }
}


$("#resultado #boton button").on("click",function(){
  var numero = $(this).attr("numero");
  $("#resultado").css("display","none");
  $("#resultado #respuestas div span").css("border","2px solid black");
  if(numero<=3){
    $("#cargando").css("display","inherit");
    $("#mensaje").text("ESPERANDO PREGUNTA");
    $(this).attr("disabled","true");
    socket.emit('listoPregunta', idPartida, numero);
  }else{
    $("#finalPartida").css("display","inherit");
    var mensaje=""
    var direccionImagen=""
    var evaluacion=evaluacionGana();
    if(evaluacion===0){
      mensaje="¡FELICIDADES GANASTE!";
      direccionImagen="/images/celebrarA.gif";
    }else if(evaluacion===1){
      mensaje="¡LO SENTIMOS, PERDISTE!";
      direccionImagen="/images/llorar.gif";
    }else{
      mensaje="¡HAZ EMPATADO!";
      direccionImagen="/images/empate.gif";
    }
    $("#mensajeFinalPartida span").text(mensaje);
    $("#finalPartida img#imagenFinal").attr("src", direccionImagen);
    $("#puntajesFinales #jugador1 span#nombre1").text(j1);
    $("#puntajesFinales #jugador1 span#puntaje1").text(p1);
    $("#puntajesFinales #jugador2 span#nombre2").text(j2);
    $("#puntajesFinales #jugador2 span#puntaje2").text(p2);
  }
});

$("#seguir").on("click",function(){
  socket.emit('jugador', jugador);
  $("#finalPartida").css("display","none");
  $("#cargando").css("display","inherit");
  $("#mensaje").text("ESPERANDO CONTRINCANTE PARA " + jugador);
});

function evaluacionGana(){
  if(j1===jugador){
    return comparacion(p1, p2);
  }else{
    return comparacion(p2, p1);
  }
}

function comparacion(punt1, punt2){
  if(punt1>punt2){
    return 0;
  }else if(punt1<punt2){
    return 1;
  }else{
    return 2;
  }
}