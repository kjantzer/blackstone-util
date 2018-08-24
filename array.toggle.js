
// add or removes an element from an array by checking if it exists already
module.exports = Array.prototype.toggle =  function(val){
	
    var indx = _.indexOf(this, val);
    if( indx > -1)
        this.splice(indx, 1);
    else
        this.push(val);
    return this;
}

Object.defineProperty(Array.prototype, 'toggle', {enumerable: false});