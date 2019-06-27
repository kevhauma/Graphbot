let templates = require("./StatTypes.js").templates

function check(type,object){    
    if(!templates[type])
        throw `type <${type} not found for object ${object}` 
    let template = templates[type]
    
    let oKeys = Object.keys(object)
    let tKeys = Object.keys(template)
    
    if(oKeys.length !== tKeys.length)
        throw `${object} does not match <${type}> template ${template}`
    
    for (let tkey of tKeys){
        if(!oKeys.includes(tkey)) 
            throw `${object} does not match <${type}> template ${template}`
    }
}