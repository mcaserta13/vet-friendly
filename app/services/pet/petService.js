const Pet = require('../../model/pet')

Pet.methods(['post', 'put', 'delete'])

Pet.updateOptions({ new: true, runValidators: true })

module.exports = Pet