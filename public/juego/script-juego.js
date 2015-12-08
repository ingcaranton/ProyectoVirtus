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
socket.on('pregunta1', function(pregunta1,jugador1,jugador2){
  $("#cargando").css("display","none");
  $("#partida").css("display","inherit");
});

socket.on('tiempo',function(tiempo){  
  if(tiempo<0){
    //enviar respuesta, usuario
  }else{
    $("#tiempo span").text(tiempo);
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