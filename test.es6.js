function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log("%c" + value, 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f00),' +
        'color-stop(0.15, #FF7D00), color-stop(0.3, #ff0), color-stop(0.45, #0f0), color-stop(0.6, #00f),' +
        'color-stop(0.75, #0ff), color-stop(0.9, #f0f), color-stop(1, #000) );color:transparent;' +
        '-webkit-background-clip: text;font-size:20px;');
});

let result = Array.from(new Set([1,3,5,8,4,1,5,9,6,4,2,4]))

let re = [...new Set([1,3,5,8,4,1,5,9,6,4,2,4])]
