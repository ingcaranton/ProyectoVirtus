module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var partidaSchema = new Schema({
		id : Number,
		user1 : {
			nombre : String,
			puntos : Number
		},
		user2 : {
			nombre : String,
			puntos : Number
		},

		pregunta1 : {
			pregunta: {
				enunciado: String,
				imagen: String
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
		tiempo : Number,
		respuestaCorrecta1: Number
	});
	return mongoose.model('partida', partidaSchema);
}
