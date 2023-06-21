const Task = require('../models/Task');

// Lista todas as tarefas
const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(201).json({tasks});
};

// Cadastra uma tarefa
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({msg: error});
  }
  
};

// Lista uma tarefa específica
const getSingleTask = async (req, res) => {
  res.json('Single task');
};

// Edita uma tarefa
const editTask = (req, res) => {
  res.send('Edit task!');
};

// Deleta uma tarefa
const deleteTask = (req, res) => {
  res.send('Delete task!');
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
