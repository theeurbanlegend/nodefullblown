const express=require('express')
const app=express()
const port=8080
const path=require('path')

// use middleware
app.use(express.json())
const amount =12
if(amount<12){
    console.log("small")
}else{
    console.log("large")
}

console.log("hey its my first node app")

app.get("/",(req,res)=>{
    res.status(200).json({
        title:"My first blog in json"
    })
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})

///////////////////////////////////////////////////////////////////////////////////////
// HTTP MODULES
const http=require('http')
const port2=2020

const server=http.createServer()

server.on('request',(req,res)=>{
    if (req.url=='/'){
        res.end("Homepagey")
    }
     if (req.url=="/books"){
        res.end("Book Homepagey")
     }
     if(req.url=="/cars"){
        res.end("you dont own a car yet")
     }
})
server.listen(port2,()=>{
    console.log(`App is active on server port ${port2}`)
})
// ////////////////////////////////////////////////////////////////////////////////////
// path module and its functions

// path separator
console.log(path.sep)
// path concatenation of directories
const filePath=path.join('node_modules','depd','index.js')
console.log(filePath)

// basefile of directory
const base=path.basename(filePath)
console.log(base)
// to reslove the whole path
const whole=path.resolve(__dirname,filePath)
console.log(whole)
