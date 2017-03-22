const sleep = (s) => new Promise((resolve) => {
    setTimeout(resolve, s);
});

(async() => {
    for (var i = 0; i < 5; i++) {
        await sleep(1000);
        console.log(new Date().toLocaleString(), i);
    }

    await sleep(1000);
    console.log(new Date().toLocaleString(), i);
})();
