module.exports = function(e){
	e = e || window.event;
	return e && (e.ctrlKey || e.altKey || e.metaKey);
}