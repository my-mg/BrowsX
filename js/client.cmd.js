pentitle="Command Line for Windows ISP Edition";
$(document).ready(function(e) {
  
   var faviconnumber = 1;
	function favicon() {
		favicon = favicon == 1 ? 2 : 1;
		$('.favicon').attr('href','favicon' + favicon + ".png");
	}
   console.clear();
   var commandlist = [
      ["/help", "Show commands"],
      ["/nav &lt;location&gt;", "Navigate to location"],
	  ["/gl", "Generate a url for the current page"],
      ["/list", "List all pages on the website"],
      ["/clear", "Clear the console"],
      ["/login &lt;username&gt; &lt;password&gt;", "Login to your account"],
      ["/upload", "Upload file, must be logged in."]
   ];
   var previouscommands = [];
   var currentcommand = 0;
   var pages = [
      ["index", "Welcome to Windows ISP", "Windows ISP Command Line Centre"],
      ["about", "About Windows ISP", "This is a new windows Edition command line centre, create at Malaysia by Malaysian"],
	  ["connect", "Connect with Windows ISP edition, a windows edition made at Malaysia by Malaysia",
	  "[mailto:_@windowstmnet](Email _@razorlex1995@gmail.com)",
	  "[skype: razorlex1995@gmail.com](Skype)",
	  	];
   var pageindex = ["index", "about", "connect"];
   var currentpage = "landing";
   var url = "http://windowstmnet.ml/"
      /*
         Text Syntax
         Links:      
            [URLPATH](NAME) - regular
            [^URLPATH](NAME) - open in new tab
            
         Styles:
            *TEXT* - bold text

      */

   function init() {
      setInterval(time);
      console.clear();
      console.log(new Date().getTime());
      log("Website", "A! Windows Internet Service Provider Edition ");
      log("Website", '[^http://windowstmnet.ml/](*windowstmnet.ml*)');
      log("Website", "");
      log("Website", "E!Working on the features [^http://windowstmnet.ml/](*WindowsTMnet*)");
      log("Website", "");
	  urlvars();
      log("Client", "For help say '/help'");
	  setInterval(favicon,500);
   }

   function urlvars() {
	   var pagelocs = window.location.pathname.replace("/","").split("/");
	   var pageloc = pagelocs[0];
	   console.log(pageloc);
	   //alert();
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
            }
		}
      	log("Website", "You are currently on page: *" + currentpage + "*");
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
               loadpage($.inArray(pageloc, pageindex));
            } else {
               //log("Client", "404 - The page '" + pageloc + "' does not exist. To ");
            }
		}
		if(pageloc == "") {
      		log("Client", "What would you like to access?");	
		}
   }
   function getParam(name){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec (window.location.href);
		if (results == null) {
			return "";
		}
		else  {
			return results[1];
		}
	}

   function log(name, information) {
      var d = new Date();
      var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
      var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
      var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
      var colour = "whitet";
      var textcolour = "";
      var postcolour = "";

      switch (name[0]) {
         case "!":
            postcolour = " important";
            name = name.substr(1);
            break;
      }
      switch (name) {
         case "Website":
            colour = "redt";
            break;
         case "Server":
            colour = "bluet";
            break;
         case "Client":
            colour = "bluet";
            break;
         case "User":
            colour = "greent";
            postcolour = " selft";
            break;
      }
      if (information[0] == "A" && information[1] == "!") {
         information = information.substr(2);
         information = information.replace(/ /g, '\u00A0');
      }
      if (information[0] == "E" && information[1] == "!") {
         information = information.substr(2);
         postcolour = " important";
      }

      while (information.indexOf("](") >= 0) { //URL parser

         var NAMEregExp = /\(([^)]+)\)/;
         var uname = NAMEregExp.exec(information)[1];

         var URLregExp = /\[([^)]+)\]/;
         var url = URLregExp.exec(information)[1];
         var newpage = false;
         if (url[0] == "^") {
            newpage = true;
            url = url.substr(1);
         }
         var start = information.indexOf("[");
         var end = information.indexOf(")");
         if (newpage) {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
         } else {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working

      }
      var tobold = true;
      var boldnumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            boldnumber++;
         }
      }
      while (information.indexOf("*") >= 0) { //Bold parser
         var pos = information.indexOf("*");
         information = information.replace("*", "");
         if (tobold) {
            information = information.splice(pos, 0, '<b>');
         } else {
            information = information.splice(pos, 0, '</b>');
         }
         tobold = !tobold;
         if (tobold && boldnumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      }
      var tounderline = true;
      var underlinenumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            underlinenumber++;
         }
      }
      while (information.indexOf("**") >= 0) { //Bold parser
         var pos = information.indexOf("**");
         information = information.replace("**", "");
         if (tounderline) {
            information = information.splice(pos, 0, '<u>');
         } else {
            information = information.splice(pos, 0, '</u>');
         }
         tounderline = !tounderline;
         if (tounderline && underlinenumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      } 
      $(".stream").append('<div class="line">' +
         '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
         '<p class="name ' + colour + '">' + name + '</p>' +
         '<p class="information' + postcolour + '">' + information + '</p>' +
         '</div>');
      $(document).scrollTop($(document).height() - $(window).height());
   }
	var timestring = "";
   function time() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      if (hours < 10) {
         hours = "0" + hours;
      }
      if (minutes < 10) {
         minutes = "0" + minutes;
      }
      if (seconds < 10) {
         seconds = "0" + seconds;
      }
	  var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
	  if (temptimestring != timestring) {
		  timestring = temptimestring;
      	$(".editline .time").text(timestring);
	  }
   }

   var ctrldown = false;
   $(".editline .edit").keydown(function(e) {
      var text = $(".editline .edit").text();
      console.log(e.which);
      if (e.which == 13 && text !== "" && !ctrldown) {
         var commands = text.split(' ');
         var output = "";
         if (commands[0] == "help") {
            text = "/" + text;
         }
         $(".editline .edit").text("");
         log("User", text);

         previouscommands[currentcommand] = text;
         currentcommand = previouscommands.length;
         $(".editline .edit").keydown(35);
         cmd(commands[0], text, commands);
         
      }
      if (e.which == 38) { //up
         if (currentcommand > 0) {
            currentcommand--;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
      if (e.which == 40) { //down

         if (currentcommand < previouscommands.length) {
            currentcommand++;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
   });

   function cmd(command, words, word) {
      switch (word[0]) {
         case "/help":
         case "help":
            for (var i = 0; i < commandlist.length; i++) {
               output = commandlist[i][0] + " : " + commandlist[i][1];
               //console.log(command[i][0]);
               log("Client", output);
            }
            break;
		 case "/gl":
			//window.location.href = "http://www." + (currentpage == "landing" ? "" : "/" + currentpage);
			window.history.pushState(currentpage, 'InpagePage', (currentpage == "landing" ? "/" : "/" + currentpage));
			break;
         case "/clear":
            $(".stream").text("");
            break;
         case "/nav":
            if ($.inArray(word[1], pageindex) >= 0) {
               currentpage = word[1];
               log("Website", "You are now in " + currentpage);
               loadpage($.inArray(word[1], pageindex));
            } else {
               log("Client", "'" + word[1] + "' does not exist.");
            }
            break;
         case "/list":
            $.each(pageindex, function(id, content) {
               log("Client", "> " + content);
            });
            break;
         case "/login":
            if (word.length >= 3) {
               log("Client", "Attempting to login to " + word[1] + " with " + Array(word[2].length + 1).join("â€¢"));
               loginreturn = false;
               
               setTimeout(loginemptyreturn, 20000);
            } else {
               log("Client", "Not enough arguments to log in, you need a USERNAME and a PASSWORD.");
            }
            break;
         default:
            output = "Unrecognised command '" + word[0] + "'.";
            log("Client", output);
      }
   }

   function loadpage(i) {
      $.each(pages[i], function(id, content) {
         if (content != pageindex[i]) {
            log("Website", content);
         }
      });
   }
   var loginreturn = false;

   function loginemptyreturn() {
      if (!loginreturn) {
         log("Client", "E![LOGIN] No Return Recieved");
      }
   }
   String.prototype.splice = function(idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
   };
   init();
});
