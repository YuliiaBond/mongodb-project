// npm init -y
// yarn add -D nodemon
// yarn add mongoose

/* "start": "node app",
    "start:dev": "nodemon app" */

const mongoose = require('mongoose');

const { DB_HOST } = require('./config');

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connect success');
})
    .catch(error => {
        console.log(error.message);
})