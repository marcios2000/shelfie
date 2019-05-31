const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config()

const app = express();

app.use(express.json());
const {SERVER_PORT, CONNECTION_STRING} = process.env;
 

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected ;)')
}).catch(error => console.log(error));


app.listen(SERVER_PORT, () => {
    console.log(`App is Listening on port ${SERVER_PORT}`)
})


