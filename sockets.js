module.exports = function(io) {
    
    io.on('connection', function (socket) {
        socket.on('NombreDelRecivido', function(loRecivido){
            //Callback
        });
        socket.emit('NombreDelEmit', "ParametroAEnviar");
    });
};
