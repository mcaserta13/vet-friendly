const Pet = require('../model/pet')

exports.get = function(req, res) {
    Pet.find({}, (err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    }).populate('owner');
};

exports.getById = function(req, res) {
    Pet.findById(req.params.id, (err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    }).populate('owner');
};