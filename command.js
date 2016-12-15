//////////////////////////////////////////////////command.js////////////////////
/*
dependency: io.js
*/

var Command = {
  get: function() {
    var commandLine = $("#" + Inputs.asId).val();
    Command.print(commandLine);
    Command.store(commandLine.toLowerCase());
    Command.interpret();

    if (true) {
      Command.new();
    } else {
      /*GAME OVER*/
    }
  },
  interpret: function() {
    Command.count++;
    var firstCommand = Command.storage.shift();
    if (typeof Command.com[firstCommand] === "function") {
      Command.com[firstCommand]();
    } else {
      Command.syntaxError();
    }
  },
  syntaxError: function() {
    var ErrorMessages = ["This is not valid command.", "You want what?", "Try making sense.", "I don't understand you.", "Just typing rubbish or what?", "Hmm?", "What do you want?", "This makes no sense.", "Please try again, I don' understand.", "What??"];
    print(ErrorMessages.chooseRandom());
  },
  new: function() {
    INPUT();
  },
  print: function(data) {
    $("#" + Inputs.wrapperId).remove();
    PRINT(">" + data.toUpperCase()); //check the PRINT output setting!!
  },
  storage: [],
  store: function(data) {
    Command.storage.clear();
    var array = data.split(" ");
    array.remove("");
    Command.storage = array;
  },
  collect: function() {
    var completeCommand = [];
    var what = Command.storage.shift();
    while (what) {
      completeCommand.push(what);
      what = Command.storage.shift();
    }
    var completed = completeCommand.join(" ");
    return completed;
  },
  collectNext: function() {
    return Command.storage.shift();
  },
  com: {
    help: function() {
      print("List of commands:");
      var keys = Object.keys(Command.com);
      var text = keys.join(", ").toUpperCase();
      print(text);
    }
  }
};
////////////////////////////////end of command.js//////////////////////////////