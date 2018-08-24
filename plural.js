/*
	Plural - create singlular or plural sentence based on number given (all numbers but 1 return plural sentence)

	var str = "Do you want to delete this? There {are|is} [num] book{s} attached."

	var num = 2 // or 0, 3, 4, ...
		"Do you want to delete this? There are 2 books attached."

	var num = 1
		"Do you want to delete this? There is 1 book attached."
*/

module.exports = function(str, num){
	
	var indx = num == 1 ? 1 : 0;

	if( !_.isNumber(num) ){
		if( !_.numberFormat )
			return console.warn('underscore.string not installed')
		
		num = _.numberFormat(parseFloat(num), ((num % 1)>0?1:0) )
	}

	str = str.replace(/\[num\]/, num);

	str = str.replace(/{(.[^}]*)}/g, function(wholematch,firstmatch){

		var values = firstmatch.split('|');

		return values[indx] || '';
	});

	return str;
}