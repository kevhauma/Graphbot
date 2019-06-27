let Discord = require("discord.js")
let env : require("config.json")
const client = new Discord.Client()

let channel;


//let graph = require("./modules/graph/drawGraph.js")
//let em = require("./modules/graph/createEmbed.js")
let db = require("./modules/database/dataStore.js")
//
//

//client.on("ready", async () => {
//    channel = client.guilds.first().channels.array().find(c => c.name == "bot_testing")
//    console.log(`active in ${client.guilds.size} servers`)
//        let data = []
//        for (let i = 0; i < 100; i++) {
//            data.push({
//                value: Math.random() * 20 - 10,
//                key: i
//            })
//        }
//    
//        let gra = await graph.draw(data)
//    
//        let embed = em(g, {
//            title: "random data",
//            descr: "pls work"
//        })
//        await channel.send(embed);
//    
//        fs.unlinkSync(`./images/${g}`)
//})


client.login(endv.token)
