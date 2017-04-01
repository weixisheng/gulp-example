//closure
/*var scope = "global";

function outer() {
    var scope = "local";

    function f() {
        console.log(scope);
        return scope;
    }
    return f;
}
outer()();
*/

//this
/*var name = "the window";
var o = {
    name: "the object",
    getName: function() {
        var that = this;
        return function() {
            return that.name;
        }
    }
}
console.log(o.getName()())
*/
//倒计时
/*var count = 10;
var handler = function() {
    console.log(new Date().toLocaleString(), count);
    count--;
    if (count == 0) {
        count = 10;
        clearInterval(timer)
    }
}
var timer = setInterval(handler, 1000)
*/
