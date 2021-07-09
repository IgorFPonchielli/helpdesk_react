const database = require('../database/database');

exports.getChamado = function(chamadoID){
    return database.query('select * from chamados where id = $1',[chamadoID]);
}

exports.getChamados = function(){
    return database.query('select * from chamados');
}

exports.updateChamado = function(id, status){
    console.log(status)
    return database.query("update chamados SET status = $1 where id = $2", [status, id]);
}

exports.getChamadosDetail = function(){
    return database.query(`select chamados.id, chamados.status, categorias.categoria, usuario.email, prioridade.descricao as prioridade, titulo, chamados.descricao from chamados
                           inner join categorias on categorias.id = idcategoria
                           inner join usuario on usuario.id = id_usuario
                           inner join prioridade on prioridade.id = id_prioridade;`);
}

exports.deleteChamado = function (chamadoID) {
    return database.none('delete from chamados where id = $1',[chamadoID]);
}

exports.saveChamado = function(chamado){
    return database.one("insert into chamados (STATUS, idcategoria, id_usuario, id_prioridade, titulo, descricao) values ('Aberto',$1,(select id from usuario where email = $2),$3,$4,$5) returning *",
    [chamado.idcategoria, chamado.id_usuario, chamado.id_prioridade, chamado.titulo, chamado.descricao]);
}