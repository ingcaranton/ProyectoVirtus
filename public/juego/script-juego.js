//recibe info del socket
    var socket = io();
    /*
    socket.on('NombreDelRecivido', function(loRecivido){
    	//Callback
    });
    socket.emit('NombreDelEmit', "ParametroAEnviar");
    */

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
$("#botonJugador").on("click",function(){
  jugador = $("#nombreJugador").val();
  socket.emit('jugador', jugador);
  $("#jugador").css("display","none");
  $("#cargando").css("display","inherit");
  $("#mensaje").text("ESPERANDO CONTRINCANTE PARA " + jugador);
});

//recibir partida
var idPartida="";
socket.on('pregunta1', function(pregunta1,jugador1,jugador2,id){
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
  $("#imagenPregunta").attr("src",pregunta1.pregunta.imagen+".png");
  $("#opcion1 span").text(pregunta1.respuesta1.enunciado);
  $("#opcion2 span").text(pregunta1.respuesta2.enunciado);
  $("#opcion3 span").text(pregunta1.respuesta3.enunciado);
  $("#opcion4 span").text(pregunta1.respuesta4.enunciado);
});

socket.on('tiempo',function(tiempo){  
  $("#tiempo span").text(tiempo);
  if(tiempo===0){
    $("#tiempo").css("background-image","url('/images/tiempoEstatico.png')");
    socket.emit('respuesta1', respuesta(), jugador, idPartida);
    console.log(respuesta()+" "+jugador+" "+idPartida);
  }
});

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

function respuesta(){
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