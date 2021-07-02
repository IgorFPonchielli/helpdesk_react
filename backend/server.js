const express = require ('express');
const app = express();
const cors = require('cors');
const chamadoRoute = require('./route/chamadoRoute');
const loginRoute = require('./route/loginRoute');
const usuarioRoute = require('./route/usuarioRoute');


app.use(express.json());
app.use(cors());
app.use(chamadoRoute);
app.use(loginRoute);
app.use(usuarioRoute);
app.listen(3333);

