const Datastore = require('nedb')
let fs = require("fs")
const types = require("../types/StatTypes.js").types
let dbs = {}



loadDatabases()


async function get(guild, type) {    
    return await findDB(guild, type)
}
module.exports.get = get


function loadDatabases() {
    fs.readdir("./data/", async (err, folders) => {
        if (err) throw `error loading databases: ${err.mesages}`
        
        for (let guild of folders) {
            for (let type of types) {
                await findDB(guild, type)
            }
        }
        module.exports.guilds = Object.keys(dbs)
        console.log(`${Object.keys(dbs).length} databases have initialized`)
    })
}


async function findDB(guild, type) {
    if (!dbs[guild]) dbs[guild] = {}

    if (!dbs[guild][type]) {
        let db = new Datastore(`./data/${guild}/${type}.db`)
        await db.loadDatabase()
        dbs[guild][type] = db
    }
    return dbs[guild][type]
}
