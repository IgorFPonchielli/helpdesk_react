const database = require('../database/database');
var md5 = require('md5');

exports.getUsuario = function(usuarioID){
    return database.query('select * from usuario where id = $1',[usuarioID]);
}

exports.getUsuarios = function(){
    return database.query('select * from usuario');
}

exports.deleteUsuario = function(usuarioID){
    return database.none('delete from usuario where id = $1', [usuarioID]);
}

exports.saveUsuario = function(usuario){
    return database.one('insert into usuario (NOME, SOBRENOME, EMAIL, TELEFONE, AREA, LOCAL, SENHA, data_atualizacao, id_tpouser, IMAGEM) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *',
    [usuario.NOME, usuario.SOBRENOME, usuario.EMAIL, usuario.TELEFONE, usuario.AREA, usuario.LOCAL, md5(usuario.SENHA),
    usuario.data_atualizacao, usuario.id_tpouser, usuario.IMAGEM] );
}