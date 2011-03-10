import("etherpad.log");
import("faststatic");
import("etherpad.utils.*");
import("etherpad.globals.*");

function tagSelectors(arg) {
  return [arg.template.include('citeTagTagSelectors.ejs', undefined, ['citeTag'])];
}
