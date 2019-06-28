let fs = require("fs")
let options = require("../options/options.js")
let graph = require("../graph/graph.js")
let dr = require("../database/dataRepo.js")



async function handle(message) {
    try{
    let cleanMessage = message.content.replace(/<[@#]\d*>/,"").trim().toLowerCase()
    
    if(cleanMessage.includes("help")){
        let embed = options.embed()
        await message.channel.send({embed})
        console.log("sending embed")
        return
    }
    
    let opts = options.parse(message)
    
    return
    //getting relevant entries from database to graph
    let data = await dr.get(message.guild, opts.dataType, opts)
    
    data = prepareData(data,opts)

    let graphName = await graph.draw(data,opts)
    
    let embed = graph.embed(graphName,{title:opts.dataType,descr:niceString(opts)})
    
    await channel.send(embed);    
    //delete graphImage after sending
    fs.unlinkSync(`./images/${graphName}`)
    }catch(e){throw e}
}

module.exports = {handle}