/**
 * @author Maurício Caserta
 * 
 * Model para Inbox do veterinario com os relatórios
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const reportInboxSchema = new mongoose.Schema({
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'PetReport', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    veterinary: { type: mongoose.Schema.Types.ObjectId, ref: 'Veterinary', required: true },
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('ReportInbox', reportInboxSchema)
