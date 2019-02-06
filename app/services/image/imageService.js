/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto Image
 */
const Image = require('../../model/image')

// Criar CRUD
Image.methods(['get', 'post', 'put', 'delete'])

Image.updateOptions({ new: true, runValidators: true })

module.exports = Image