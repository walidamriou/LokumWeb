const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

// add /static folder to support CSS and other files
app.use(express.static("static"));

app.get('/',(req,res)=>{
    res.type('text/plain')
    res.send('Home page')
})

// call http://localhost:3000/home/ for home 
// call http://localhost:3000/page1/ for page 1 because we include all the folder
app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'static/','home.html'))
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