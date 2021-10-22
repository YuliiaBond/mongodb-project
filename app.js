// npm init -y
// yarn add -D nodemon
// yarn add mongoose

/* "start": "node app",
    "start:dev": "nodemon app" */

// Задача: просто подключиться к базе
const mongoose = require('mongoose');

const DB_HOST = 'mongodb+srv://Yuliia:ZapZv9lN4SyGKcrM@cluster0.cfqno.mongodb.net/phonebook?retryWrites=true&w=majority';

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connect success');
})
    .catch(error => {
        console.log(error.message);
})