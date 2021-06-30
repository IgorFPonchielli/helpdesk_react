const express = require('express');
const cors = require('cors');
const app = express();
const usersRoute = require('../route/usuarioRoute');

app.use(express.json());
app.use(cors());

app.use(usersRoute);
app.listen(3333);