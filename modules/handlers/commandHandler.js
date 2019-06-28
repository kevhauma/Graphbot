let fs = require("fs")
let options = require("../options/options.js")
let graph = require("../graph/graph.js")
let dr = require("../database/dataRepo.js")



async function handle(message) {
    let cleanMessage = message.content.replace(/<@\d*>/,"").trim()
    if(cleanMessage.toLowerCase==="help"){
        await message.send(options.embed)
        return
    }
    
    
    
    let opts = options.parse(message)

    let data = await dr.get(message.guild, opts.dataType, {
        from: opts.from,
        to: opts.to,
        users: opts.users,
        channels: opts.channels
    })
    

    let graphName = await graph.draw(data,opts)
    
    let embed = graph.embed(graphName,{title:opts.dataType,descr:niceString(opts)})
    
    await channel.send(embed);
    //delete graphImage after sending
    fs.unlinkSync(`./images/${graphName}`)
    
        

}

module.exports = { handle}