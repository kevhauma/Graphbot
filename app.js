const Discord = require("discord.js")
require('dotenv').config()
const client = new Discord.Client()

const handler = require("./modules/handlers/eventHandler.js")
const er = require("./modules/graph/graph.js")

client.on("ready", () => {
    console.log(`active in ${client.guilds.size} servers`)


})
client.on("message",           (message      ) => handler.message(message,client.user.id))
client.on("messageReactionAdd",(reaction,user) => handler.reaction(reaction,user))
client.on("guildBanAdd",       (guild,   user) => handler.ban(guild,user))
client.on("guildMemberAdd",    (member       ) => handler.join(member))
client.on("guildMemberRemove", (member       ) => handler.leave(member))

client.login(process.env.TOKEN)
