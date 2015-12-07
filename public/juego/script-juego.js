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

$("#botonJugador").on("click",function(){
  var jugador = $("#nombreJugador").val();
  socket.emit('jugador', jugador);
  $("#jugador").css("display","none");
  $("#cargando").css("display","inherit");
  $("#mensaje").text("ESPERANDO CONTRINCANTE PARA " + jugador);
});

//recibir partida
socket.on('partida', function(partida){
  $("#cargando").css("display","none");
  $("#partida").css("display","inherit");
});