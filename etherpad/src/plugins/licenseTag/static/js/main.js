

function licenseTagInit() {
  this.hooks = [];
  this.licenseTagClicked = licenseTagClicked;
  this.licenseTagSelectLicenseClicked = licenseTagSelectLicenseClicked;
  alert($().jquery);;



}

function licenseTagClicked () {
  $('#licenseTag-license-selector').toggle();
  
}

function licenseTagSelectLicenseClicked(license) {
  padeditor.ace.replaceRange(undefined, undefined, " #cite:" + license + " ");
  padeditor.ace.focus();
  $('#licenseTag-license-selector').toggle();
}

// Accepts a url and a callback function to run.
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
licenseTag = new licenseTagInit();
