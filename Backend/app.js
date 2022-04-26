const express = require('express');


const model = require("./model");

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello World desde Express'));
app.get('/getEmployees',model);

app.listen(port, () => console.log(`Aplicación en el puerto ${port}!`));
