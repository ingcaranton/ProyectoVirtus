module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var preguntaSchema = new Schema({
		enunciado : String,
		imagen : String,
		respuesta : {
			enunciado : String,
			imagen : String
		},
		opciones : [{
			enunciado : String,
			imagen : String
		}]
	});
	return mongoose.model('pregunta', preguntaSchema);
}