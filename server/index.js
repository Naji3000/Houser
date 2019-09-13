require('dotenv').config()
const express = require('express');
const app = express();
const session = require('express-session')
const massive = require('massive');
const {CONNECTION_STRING, SESSION_SECRET} = process.env
const controller = require('./controller')
app.use(express.json())

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log("database connected")
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))




app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.createHouses)
app.put('/api/houses/:id', controller.editHouses)
app.delete('/api/houses/:id', controller.deleteHouses)









app.listen(4000, () => console.log("Listening on Port 4000"))