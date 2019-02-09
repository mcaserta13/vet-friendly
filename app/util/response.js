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