const http = require('http')
const path = require('path')

const {getCurrentDate, formatCurrency} = require('./utils')
constLogger = require('./logger')

let logger = new Logger('App')

let server = http.createServer( (req, res) => {

    Logger.log('TESTE')

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<p>Current Date:${getCurrentDate()}</p>`)
    res.write(`<p>Formatted amount:${formatCurrency(99.99)}</p>`)
    res.end()

    
})

server.listen(3000, () => {
    
    logger.log('Server running at http://localhost:3000/')

})



