/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto Chat Channel
 */
const ChatChannel = require('../../model/chatChannel')

// Criar CRUD com os metodos POST, PUT e DELETE
ChatChannel.methods(['post', 'put', 'delete'])

ChatChannel.updateOptions({ new: true, runValidators: true })

module.exports = ChatChannel