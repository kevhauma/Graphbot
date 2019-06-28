let validate = require("./validate.js")
function parse(message){
    let options = require("./options.js").options
    let returnOptions = {}
    message.content = message.content.replace(/<[@#]\d*>/g,"").trim().toLowerCase()
    
    let opts = message.content.split("-")
    for(let opt of opts){
        let values =opt.trim().split(" ")
        let call = values.shift()
        let optionObject = options.find(o=>o.calls.includes(call))
        if(optionObject){
            returnOptions[optionObject.calls[0]] = values[0]
        }            
    }
    returnOptions.channels = message.mentions.channels.array().map(c=>c.id)
    returnOptions.users = message.mentions.users.array().map(u=>u.id)    
    
    return validate(returnOptions)   
    
}

module.exports = parse