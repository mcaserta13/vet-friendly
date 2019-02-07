/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto Chat
 */
const Chat = require('../../model/chat')

// Criar CRUD com os metodos POST, PUT e DELETE
Chat.methods(['post', 'put', 'delete'])

Chat.updateOptions({ new: true, runValidators: true })

module.exports = Chat