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
            return res.status(500).send(err)
        }

        ReportInbox.countDocuments(activeQuery, function (err, count) {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).json(
                paginate(
                    req.query.page,
                    count,
                    data
                )
            )
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
            return res.status(500).send(err)
        }
        res.status(200).json(data)
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