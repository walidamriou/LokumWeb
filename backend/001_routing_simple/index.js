const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req,res)=>{
    const path = req.url.replace(/\/?(?:\?.*)?$/,'').toLocaleLowerCase()
    switch(path){
        case '':
           res.writeHead(200,{'Content-Type':'text/plain'})
           res.end('Home page')
           break
        case '/page1':
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end('first page')
            break
        case '/page2':
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end('second page')
            break
        default:
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.end(' Page Not Found 404')
            break
    }
})

server.listen(port, () => console.log('server started on port ${port};'+'stop server by Ctrl+C in Windows or Control+C in macOS'))