
module.exports = Array.prototype.pluck =  function(val){
	return this.map(d=>{
        return typeof val == 'function' ? val(d) : d[val]
    })
}

Object.defineProperty(Array.prototype, 'pluck', {enumerable: false});