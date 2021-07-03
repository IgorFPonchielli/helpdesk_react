const database = require('../database/database');
var md5 = require('md5');

// exports.getLogin = function(loginID){
//     return database.query('select * from usuario where EMAIL = ' + usuario.EMAIL + ' and SENHA = ' + md5(usuario.SENHA) + '',[loginID]);
// }

exports.getLogins = function(){
    return database.query('select * from usuario');
}

exports.saveLogin = function(usuario){
    return database.query('select * from usuario where EMAIL = $1 and SENHA = $2', [usuario.EMAIL, md5(usuario.SENHA)]);
    //database.one ou .query
}