const express = require('express');
const categoriaService = require('../service/categoriaService');
const router = express();

router.get('/categorias',async function(req,res){
    const categorias = await categoriaService.getCategorias();
    res.json(categorias);
});

module.exports = router;