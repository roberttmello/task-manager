const Task = require('../models/Task');

// Lista todas as tarefas
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
  try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID});
    if (!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`});
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
