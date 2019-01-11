module.exports = function(str, stripQuotes=true){
	
	if( !str ) return str;
	
	if( stripQuotes )
		str = str.replace(/"|“|”|'|‘|’/g, '')
	
	return str.replace(/(^The |^A |^An )(.*)/g, (match, p1, p2)=>{
		return p2 + (p1 ? ', '+p1.trim() : '')
	})
}