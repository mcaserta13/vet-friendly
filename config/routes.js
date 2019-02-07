/**
 * @author Maurício Caserta
 * 
 * Serviço de roteamento da aplicação
 */
const express = require('express')

const clinicController = require('../app/controller/clinicController')
const veterinaryController = require('../app/controller/veterinaryController')
const petController = require('../app/controller/petController')
const chatChannelController = require('../app/controller/chatChannelController')
const chatController = require('../app/controller/chatController')

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

    const petService = require('../app/services/pet/petService')
    petService.register(router, '/pet')

    router.get('/pet', petController.get)
    router.get('/pet/:id', petController.getById)

    const chatChannelService = require('../app/services/chat/chatChannelService')
    chatChannelService.register(router, '/chat/channel')

    router.get('/chat/channel/:id', chatChannelController.getById)

    const chatService = require('../app/services/chat/chatService')
    chatService.register(router, '/chat')

    router.get('/chat/:id', chatController.getById)
}