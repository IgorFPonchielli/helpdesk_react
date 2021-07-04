const express = require('express');
const chamadoService = require('../service/chamadoService');
const router = express();

router.get('/chamados',async function(req,res){
    const chamados = await chamadoService.getChamados();
    res.json(chamados);
});

router.get('/chamados/detail',async function(req,res){
    const chamados = await chamadoService.getChamadosDetail();
    res.json(chamados);
});

router.get("/chamado/:id",async function(req,res){
    const chamado = await chamadoService.getChamado(req.params.id);
    res.json(chamado);
 
});

router.delete('/chamado/:id', async function(req, res) {
    await chamadoService.deleteChamado(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}])
});

router.post('/chamado',async function(req,res) {
    const chamado = req.body;
    const newChamado = await chamadoService.saveChamado(chamado);
    res.json(newChamado);
});

module.exports = router;