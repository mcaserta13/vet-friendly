/**
 * @author Maurício Caserta
 * 
 * Classe para controle de respostas da aplicação
 * 
 */
require('../util/saveLog')

pgOpt = {
    limit: 15
}

activeQuery = {
    active: true,
    deleted: null
}

activeById = function(id) {
    return { active: true, _id: id, deleted: null}
}

paginate = function(page, totalItems, data) {
    return {
        current_page: (page != null ? Number(page) : 1),
        page_size: pgOpt.limit,
        total_page: Math.ceil(totalItems / pgOpt.limit),
        data: data
    }
}

// Erro interno
httpServerError = function(req, res, err) {
    saveReqLog(req, err, 500)
    return res.status(500).send(err)
}

// Requisição inválida
httpBadRequest = function(req, res, err) {
    saveReqLog(req, err, 400)
    return res.status(400).json({ message: err })
}

// Sucesso
httpSuccess = function(req, res, data) {
    saveReqLog(req, data, 200)
    return res.status(200).json(data)
}

// Sucesso sem retorno
httpSuccessEmpty = function(req, res) {
    saveReqLog(req, {}, 201)
    return res.status(201).send()
}

// Não autorizado
httpUnauthorized = function(req, res) {
    saveReqLog(req, {}, 401)
    return res.status(401).send()
}