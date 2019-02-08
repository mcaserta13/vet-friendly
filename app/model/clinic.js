/**
 * @author Maurício Caserta
 * 
 * Model para Clinica
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const clinicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('Clinic', clinicSchema)
