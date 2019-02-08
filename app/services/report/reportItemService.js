/**
 * @author Maurício Caserta
 * 
 * Serviço para o objeto ReportItem
 */
const ReportItem = require('../../model/reportItem')

// Criar CRUD com os metodos POST, PUT e DELETE
ReportItem.methods(['post', 'put', 'delete'])

ReportItem.updateOptions({ new: true, runValidators: true })

module.exports = ReportItem