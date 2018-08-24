module.exports = function(el){
	if (document.selection) {
		let range = document.body.createTextRange();
		if( el )
			range.moveToElementText(el);
		range.select();
	} else if (window.getSelection) {
		let selection = window.getSelection();    // Save the selection.
		let range = document.createRange();
		if( el )
			range.selectNodeContents(el);
		selection.removeAllRanges();          // Remove all ranges from the selection.
		selection.addRange(range);            // Add the new range.
	}
}