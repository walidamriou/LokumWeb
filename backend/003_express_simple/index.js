const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.get('/',(req,res)=>{
    res.type('text/plain')
    res.send('Home page')
})

app.use((req,res)=>{
    res.type("text/plain")
    res.status(404)
    res.send('Page Not Found 404')
})

app.use((err,req,res,next)=>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('Server Error 500')
})

app.listen(port,()=>console.log('Express started on http://localhost:${port};'+'to stop server press Ctrl+C in Windows or Control+C in macOS '))