// Importando e executando o express
const express = require('express');
const app = express();

// Importando arquivo de rotas
const tasks = require('./routes/tasks');

// Importando função de conexão ao MongoDB
const connectDB = require('./db/connect');

// Habilitando o uso das variáveis ambiente
require('dotenv').config();

// Importando função responsável pelas rotas não encontradas
const notFound = require('./middleware/not-found');

// Executando os Middlewares
app.use(express.json());
app.use('/api/v1/tasks', tasks);

// 404
app.use(notFound);

// Conectando ao MongoDB e iniciando o servidor
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('- MongoDB connected');
    app.listen(
      process.env.PORT,
      console.log(`- Server is listening on port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
