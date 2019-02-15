/**
 * @author Maurício Caserta
 * 
 * Controller para Chat
 */
const Chat = require('../model/chat')
require('../util/response')

exports.get = function(req, res) {
    Chat.find(activeQuery, (err, data) => {
        if(err){
            return httpServerError(req, res)
        }
        
        Chat.countDocuments(activeQuery, function(err, count) {
            if (err) {
                return httpServerError(req, res)
            }

            return httpSuccess(req, res, paginate(
                req.query.page,
                count,
                data
            ))
        })
    }).skip((req.query.page -1) * pgOpt.limit)
    .limit(pgOpt.limit).populate('image')
}

exports.getById = function(req, res) {
    Chat.findOne(activeById(req.params.id), (err, data) => {
        if(err){
            return httpServerError(req, res)
        }
        return httpSuccess(req, res, data)
    }).populate('image')
}