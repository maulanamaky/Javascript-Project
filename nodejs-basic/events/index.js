const eventEmitter = require('events')

const birthdayEventListener = (name) =>{
    console.log(`Happu Birtday ${name}`)
}

const myEmitter = new eventEmitter;

myEmitter.on('birthday', birthdayEventListener)

myEmitter.emit('birthday', 'Maul')