const database = require('../database/database');
var md5 = require('md5');

exports.getLogins = function(){
    return database.query('select * from usuario');
}

exports.saveLogin = function(usuario){
    return database.query('select * from usuario where EMAIL = $1 and SENHA = $2', [usuario.EMAIL, md5(usuario.SENHA)]);
}