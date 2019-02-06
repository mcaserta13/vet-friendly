/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto Veterinary
 */
const Veterinary = require('../../model/veterinary')

// Criar CRUD com os metodos POST, PUT e DELETE
Veterinary.methods(['post', 'put', 'delete'])

Veterinary.updateOptions({ new: true, runValidators: true })

module.exports = Veterinary