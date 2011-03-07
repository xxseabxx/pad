import("etherpad.log");
import("plugins.langTag.hooks");
import("plugins.langTag.static.js.main");
jimport ("java.io.BufferedReader",
		"java.io.IOException",
		"java.io.InputStreamReader",
		"java.net.MalformedURLException",
		"java.net.URL",
		"java.lang.System.out.println");



function langTagInit() {
 this.hooks = ['twitterStyleTagsTagSelector'];
 this.description = 'Language tag inserter (for twitterStyleTags).';
 this.client = new main.langTagInit();
 this.twitterStyleTagsTagSelector = hooks.tagSelectors;
 this.install = install;
 this.uninstall = uninstall;
 
 println("zotero rest");
 


}

function install() {
 log.info("Installing langTag");
}

function uninstall() {
 log.info("Uninstalling langTag");
}

