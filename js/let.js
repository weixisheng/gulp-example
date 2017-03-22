var a = [];

for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6]();

const b = [];
for (let j = 10; j < 20; j++) {
    b[j] = () => {
        console.log(j);
    };
}
b[15]();


let [v1, [v2], v3] = [1, [2], 3];
let o = {
    "index1": {
        name: "v1",
        value: v1
    },
    "index2": {
        name: "v2",
        value: v2
    }
};

console.table(o);
