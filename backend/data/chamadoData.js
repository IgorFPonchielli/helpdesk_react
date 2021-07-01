const database = require('../database/database');

exports.getChamado = function(chamadoID){
    return database.query('select * from chamado where id = $1',[chamadoID]);
}

exports.getUsuarios = function(){
    return database.query('select * from chamado');
}

exports.savechamado = function(chamado){
    return database.one('insert into chamado ("NOME", "SOBRENOME", "EMAIL", "TELEFONE", "AREA", "LOCAL", "SENHA", "data_atualizacao", "id_tpouser") values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *',
    [chamado.NOME, chamado.SOBRENOME, chamado.EMAIL, chamado.TELEFONE, chamado.AREA, chamado.LOCAL, md5(chamado.SENHA),
        chamado.data_atualizacao, chamado.id_tpouser]);
}