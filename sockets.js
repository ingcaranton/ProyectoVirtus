module.exports = function(io) {
    io.on('connection', function (socket) {
        socket.on('jugador', function(jugador){
        	db.partida.findOne({"user2.nombre":""},function(error,partida){
        		if(partida==null){
        			var newPartida = new db.partida();
        			newPartida.user1.nombre=jugador;
        			newPartida.user2.nombre="";
                    newPartida=llenarPartida(newPartida);
        			newPartida.save(function(errSave, partida){
                        socket.join(partida.id);
        			});
        		}else{
        			var updatePartida = new db.partida();
        			updatePartida.user2=jugador;
        			db.partida.findOneAndUpdate({"user1.nombre":partida.user1.nombre},
        				{$set:{"user2.nombre":jugador}},function(partida){
        				   	db.partida.findOne({"user2.nombre":jugador},function(error,partida2){
                                socket.join(partida2.id, function(){
        				   		//pregunta1
        						  io.to(partida2.id).emit('partida', partida2.pregunta1);
        						  console.log(partida2);
                                  partidaPregunta(io, partida2.id);
        					});
                        });
        			});
        		}
        	});
        });  
    });
};

function partidaPregunta(io, id){
    var tiempo=30;
    var si =  setInterval(function(){
        io.to(id).emit("tiempo", tiempo);
        console.log(tiempo);
        tiempo-=1;
                            
    }, 1000);  
}
function llenarPartida(newPartida){
newPartida.id=new Date().getTime();
return newPartida
}

