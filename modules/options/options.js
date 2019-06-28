let c = require("../../config.json")
let types = require=("../types/StatTypes.json").types

let dataType = createOption(["data","d"],"messages","which data set",types)
let from = createOption(["from","f"],"first record","start date in format `YYYY/MM/DD`",null)
let to = createOption(["to","t"],"today","end date in format `YYYY/MM/DD`",null)
let users = createOption(["users","u"],"everyone","mention users to see their related data",null,)
let channels = createOption(["channels","ch"],"whole server","see related data of the tagged channels",null)
let color = createOption(["color","co"],c.defaultColor,"change color of graph by hex code",null)
let size = createOption(["size","s"],`${c.graphSize.width},${c.graphSize.height}`,"change size (in pixels) of graph in format `width,height` (max: 1000,1500)",null)
let base = createOption(["base","b"],"relative","change base of graph: starts at 0, or use min and max values",["zero","relative"])
let grouping = createOption(["group","g"],c.defaultGrouping,"group data points, max 100 points",["hours","weeks","months","<number>"])
let type = createOption(["type"],"line","line or bar graph",["line","bar"])
let flow = createOption(["flow"],"flow","data over time, or comparing",["flow","hours-day","days-week","days-month"])


module.exports ={
    options : [dataType,from,to,users,channels,color,size,base,grouping,type,flow],
    embed: require("./embed.js"),
    parse:function (message){
    return "yo yo "
    }
} 

function createOption(calls,def,descr,options){
    return {calls,descr,options,def}
}