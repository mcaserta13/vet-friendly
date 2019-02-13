/**
 * @author Maurício Caserta
 * 
 * Controller para Clinica
 */
const Clinic = require('../model/clinic')
require('../util/response')

exports.get = function(req, res) {
    Clinic.find(activeQuery, (err, data) => {
        if(err){
            return res.status(500).send(err)
        }
        
        Clinic.countDocuments(activeQuery, function(err, count) {
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
    }).skip((req.query.page -1) * pgOpt.limit)
    .limit(pgOpt.limit).populate('media')
}

exports.getById = function(req, res) {
    Clinic.findOne(activeById(req.params.id), (err, data) => {
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json(data)
    }).populate('media')
}