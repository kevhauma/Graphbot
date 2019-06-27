let db = require("./dataStore.js")
let typeCheck = require("../types/checkType.js")
let types = require("../types/StatTypes.js").types

function get(guild,type, options) {
    return new Promise(async(res, rej) => {
        if (!types.includes(type.toLowerCase())) throw `type: ${type} not found`
        let data = await db.get(guild,type)
        let filter
        if(!options)
            filter = {}
        else {            
            filter = {
                $and: [{"timestamp": {$gte: options.from || 0}},
                       {"timestamp": {$lte: options.to || Date.now()}}]         
            }
            if(options.users)    filter.user = {$in: options.users}
            if(options.channels) filter.channel = {$in: options.channels}
        }
        data.find(filter, (err, docs) => {
            if (err) rej(err)
            res(docs)
        })
    })
}

function add(guild,type,object){
    return new Promise(async(res, rej) => {
        if (!types.includes(type.toLowerCase())) 
                throw `type: ${type} not found`
                
        let data = await db.get(guild,type)
        
        if(typecheck(type,object)) 
            throw `object doesn't match <${type}> template\n${object}`        
    
        data.insert(object,(err, docs) => {
            if (err) rej(err)
            res(docs)
        })
    })
}






module.exports = {
    get,add
}