let Discord = require("discord.js")

function embed(file, options) {
    const em = new Discord.RichEmbed()
        .setTitle(options.title || "graph")
        .setDescription(options.descr || "Data")
        .setColor(options.color || "#0099ff")
        .attachFiles([`./images/${file}`])
        .setImage(`attachment://${file}`)
        .setTimestamp()
        .setFooter("made with Statistic Bot")
    console.log(em)
    return em
}

module.exports = embed