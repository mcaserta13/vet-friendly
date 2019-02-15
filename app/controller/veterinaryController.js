/**
 * @author Maurício Caserta
 * 
 * Controller para Veterinario
 */
const Veterinary = require('../model/veterinary')
require('../util/response')


exports.get = function (req, res) {
    Veterinary.find(activeQuery, (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }

        Veterinary.countDocuments(activeQuery, function (err, count) {
            if (err) {
                return httpServerError(req, res)
            }

            return httpSuccess(req, res, paginate(
                req.query.page,
                count,
                data
            ))
        })
    }).skip((req.query.page - 1) * pgOpt.limit)
        .limit(pgOpt.limit).populate('clinic')
}

exports.getById = function (req, res) {
    Veterinary.findOne(activeById(req.params.id), (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }
        return httpSuccess(req, res, data)
    }).populate('clinic')
}