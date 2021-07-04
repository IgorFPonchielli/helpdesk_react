const chamadoData = require('../data/chamadoData');

exports.getChamados = function(){
    return chamadoData.getChamados();
}

exports.getChamados = function(){
    return chamadoData.getChamadosDetail();
}

exports.getChamado = function(chamadoID){
    return chamadoData.getChamado(chamadoID);
}
exports.saveChamado = function(chamado){
    return chamadoData.saveChamado(chamado);
}