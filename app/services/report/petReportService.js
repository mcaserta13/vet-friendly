/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto PetReport
 */
const PetReport = require('../../model/petReport')

// Criar CRUD com os metodos POST, PUT e DELETE
PetReport.methods(['post', 'put', 'delete'])

PetReport.updateOptions({ new: true, runValidators: true })

module.exports = PetReport