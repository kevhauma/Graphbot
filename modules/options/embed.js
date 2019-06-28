let Discord = require("discord.js")


function embed() {
    let options = require("./options.js").options
    const em = new Discord.RichEmbed()
        .setTitle("graphBot's options")
        .setDescription("**mention me for graphing capabilities**\n```@GraphBot#7697  -data messages -from 2019/01/06 -to 2019/03/06 -size 800,200 -compare time```\n**which means:** \n```graph:\n• the messages\n• from 6 jan 2019 to 6 may 2019\n• to 800pixels wide, 200pixels high canvas\n• compare it over time```\n\nall options:")
        .setColor("#00bbff")
        .setTimestamp()
        .setFooter("made with GraphBot")

    for (let option of options) {
        let possiblities = option.values ? `[${option.values.join(" | ")}]` : ""
        em.addField(option.calls.map(x => `-${x}`).join(" "), `${option.descr} \`default: ${option.def}\` ${possiblities}`, false)
    }

    return em
}

module.exports = embed
