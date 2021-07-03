const database = require('../database/database');

exports.getChamado = function(chamadoID){
    return database.query('select * from chamados where id = $1',[chamadoID]);
}

exports.getChamados = function(){
    return database.query('select * from chamados');
}

exports.saveChamado = function(chamado){
    return database.one("insert into chamados (STATUS, idcategoria, id_usuario, id_prioridade, titulo, descricao) values ('Aberto',$1,(select id from usuario where email = $2),$3,$4,$5) returning *",
    [chamado.idcategoria, chamado.id_usuario, chamado.id_prioridade, chamado.titulo, chamado.descricao]);
}