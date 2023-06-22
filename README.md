
# Task Manager rest API

Rest API desenvolvida com Nodejs, Express and MongoDB. Foi implementado as operações padrões de CRUD usando a arquitetura MVC.  


## Stack utilizada

**Back-end:** Node, Express, MongoDB


## Documentação da API

#### Retorna todos as tarefas

```http
  GET /api/v1/tasks
```

#### Retorna uma tarefa

```http
  GET /api/v1/tasks/:id
```

#### Cadastra uma tarefa

```http
  POST /api/v1/tasks
```

#### Edita uma tarefa

```http
  PATCH /api/v1/tasks/:id
```

#### Deleta uma tarefa

```http
  DELETE /api/v1/tasks/:id
```



## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:roberttmello/task-manager.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`MONGO_URI`


## Autor

- [@roberttmello](https://www.github.com/roberttmello)


