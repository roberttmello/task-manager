// Importando e executando o express
const express = require('express');
const app = express();

// Importando arquivo de rotas
const tasks = require('./routes/tasks');

// Executando função de conexão ao MongoDB
const connectDB = require('./db/connect');

// Habilitando o uso das variáveis ambiente
require('dotenv').config();

// Executando os Middlewares
app.use(express.json());
app.use('/api/v1/tasks', tasks);


// Rodando o servidor
const port = process.env.PORT;

const start = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('- MongoDB connected');
    app.listen(port, console.log(`- Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

start();