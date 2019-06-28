const Discord = require("discord.js")
require('dotenv').config()
const client = new Discord.Client()

const handler = require("./modules/handlers/eventHandler.js")
const er = require("./modules/graph/graph.js")

client.on("ready", () => {
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

client.on("message",           (message      ) => handler.messsage(message,client.user.id))
client.on("messageReactionAdd",(reaction,user) => handler.reaction(reaction,user))
client.on("guildBanAdd",       (guild,   user) => handler.ban(guild,user))
client.on("guildMemberAdd",    (member       ) => handler.join(member))
client.on("guildMemberRemove", (member       ) => handler.leave(member))

client.login(process.env.TOKEN)
