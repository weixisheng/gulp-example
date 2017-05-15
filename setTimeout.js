"use strict";

var tasks = [];
var conlog = function conlog(i) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(new Date().toLocaleString(), i);
            resolve();
        }, 1000 * i);
    });
};

for (var i = 0; i < 5; i++) {
    tasks.push(conlog(i));
}

Promise.all(tasks).then(function () {

    setTimeout(function () {
        console.log(new Date().toLocaleString(), i);
    }, 1000);
});