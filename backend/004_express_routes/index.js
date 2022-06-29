const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.get('/',(req,res)=>{
    res.type('text/plain')
    res.send('Home page')
})

app.get('/home',(req,res)=>{
    res.type('text/plain')
    res.send('Home page')
})

app.get('/page1',(req,res)=>{
    res.type('text/plain')
    res.send('page 1')
})

app.get('/page2',(req,res)=>{
    res.type('text/plain')
    res.send('page 2')
})

app.get('/page3',(req,res)=>{
    res.type('text/plain')
    res.send('page 3')
})

app.get('/page3/subpage1',(req,res)=>{
    res.type('text/plain')
    res.send('sub 1 of page 3')
})

app.get('/page3/subpage2',(req,res)=>{
    res.type('text/plain')
    res.send('sub 1 of page 3')
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