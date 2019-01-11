module.exports = {
	
    plural: require('./plural'),
	
	selectText: require('./selectText'),
	
	metaKey: require('./metaKey'),
	store: require('./store'),

    copyKey(e){
        e = e || event;
        return e && e.which == 67 && _.metaKey(e);
    },
	
	isMac(){
        return navigator.userAgent.indexOf('Mac OS X') != -1
    },
	
	isWin(){
        return navigator.userAgent.indexOf('Windows') != -1
    },
	
	sortString: require('./sortString'),
	
	smartSplit: require('./smartSplit'),
	
	// DEPRECATED - use smartSplit
	splitAndTrim: function(str, separator){
        if( !str ) return [];
		return (str||'').trim().split(separator||',').map(val=>val.trim())
    },
	
	dateToInteger: function(str){
        return parseInt((str||'').replace(/[:\/\-\s]/g, ''))
    },
	
	formatCurrency: require('./formatCurrency'),
	
	numAbbv: require('./numAbbv'),
	round: require('./round'),
	
	nearestHalf(num){ return Number((Math.round(num * 2) / 2).toFixed(2))},
    nearestThird(num){ return Number((Math.round(num * 3) / 3).toFixed(2)) },
    nearestQuarter(num){ return Number((Math.round(num * 4) / 4).toFixed(2)) },
	
	prettyDecimal: require('./prettyDecimal'),
	
	randomInt(min=1, max=1000) {
        return min + Math.floor(Math.random() * (Number(max) - min + 1));
    },
	
	letterOfAlphabet: function(val){
		val += 64;
		if( val < 65 || val > 91 ) return ''
		return String.fromCharCode( val )
    },
	
	ISBN: require('./isbn'),
	
	numberToWords: require('./numberToWords'),
	
	relativeDate: require('./relativeDate'),
	
	searchParam: require('./location.searchParam')
}
