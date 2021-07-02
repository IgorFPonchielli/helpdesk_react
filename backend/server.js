const express = require ('express');
const app = express();
const cors = require('cors');
const usuarioRoute = require('./route/usuarioRoute');
const categoriaRoute = require('./route/categoriaRoute');

app.use(express.json());
app.use(cors());
app.use(usuarioRoute);
app.use(categoriaRoute);
app.listen(3333);

