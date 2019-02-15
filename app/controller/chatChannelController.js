/**
 * @author Maurício Caserta
 * 
 * Controller para Canal de Chat
 */
const ChatChannel = require('../model/chatChannel')
require('../util/response')

exports.get = function(req, res) {
    ChatChannel.find(activeQuery, (err, data) => {
        if(err){
            return httpServerError(req, res)
        }
        
        ChatChannel.countDocuments(activeQuery, function(err, count) {
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
    ChatChannel.findOne(activeById(req.params.id), (err, data) => {
        if(err){
            return httpServerError(req, res)
        }
        return httpSuccess(req, res, data)
    }).populate('image')
}