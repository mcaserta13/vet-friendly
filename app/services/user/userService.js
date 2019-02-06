/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto User
 */
const User = require('../../model/user')

// Criação de CRUD
User.methods(['get', 'post', 'put', 'delete'])

User.updateOptions({ new: true, runValidators: true })

module.exports = User