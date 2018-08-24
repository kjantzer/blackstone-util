/*
    Relative Date

    original work by: 2011 John Resig (ejohn.org)

    returns relative date (just now, 5 minutes ago, yesterday, etc)
    or a formatted date if over a week old. optionally pass true for "returnWeeks"
    if you want number of weeks returned (up to one month) instead of a formatted date
	
	NOTE: relies on moment.js
*/

let relativeDate = function(time, opts){
	
	if( !time ) return ''
	
	if( time._isAMomentObject )
		time = time.format('YYYY-MM-DD HH:mm:ss')
	else
		time = moment(time).format('YYYY-MM-DD HH:mm:ss')

	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);

	if ( isNaN(day_diff) )
		return '';
		
	// backwards compatibility
	if( opts && opts === true )
		opts = {weeks:true}
	else 
		opts = opts || {};

	if( day_diff < 0  )
		return relativeDateFuture(time, opts);

	if( (day_diff >= 7 && opts.weeks !== true) || day_diff > 31)
		return moment(time).format('M/D/YY');

	return day_diff == 0 && (
			opts.hours === false && diff < 86400 && (diff < 43200 ? "today" : 'yesterday') ||
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		(day_diff <= 31 && (
			Math.ceil( day_diff / 7 ) == 1 && '1 week ago' ||
			Math.ceil( day_diff / 7 ) + " weeks ago"));
}

// I don't like duplicating code, but this will work for now
let relativeDateFuture = function(time, opts){

	time = moment(time).format('YYYY-MM-DD HH:mm:ss')

	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = ((date.getTime() - (new Date()).getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);

	if ( isNaN(day_diff) )
		return '';
		
	// backwards compatibility
	if( opts && opts === true )
		opts = {weeks:true}
	else 
		opts = opts || {};

	if( day_diff < 0  )
		return relativeDate(time, opts);

	if( (day_diff >= 7 && opts.weeks !== true) || day_diff > 31)
		return moment(time).format('M/D/YY');

	return day_diff == 0 && (
			opts.hours === false && diff < 86400 && (diff < 43200 ? "today" : "tomorrow") ||
			diff < 60 && "now" ||
			diff < 120 && "in 1 minute" ||
			diff < 3600 && "in " + Math.floor( diff / 60 ) + " minutes" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && "in " + Math.floor( diff / 3600 ) + " hours") ||
		day_diff == 1 && "tomorrow" ||
		day_diff < 7 && "in " + day_diff + " days" ||
		(day_diff <= 31 && (
			Math.ceil( day_diff / 7 ) == 1 && 'in 1 week' ||
			"in " + Math.ceil( day_diff / 7 ) + " weeks"));
}

module.exports = relativeDate