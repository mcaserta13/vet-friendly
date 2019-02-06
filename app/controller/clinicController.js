/**
 * @author Maurício Caserta
 * 
 * Controller para Clinica
 */
const Clinic = require('../model/clinic')

exports.get = function(req, res) {
    Clinic.find({}, (err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    }).populate('image');
};

exports.getById = function(req, res) {
    Clinic.findById(req.params.id, (err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    }).populate('image');
};