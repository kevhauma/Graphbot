let db = require("./dataStore.js")
let clean = require("../types/cleanObject.js")
let types = require("../types/StatTypes.js").types


function get(guild,type, options) {
    return new Promise(async(res, rej) => {
        try{
            if (!types.includes(type.toLowerCase())) 
                throw `type: ${type} not found`
                
            let data = await db.get(guild,type)
            let filter
            if(!options) filter = {}
            else {            
                filter = {
                    $and: [{"timestamp": {$gte: options.from || 0}},
                           {"timestamp": {$lte: options.to || Date.now()}}]         
                }
                if(options.users)    filter.user = {$in: options.users}
                if(options.channels) filter.channel = {$in: options.channels}
            }
            
            data.find(filter, (err, docs) => {
                if (err) rej(`finding: ${err}`)
                res(docs)                
            })        
        } catch(e){
            rej(`[ERROR][REPO][GET] ${e}`)
        }
    })
}
async function add(guild, type, object) {
    return new Promise(async(res, rej) => {
        try {
            if (!types.includes(type.toLowerCase()))
                throw `type: ${type} not found`
            object.timestamp = Date.now()
                  
            //        log({...object,type,guild})    
            object = clean(type, object) //throws error if not in template

            let data = await db.get(guild, type)        
            data.insert(object, (err) => {                    
                if (err) rej(`inserting: ${err}`)
                res()
            })
        } catch (e) {
            rej(`[ERROR][REPO][ADD] ${e}`)
        }
    })
}







module.exports = {
    get,
    add
}
