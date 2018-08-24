/*
	Smart Split - splits string on comman delimited, tab delimited, or new line
	https://gist.github.com/kjantzer/3da1d9ce55a658ee4389
*/
module.exports = function(str){
	var vals = [];

	if( str && str.trim )
		str = str.trim();

	if( !str ) // empty string, null, false, etc
		return [];

	if( str.match(/,/) )
		vals = str.split(',')
	else if( str.match(/\t/) )
		vals = str.split("\t")
	else
		vals = str.split("\n")

	return _.invoke(vals, 'trim')
}