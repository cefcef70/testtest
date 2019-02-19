

console.log("ikinci file")

//some comments

var assert = require("assert");

class deneme {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getTotal() {
        return x + y;
    }

}

var dd = new deneme(4,6);
console.log(dd.getTotal());

