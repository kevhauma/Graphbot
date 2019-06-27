const Discord = require("discord.js")
require('dotenv').config()
const client = new Discord.Client()

const handler = require("./handlers/eventHandler.js")




client.on("ready", async() => {
    console.log(`active in ${client.guilds.size} servers`)
    //code to put post graph, have to be somewhere else
    //        let gra = await graph.draw(data)
    //    
    //        let embed = em(g, {
    //            title: "random data",
    //            descr: "pls work"
    //        })
    //        await channel.send(embed);
    //    
    //        fs.unlinkSync(`./images/${g}`)

})

client.on("message", handler.messsage)
client.on("messageReactionAdd", handler.reaction)
client.on("guildBanAdd", handler.ban)
client.on("guildMemberAdd", handler.join)
client.on("guildMemberRemove", handler.leave)

client.login(process.env.TOKEN)
