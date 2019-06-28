let templates = require("./StatTypes.js").templates

function clean(type,object){    
    if(!templates[type])
        throw `type <${type} not found for object ${object}` 
    let returnObject = {}
    let template = templates[type]
    
    
    let tKeys = Object.keys(template)
    
    
    for (let tkey of tKeys){
        if(!object[tkey]) 
            throw `${object} does not match <${type}> template ${template}`
            
        returnObject[tkey] = object[tkey]        
    }
}

module.exports = clean