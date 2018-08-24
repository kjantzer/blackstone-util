
module.exports = Array.prototype.remove =  function(val, returnSuccess){

    var indx = _.indexOf(this, val);
    if( indx > -1)
        this.splice(indx, 1);
    return returnSuccess ? indx > -1 : this;
}

Object.defineProperty(Array.prototype, 'remove', {enumerable: false});