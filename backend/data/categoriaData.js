const database = require('../database/database');

exports.getCategorias = function(){
    return database.query('select * from categorias');
}