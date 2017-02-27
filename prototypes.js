/*
	collection of prototypes
	LS
*/

Array.prototype.clear = function() {
    if (!this)
        return false;
    this.splice(0, this.length);
};

Array.prototype.swap = function(x, y) {
    var TMP = this[x];
    this[x] = this[y];
    this[y] = TMP;
    return this;
};

Array.prototype.shuffle = function() {
    var i = this.length,
        j;
    while (--i > 0) {
        j = rnd(0, i);
        this.swap(i, j);
    }
    return this;

    function rnd(start, end) {
        return Math.floor(Math.random() * (++end - start) + start);
    }
};

Array.prototype.sum = function() {
    var x = this.length;
    var total = 0;
    for (var y = 0; y < x; y++) {
        total += this[y];
    }
    return total || -1;
};

Array.prototype.average = function() {
    var sum = this.sum();
    var x = this.length;
    return sum / x || -1;
};

Array.prototype.createPool = function(mx, N) {
    if (!this) return false;
    this.clear();
    var tempArray = [];
    for (var ix = 0; ix < mx; ix++) {
        tempArray[ix] = ix;
    }
    var top;
    for (var iy = 0; iy < N; iy++) {
        top = tempArray.length;
        var addx = rnd(0, top - 1);
        this[iy] = tempArray[addx];
        tempArray.splice(addx, 1);
    }
    return this;

    function rnd(start, end) {
        return Math.floor(Math.random() * (++end - start) + start);
    }
};

Array.prototype.compare = function(array) {
    if (!array)
        return false;
    var LN = this.length;
    if (LN !== array.length)
        return false;
    for (var x = 0; x < LN; x++) {
        if (this[x] !== array[x])
            return false;
    }
    return true;
};

Array.prototype.remove = function(value) {
    var LN = this.length;
    for (var x = 0; x < LN; x++) {
        if (this[x] === value) {
            this.splice(x, 1);
            this.remove(value);
        }
    }
};

Array.prototype.chooseRandom = function() {
    var LN = this.length;
    var choose = rnd(1, LN) - 1;
    return this[choose];

    function rnd(start, end) {
        return Math.floor(Math.random() * (++end - start) + start);
    }
};

Array.prototype.removeRandom = function() {
    var LN = this.length;
    var choose = rnd(1, LN) - 1;
    return this.splice(choose, 1);

    function rnd(start, end) {
        return Math.floor(Math.random() * (++end - start) + start);
    }
};

String.prototype.fill = function(stringy, howMany) {
    var s = '';
    for (;;) {
        if (howMany & 1) s += stringy;
        howMany >>= 1;
        if (howMany) stringy += stringy;
        else break;
    }
    return s;
};

String.prototype.padLeft = function(LN, fill) {
    var s = "".fill(fill, LN) + this;
    return s.substring(s.length - LN);
};

String.prototype.padRight = function(LN, fill) {
    var s = this + "".fill(fill, LN);
    return s.substring(0, LN);
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase();
};
////////////////////////end of prototypes.js /////////////////////////
