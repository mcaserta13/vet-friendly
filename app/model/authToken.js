/**
 * @author Maurício Caserta
 * 
 * Model para Token de autenticação
 */
const restful = require('node-restful')
require('../util/token')

const mongoose = restful.mongoose

const authTokenSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    expires: { type: Date, default: generateExpiresAt()}, // 4 horas
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('AuthToken', authTokenSchema)
