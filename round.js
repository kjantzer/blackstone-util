
module.exports = function(num, decimal=2){
	if( typeof num == 'string' )
		num = parseFloat(num)
	
	let divisor = [1, 10, 100, 1000, 10000, 100000][decimal] || 100 // TODO: allow more decimals?
	
	return Math.round(num * divisor) / divisor 
}