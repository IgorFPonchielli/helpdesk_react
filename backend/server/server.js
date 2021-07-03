const express = require('express');
const cors = require('cors');
const app = express();
const usersRoute = require('../routes/usuarioRoute');
const categoriaRoute = require('../routes/categoriaRoute');

app.use(express.json());
app.use(cors());

app.use(usersRoute);
app.use(categoriaRoute);
app.listen(3333);