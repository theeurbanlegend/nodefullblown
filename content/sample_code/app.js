const EventEmitter= require('events')

const customEmmiter= new EventEmitter

customEmmiter.on('response',(item,id)=>{
    console.log(`Item character ${item} with id ${id} has been identified`)
})

customEmmiter.emit('response','customEmit','no1')