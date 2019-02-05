const Image = require('../../model/image')

Image.methods(['get', 'post', 'put', 'delete'])

Image.updateOptions({ new: true, runValidators: true })

module.exports = Image