const express = require('express') //imports on imports
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const app = express()

// middlewars
app.use(bodyParser.json())

// ES6 arrow functions
massive(process.env.CONNECTION_STRING)
.then(database => {
    console.log('connected to database')
    app.set('db', database)
})
.catch((err) => console.log('MASSIVE ERROR', err))



const PORT = 4400;
app.listen(PORT, () => {console.log( `Listening on port: ${PORT}`) })