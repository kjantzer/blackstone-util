
module.exports = function(val){
	val = (val || '')+'';
	val = val.replace(/^0\./,'.')
	val = val.replace(/\.00?$/, '')
	val = val.replace(/\.25$/, '¼')
	val = val.replace(/\.33$/, '⅓')
	val = val.replace(/\.50?$/, '½')
	val = val.replace(/\.75$/, '¾')
	return val;
}