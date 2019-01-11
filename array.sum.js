
module.exports = Array.prototype.sum =  function(fn){
    return this.reduce((n, val)=>{
        return parseFloat(typeof fn == 'function' ? fn(val) : val) +n
    }, 0)
}

Object.defineProperty(Array.prototype, 'sum', {enumerable: false});