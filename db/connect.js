const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://roberttmello:%40Jovita14%40@taskmanager.3ymg8tt.mongodb.net/TASK-MANAGER-DB?retryWrites=true&w=majority';

mongoose.connect(connectionString)
        .then(()=> console.log('- MongoDB connected'))
        .catch((err)=> console.log(err));

