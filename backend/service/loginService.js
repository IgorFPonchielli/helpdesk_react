const loginData = require('../data/loginData');

exports.getLogin = function(loginID){
    return loginData.getLogin(loginID);
}

exports.saveLogin = function(login){
    return loginData.saveLogin(login);
}