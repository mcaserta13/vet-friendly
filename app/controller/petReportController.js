/**
 * @author Maurício Caserta
 * 
 * Controller para Relatorio de Pet
 */
const PetReport = require('../model/petReport')
require('../util/response')


exports.get = function (req, res) {
    PetReport.find(activeQuery, (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }

        PetReport.countDocuments(activeQuery, function (err, count) {
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
        .limit(pgOpt.limit).populate([{
            path: 'pet',
            populate: {
                path: 'owner',
                model: 'User'
            }
        }]).populate('user')
}

exports.getById = function (req, res) {
    PetReport.findOne(activeById(req.params.id), (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }
        return httpSuccess(req, res, data)
    }).populate([{
        path: 'pet',
        populate: {
            path: 'owner',
            model: 'User'
        }
    }]).populate('user')
}