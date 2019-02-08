/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto Media
 */
const Media = require('../../model/media')

// Criar CRUD
Media.methods(['get', 'post', 'put', 'delete'])

Media.updateOptions({ new: true, runValidators: true })

module.exports = Media