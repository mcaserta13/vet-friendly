/**
 * @author Maurício Caserta
 * 
 * Model para Relatorio de Pet
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const petReportSchema = new mongoose.Schema({
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('PetReport', petReportSchema)
