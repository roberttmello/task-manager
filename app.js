// Executando função de conexão ao MongoDB
require('./db/connect');

// Importando e executando o express
const express = require('express');
const app = express();

// Importando arquivo de rotas
const tasks = require('./routes/tasks');

// Executando os Middlewares
app.use(express.json());
app.use('/api/v1/tasks', tasks);


// Rodando o servidor
const port = 3000;
app.listen(port, console.log(`- Server is listening on port ${port}`));