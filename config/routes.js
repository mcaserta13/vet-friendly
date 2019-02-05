const express = require('express')

const clinicController = require('../app/controller/clinicController')
const veterinaryController = require('../app/controller/veterinaryController')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const userService = require('../app/services/user/userService')
    userService.register(router, '/user')

    const vetService = require('../app/services/veterinary/veterinaryService')
    vetService.register(router, '/veterinary')

    router.get('/veterinary', veterinaryController.get)
    router.get('/veterinary/:id', veterinaryController.getById)

    const clinicService = require('../app/services/clinic/clinicService')
    clinicService.register(router, '/clinic')

    router.get('/clinic', clinicController.get)
    router.get('/clinic/:id', clinicController.getById)

    const imageService = require('../app/services/image/imageService')
    imageService.register(router, '/image')
}