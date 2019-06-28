require('dotenv').config()

const Discord = require("discord.js")
const client = new Discord.Client()

const handler = require("./modules/handlers/eventHandler.js")

client.on("ready",             (              ) => handler.ready(client))
client.on("message",           (message       ) => handler.message(message,client.user.id))
client.on("messageReactionAdd",(reaction, user) => handler.reaction(reaction,user))
client.on("guildBanAdd",       (guild,    user) => handler.ban(guild,user))
client.on("guildMemberAdd",    (member        ) => handler.join(member))
client.on("guildMemberRemove", (member        ) => handler.leave(member))

client.on("reconnecting",   clientOn)
client.on("resume",         clientOn)
client.on("disconnect",     clientOn)
client.on("error",          clientOn)
client.on("debug",          clientOn)
client.on("warm",           clientOn)


function clientOn(message){
    console.log(message)
}

client.login(process.env.TOKEN)
