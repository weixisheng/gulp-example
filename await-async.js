"use strict";

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function(value) {
                        step("next", value);
                    }, function(err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
    };
}

var sleep = function sleep(s) {
    return new Promise(function(resolve) {
        setTimeout(resolve, s);
    });
};

_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < 5)) {
                        _context.next = 8;
                        break;
                    }

                    _context.next = 4;
                    return sleep(1000);

                case 4:
                    console.log(new Date().toLocaleString(), i);

                case 5:
                    i++;
                    _context.next = 1;
                    break;

                case 8:
                    _context.next = 10;
                    return sleep(1000);

                case 10:
                    console.log(new Date().toLocaleString(), i);

                case 11:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}))();
