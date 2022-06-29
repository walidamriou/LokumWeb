const http = require('http')
const fs = require(fs)
const port = process.env.PORT || 3000

function ServeStaticHTMLFile(res, path,contentType,responseCode = 200){
    fs.readFile(__dirname+path,(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'})
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode,{'Content-Type':contentType})
        res.end(data)
    })
}

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