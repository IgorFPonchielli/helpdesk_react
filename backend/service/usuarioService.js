const usuarioData = require('../data/usuarioData');

exports.getUsuarios = function(){
    return usuarioData.getUsuarios();
}
exports.getUsuario = function(usuarioID){
    return usuarioData.getUsuario(usuarioID);
}
exports.deleteUsuario = function(usuarioID){
    return usuarioData.deleteUsuario(usuarioID);
}
exports.saveUsuario = function(usuario){
    return usuarioData.saveUsuario(usuario);
}