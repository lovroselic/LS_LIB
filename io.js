////////////////////////io.js////////////////////////////////////////
/*

demo: http://codepen.io/laughingskull/pen/WoYXxa?editors=0010#0

CSS:
#Input {
    background: #000;
    color: #0F0;
    font-family: Consolas;
    font-size: 11px;
    text-align: left;
    border: 1px solid black;
    width: 240px;
    text-transform: uppercase;
    padding-left: 8px;
    outline: none
}

#QUERY {
    display: inline-block;
    background-color: #000;
    color: #0F0;
    padding: 3px 0px 3px 0px;
    font-family: Consolas;
    font-size: 12px;
    overflow: hidden;
}

#QUERY p {
    color: #0F0;
    font-family: Consolas;
    font-size: 11px;
    padding-left: 8px;
    line-height: 85%;
}
*/

var Inputs = {
  validate: function(id, min, max, def) {
    $("#" + id).focusout(function() {
      var temp = $(this).val();
      $(this).val(validateInput(temp, min, max, 4));
    });

    function validateInput(set, min, max, def) {
      if (isNaN(set)) return def;
      if (set < min) return min;
      if (set > max) return max;
      return set;
    }
  },
  appendTo: "QUERY",
  asID: "Input",
  wrapperID: "line",
  wrapperFeed: "&nbsp>",
  maxlength: 39
};

(function() {
  function input(value, preWrap) {
    preWrap = preWrap || "";
    value = value || "";
    $("#" + Inputs.appendTo).append("<span id='" + Inputs.wrapperID + "'> " + preWrap + Inputs.wrapperFeed + "<input id='" + Inputs.asID + "' type = 'text' value='" + value + "' autofocus='autofocus' maxlength='" + Inputs.maxlength + "'></span>");
    $("#" + Inputs.appendTo).children().last()[0].scrollIntoView();
    $("#" + Inputs.asID).focus();
  }
  window.INPUT = input;
})();

var Outputs = {
  output: "board",
  type: "p",
  setOutput: function(id) {
    this.output = id;
  },
  setType: function(tip) {
    this.type = tip;
  },
  out: function(data, tag) {
    $("#" + Outputs.output).append("<" + tag + ">" + data + "</" + tag + ">");
  },
  init: function(id, tip) {
    Outputs.setOutput(id);
    Outputs.setType(tip);
  }
};
 function PRINT(data) {
    Outputs.out(data, Outputs.type);
    window.PRINT = PRINT;
  }

////////////////////////////////////////////////////////////////
