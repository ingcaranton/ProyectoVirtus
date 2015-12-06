module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var preguntaSchema = new Schema({
		user1 : {
			nombre : String,
			puntos : String
		},
		user1 : {
			nombre : String,
			puntos : String
		},
		disponible : Boolean
	});
	return mongoose.model('juego', preguntaSchema);
}
