////////////////////////////dice functions dice.js ///////////////////////////
/* dependency: output.js */
/*

CSS:
.dice {
    display: inline-block;
    width: 150px;
    height: 150px
}

*/

var DICE = {
    draw: function(howMany) {
        var id = DICE.output;
        var dieElement = "<div class='dice'><canvas></canvas></div>";
        $("#" + id).html("");
        var sum = 0;
        for (var ix = 0; ix < howMany; ix++) {
            var temp = RND(1, 6);
            addDie(ix);
            drawFace(temp, "d" + ix);
            sum += temp;
        }
        return sum;

        function addDie(x) {
            $("#" + id).append(dieElement);
            $("#" + id + " div").last().attr("id", "X" + x);
            $("#X" + x + " canvas").attr("id", "d" + x);
            return;
        }

        function drawFace(x, id) {
            x--;
            var c = $("#" + id)[0];
            var cx = c.getContext("2d");
            img = new Image();
            //img.src = '/Sprite/dice6.sprite.png';
            img.src = 'http://www.c00lsch00l.eu/Sprite/dice6.sprite.png';
            var W = 120;
            img.onload = function() {
                cx.translate(W, 0);
                cx.rotate(Math.PI / 2);
                cx.clearRect(0, 0, W, W);
                cx.drawImage(img,
                    W * x, 0, W, W,
                    0, 0, W, W);
            };
            return;
        }

        function RND(start, end) {
            return Math.floor(Math.random() * (++end - start) + start);
        }
    },
    output: "",
    container: "",
    setOutput: function(id) {
        DICE.output = id;
    },
    init: function() {
        $("#" + DICE.container).append("<div id='" + DICE.output + "'></div>");
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////
