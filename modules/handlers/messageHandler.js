let dr = require("../database/dataRepo.js")

async function handle(message) {    
    if (message.attachments.size > 1 || message.embeds.length > 1) {
        dr.add(message.guild.id, "pics", {
            user: message.author.id,
            channel: message.channel.id
        })
    }
    let mentionsWithoutBots = message.mentions.users.array().filter(u => !u.bot)
    if (mentionsWithoutBots.length > 0) {
        for (let mentions of mentionsWithoutBots) {
            await dr.add(message.guild.id, "pings", {
                ping: mentions.id,
                channel: message.channel.id
            })
        }
    }

    dr.add(message.guild.id, "messages", {
        user: message.author.id,
        channel: message.channel.id
    })
}

module.exports ={handle}