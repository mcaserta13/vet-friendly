/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto ReportInbox
 */
const ReportInbox = require('../../model/reportInbox')

// Criar CRUD com os metodos POST, PUT e DELETE
ReportInbox.methods(['post', 'put', 'delete'])

ReportInbox.updateOptions({ new: true, runValidators: true })

module.exports = ReportInbox