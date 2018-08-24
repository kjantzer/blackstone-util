/*
	Format Currency - Returns number as currency (US dollar) formatted string.
*/
module.exports = function(num, placeholder) {

	var num = (num||'').toString().replace(/\$|\,/g, '');

	if ( (num == '0' || isNaN(num)) && placeholder)
		return placeholder;
	if(isNaN(num))
		num = '0';

	var sign = (num == (num = Math.abs(num)));

	num = Math.floor(num * 100 + 0.50000000001);
	// var cents = num % 100;
	num = Math.floor(num / 100).toString();

	// if (cents < 10) cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++){
		num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
	}

	return num == 0 ? '-' : (((sign) ? '' : '-') + '$' + num);
}