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
			listo: Number,
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
		pregunta2 : {
			listo: Number,
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
		pregunta3 : {
			listo: Number,
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
		respuestaCorrecta1: Number,
		respuestaCorrecta2: Number,
		respuestaCorrecta3: Number
	});
	return mongoose.model('partida', partidaSchema);
}
