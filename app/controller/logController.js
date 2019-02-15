/**
 * @author Maurício Caserta
 * 
 * Controller para Log
 */
const Log = require('../model/log')
require('../util/response')


exports.get = function (req, res) {
    console.log(req)
    Log.find({}, (err, data) => {
        if (err) {
            return httpServerError(req, res)
        }

        Log.countDocuments({}, function (err, count) {
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
        .limit(pgOpt.limit)
}