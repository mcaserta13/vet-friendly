/**
 * @author Maurício Caserta
 * 
 * Conexão com banco de dados MongoDB
 */
const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://admin:admin@localhost:27017/vetfriendly_db', { useNewUrlParser: true } )