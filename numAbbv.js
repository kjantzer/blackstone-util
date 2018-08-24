
let numeral = require('numeral')

module.exports = function(val, opts={}){

	opts = _.extend({
		min: 9999
	}, opts)

	val = parseFloat(val||0);
	let absVal = Math.abs(val);

	var num = numeral(val);

	if( absVal < opts.min )
		return num.format('0,0')

	if( absVal < 99999 )
		return num.format('0.[0]a')

	if( absVal < 999999 )
		return num.format('0a')

	return num.format('0.[00]a')

	var num = numeral(parseFloat(num));
	return decimal === false ? num.format('0a') : num.format('0.[00]a')
}