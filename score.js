/////////////////////////////////////////score.js//////////////
/*
dependency: prototypes.js
codepend: http://codepen.io/laughingskull/pen/WoYMRE?editors=0010

HTML: 
<div id="hiscore"></div>

CSS:
#hiscore {
  border: 1px dotted #888;
  border-radius: 13px;
  padding: 20px;
  box-shadow: 2px 3px 3px 3px #333;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  white-space: pre;
  width: 230px;
}
*/

var SCORE = {
  checkScore: function(xxx) {
    xxx = parseInt(xxx, 10);
    var start = SCORE.SCORE.depth - 1;
    while (xxx > SCORE.SCORE.value[start] && start >= 0) {
      start--;
    }
    start++;
    if (start === SCORE.SCORE.depth) {
      return;
    } else {
      var yourName = prompt("You reached top " + SCORE.SCORE.depth + " score. Enter your name (max 10 characters): ");
      if (yourName.length > 10) {
        yourName = yourName.substring(0, 10);
      } else if (yourName.length < 10) {
        var temp = 10 - yourName.length;
        var sub = "".fill("&nbsp", temp);
        yourName += sub;
      }
      SCORE.SCORE.value.splice(start, 0, xxx);
      SCORE.SCORE.name.splice(start, 0, yourName);
      SCORE.SCORE.value.splice(SCORE.SCORE.depth, 1);
      SCORE.SCORE.name.splice(SCORE.SCORE.depth, 1);
    }
    //$("#setup")[0].scrollIntoView(); //define
    return;
  },
  hiScore: function() {
    var HS = "";
    var tempVal;
    for (var hs = 1; hs <= SCORE.SCORE.depth; hs++) {
      HS += hs + ". " + SCORE.SCORE.name[hs - 1] + " " + SCORE.SCORE.value[hs - 1].toString().padLeft(5, "\u0020") + "<br/>";
    }
    $("#hiscore").html(HS);
    SCORE.saveHS();
    return;
  },
  saveHS: function() {
    localStorage.setItem(SCORE.SCORE.id, JSON.stringify(SCORE.SCORE));
    return;
  },
  loadHS: function() {
    if (localStorage[SCORE.SCORE.id]) {
      SCORE.SCORE = JSON.parse(localStorage[SCORE.SCORE.id]);
    }
  },
  getGrade: function(score) {
    switch (true) {
      case (score === 100):
        return "Amazing! Perfect score.";
      case (score > 95):
        return "Excellent";
      case (score > 90):
        return "Very well done.";
      case (score > 80):
        return "Nice.";
      case (score >= 70):
        return "Hmmm. Play again and try to do better.";
      case (score < 70):
        return "This was not good. You should practice more.";
    }
  },
  SCORE: {
    value: [200, 100, 50, 20, 10],
    name: ['C00lSch00l', 'C00lSch00l', 'C00lSch00l', 'C00lSch00l', 'C00lSch00l'],
    depth: 5,
    id: "TEST_Library"
  },
  dom: "<div id='hiscore'></div>",
  init: function(id) {
    var appTo;
    if (!id) {
      appTo = "body";
    } else appTo = "#" + id;
    $(appTo).append(SCORE.dom);
  }
};

////////////////////end of score.js/////////////////////////
