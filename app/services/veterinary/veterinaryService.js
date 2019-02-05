const Veterinary = require('../../model/veterinary')

Veterinary.methods(['post', 'put', 'delete'])

Veterinary.updateOptions({ new: true, runValidators: true })

module.exports = Veterinary