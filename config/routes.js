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
const petReportController = require('../app/controller/petReportController')
const reportInboxController = require('../app/controller/reportInboxController')
const reportItemController = require('../app/controller/reportItemController')
const authController = require('../app/controller/authController')
require('../app/middleware/authMiddleware')

module.exports = function (server) {

    const router = express.Router()

    server.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE")
        res.setHeader("Access-Control-Max-Age", "3600")
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, token")
    
        validateToken(req, res, next)
    })

    
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

    const mediaService = require('../app/services/media/mediaService')
    mediaService.register(router, '/media')

    const petService = require('../app/services/pet/petService')
    petService.register(router, '/pet')

    router.get('/pet', petController.get)
    router.get('/pet/:id', petController.getById)

    const chatChannelService = require('../app/services/chat/chatChannelService')
    chatChannelService.register(router, '/chat/channel')

    router.get('/chat/channel', chatChannelController.get)
    router.get('/chat/channel/:id', chatChannelController.getById)

    const chatService = require('../app/services/chat/chatService')
    chatService.register(router, '/chat')

    router.get('/chat', chatController.get)
    router.get('/chat/:id', chatController.getById)

    const petReportService = require('../app/services/report/petReportService')
    petReportService.register(router, '/report')

    router.get('/report', petReportController.get)
    router.get('/report/:id', petReportController.getById)

    const reportItemService = require('../app/services/report/reportItemService')
    reportItemService.register(router, '/report-item')

    router.get('/report-item', reportItemController.get)
    router.get('/report-item/:id', reportItemController.getById)

    const reportInboxService = require('../app/services/report/reportInboxService')
    reportInboxService.register(router, '/report-inbox')

    router.get('/report-inbox', reportInboxController.get)
    router.get('/report-inbox/:id', reportInboxController.getById)

    router.post('/auth/register', authController.register)
    router.post('/auth/login', authController.login)
}