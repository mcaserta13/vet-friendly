const app = require('./config/server')
require('./config/database')
require('./config/routes')(app)