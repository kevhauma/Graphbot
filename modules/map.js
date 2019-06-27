//inspired from the Processing/P5 function
//https://processing.org/reference/map_.html
function map(value, min, max, targetmin, targetmax) {
    let range = max - min
    let percent = (value - min) / range
    let targetrange = targetmax - targetmin
    return ((targetrange * percent) + targetmin)
}
//minified
//let map = (v, i, a, ti, ta) => (ti + (ta - ti)) * ((a - i) / (a - i))

module.exports = map