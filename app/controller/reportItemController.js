/**
 * @author Maurício Caserta
 * 
 * Controller para item do relatório de Pet
 */
const ReportItem = require('../model/reportItem')
require('../util/response')


exports.get = function (req, res) {
    ReportItem.find(activeQuery, (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }

        ReportItem.countDocuments(activeQuery, function (err, count) {
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
            path: 'report',
            populate: {
                path: 'pet',
                model: 'Pet',
                populate: {
                    path: 'owner',
                    model: 'User'
                }
            }
        }]).populate('media')
}

exports.getById = function (req, res) {
    ReportItem.findOne(activeById(req.params.id), (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }
        return httpSuccess(req, res, data)
    }).populate([{
        path: 'report',
        populate: {
            path: 'pet',
            model: 'Pet',
            populate: {
                path: 'owner',
                model: 'User'
            }
        }
    }]).populate('media')
}