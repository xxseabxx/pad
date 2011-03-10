import("etherpad.log");
import("plugins.citeTag.hooks");
import("plugins.citeTag.static.js.main");

function citeTagInit() {
 this.hooks = ['twitterStyleTagsTagSelector'];
 this.description = 'Cite Zotero(for twitterStyleTags).';
 this.client = new main.citeTagInit();
 this.twitterStyleTagsTagSelector = hooks.tagSelectors;
 this.install = install;
 this.uninstall = uninstall;
}

function install() {
 log.info("Installing citeTag");
}

function uninstall() {
 log.info("Uninstalling citeTag");
}

