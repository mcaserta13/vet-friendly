/**
 * @author Maurício Caserta
 * 
 * Classe para start do projeto
 */
const bodyParser = require('body-parser')
const express = require('express')

const port = 4000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(process.env.port || port, function () {
    console.log('Listening on')
})

module.exports = app