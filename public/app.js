const express=require('express')
const path=require('path')
const app=express()
const port=8080

app.use(express.static('./public'))

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})


// Unnecessary since this is already coverd in the public
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public/index.html'))
// })
app.all('*',(req,res)=>{
    res.status(404).send("Page not found")
})




//////////////////////////////////////////////////////////////////
//Using Http server
/*

const {readFileSync}=require('fs')
const homepage=readFileSync('../public/index.html')
const styles=readFileSync('../public/style.css')
const logic=readFileSync('../public/index.js')


const server=http.createServer((req,res)=>{
   const server=http.createServer((req,res)=>{
    const url=req.url
    if(url=='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
    }else if(url=='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(styles)
    }else if(url=='/index.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(logic)
    }else {
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>Page not found</h1>")
    }
    res.end()
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
}) */