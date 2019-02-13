/**
 * @author Maurício Caserta
 * 
 * Controller para Veterinario
 */
const AuthToken = require('../model/authToken')
const User = require('../model/user')
const bcrypt = require('bcrypt')
require('../util/response')

exports.register = function (req, res) {
    let body = req.body

    if (typeof body.email === 'undefined') {
        return httpBadRequest(res, 'Informe o e-mail')
    }

    // Buscar usuário
    User.findOne({ email: body.email }, (err, data) => {
        if (data !== null || err !== null) {
            return httpBadRequest(res, 'E-mail em uso')
        }

        if (typeof body.name === 'undefined') {
            return httpBadRequest(res, 'Informe o nome')
        }

        if (typeof body.password === 'undefined') {
            return httpBadRequest(res, 'Informe a senha')
        }

        var newUser = User()
        newUser.name = body.name
        newUser.email = body.email

        try {
            let hash = bcrypt.hashSync(body.password, 10);
            newUser.password = hash
            newUser.save()
        } catch (error) {
            return httpError(res, error)
        }

        return httpSuccess(res, newUser)
    })
}

exports.login = function (req, res) {
    let body = req.body

    if (typeof body.email === 'undefined') {
        return httpBadRequest(res, 'Informe o e-mail')
    }

    if (typeof body.password === 'undefined') {
        return httpBadRequest(res, 'Informe a senha')
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
                    let salt = bcrypt.genSaltSync(10)

                    authToken.token = bcrypt.hashSync(Math.floor(new Date() / 1000).toString() + 'vet-friendly', salt)
                    authToken.save()

                    return httpSuccess(res, { user: user, token: authToken.token })
                })

            } else {
                return httpBadRequest(res, 'Senha invalida')
            }
        } else {
            return httpBadRequest(res, 'E-mail invalido')
        }
    }).select("+password")
}