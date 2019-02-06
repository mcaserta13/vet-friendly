/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto Clinic
 */
const Clinic = require('../../model/clinic')

// Criar CRUD com os metodos POST, PUT e DELETE
Clinic.methods(['post', 'put', 'delete'])

Clinic.updateOptions({ new: true, runValidators: true })

module.exports = Clinic