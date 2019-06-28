let embed = require("./embed.js")
let parse = require("./parse.js")
let c = require("../../config.json")
let types = require("../types/StatTypes.js").types


let dataType = createOption(["data","d"],"messages","which data set",types,validateOptions)
let from = createOption(["from","f"],"first record","start date in format `YYYY/MM/DD`",null,validateDate)
let to = createOption(["to","t"],"today","end date in format `YYYY/MM/DD`",null,validateDate)
let users = createOption(["users","u"],"everyone","mention users to see their related data",null,dummy)
let channels = createOption(["channels","ch"],"whole server","see related data of the tagged channels",null,dummy)
let color = createOption(["color","co"],c.defaultColor,"change color of graph by hex code",null,dummy)
let size = createOption(["size","s"],`${c.graphSize.width},${c.graphSize.height}`,"change size (in pixels) of graph in format `width,height` (max: 1000,1500)",null,dummy)
let base = createOption(["base","b"],"relative","change base of graph: starts at 0, or use min and max values",["zero","relative"],validateOptions)
let grouping = createOption(["group","g"],c.defaultGrouping,"group data points, max 100 points",["hours","weeks","months","<number>"],dummy)
let type = createOption(["type"],"line","line or bar graph",["line","bar"],validateOptions)
let compare = createOption(["compare"],"time","data over time, or comparing",["time","hours-day","days-week","days-month"],validateOptions)

module.exports ={
    options : [dataType,from,to,users,channels,color,size,base,grouping,type,compare],
    parse,
    embed
}


function createOption(calls,def,descr,values,validate){
    return {calls,descr,values,def,validate}
}
function validateDate(v){
    if(/\d{4}\/\d{2}\/\d{2}/.test(v)){
        let date = new Date(v.replace("/","-"))
        date.setMonth(date.getMonth()-1)
        date.setDate(date.getDate()-1)        
        return date
    }
    else throw `${v} doesn't fit the date format`
    
}
function dummy (v){
    return v
}
function validateOptions(v){
    if(!this.values.includes(v))
        throw `${v} is not a valid option for ${this.calls[0]} ${this.value}`
    console.log(this.calls[0] + " validated")
}
