var tasks = [];
var conlog = (i) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(new Date().toLocaleString(), i);
        resolve();
    }, 1000 * i);
});

for (var i = 0; i < 5; i++) {
    tasks.push(conlog(i));
}

Promise.all(tasks).then(() => {

    setTimeout(() => {
        console.log(new Date().toLocaleString(), i);
    }, 1000);
});
