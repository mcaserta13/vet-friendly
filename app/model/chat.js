/**
 * @author Maurício Caserta
 * 
 * Model para Chat
 */
const restful = require('node-restful')

const constants = require('../util/chatMessageType')

const mongoose = restful.mongoose

const chatSchema = new mongoose.Schema({
    channel: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatChannel', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    veterinary: { type: mongoose.Schema.Types.ObjectId, ref: 'Veterinary' },
    message: { type: String, required: true },
    type: { type: String, required: true, default: constants.TEXT },
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('Chat', chatSchema)
