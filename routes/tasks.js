const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
} = require('../controllers/tasks');

// Lista todas as tarefas
router.get('/', getAllTasks);
// Cadastra uma tarefa
router.post('/', createTask);
// Lista uma tarefa específica
router.get('/:id', getSingleTask);
// Edita uma tarefa
router.patch('/:id', editTask);
// Deleta uma tarefa
router.delete('/:id', deleteTask);

module.exports = router;
