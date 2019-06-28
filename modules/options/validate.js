function validate(optionObject){
    let options = require("./options.js").options
    let calls= Object.keys(optionObject)    
    for(let call of calls){
        let opt = options.find(o=>o.calls.includes(call))        
        opt.validate(optionObject[call])
    }    
}
    





module.exports = validate