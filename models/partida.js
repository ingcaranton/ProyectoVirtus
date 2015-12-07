module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var partidaSchema = new Schema({
		id : Number,
		user1 : {
			nombre : String,
			puntos : String
		},
		user2 : {
			nombre : String,
			puntos : String
		},

		pregunta1 : {
			pregunta: {
				enunciado: String,
				imagen: String
			},
			respuestaCorrecta: {
				numero: Number
			},
			respuesta1: {
				numero: Number,
				enunciado: String,
				imagen: String
			},
			respuesta2: {
				numero: Number,
				enunciado: String,
				imagen: String
			},
			respuesta3: {
				numero: Number,
				enunciado: String,
				imagen: String
			},
			respuesta4: {
				numero: Number,
				enunciado: String,
				imagen: String
			}
		},
		tiempo : Number
	});
	return mongoose.model('partida', partidaSchema);
}
