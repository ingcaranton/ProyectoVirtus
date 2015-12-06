module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var juegoPreguntaSchema = new Schema({
		respuestaUser1 : Number,
		respuestaUser2 : Number,
		idPregunta : Number,
		tiempo : Number,
		resultado : String
	});
	return mongoose.model('juegoPregunta', juegoPreguntaSchema);
}
