/**
 * @author Maurício Caserta
 * 
 * Model para Usuário
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false},
    active: { type: Boolean, required: true, default: true },
    photo: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('User', userSchema)
