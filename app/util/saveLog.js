/**
 * @author Maurício Caserta
 * 
 * Classe para salvar logs da aplicação
 */
const Log = require('../model/log')

saveReqLog = async function(req, resBody, resStatus) {
    var log = new Log()
    log.url = req.originalUrl
    log.method = req.method
    log.headers = JSON.stringify(req.headers)
    log.reqBody = JSON.stringify(req.body)
    log.resBody = JSON.stringify(resBody)
    log.resStatus = resStatus

    log.save()
}