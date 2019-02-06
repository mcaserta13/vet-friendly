/**
 * @author Maurício Caserta
 * 
 * Controller para Veterinario
 */
const Veterinary = require('../model/veterinary')

exports.get = function(req, res) {
    Veterinary.find({}, (err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    }).populate('clinic');
};

exports.getById = function(req, res) {
    Veterinary.findById(req.params.id, (err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    }).populate('clinic');
};