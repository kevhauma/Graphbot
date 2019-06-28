require('dotenv').config()
let dr = require("../database/dataRepo.js")
let error = require("../logger/error.js")
let commandHandler = require("./commandHandler.js")
let messageHandler = require("./messageHandler.js")

function handleMessage(message, clientID) {
    try {
        if (message.author.bot)
            return //don't respond to bots

        if (message.channel.type !== "text")
            return // don't do anything in DMs (yet)

        messageHandler.handle(message)

        if (!message.mentions.users.array().find(u => u.id == clientID))
            return //if bot is not mentioned, don't reply to commands
    }
    catch (e) {
        error.log(e)
    }

    try {
        commandHandler.handle(message)
    }
    catch (e) {
        message.channel.send(`Something went wrong: \`\`\`${e}\`\`\``)
    }
}

function handleReaction(reaction, user) {
    try {
        if (!message.channel.type !== "text") return

        dr.add(reaction.message.guild.id, "reactions", {
            user: user.id,
            channel: reaction.message.channel.id
        })
    }
    catch (e) {
        error.log(e)
    }
}

function handleBan(guild, user) {
    try {
        dr.add(guild.id, "bans", {
            user: user.id
        })
    }
    catch (e) {
        error.log(e)
    }
}

function handleJoin(member) {
    try {
        dr.add(member.guild.id, "membersJoined", {
            user: user.id,
            type: "join"
        })
        dr.add(member.guild.id, "membersTotal", {
            total: member.guild.membersCount
        })
    }
    catch (e) {
        error.log(e)
    }
}

function handleLeave(member) {
    try {
        dr.add(member.guild.id, "membersJoined", {
            user: user.id,
            type: "leave"
        })
        dr.add(member.guild.id, "membersTotal", {
            total: member.guild.membersCount
        })
    }
    catch (e) {
        error.log(e)
    }
}

function handleReady(client) {
    try {
        console.log(`active in ${client.guilds.size} servers`)
        let guild = client.guilds.get(process.env.owner_guild)
        let owner = guild.members.get(process.env.owner)
        if (owner)
            error.setOwner(owner)
        console.log(`Ready to send to owner: ${owner.displayName}`)
    }
    catch (e) {
        error.log(e)
    }
}

module.exports = {
    message: handleMessage,
    reaction: handleReaction,
    ban: handleBan,
    join: handleJoin,
    leave: handleLeave,
    ready: handleReady
}
