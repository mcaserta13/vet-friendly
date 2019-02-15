/**
 * @author Maurício Caserta
 * 
 * Controller para Pet
 */
const Pet = require('../model/pet')
require('../util/response')

exports.get = function(req, res) {
    Pet.find(activeQuery, (err, data) => {
        if(err){
            return httpServerError(req, res)
        }

        Pet.countDocuments(activeQuery, function(err, count) {
            if (err) {
                return httpServerError(req, res)
            }
    
            return httpSuccess(req, res, paginate(
                req.query.page,
                count,
                data
            ))
        })
    }).skip((req.query.page -1) * pgOpt.limit)
    .limit(pgOpt.limit).populate('owner')
}

exports.getById = function(req, res) {
    Pet.findOne(activeById(req.params.id), (err, data) => {
        if(err){
            return httpServerError(req, res)
        }
        return httpSuccess(req, res, data)
    }).populate('owner')
}