module.exports = function(io) {
    io.on('connection', function (socket) {
        socket.on('tabla', function(){
            db.partida.find().exec(function(err, partidas){
                socket.emit("tabla", partidas);
            })
        });
        socket.on('jugador', function(jugador){
        	db.partida.findOne({"user2.nombre":""},function(error,partida){
        		if(partida==null){
        			var newPartida = new db.partida();
                    newPartida.user1.nombre=jugador;
                    newPartida.user1.puntos=0;
                    newPartida.user2.nombre="";
                    newPartida=llenarPartida1(newPartida);
        			newPartida.save(function(errSave, partida){
                        socket.join(partida.id);
        			});
        		}else{
        			var updatePartida = new db.partida();
        			updatePartida.user2.nombre=jugador;
                    updatePartida.user2.puntos=0;
        			db.partida.findOneAndUpdate({"id":partida.id},
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
        socket.on('respuesta', function(respuesta, jugador, id, numPregunta){
            db.partida.findOne({"id":id},function(error,partida){
                var puntos;
                var respuestaPregunta=0;
                if(numPregunta==1){
                    respuestaPregunta=partida.respuestaCorrecta1;
                }
                if(numPregunta==2){
                    respuestaPregunta=partida.respuestaCorrecta2;
                }
                if(numPregunta==3){
                    respuestaPregunta=partida.respuestaCorrecta3
                }

                if(respuesta==respuestaPregunta){
                    if(partida.user1.nombre==jugador){
                        puntos=partida.user1.puntos+20;
                        db.partida.findOneAndUpdate({"id":id},{$set:{"user1.puntos":puntos}}, function(error, partida){
                            var respuestaCorrecta=0;
                            if(numPregunta==1){
                                respuestaCorrecta=partida.respuestaCorrecta1;
                            }
                            if(numPregunta==2){
                                respuestaCorrecta=partida.respuestaCorrecta2;
                            }
                            if(numPregunta==3){
                                respuestaCorrecta=partida.respuestaCorrecta3
                            }
                            io.to(id).emit("resultado", respuestaCorrecta, partida.user1, partida.user2);
                            socket.emit("resultado2", "corecta");
                        });
                    }else{
                        puntos=partida.user2.puntos+20;
                        db.partida.findOneAndUpdate({"id":id},{$set:{"user2.puntos":puntos}}, function(error, partida){
                            var respuestaCorrecta=0;
                            if(numPregunta==1){
                                respuestaCorrecta=partida.respuestaCorrecta1;
                            }
                            if(numPregunta==2){
                                respuestaCorrecta=partida.respuestaCorrecta2;
                            }
                            if(numPregunta==3){
                                respuestaCorrecta=partida.respuestaCorrecta3
                            }
                            io.to(id).emit("resultado", respuestaCorrecta, partida.user1, partida.user2);
                            socket.emit("resultado2", "corecta");
                        });
                    }
                }else{

                        db.partida.findOne({"id":id}, function(error, partida){
                            var respuestaCorrecta=0;
                            if(numPregunta==1){
                                respuestaCorrecta=partida.respuestaCorrecta1;
                            }
                            if(numPregunta==2){
                                respuestaCorrecta=partida.respuestaCorrecta2;
                            }
                            if(numPregunta==3){
                                respuestaCorrecta=partida.respuestaCorrecta3
                            }
                            io.to(id).emit("resultado", respuestaCorrecta, partida.user1, partida.user2);
                            socket.emit("resultado2", "incorecta");
                        });  
                }

            });
        }); 

        socket.on('listoPregunta', function(id, numPregunta){
                db.partida.findOne({"id":id},function(error, partida){
                    if(numPregunta==2){
                        if(partida.pregunta2.listo==0){
                            db.partida.findOneAndUpdate({"id":id},{$set:{"pregunta2.listo":1}}, function(e, f){
                            });
                        }else{
                            io.to(id).emit('pregunta2', partida.pregunta2, partida.user1, partida.user2, id);
                            partidaPregunta(io, id);
                        }
                    }
                    if(numPregunta==3){   
                        if(partida.pregunta3.listo==0){
                            db.partida.findOneAndUpdate({"id":id},{$set:{"pregunta3.listo":1}}, function(e, f){
                            });
                        }else{
                            io.to(id).emit('pregunta3', partida.pregunta3, partida.user1, partida.user2, id);
                            partidaPregunta(io, id);
                        }
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
function llenarPartida1(newPartida){
    newPartida.id=new Date().getTime();
    newPartida.pregunta1.listo=0;
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

    newPartida.pregunta2.listo=0;
    newPartida.pregunta2.pregunta.imagen="/images/aprende/salud/sano.png";
    newPartida.pregunta2.respuesta1.numero=1;
    newPartida.pregunta2.respuesta1.enunciado="Enfermo";
    newPartida.pregunta2.respuesta2.numero=2;
    newPartida.pregunta2.respuesta2.enunciado="Infarto";
    newPartida.pregunta2.respuesta3.numero=3;
    newPartida.pregunta2.respuesta3.enunciado="Mareado";
    newPartida.pregunta2.respuesta4.numero=4;
    newPartida.pregunta2.respuesta4.enunciado="Sano";
    newPartida.respuestaCorrecta2=4;

    newPartida.pregunta3.listo=0;
    newPartida.pregunta3.pregunta.imagen="/images/aprende/comidasBebidas/ensalada.png";
    newPartida.pregunta3.respuesta1.numero=1;
    newPartida.pregunta3.respuesta1.enunciado="Ensalada";
    newPartida.pregunta3.respuesta2.numero=2;
    newPartida.pregunta3.respuesta2.enunciado="Chocolate";
    newPartida.pregunta3.respuesta3.numero=3;
    newPartida.pregunta3.respuesta3.enunciado="Ponque";
    newPartida.pregunta3.respuesta4.numero=4;
    newPartida.pregunta3.respuesta4.enunciado="Pollo";
    newPartida.respuestaCorrecta3=1;
    return newPartida
}