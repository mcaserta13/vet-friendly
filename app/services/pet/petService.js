/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto Pet
 */
const Pet = require('../../model/pet')

// Criar CRUD com os metodos POST, PUT e DELETE
Pet.methods(['post', 'put', 'delete'])

Pet.updateOptions({ new: true, runValidators: true })

module.exports = Pet