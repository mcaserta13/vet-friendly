const bodyParser = require('body-parser')
const express = require('express')

const port = 4000
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(process.env.port || port, function () {
    console.log('Listening on')
})

module.exports = server