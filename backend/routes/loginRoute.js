const express = require('express');
const loginService = require('../service/loginService');
const router = express();

// router.get('/logins',async function(req,res){
//     const logins = await loginService.getLogins();
//     res.json(logins);
// });

// router.get("/login/:id",async function(req,res){
//     const login = await loginService.getLogin(req.params.id);
//     res.json(login);
 
// });

// router.delete('/login/:id',async function(req,res){
//    return res.json([{message:'registro excluido com sucesso'}]); 
// });

router.post('/login',async function(req,res) {
    const login = req.body;
    const userConnected = await loginService.saveLogin(login);
    if (userConnected != "") {
        res.json(userConnected)
        res.status(200).end();
     } else {
        console.log("Não conectou")
        res.status(401).end();
     }
});

module.exports = router;