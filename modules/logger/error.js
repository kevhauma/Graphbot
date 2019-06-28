let owner

function log(message){
    if(owner)
        owner.send(message)
    
    console.log(message)
    
}

function setOwner(o){
    if(!owner)
    owner = o
}

module.exports = {setOwner,log}