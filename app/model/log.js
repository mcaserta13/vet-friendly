/**
 * @author Maurício Caserta
 * 
 * Model para Log
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const logSchema = new mongoose.Schema({
    url: { type: String, required: true },
    method: { type: String, required: true },
    headers: { type: String, required: true },
    reqBody: { type: String },
    resBody: { type: String },
    resStatus: { type: Number },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})

module.exports = restful.model('Log', logSchema)
