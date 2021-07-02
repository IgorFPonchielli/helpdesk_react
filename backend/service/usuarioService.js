const usuarioData = require('../data/usuarioData');

exports.getUsuarios = function(){
    return usuarioData.getUsuarios();
}
exports.getUsuario = function(usuarioID){
    return usuarioData.getUsuario(usuarioID);
}
exports.saveUsuario = function(usuario){
    return usuarioData.saveUsuario(usuario);
}