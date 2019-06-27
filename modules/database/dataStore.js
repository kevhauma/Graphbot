const Datastore = require('nedb')
let fs = require("fs")
const types = require("../StatTypes.js")
let dbs = {}



loadDatabases()


async function get(guild, type) {
    if (!types.includes(type.toLowerCase())) throw "type not found"
    return await findDB(guild, type)

}
module.exports = {
    guilds: Object.keys(dbs),
    get
}

function loadDatabases() {
    fs.readdir("./data/", async (err, folders) => {
        if (err) throw `error loading databases: ${err.mesages}`
        for (let guild of folders) {
            for (let type of types) {
                await findDB(guild, type)
            }
        }
        console.log(dbs)
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
