/**
 * @author Maurício Caserta
 * 
 * Controller para Veterinario
 */
const Veterinary = require('../model/veterinary')
require('../util/response')


exports.get = function(req, res) {
    Veterinary.find(activeQuery, (err, data) => {
        if(err){
            return res.status(500).send(err)
        }

        Veterinary.countDocuments(activeQuery, function(err, count) {
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
    .limit(pgOpt.limit).populate('clinic')
}

exports.getById = function(req, res) {
    Veterinary.findOne(activeById(req.params.id), (err, data) => {
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json(data)
    }).populate('clinic')
}