/*
	DEPRECATED - there is now a URLSearchParams class
	
	https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
*/
let searchParam = function(param, defaultVal){

	let params = {}
	location.search.slice(1).split('&').forEach(v=>{
		[k, v] = v.split('=')
		params[k] = v
	})

	return param ? (params[param] != undefined ? params[param] : defaultVal ) : params

}

module.exports = searchParam

if( typeof location !== 'undefined' )
	location.searchParam = searchParam