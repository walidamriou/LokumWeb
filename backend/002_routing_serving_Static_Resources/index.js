const http = require('http')
const fs = require('fs')
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
    // normalize url by removing querystring, optional trailing slash, and making lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/,'').toLocaleLowerCase()
    switch(path){
        case '':
           ServeStaticHTMLFile(res,'/static/home.html','text/html')
           break
        case '/page1':
            ServeStaticHTMLFile(res,'/static/page1.html','text/html')
            break
        case '/page2':
            ServeStaticHTMLFile(res,'/static/page2.html','text/html')
            break
        default:
            ServeStaticHTMLFile(res,'/static/error.html','text/html')
            break
    }
})

server.listen(port, () => console.log('server started on port ${port};'+'stop server by Ctrl+C in Windows or Control+C in macOS'))