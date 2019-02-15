/**
 * @author Maurício Caserta
 * 
 * Controller para Inbox de relatórios do veterinario
 */
const ReportInbox = require('../model/reportInbox')
require('../util/response')


exports.get = function (req, res) {
    ReportInbox.find(activeQuery, (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }

        ReportInbox.countDocuments(activeQuery, function (err, count) {
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
        }]).populate('user').populate([{
            path: 'veterinary',
            populate: {
                path: 'clinic',
                model: 'Clinic',
                populate: {
                    path: 'media',
                    model: 'Media'
                }
            }
        }])
}

exports.getById = function (req, res) {
    ReportInbox.findOne(activeById(req.params.id), (err, data) => {
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
    }]).populate('user').populate([{
        path: 'veterinary',
        populate: {
            path: 'clinic',
            model: 'Clinic',
            populate: {
                path: 'media',
                model: 'Media'
            }
        }
    }])
}