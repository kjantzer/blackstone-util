
// adds value if it doesn't already exist
module.exports = Array.prototype.pushUniq =  function(val, returnSuccess){
    
	var indx = _.indexOf(this, val);
    if( indx < 0)
        this.push(val);
    return returnSuccess ? indx<0 : this;
}

Object.defineProperty(Array.prototype, 'pushUniq', {enumerable: false});