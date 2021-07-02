const express = require('express');
const cors = require('cors');
const app = express();
const usersRoute = require('../route/usuarioRoute');
const categoriaRoute = require('../route/categoriaRoute');

app.use(express.json());
app.use(cors());

app.use(usersRoute);
app.use(categoriaRoute);
app.listen(3333);