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
            return res.status(500).send(err)
        }

        ReportItem.countDocuments(activeQuery, function (err, count) {
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
        }]).populate('media')
}

exports.getById = function (req, res) {
    ReportItem.findOne(activeById(req.params.id), (err, data) => {
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
    }]).populate('media')
}