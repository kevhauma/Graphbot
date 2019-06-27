let db = require("./dataStore.js")


async function getMessages(guild, options) {
    return new Promise((res, rej) => {
        let data = await db.get(guild,"messages")
        let filter = {
            $and: [{"timestamp": {$gte: options.from || 0}},
                   {"timestamp": {$lte: options.to || Date.now()}}]         
        }
        if(options.user)    filter.user = options.user
        if(options.channel) filter.channel = options.channel
        
        db.find(filter, (err, docs) => {
            if (err) rej(err)
            res(docs)
        })
    })
}
async function getBans(guild, options) {
    return new Promise((res, rej) => {
        let data = await db.get(guild,"bans")
        let filter = {
            $and: [{"timestamp": {$gte: options.from || 0}},
                   {"timestamp": {$lte: options.to || Date.now()}}]         
        }      
        
        db.find(filter, (err, docs) => {
            if (err) rej(err)
            res(docs)
        })
    })
}
async function getReaction(guild, options) {
    return new Promise((res, rej) => {
        let data = await db.get(guild,"reactions")
        let filter = {
            $and: [{"timestamp": {$gte: options.from || 0}},
                   {"timestamp": {$lte: options.to || Date.now()}}]         
        }      
        if(options.user)    filter.user = options.user
        if(options.channel) filter.channel = options.channel
        
        db.find(filter, (err, docs) => {
            if (err) rej(err)
            res(docs)
        })
    })
}
async function getMembersTotal(guild, options) {
    return new Promise((res, rej) => {
        let data = await db.get(guild,"memberstotal")
        let filter = {
            $and: [{"timestamp": {$gte: options.from || 0}},
                   {"timestamp": {$lte: options.to || Date.now()}}]         
        }      
        
        db.find(filter, (err, docs) => {
            if (err) rej(err)
            res(docs)
        })
    })
}
async function getMembersJoined(guild, options) {
    return new Promise((res, rej) => {
        let data = await db.get(guild,"membersjoined")
        let filter = {
            $and: [{"timestamp": {$gte: options.from || 0}},
                   {"timestamp": {$lte: options.to || Date.now()}}]         
        }      
        
        db.find(filter, (err, docs) => {
            if (err) rej(err)
            res(docs)
        })
    })
}



