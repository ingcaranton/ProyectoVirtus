module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var preguntaSchema = new Schema({
		id : Number,
		pregunta : String,
		respuesta1 : String,
		respuesta2 : String,
		respuesta3 : String,
		respuesta4 : String,
		respuestaCorrecta : Number,
		imagen : String
	});
	return mongoose.model('pregunta', preguntaSchema);
}
