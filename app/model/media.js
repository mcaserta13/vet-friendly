/**
 * @author Maurício Caserta
 * 
 * Model para Media
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const mediaSchema = new mongoose.Schema({
    url: { type: String, required: true },
    type: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})


module.exports = restful.model('Media', mediaSchema)
