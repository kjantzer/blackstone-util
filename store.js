
// TODO: support prefixing?
module.exports = function(key, val){
	
	let ls = window.localStorage
	
	if( val === undefined ){
		let data = ls.getItem(key)
		let isAmplify = false
		
		if( data === null ){ // TEMP
			isAmplify = true
			data = ls.getItem('__amplify__'+key)
		}
		
		if( data === null || data === undefined )
			return undefined
		
		var val = ''
		try { val = JSON.parse(data) }
		catch(e) { val = data }
		
		return val && isAmplify ? val.data : val;
	}
		
	if( val === null ){
		ls.removeItem('__amplify__'+key)// TEMP
		return ls.removeItem(key)
	}
		
	val = JSON.stringify(val)
	
	return ls.setItem(key, val)
}