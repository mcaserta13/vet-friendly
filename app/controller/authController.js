/**
 * @author Maurício Caserta
 * 
 * Controller para Veterinario
 */
const AuthToken = require('../model/authToken')
const User = require('../model/user')
const bcrypt = require('bcrypt')
require('../util/token')
require('../util/response')

exports.register = function (req, res) {
    let body = req.body

    if (typeof body.email === 'undefined') {
        return httpBadRequest(req, res, 'Informe o e-mail')
    }

    // Buscar usuário
    User.findOne({ email: body.email }, (err, data) => {
        if (data !== null || err !== null) {
            return httpBadRequest(req, res, 'E-mail em uso')
        }

        if (typeof body.name === 'undefined') {
            return httpBadRequest(req, res, 'Informe o nome')
        }

        if (typeof body.password === 'undefined') {
            return httpBadRequest(req, res, 'Informe a senha')
        }

        var newUser = User()
        newUser.name = body.name
        newUser.email = body.email

        try {
            let hash = bcrypt.hashSync(body.password, 10);
            newUser.password = hash
            newUser.save()
        } catch (error) {
            return httpError(req, res, error)
        }

        return httpSuccess(req, res, newUser)
    })
}

exports.login = function (req, res) {
    let body = req.body

    if (typeof body.email === 'undefined') {
        return httpBadRequest(req, res, 'Informe o e-mail')
    }

    if (typeof body.password === 'undefined') {
        return httpBadRequest(req, res, 'Informe a senha')
    }

    // Comparar o hash com a senha enviada
    User.findOne({ email: body.email }, (err, user) => {
        if (user !== null) {
            if (bcrypt.compareSync(body.password, user.password)) {
                // Excluir tokens anteriores
                var ObjectId = require('mongoose').Types.ObjectId;
                AuthToken.findOne({ user: new ObjectId(user._id) }, function (err, authToken) {

                    if (authToken === null) {
                        authToken = new AuthToken()
                        authToken.user = user
                    }

                    // Gerar novo auth token
                    authToken.token = generateAuthToken()
                    authToken.save()

                    return httpSuccess(req, res, { user: user, token: authToken.token })
                })

            } else {
                return httpBadRequest(req, res, 'Senha invalida')
            }
        } else {
            return httpBadRequest(req, res, 'E-mail invalido')
        }
    }).select("+password")
}