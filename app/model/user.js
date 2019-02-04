const restful = require('node-restful')

const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('User', userSchema)
