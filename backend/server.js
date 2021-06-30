const express = require ('express');
const app = express();
const cors = require('cors');
const usuarioRoute = require('./route/usuarioRoute');


app.use(express.json());
app.use(cors());
app.use(usuarioRoute);
app.listen(3333);

