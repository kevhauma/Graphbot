let dr = require("../database/dataRepo.js")
let commandHandler = require("./commandHandler.js")
let messageHandler = require("./commandHandler.js")

function handleMessage(message, clientID) {
    if (!message.channel.type !== "text")
        return // don't do anything in DMs (yet)
        
    messageHandler.handle(message)

    if (!message.mentions.users.array().find(u => u.id == clientID)) 
        return //if bot is not mentioned, don't reply to commands

    commandHandler.handle(message)

    dr.add(message.guild, "message", {
        channel: message.channel.id,
        member: message.author.id
    })


    if (!message.content.startsWith(prefix)) return

    let graphOptions = options.parse(message)


}
function handleReaction(reaction, user) {
    if (!message.channel.type !== "text") return

    dr.add(reaction.message.guild.id, "reactions", {
        user: user.id,
        channel: reaction.message.channel.id
    })
}
function handleBan(guild, user) {
    dr.add(guild.id, "bans", {
        user: user.id
    })

}
function handleJoin(member) {
    dr.add(member.guild.id, "membersJoined", {
        user: user.id,
        type: "join"
    })
    dr.add(member.guild.id, "membersTotal", {
        total: member.guild.membersCount
    })
}
function handleLeave(member) {
    dr.add(member.guild.id, "membersJoined", {
        user: user.id,
        type: "leave"
    })
    dr.add(member.guild.id, "membersTotal", {
        total: member.guild.membersCount
    })
}

module.exports = {
    message: handleMessage,
    reaction: handleReaction,
    ban: handleBan,
    join: handleJoin,
    leave: handleLeave
}
