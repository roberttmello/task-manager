// Lista todas as tarefas
const getAllTasks = (req, res) => {
  res.send('All tasks!');
};

// Cadastra uma tarefa
const createTask = (req, res) => {
  res.send('Create task!');
};

// Lista uma tarefa específica
const getSingleTask = (req, res) => {
  res.send('Get single task!');
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
