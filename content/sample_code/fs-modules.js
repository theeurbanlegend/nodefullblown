// fs modules
const {readFile,writeFile,readFileSync,writeFileSync, write}=require('fs')
//  in asychronous mode

readFile('./node_modules/methods/index.js','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    const res=result
    writeFile('./content/async-mode.txt',`here is the result=>${res}`,(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
    })
})
// in synchronous mode

const firres=readFileSync('node_modules/methods/index.js','utf8')
console.log(firres)

writeFileSync('content/sync-mode.txt',`added somthing`,{flag:'a'})
/* getText('./content/async-mode.txt')
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    }) */

    
    /* const getText=(path)=>{
    return new Promise((reject,resolve)=>{
        readFile(path,'utf8',(err,data)=>{
            if (err){
                reject(err)
            }else{
            resolve(data)
            }
        })
    }
    )
} */

/*
 const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const display=async()=>{
    try{
    const first =await readFilePromise('./content/async-mode.txt',)
    const second =await readFilePromise('./content/sync-mode.txt',)
    await writeFilePromise('./content/result-sync.txt',`"This is the final total=${first}, ${second}"`)
    console.log(first,second)
    }
    catch(err){
        console.log(err)
        
    }
}
display() */

const {readFile,writeFile}=require('fs').promises

 

const display=async()=>{
    try{
    const first =await readFile('./content/async-mode.txt','utf-8')
    const second =await readFile('./content/sync-mode.txt','utf-8')
    await writeFile('./content/result-sync.txt',`"This is the final total=${first}, ${second}"`,{flag:'a'})
    console.log(first,second)
    }
    catch(err){
        console.log(err)
        
    }
}
display()
