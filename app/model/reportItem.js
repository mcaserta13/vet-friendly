/**
 * @author Maurício Caserta
 * 
 * Model para Itens do Relatorio de Pet
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const reportItemSchema = new mongoose.Schema({
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'PetReport' },
    media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
    message: { type: String },
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('ReportItem', reportItemSchema)
