const express=require('express')
const {products}=require('./public/data.js')
const app=express()
const port=8080

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

app.get('/',(req,res)=>{
    res.status(200).json(products)
})
app.get('/api/products',(req,res)=>{
    const newArray=products.map(item=>{
        const {id,name,image}=item
        return {id,name,image}
    })
    res.status(200).json(newArray)
})
app.get('/api/products/:id',(req,res)=>{
    const {id}=req.params
    const oneItem=products.find(item=>item.id===Number(id))
    if (!oneItem){
       return res.status(404).send("Item not found")
    }
    return res.status(200).json(oneItem)
})