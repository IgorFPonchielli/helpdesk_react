const database = require('../database/database');
var md5 = require('md5');

exports.getLogin = function(loginID){
    return database.query('select * from usuario where EMAIL = ' + usuario.EMAIL + ' and SENHA = ' + md5(usuario.SENHA) + '',[loginID]);
}

exports.getLogins = function(){
    return database.query('select * from usuario');
}

exports.saveLogin = function(usuario){
    return database.one('select * from usuario where EMAIL = ' + usuario.EMAIL + ' and SENHA = ' + md5(usuario.SENHA) + '',[loginID]);;
    //database.one ou .query
}