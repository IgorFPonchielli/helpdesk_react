const chamadoData = require('../data/chamadoData');

exports.getChamados = function(){
    return chamadoData.getChamados();
}

exports.getChamadosDetail = function(){
    return chamadoData.getChamadosDetail();
}

exports.deleteChamado = function(chamadoID) {
    return chamadoData.deleteChamado(chamadoID);
}

exports.updateChamado = function(chamadoID, status) {
    return chamadoData.updateChamado(chamadoID, status);
}

exports.getChamado = function(chamadoID){
    return chamadoData.getChamado(chamadoID);
}
exports.saveChamado = function(chamado){
    return chamadoData.saveChamado(chamado);
}