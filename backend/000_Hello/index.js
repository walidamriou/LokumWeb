const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello !!!')
})
server.listen(port, () => console.log('server started on port ${port};'+'stop server by Ctrl+C in Windows or Control+C in macOS'))