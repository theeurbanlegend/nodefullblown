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
app.get('/api/v1/query',(req,res)=>{
   console.log(req.query)
   const {search,limit}=req.query
   let sortedProducts=[...products]
   
   if(search){
    sortedProducts=sortedProducts.filter(product=>{
        return product.name.startsWith(search)
    })
   }
   if(limit){
    sortedProducts=sortedProducts.slice(0,Number(limit))
   }
   if(sortedProducts.length<1){
    // either
    res.status(200).send("No products were found matching your specifications")
   }
   res.status(200).json(sortedProducts)
})