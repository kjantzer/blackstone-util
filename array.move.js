
module.exports = Array.prototype.move = function(fromIndex, toIndex) {
	this.splice(toIndex, 0, this.splice(fromIndex, 1)[0] );
	return this;
}

Object.defineProperty(Array.prototype, 'move', {enumerable: false});