module.exports = function(io) {
    io.on('connection', function (socket) {
        socket.on('jugador', function(jugador){
        	db.partida.findOne({"user2.nombre":""},function(error,partida){
        		if(partida==null){
        			var newPartida = new db.partida();
        			newPartida.user1.nombre=jugador;
                    newPartida.user1.puntos=0;
        			newPartida.user2.nombre="";
                    newPartida=llenarPartida(newPartida);
        			newPartida.save(function(errSave, partida){
                        socket.join(partida.id);
        			});
        		}else{
        			var updatePartida = new db.partida();
        			updatePartida.user2.nombre=jugador;
                    updatePartida.user2.puntos=0;
        			db.partida.findOneAndUpdate({"user1.nombre":partida.user1.nombre},
        				{$set:{"user2":updatePartida.user2}},function(partida){
        				   	db.partida.findOne({"user2.nombre":jugador},function(error,partida2){
                                socket.join(partida2.id, function(){
        				   		//pregunta1
        						  io.to(partida2.id).emit('pregunta1', partida2.pregunta1, partida2.user1, partida2.user2, partida2.id);
                                  partidaPregunta(io, partida2.id);
        					});
                        });
        			});
        		}
        	});
        }); 
        socket.on('respuesta1', function(respuesta, jugador, id){
            db.partida.findOne({"id":id},function(error,partida){
                var puntos;
                if(respuesta==partida.respuestaCorrecta1){
                    if(partida.user1.nombre==jugador){
                        puntos=partida.user1.puntos+20;
                        db.partida.findOneAndUpdate({"id":id},{$set:{"user1.puntos":puntos}}, function(error, partida){
                        });
                    }else{
                        puntos=partida.user2.puntos+20;
                        db.partida.findOneAndUpdate({"id":id},{$set:{"user2.puntos":puntos}}, function(error, partida){
                        });
                    }
                    io.to(partida.id).emit("resultado", "correcto", partida.repuestaCorrecta1, partida.user1, partida.user2);
                }else{
                    io.to(partida.id).emit("resultado", "incorrecto",partida.repuestaCorrecta1, partida.user1, partida.user2);
                }

            });
        }); 
    });
};

function partidaPregunta(io, id){
    var tiempo=15;
    var si =  setInterval(function(){
        io.to(id).emit("tiempo", tiempo);
        if(tiempo==0){
            clearInterval(si);
        }  
        tiempo-=1;                     
    }, 1000);  
}
function llenarPartida(newPartida){
newPartida.id=new Date().getTime();
newPartida.pregunta1.pregunta.imagen="/images/aprende/vestuario/pijama.png";
newPartida.pregunta1.respuesta1.numero=1;
newPartida.pregunta1.respuesta1.enunciado="Saco";
newPartida.pregunta1.respuesta2.numero=2;
newPartida.pregunta1.respuesta2.enunciado="Pijama";
newPartida.pregunta1.respuesta3.numero=3;
newPartida.pregunta1.respuesta3.enunciado="Dormir";
newPartida.pregunta1.respuesta4.numero=4;
newPartida.pregunta1.respuesta4.enunciado="Limpiar";
newPartida.respuestaCorrecta1=2;
return newPartida
}

