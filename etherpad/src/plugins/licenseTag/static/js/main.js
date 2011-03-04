

function licenseTagInit() {
  this.hooks = [];
  this.licenseTagClicked = licenseTagClicked;
  this.licenseTagSelectLicenseClicked = licenseTagSelectLicenseClicked;

}

function licenseTagClicked () {
  $('#licenseTag-license-selector').toggle();
        xmlHttpObject.open('GET', 'https://api.zotero.org/users/188286/collections/ZUD7JW6D/items?apiKey=3atnk1bqyhdej89qlapv2ueq&format=bib&style=apa',true);
        // Handler hinterlegen
        xmlHttpObject.onreadystatechange = handleStateChange;
        // Anfrage abschicken
        xmlHttpObject.send();
}
function handleStateChange()
{
        alert("xmlHttpObject.readyState = " + xmlHttpObject.readyState + " HTTP-Status = " + xmlHttpObject.status );
		alert("Ergebnis:" +xmlHttpObject.responseText);
}

function licenseTagSelectLicenseClicked(license) {
  padeditor.ace.replaceRange(undefined, undefined, " #cite:" + license + " ");
  padeditor.ace.focus();
  $('#licenseTag-license-selector').toggle();
}

xmlHttpObject = new XMLHttpRequest();
/* used on the client side only */
licenseTag = new licenseTagInit();
