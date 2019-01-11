/*
	Smart Split - splits string on comma/pipe delimited, tab delimited, or new line
*/
module.exports = function(str, separator) {
    var vals = []

    if (str && str.trim)
        str = str.trim()

    if (!str || typeof str !== 'string') // empty string, null, false, number, etc
        return vals

	if( separator !== undefined )
        vals = str.split(separator)
	else if( str.match(/,/) )
        vals = str.split(',')
	else if( str.match(/\|/) )
        vals = str.split('|')
	else if( str.match(/\t/) )
        vals = str.split("\t")
	else
        vals = str.split("\n")

	return vals.map(val=>val.trim())
}