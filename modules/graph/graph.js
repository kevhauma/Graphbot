const Canvas = require('canvas')
const fs = require("fs")
const map = require("../map.js")
let embed = require("./embed.js")
let prepareData = require("./prepareData.js")

let size = require("../../config.json").graphSize
size = {...size, minX: 40, minY: 20}

size.maxX = size.width - 20
size.maxY = size.height - 20



async function draw(array) {
    let interval = (size.maxX - size.minX) / array.length
    let data = normalizeData(array, interval)
    console.log(array, data)

    let img = Canvas.createCanvas(size.width, size.height);
    let ctx = img.getContext('2d')
    
    //    let prev = data.shift()
    //    ctx.fillStyle ="#ffffff"
    //    ctx.fillRect(0, 0, size.width, size.height)
    //    ctx.beginPath()
    //    
    //    ctx.strokeStyle = "#0000ff"
    //    ctx.moveTo(size.minX, size.minY)
    //    ctx.lineTo(size.minX, size.maxY)
    //    ctx.lineTo(size.maxX, size.maxY)
    //    ctx.stroke()
    //    
    //    ctx.moveTo(prev.X, prev.Y)
    //    ctx.strokeStyle = "#ff0000"
    //    data.forEach(v => {
    //        ctx.lineTo(v.X, v.Y)
    //    })
    //    ctx.lineWidth = 3
    //    ctx.stroke()
    //




    name = `graph_${Date.now()}.jpg`
    console.log(name)
    await PImage.encodePNGToStream(img, fs.createWriteStream(`./images/${name}`))
    console.log("created image")
    return name


}

module.exports = {
    draw,
    embed,
    prepareData
}

function normalizeData(array, interval) {
    //y values (actaul value)
    let maxY = Math.max(...(array.map(v => v.value)))
    let minY = Math.min(...(array.map(v => v.value)))
    console.log(`minVal: ${minY} | maxVal: ${maxY}`)
    //return scaled values
    return array.map(v => ({
        X: Math.round(v.key * interval) + size.minX,
        Y: Math.round(map(v.value, minY, maxY, size.maxY, size.minY))
    }))


}
