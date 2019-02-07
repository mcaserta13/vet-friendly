/**
 * @author Maurício Caserta
 * 
 * Model para Canal de Chat
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const chatChannelSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    veterinary: { type: mongoose.Schema.Types.ObjectId, ref: 'Veterinary', required: true },
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('ChatChannel', chatChannelSchema)
