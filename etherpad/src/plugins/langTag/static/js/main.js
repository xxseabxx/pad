function langTagInit() {
  this.hooks = [];
  this.langTagClicked = langTagClicked;
  this.langTagSelectLangClicked = langTagSelectLangClicked;
  var path = 'https://api.zotero.org/users/188286/collections/ZUD7JW6D/items?apiKey=3atnk1bqyhdej89qlapv2ueq&format=bib&style=apa';
	
	requestCrossDomain(path, function(results) {
		alert("hallo");
	});
  
}

function langTagClicked () {
  
  $('#langTag-language-selector').toggle();
  
}

function langTagSelectLangClicked(lang) {
  padeditor.ace.replaceRange(undefined, undefined, " #lang:" + lang + " ");
  padeditor.ace.focus();
  $('#langTag-language-selector').toggle();
}
function requestCrossDomain( site, callback ) {

	if ( !site ) {
		alert('No site was passed.');
		return false;
	}

	var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=xml&callback=?';
	$.getJSON( yql, cbFunc );
	
	function cbFunc(data) {
	// If we have something to work with...
	if ( data.results[0] ) {
		// Strip out all script tags, for security reasons.
		// BE VERY CAREFUL. This helps, but we should do more. 
		data = data.results[0].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

		if ( typeof callback === 'function') {
			callback(data);
		}
	}
	
	else throw new Error('Nothing returned from getJSON.');
	}
}

/* used on the client side only */
langTag = new langTagInit();
