/**
 * @author Maurício Caserta
 * 
 * Middleware para controle de autenticação
 */
const AuthToken = require('../model/authToken')
const bcrypt = require('bcrypt')
require('../util/token')
require('../util/response')

// Apis que não precisam de autenticação
const safeApis = [
    '/api/auth/login', 
    '/api/log'
]

validateToken = async function (req, res, next) {
    // Validar APIs publicas de autenticação
    if (safeApis.indexOf(req._parsedUrl.pathname) > -1) {
        return next()
    }

    // Token não enviado
    if (typeof req.headers['x-token'] === 'undefined') {
        return httpUnauthorized(req, res)
    } else {
        // Consultar token
        await AuthToken.findOne({ token: req.headers['x-token'] }, (err, data) => {
            if (data === null || err != null) {
                return httpUnauthorized(req, res)
            } else {
                // Verificar se a data do token expirou
                if (data.expires < Date.now()) {
                    // Gerar outro token
                    data.token = generateAuthToken()
                    data.expires = generateExpiresAt()
                    data.save()

                    // Setar token no header
                    res.setHeader('x-token', data.token)
                }

                req.user = data
                return next()
            }
        })
    }
}