const bcrypt = require('bcrypt')

generateAuthToken = function(){
    let salt = bcrypt.genSaltSync(10)

    return bcrypt.hashSync(Math.floor(new Date() / 1000).toString() + 'vet-friendly', salt)
}

generateExpiresAt = function(){
    return Date.now() + 14400000;
}