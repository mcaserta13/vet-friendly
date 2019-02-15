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
httpServerError = function(res, err) {
    return res.status(500).send(err)
}

// Requisição inválida
httpBadRequest = function(res, err) {
    return res.status(400).json({ message: err })
}

// Sucesso
httpSuccess = function(res, data) {
    return res.status(200).json(data)
}

// Sucesso sem retorno
httpSuccessEmpty = function(res) {
    return res.status(201).send()
}

// Não autorizado
httpUnauthorized = function(res) {
    return res.status(401).send()
}