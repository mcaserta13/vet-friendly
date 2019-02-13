/**
 * @author Maurício Caserta
 * 
 * Middleware para controle de autenticação
 */
const AuthToken = require('../model/authToken')
const bcrypt = require('bcrypt')
require('../util/token')

const authApi = 'auth'

validateToken = async function(req, res, next) {
    // Validar APIs publicas de autenticação
    if (req.url.indexOf(authApi) > -1) {
        return next()
    }
    
    // Token não enviado
    if (typeof req.headers.token === 'undefined') {
        return res.status(401).send()
    }

    // Consultar token
    await AuthToken.findOne({ token: req.headers.token }, (err, data) => {
        if (typeof data === 'undefined' || err != null) {
            return res.status(401).send()
        }

        // Verificar se a data do token expirou
        if (data.expires < Date.now()) {
            // Gerar outro token
            data.token = generateAuthToken()
            data.save()
        }

        req.user = data
    })

    next()
}