// npm init -y
// yarn add -D nodemon
// yarn add mongoose
// yarn add dotenv

/* "start": "node app",
    "start:dev": "nodemon app" */

const mongoose = require('mongoose');

// const dotenv = require('dotenv');
// dotenv.config();
require ('dotenv').config();

const { DB_HOST } = process.env;
// console.log(DB_HOST);

const { Schema, model } = mongoose;

const contactSchema = Schema({
    name: String,
    email: String,
    phone: String,
    favorite: Boolean
});

const Contact = model("contact", contactSchema);

const newContact = {
    name: 'Yuliia Bond',
    email: '1213@gmail.com',
    phone: '(066) 112-2333',
    favorite: true
}

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    try {
        // console.log('Database connect success');
        const result = await Contact.create(newContact);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})
    .catch(error => {
        console.log(error.message);
})