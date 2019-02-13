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
            return res.status(500).send(err)
        }

        Pet.countDocuments(activeQuery, function(err, count) {
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
    .limit(pgOpt.limit).populate('owner')
}

exports.getById = function(req, res) {
    Pet.findOne(activeById(req.params.id), (err, data) => {
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json(data)
    }).populate('owner')
}