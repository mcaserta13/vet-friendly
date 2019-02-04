const express = require('express')

module.exports = function(server) {
    // Router
    const router = express.Router()
    server.use('/api', router)

    const userService = require('../app/services/user/userService')
    userService.register(router, '/user')
}