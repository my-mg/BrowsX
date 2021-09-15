var commandList = ["cat", "clear", "help", "ls", "man", "ps"];
var ls = "list all files in the current directory.";
var help = "list possible terminal commands.";
var cat = "cat [filename] will print the contents of that file.";
var clear = "clear all text in the terminal.";
var reverse = "reverse to the previous section of the page.";
var man = "describe a file, but you know that already don't you?";
var ps = "list the current processes";
this["about.txt"] =
  "Termux by Malaysia system maker.";
this["projects.txt"] =
  "Termux by MY sys Maker. ";
this["link.txt"] =
  "all record for do web publish, suspend,are here. Prototype by MY sys maker. ";
var files = ["about.txt", "projects.txt"];
var allFiles = ["about.txt", "projects.txt", "link.txt"];
var user = "root@user:~$";
var commandHistory = [];
var commandIndex = -1;

function currentBrowser() {
  var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
  var is_explorer = navigator.userAgent.indexOf("MSIE") > -1;
  var is_firefox = navigator.userAgent.indexOf("Firefox") > -1;
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  var is_edge = navigator.userAgent.indexOf("Edge") > -1;
  var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
  if (is_chrome && is_safari && is_edge) {
    is_chrome = false;
    is_safari = false;
