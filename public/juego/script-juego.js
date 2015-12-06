//juego
	


//recibe info del socket
    var socket = io();
    socket.on('NombreDelRecivido', function(loRecivido){
    	//Callback
    });
    socket.emit('NombreDelEmit', "ParametroAEnviar");

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

function setFullscreen(){
 
           if(canvas.webkitRequestFullScreen) {
               canvas.webkitRequestFullScreen();
           }
          else {
             canvas.mozRequestFullScreen();
          }            
}
