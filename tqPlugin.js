// 节流
function throttle(fn, interval) {
    var last = 0;
    return function () {
        var now = Date.now();
        if (now - last > interval) {
            fn.apply(this, arguments);
            last = now;
        }
    }
}

// 防抖
function debounce(fn, interval) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, interval);
    }
}

// 数组去重
function unique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 数组排序
function sort(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

// 对象深拷贝
function deepCopy(obj) {
    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return result;
}

// 对象转数组
function toArray(obj) {
    var result = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}

function tqPlugin(){
    return {
        throttle: throttle,
        debounce: debounce,
        unique: unique,
        sort: sort,
        deepCopy: deepCopy,
        toArray: toArray
    }
}

module.exports = tqPlugin();