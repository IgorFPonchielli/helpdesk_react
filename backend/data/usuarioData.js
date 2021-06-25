const database = require('../database/database');
var md5 = require('md5');

exports.getUsuario = function(usuarioID){
    return database.query('select * from usuario where idusuario = $1',[usuarioID]);
}

exports.saveUsuario = function(usuario){
    return database.one('insert into usuario (nome,email,endereco,telefone,senha) values($1,$2,$3,$4,$5) returning *',
    [usuario.nome,usuario.email,usuario.endereco,usuario.telefone,md5(usuario.senha)]);
}