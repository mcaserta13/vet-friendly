const Clinic = require('../../model/clinic')

Clinic.methods(['post', 'put', 'delete'])

Clinic.updateOptions({ new: true, runValidators: true })

module.exports = Clinic