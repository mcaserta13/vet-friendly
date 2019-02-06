/**
 * @author Maurício Caserta
 * 
 * Model para Pet
 */
const restful = require('node-restful')

const mongoose = restful.mongoose

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    weight: { type: Number, required: true },
    breed: { type: String, required: true },
    age: { type: Number },
    owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    active: { type: Boolean, required: true, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date },
    deleted: { type: Date }
})


module.exports = restful.model('Pet', petSchema)
