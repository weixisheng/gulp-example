'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then(function (value) {
    console.log("%c" + value, 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f00),' + 'color-stop(0.15, #FF7D00), color-stop(0.3, #ff0), color-stop(0.45, #0f0), color-stop(0.6, #00f),' + 'color-stop(0.75, #0ff), color-stop(0.9, #f0f), color-stop(1, #000) );color:transparent;' + '-webkit-background-clip: text;font-size:20px;');
});

var result = Array.from(new Set([1, 3, 5, 8, 4, 1, 5, 9, 6, 4, 2, 4]));

var re = [].concat(_toConsumableArray(new Set([1, 3, 5, 8, 4, 1, 5, 9, 6, 4, 2, 4])));