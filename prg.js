///////////////////////////////prg.js/////////////////////
/*
dependency: none;

HTML: 
<h1 id="title"></h1>
<p class="version" id="version"></p>
<div id="load"></div>
<div id="preload"></div>
<div class="win" id="setup">
  <p id="buttons"></p>
</div>

CSS:
.version {
  font-family: Consolas;
  font-size: 10px;
}

#preload {
  display: none
}

*/

var PRG = {
  VERSION: "1.14",
  NAME: "LS LIBRARY",
  SOURCE: "http://www.c00lsch00l.eu/Games/AA/",
  SRC_rel: "/Games/AA/",
  tileGraphics: [],
  INIT: function() {
    console.clear();
    console.log(PRG.NAME + " " + PRG.VERSION + " by Lovro Selic, (c) C00lSch00l 2016");
    $("#title").html(PRG.NAME);
    $("#version").html(PRG.NAME + " V" + PRG.VERSION + " <span style='font-size:14px'>&copy</span> C00lSch00l 2016");
    $("#load").append("<canvas id ='preload_canvas' width='" + INI.LOAD_W + "' height='" + INI.LOAD_H + "'></canvas>");
    PRG.ctx = $("#preload_canvas")[0].getContext("2d");
  },
  setup: function() {},
  start: function() {
    console.log(PRG.NAME + " started.");
  },
  preLoadImages: function() {
    PRG.count = 0;
    var fileNames = getImgFileNames();
    PRG.HMI = fileNames.length;
    for (var ix = 0; ix < PRG.HMI; ix++) {
      PRG.tileGraphics[ix] = new Image();
      PRG.tileGraphics[ix].onload = cnt;
      PRG.tileGraphics[ix].src = fileNames[ix].filename;
      $("#preload").append("<img id='" + fileNames[ix].id + "' src='" + fileNames[ix].filename + "'/>");
    }
    return;

    function cnt() {
      PRG.count++;
      drawLoadingGraph();

      if (PRG.count === PRG.HMI) {
        PRG.imagesLoaded = true;
        $("#buttons").prepend("<input type='button' id='startGame' value='START'>");
        //$("#load").addClass("hidden");
        $("#startGame").on("click", PRG.start);
      }
    }

    function drawLoadingGraph() {
      var percent = Math.floor((PRG.count / PRG.HMI) * 100);
      var CTX = PRG.ctx;
      CTX.clearRect(0, 0, INI.LOAD_W, INI.LOAD_H);
      CTX.beginPath();
      CTX.lineWidth = "1";
      CTX.strokeStyle = "black";
      CTX.rect(0, 0, INI.LOAD_W, INI.LOAD_H);
      CTX.closePath();
      CTX.stroke();
      CTX.fillStyle = "#999";
      CTX.fillRect(1, 1, Math.floor((INI.LOAD_W - 2) * (percent / 100)), INI.LOAD_H - 2);
      CTX.fillStyle = "black";
      CTX.font = "10px Verdana";
      CTX.fillText("Loading: " + percent + "%", INI.LOAD_W * 0.1, INI.LOAD_H * 0.62);

      return;
    }

    function getImgFileNames() {
      var fileNames = [];
      for (var prop in World) {
        var LN = World[prop].length;
        if (LN) {
          for (var ix = 0; ix < LN; ix++) {
            var name = PRG.SOURCE + World[prop][ix].id + "." + World[prop][ix].type;
            fileNames.push({
              id: World[prop][ix].id,
              filename: name
            });
          }
        }
      }
      return fileNames;
    }
  }
};

var CONST = {
  SPACE: "\u0020",
  NBS: "&nbsp",
  NEWLINE: "\n"
};
var INI = {
  LOAD_W: 202,
  LOAD_H: 22
};

/////////////////

var Tile = function(id, x, y, type) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.type = type;
};

///////////////Example////////////////////
var Coolie = new Tile("Coolie2", 48, 48, "png");

var World = {
  something: [Coolie]
}; //for preloading

////////////////////////
