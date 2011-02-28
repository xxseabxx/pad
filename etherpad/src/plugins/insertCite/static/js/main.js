function citeTagInit() {
  this.hooks = [];
  this.citeTagClicked = citeTagClicked;
  this.citeTagSelectciteClicked = citeTagSelectciteClicked;
}

function citeTagClicked () {
  $('#citeTag-language-selector').toggle();
}

function citeTagSelectciteClicked(cite) {
  padeditor.ace.replaceRange(undefined, undefined, " #cite:" + cite + " ");
  padeditor.ace.focus();
  $('#citeTag-language-selector').toggle();
}


/* used on the client side only */
citeTag = new citeTagInit();
