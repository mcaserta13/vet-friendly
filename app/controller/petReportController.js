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
            return res.status(500).send(err)
        }

        PetReport.countDocuments(activeQuery, function (err, count) {
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
            path: 'pet',
            populate: {
                path: 'owner',
                model: 'User'
            }
        }])
}

exports.getById = function (req, res) {
    PetReport.findOne(activeById(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.status(200).json(data)
    }).populate([{
        path: 'pet',
        populate: {
            path: 'owner',
            model: 'User'
        }
    }])
}