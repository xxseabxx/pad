function licenseTagInit() {
  this.hooks = [];
  this.licenseTagClicked = licenseTagClicked;
  this.licenseTagSelectLicenseClicked = licenseTagSelectLicenseClicked;
    
  // Objekt erzeugen
    // hier ohne Fallunterscheidung, da für das Beispiel einfacher
    var xmlHttpObject = new XMLHttpRequest();
	
    // Funktion, die bei Statusänderungen reagiert
    function handleStateChange()
    {
        // Derzeitigen Status zurückgeben
        alert("xmlHttpObject.readyState = " + xmlHttpObject.readyState + " HTTP-Status = " + xmlHttpObject.status );
		alert("Ergebnis:" +xmlHttpObject.responseText);
    }
    
    // Wenn Dokument geladen ausführen
    window.onload = function() {
        // Anfrage vorbereiten, ruft www.webmasterpro.de auf

        xmlHttpObject.open('GET', 'https://api.zotero.org/users/188286/collections/ZUD7JW6D/items?apiKey=3atnk1bqyhdej89qlapv2ueq&format=bib&style=apa',true);
        // Handler hinterlegen
        xmlHttpObject.onreadystatechange = handleStateChange;
        // Anfrage abschicken
        xmlHttpObject.send();
    }
}

function licenseTagClicked () {
  $('#licenseTag-license-selector').toggle();
}

function licenseTagSelectLicenseClicked(license) {
  padeditor.ace.replaceRange(undefined, undefined, " #cite:" + license + " ");
  padeditor.ace.focus();
  $('#licenseTag-license-selector').toggle();
}


/* used on the client side only */
licenseTag = new licenseTagInit();
